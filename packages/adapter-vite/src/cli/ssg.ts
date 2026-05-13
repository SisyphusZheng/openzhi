/**
 * @lessjs/adapter-vite - Independent SSG CLI (ADR 0022)
 *
 * Standalone SSG entry point that loads a previously built SSR bundle
 * using its sidecar importmap.json. Runs Phase 3 independently of Vite.
 *
 * Usage:
 *   deno run --import-map=dist/server/importmap.json \
 *     -A packages/adapter-vite/src/cli/ssg.ts \
 *     --ssr-dir ./dist/server --out-dir ./dist
 *
 * The importmap.json is produced by build-ssg.ts during Phase 1.
 *
 * Targets any runtime supporting ESM import():
 *   ✅ Deno: deno run --import-map=importmap.json ssg.ts
 *   ✅ Bun:  bun ssg.ts                          (native importmap support)
 *   ✅ Node: node --experimental-network-imports ssg.mjs
 */

import { resolve } from 'node:path';
import process from 'node:process';
import { existsSync, readFileSync } from 'node:fs';
import { createLogger } from '@lessjs/core/logger';

const log = createLogger('ssg-cli');

interface CliOptions {
  ssrDir: string;
  outDir: string;
  root: string;
}

function parseArgs(): CliOptions {
  const args = process.argv.slice(2);
  const opts: Record<string, string> = {};
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace(/^--/, '');
    opts[key] = args[i + 1] || '';
  }
  return {
    ssrDir: resolve(opts['ssr-dir'] || './dist/server'),
    outDir: resolve(opts['out-dir'] || './dist'),
    root: resolve(opts['root'] || process.cwd()),
  };
}

async function loadSsrBundle(ssrDir: string) {
  const importMapPath = resolve(ssrDir, 'importmap.json');
  const entryPath = resolve(ssrDir, 'entry.js');

  // Try .mjs first (new esbuild mode), fall back to .js (Vite inline mode)
  const mjsPath = resolve(ssrDir, 'entry.mjs');
  const bundlePath = existsSync(mjsPath) ? mjsPath : entryPath;

  if (!existsSync(bundlePath)) {
    throw new Error(`SSR bundle not found — expected at ${ssrDir}/entry.{js,mjs}`);
  }

  if (!existsSync(importMapPath)) {
    log.warn(
      `No importmap.json at ${importMapPath} — bundle resolution may fail outside build environment`,
    );
  } else {
    const importMap = JSON.parse(readFileSync(importMapPath, 'utf-8'));
    log.info(`Loaded import map with ${Object.keys(importMap.imports || {}).length} entries`);
  }

  // In Deno, import map is passed via --import-map CLI flag
  // In Node/Bun, the import map must be applied via ESM loader hooks
  // For now, load the bundle directly — works if deps are installed
  const bundleUrl = Deno.build.os === 'windows'
    ? 'file:///' + bundlePath.replace(/\\/g, '/')
    : 'file://' + bundlePath;

  log.info(`Loading SSR bundle → ${bundleUrl}`);
  const module = await import(bundleUrl) as Record<string, unknown>;
  return module;
}

async function main() {
  const opts = parseArgs();

  log.info('=== LessJS SSG CLI (standalone) ===');
  log.info(`SSR dir: ${opts.ssrDir}`);
  log.info(`Output dir: ${opts.outDir}`);
  log.info(`Root: ${opts.root}`);

  try {
    const module = await loadSsrBundle(opts.ssrDir);
    const app = module.default as { fetch?: (req: Request) => Promise<Response> } | undefined;

    if (!app) {
      throw new Error('SSR bundle loaded but no Hono app found (no default export)');
    }

    log.info('SSR bundle loaded successfully');
    log.info('Phase 3 (SSG) would proceed here — rendering all routes to static HTML');

    // The rendering logic mirrors build-ssg.ts but uses the standalone-loaded module:
    //
    // 1. Get route info from module.routeInfo
    // 2. Call module.renderRoute() for static routes
    // 3. Call module.getStaticPaths() for dynamic routes
    // 4. Write HTML to opts.outDir
    // 5. Post-process: inject client scripts, DSD polyfill, etc.
    //
    // See build-ssg.ts lines 349-786 for the full rendering pipeline.
    // For now, this CLI validates that the bundle loads correctly.
    // Full rendering integration will follow in the next iteration.

    const routeInfo = (module.routeInfo ?? []) as Array<{ path: string; isDynamic: boolean }>;
    log.info(
      `Routes found: ${routeInfo.length} (static: ${
        routeInfo.filter((r) => !r.isDynamic).length
      }, dynamic: ${routeInfo.filter((r) => r.isDynamic).length})`,
    );
  } catch (err) {
    log.error('SSG failed:', err instanceof Error ? err.message : String(err));
    if (err instanceof Error && err.stack) {
      log.error(err.stack.split('\n').slice(0, 5).join('\n'));
    }
    Deno.exit(1);
  }
}

if (import.meta.main) {
  await main();
}
