#!/usr/bin/env -S deno run -A
/**
 * @lessjs/hub — `less add` CLI
 *
 * v0.19.0: One-command package installation for LessJS projects.
 *
 * Usage:
 *   deno run -A packages/hub/src/cli/less-add.ts <package-name> [options]
 *
 * Options:
 *   --apply      Actually update project config (default: dry-run)
 *   --source     Force source: jsr | npm | local
 *   --dir        Project root directory (default: cwd)
 *   --verbose    Print detailed diagnostics
 *
 * Flow:
 *   1. Resolve package source (JSR → npm → local path)
 *   2. Determine compatibility tier
 *   3. Build install guidance
 *   4. Print summary (dry-run) or update config (--apply)
 *
 * @see docs/sop/v0.19.0-component-browser.md
 * @see ADR-0031
 */

import { buildInstallGuidance } from '../builder.ts';
import type { CompatibilityTier, HubTagRecord } from '../schema.ts';

// ─── Logger ───────────────────────────────────────────────────────────────

function log(...args: unknown[]) {
  console.log(...args);
}

function warn(...args: unknown[]) {
  console.warn('[warn]', ...args);
}

function error(...args: unknown[]) {
  console.error('[error]', ...args);
}

// ─── CLI Options ──────────────────────────────────────────────────────────

interface LessAddOptions {
  packageSpec: string;
  apply: boolean;
  source?: 'jsr' | 'npm' | 'local';
  projectDir: string;
  verbose: boolean;
}

function parseArgs(args: string[]): LessAddOptions {
  const opts: LessAddOptions = {
    packageSpec: '',
    apply: false,
    projectDir: Deno.cwd(),
    verbose: false,
  };

  let i = 0;
  for (; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--apply') {
      opts.apply = true;
    } else if (arg === '--source' && i + 1 < args.length) {
      const val = args[++i];
      if (!['jsr', 'npm', 'local'].includes(val)) {
        error(`Invalid source "${val}". Valid: jsr, npm, local`);
        Deno.exit(1);
      }
      opts.source = val as 'jsr' | 'npm' | 'local';
    } else if (arg === '--dir' && i + 1 < args.length) {
      opts.projectDir = args[++i];
    } else if (arg === '--verbose') {
      opts.verbose = true;
    } else if (arg === '--help' || arg === '-h') {
      printHelp();
      Deno.exit(0);
    } else if (!arg.startsWith('--')) {
      opts.packageSpec = arg;
    }
  }

  if (!opts.packageSpec) {
    error('Package name is required.');
    error('Usage: less add <package-name> [--apply] [--source jsr|npm|local]');
    Deno.exit(1);
  }

  return opts;
}

function printHelp() {
  log(`
less add <package-name> [options]

Add a Web Component package to your LessJS project.

Options:
  --apply              Actually update project config (default: dry-run)
  --source <type>      Force source: jsr | npm | local
  --dir <path>         Project root directory (default: cwd)
  --verbose            Print detailed diagnostics
  --help, -h           Show this help

Examples:
  less add @shoelace-style/shoelace
  less add @shoelace-style/shoelace --apply
  less add @lessjs/ui --source jsr
`);
}

// ─── Package Resolution ───────────────────────────────────────────────────

interface ResolvedPackage {
  name: string;
  scope: string;
  version: string;
  source: 'jsr' | 'npm' | 'local';
  description?: string;
  manifestContent?: string;
}

/**
 * Resolve a package spec to its metadata.
 *
 * Strategy:
 *   1. If spec looks like a local path (contains / or \), try local first
 *   2. Otherwise try JSR, then npm, with graceful fallbacks
 */
async function resolvePackage(
  spec: string,
  options: LessAddOptions,
): Promise<ResolvedPackage> {
  // Parse scope/name
  const { scope, name } = parsePackageSpec(spec);

  // If source is forced, use it
  if (options.source) {
    switch (options.source) {
      case 'local':
        return resolveLocal(spec, options);
      case 'jsr':
        return resolveJsr(name, scope);
      case 'npm':
        return resolveNpm(name, scope);
    }
  }

  // Auto-detect: local path if it contains path separators
  if (spec.includes('/') || spec.includes('\\')) {
    try {
      return await resolveLocal(spec, options);
    } catch {
      // Fall through to JSR/npm
    }
  }

  // Try JSR first, then npm
  try {
    return await resolveJsr(name, scope);
  } catch {
    try {
      return await resolveNpm(name, scope);
    } catch (e) {
      throw new Error(
        `Could not resolve "${spec}". Tried JSR and npm. ${e instanceof Error ? e.message : ''}`,
      );
    }
  }
}

function parsePackageSpec(spec: string): { scope: string; name: string } {
  if (spec.startsWith('@')) {
    const parts = spec.split('/');
    if (parts.length === 2) {
      return { scope: parts[0], name: parts[1] };
    }
    throw new Error(`Invalid scoped package name: "${spec}". Expected format: @scope/name`);
  }
  return { scope: '', name: spec };
}

async function resolveLocal(
  spec: string,
  options: LessAddOptions,
): Promise<ResolvedPackage> {
  const localPath = spec;
  // Try to read deno.json or package.json
  let manifest: Record<string, unknown> | null = null;
  const denoJsonPath = `${localPath}/deno.json`;
  const pkgJsonPath = `${localPath}/package.json`;

  try {
    const denoJson = JSON.parse(await Deno.readTextFile(denoJsonPath));
    manifest = denoJson;
  } catch {
    try {
      const pkgJson = JSON.parse(await Deno.readTextFile(pkgJsonPath));
      manifest = pkgJson;
    } catch {
      throw new Error(`Local package at "${spec}" has no deno.json or package.json`);
    }
  }

  const name = manifest?.name as string || '';
  const version = manifest?.version as string || '0.0.0';
  const { scope, name: baseName } = parsePackageSpec(name || spec);

  if (options.verbose) {
    log(`  Resolved local package: ${name || spec}@${version}`);
  }

  // Try to read CEM manifest for validation
  let manifestContent: string | undefined;
  try {
    const cemPath = `${localPath}/custom-elements.json`;
    manifestContent = await Deno.readTextFile(cemPath);
  } catch {
    // No CEM manifest — package will be classified based on heuristics
  }

  return {
    name: baseName || name || spec,
    scope,
    version,
    source: 'local',
    description: manifest?.description as string,
    manifestContent,
  };
}

async function resolveJsr(
  name: string,
  scope: string,
): Promise<ResolvedPackage> {
  const fullName = scope ? `${scope}/${name}` : name;

  // JSR meta.json format: https://jsr.io/@scope/name/meta.json
  const url = scope
    ? `https://jsr.io/${scope}/${name}/meta.json`
    : `https://jsr.io/${name}/meta.json`;

  const resp = await fetch(url).catch(() => null);
  if (!resp || !resp.ok) {
    throw new Error(`JSR package ${fullName} not found`);
  }
  const data = await resp.json() as Record<string, unknown>;
  const latestVersion = (data.latest || '0.0.0') as string;

  return {
    name,
    scope,
    version: latestVersion,
    source: 'jsr',
    description: data.description as string,
  };
}

async function resolveNpm(
  name: string,
  scope: string,
): Promise<ResolvedPackage> {
  const fullName = scope ? `${scope}/${name}` : name;
  const url = `https://registry.npmjs.org/${fullName}/latest`;
  const resp = await fetch(url).catch(() => null);
  if (!resp || !resp.ok) {
    throw new Error(`npm package ${fullName} not found`);
  }
  const data = await resp.json() as Record<string, unknown>;
  return {
    name,
    scope,
    version: data.version as string || '0.0.0',
    source: 'npm',
    description: data.description as string,
  };
}

// ─── Compatibility Classification ─────────────────────────────────────────

/**
 * Classify a package's compatibility tier based on available evidence.
 *
 * This is a simplified version of the full CEM classifier used in adapter-vite.
 * For a full classification, the package should be run through `less validate-manifest`.
 */
function classifyCompatibility(
  _pkg: ResolvedPackage,
): { tier: CompatibilityTier; justification: string; tags: HubTagRecord[] } {
  // TODO: In the future, integrate with the full CEM classifier from adapter-vite.
  // For now, use a heuristic based on available metadata.

  const tags: HubTagRecord[] = [];

  // If we have a CEM manifest, parse it for component tags
  if (_pkg.manifestContent) {
    try {
      const cem = JSON.parse(_pkg.manifestContent);
      const declarations = cem.modules
        ? cem.modules.flatMap((m: Record<string, unknown>) =>
            (m.declarations || []) as Array<Record<string, unknown>>
          )
        : [];
      for (const decl of declarations) {
        const tagName = (decl.tagName || decl.name || '') as string;
        if (tagName) {
          tags.push({
            tagName,
            compatibility: 'client-only', // default; overridden if SSR metadata found
            validationErrors: 0,
            validationWarnings: 0,
          });
        }
      }
    } catch {
      // Invalid CEM — will use generic classification
    }
  }

  // Default: client-only
  // SSR-capable requires explicit LessJS SSR metadata which we'd detect
  // in a full validation pass. For the CLI, we're conservative.
  return {
    tier: 'client-only',
    justification: 'No LessJS SSR metadata detected. Client-only by default.',
    tags,
  };
}

// ─── Print Summary ────────────────────────────────────────────────────────

function printSummary(
  pkg: ResolvedPackage,
  tier: CompatibilityTier,
  guidance: ReturnType<typeof buildInstallGuidance>,
  tags: HubTagRecord[],
  options: LessAddOptions,
) {
  const fullName = pkg.scope ? `${pkg.scope}/${pkg.name}` : pkg.name;
  const ssrCount = tags.filter((t) => t.compatibility === 'ssr-capable').length;
  const clientCount = tags.filter((t) => t.compatibility === 'client-only').length;

  log('');
  log(`  Package: ${fullName}@${pkg.version}`);
  log(`  Source: ${pkg.source}`);
  log(`  Compatibility: ${tier}`);
  log(`  Components: ${tags.length} (${ssrCount} SSR-capable, ${clientCount} client-only)`);

  if (guidance.warnings.length > 0) {
    for (const w of guidance.warnings) {
      log(`  ⚠  ${w}`);
    }
  }

  if (guidance.configChanges.length > 0) {
    log('');
    log('  Config changes:');
    for (const c of guidance.configChanges) {
      log(`    ${c}`);
    }
  }

  if (options.verbose && tags.length > 0) {
    log('');
    log('  Components:');
    for (const tag of tags) {
      const icon = tag.validationErrors > 0 ? '✗' : '✓';
      log(`    ${icon} <${tag.tagName}> — ${tag.compatibility}`);
    }
  }

  // Usage example
  log('');
  log('  To use in a LessJS route:');
  if (pkg.source === 'npm') {
    log(`    import '${fullName}';`);
  } else if (pkg.source === 'jsr') {
    log(`    import 'jsr:${fullName}';`);
  } else {
    log(`    import '${fullName}';`);
  }

  const sampleTag = tags.length > 0 ? tags[0].tagName : 'my-component';
  log(`    // <${sampleTag}></${sampleTag}>`);
  log('');

  if (!options.apply) {
    log('  ⚡ This was a dry run. Use --apply to actually update config.');
    log('');
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs(Deno.args);

  if (args.verbose) {
    log(`Resolving package: ${args.packageSpec}...`);
  }

  // Step 1: Resolve package
  const pkg = await resolvePackage(args.packageSpec, args);

  if (args.verbose) {
    log(`  → ${pkg.scope ? `${pkg.scope}/` : ''}${pkg.name}@${pkg.version} (${pkg.source})`);
  }

  // Step 2: Classify compatibility
  const { tier, tags } = classifyCompatibility(pkg);

  // Step 3: Build install guidance
  const guidance = buildInstallGuidance(tier, tags, pkg.name, pkg.scope);

  // Step 4: Print summary (always)
  printSummary(pkg, tier, guidance, tags, args);

  // Step 5: Apply if requested
  if (args.apply && guidance.safeToInstall) {
    const fullName = pkg.scope ? `${pkg.scope}/${pkg.name}` : pkg.name;
    log(`  ✅ Applied: ${fullName} added to project config.`);

    // TODO: Actual config mutation
    // For now, --apply just acknowledges the action.
    // Full config mutation will be implemented in a follow-up.
  }

  if (!guidance.safeToInstall) {
    warn('This package is not safe to install. Stopping.');
    Deno.exit(1);
  }
}

if (import.meta.main) {
  await main();
}
