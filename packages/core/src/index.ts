/**
 * @lessjs/core - Main entry.
 *
 * LessJS is a static-first framework package:
 * - routes are scanned at build time
 * - pages are rendered to DSD HTML
 * - islands upgrade through Custom Elements
 * - Lit is imported directly by user code or adapters, not re-exported by core
 *
 * less() returns the Vite plugins that provide route scanning, virtual Hono
 * entry generation, dev-server integration, island marking, and build metadata.
 *
 * For the unified lessjs() entry, use @lessjs/app instead.
 */

import type { Plugin } from 'vite';
import type { FrameworkOptions, PackageIslandMeta, RouteEntry } from './types.js';

import { dirname, join } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { transform as esbuildTransform } from 'esbuild';
import { LessError } from './errors.js';
import { createLogger } from './logger.js';

const log = createLogger('core');

import honoDevServer from '@hono/vite-dev-server';
import { LessBuildContext } from './build-context.js';
import { buildPlugin } from './build.js';
import { escapeAttr as escapeHtmlAttr } from './render-dsd.js';
import { generateHonoEntryCode } from './hono-entry.js';
import { islandTransformPlugin } from './island-transform.js';
import { fileToTagName, scanIslands, scanPackageIslands, scanRoutes } from './route-scanner.js';

export type {
  FrameworkOptions,
  LessMiddleware,
  LessRenderer,
  PackageIslandMeta,
  RouteEntry,
  SpecialFileType,
  SsrContext,
} from './types.js';
export { LessError, SsrRenderError } from './errors.js';
export { createSsrContext, extractParams, parseQuery } from './context.js';
export { renderSsrError, wrapInDocument } from './ssr-handler.js';
/**
 * @internal SSG post-processing utilities — used by CLI build commands.
 * Not intended for direct use by application code.
 */
export {
  buildIslandChunkMap,
  buildSpeculationRulesJson,
  injectClientScript,
  injectCspMeta,
  injectDsdPolyfill,
  injectSpeculationRules,
  injectViewTransitionMeta,
  insertAfterHead,
  type SpeculationRulesOptions,
} from './ssg-postprocess.js';
/**
 * @internal Island manifest generation — used by CLI build commands.
 * Not intended for direct use by application code.
 */
export {
  extractCustomElementTags,
  generateIslandManifests,
  type IslandLayerMap,
  type IslandManifestEntry,
  type IslandStrategyMap,
  type PageIslandManifest,
  writeIslandManifests,
} from './island-manifest.js';
/**
 * @internal Build manifest and observability — used by CLI build commands.
 * Not intended for direct use by application code.
 */
export { printBuildManifest, scanClientBuild, scanSSGOutput } from './build-manifest.js';
export type { ArtifactInfo, BuildManifest } from './build-manifest.js';
export { renderDSD, renderDSDByName } from './render-dsd.js';
export { getAdapter, registerAdapter } from './adapter-registry.js';
export type { ComponentLayer, DsdOptions, HydrateEventDescriptor, RenderAdapter } from './types.js';
export {
  escapeAttr,
  escapeAttrValue,
  escapeHtml,
  type SafeHtml,
  type UnsafeHtml,
} from './html-escape.js';
export { createLogger, LessLogger, LogLevel } from './logger.js';
export { getSSRProps, island, type IslandOptions, lessBind } from './island.js';
export { hasNavigationApi, matchRoute, navigate, onNavigate } from './navigation.js';
export type { NavigationCallback } from './navigation.js';

// ─── Subpath resolution (ADR 0016) ─────────────────────────────────
//
// Problem: The virtual:less-hono-entry module imports from subpaths like
// @lessjs/core/ssr-handler and @lessjs/core/logger. Vite's SSR runner
// cannot resolve these bare specifiers because:
//   - JSR packages are NOT in node_modules (Deno uses content-addressable cache)
//   - The Deno import map (deno.json) is not used by Vite's SSR runner
//   - Node.js ESM loader only supports file:// and data: URLs
//
// This bug has recurred 6 times (b6a6b41, f223bef, 6c5a992, v0.10.2 https:// aliases,
// v0.10.3 TS source not compiled, v0.10.4 npm: specifiers unresolvable).
//
// Solution: Two-pronged approach depending on execution context:
//
//   A) Local (file:// import.meta.url): resolve.alias with local file paths
//      - Fast, supports HMR, no virtual module overhead
//
//   B) Remote (https:// import.meta.url — JSR execution):
//      - resolveId + load virtual module pattern
//      - resolveId intercepts @lessjs/core/* → virtual IDs (\0lessjs:core/src/*)
//      - load fetches TypeScript source from JSR, compiles TS→JS via esbuild
//      - Relative imports within virtual modules are also intercepted
//      - Virtual IDs (\0 prefix) bypass Node.js ESM loader entirely
//
//   Why esbuild? Virtual modules (\0 prefix) bypass Vite's standard transform
//   pipeline, so TS syntax like `export type` reaches Rolldown's parser which
//   only understands JavaScript. esbuild (bundled with Vite) strips types and
//   produces clean ESM. JSR does NOT serve pre-compiled .js files.

/** Virtual module ID prefix for JSR remote resolution */
const VIRTUAL_CORE_PREFIX = '\0lessjs:core/src/';

/** Mapping of @lessjs/core/* subpath specifiers to source files */
const CORE_SUBPATHS: Record<string, string> = {
  'html-escape': 'html-escape.ts',
  'render-dsd': 'render-dsd.ts',
  'render-nested': 'render-nested.ts',
  'island-manifest': 'island-manifest.ts',
  'adapter-registry': 'adapter-registry.ts',
  'ssr-handler': 'ssr-handler.ts',
  'logger': 'logger.ts',
  'build-context': 'build-context.ts',
  'navigation': 'navigation.ts',
};

/**
 * Build Vite resolve aliases for @lessjs/core subpath imports (local mode).
 *
 * Only used when import.meta.url is file:// (local development).
 * For remote (JSR) execution, the coreResolvePlugin handles resolution.
 *
 * IMPORTANT: Subpath aliases MUST come before the parent @lessjs/core alias.
 * Vite alias matching is first-hit (not longest-prefix).
 */
function buildCoreSubpathAliases(): import('vite').Alias[] {
  const coreSrcDir = dirname(fileURLToPath(import.meta.url));

  const aliases: import('vite').Alias[] = [];

  for (const [subpath, file] of Object.entries(CORE_SUBPATHS)) {
    aliases.push({
      find: `@lessjs/core/${subpath}`,
      replacement: join(coreSrcDir, file),
    });
  }

  // Parent alias last
  aliases.push({
    find: '@lessjs/core',
    replacement: join(coreSrcDir, 'index.ts'),
  });

  return aliases;
}

/** Source cache for JSR-fetched modules (avoids redundant network requests) */
const jsrSourceCache = new Map<string, string>();

/**
 * Create the core subpath resolution plugin for JSR remote execution.
 *
 * When @lessjs/core is loaded from JSR (https:// import.meta.url),
 * Vite's SSR runner cannot load https:// URLs via Node.js ESM loader.
 * This plugin intercepts @lessjs/core/* imports and loads source code
 * through virtual modules, bypassing Node.js ESM loader entirely.
 */
function createCoreResolvePlugin(metaUrl: string): Plugin {
  const isRemote = metaUrl.startsWith('https://') || metaUrl.startsWith('http://');

  // Compute JSR base URL for source fetching.
  // JSR URL formats vary: @lessjs/core@0.10.3/src/index.ts or @lessjs/core/0.10.3/src/index.ts
  // We normalize to the slash-separated format that JSR serves files from:
  //   https://jsr.io/@lessjs/core/0.10.3/src/
  let jsrSrcBase = '';
  if (isRemote) {
    // Handle both @version and /version URL formats
    jsrSrcBase = metaUrl
      .replace(/\/src\/index\.ts$/, '/src/')
      .replace(/@(\d+\.\d+\.\d+)\/src\/$/, '/$1/src/');
  }

  return {
    name: 'less:core-resolve',
    enforce: 'pre',

    resolveId(source, importer) {
      if (!isRemote) return;

      // Case 1: Bare specifier @lessjs/core or @lessjs/core/*
      if (source === '@lessjs/core' || source.startsWith('@lessjs/core/')) {
        const subpath = source === '@lessjs/core'
          ? 'index.ts'
          : (CORE_SUBPATHS[source.slice('@lessjs/core/'.length)] ||
            `${source.slice('@lessjs/core/'.length)}.ts`);
        return `${VIRTUAL_CORE_PREFIX}${subpath}`;
      }

      // Case 2: Relative imports from within our virtual modules
      // e.g. './errors.js' from '\0lessjs:core/src/ssr-handler.ts'
      if (importer?.startsWith(VIRTUAL_CORE_PREFIX) && source.startsWith('./')) {
        const importerDir = importer.replace(/[/\\][^/\\]+$/, '');
        return `${importerDir}/${source.slice(2)}`;
      }

      // Case 3: npm: specifiers from within virtual modules (e.g. 'npm:parse5@7.0.0')
      // Deno's import map resolves bare specifiers like 'parse5' to 'npm:parse5@7.0.0'
      // at fetch time. esbuild preserves these in compiled output. But Vite's SSR
      // runner doesn't understand 'npm:' URLs. We re-map them to plain bare specifiers
      // so Vite can resolve them through its standard node_modules pipeline.
      if (importer?.startsWith(VIRTUAL_CORE_PREFIX) && source.startsWith('npm:')) {
        // Strip 'npm:' prefix and version pin: 'npm:parse5@7.0.0' → 'parse5'
        // Also handle scoped packages: 'npm:@lit-labs/ssr-dom-shim@1.5.0' → '@lit-labs/ssr-dom-shim'
        const bare = source.slice(4); // strip 'npm:'
        const isScoped = bare.startsWith('@');
        const withoutScope = isScoped ? bare.slice(1) : bare;
        const namePart = withoutScope.split('@')[0]; // strip version
        return isScoped ? `@${namePart}` : namePart;
      }

      // Case 4: Already-resolved virtual IDs (re-resolve safeguard)
      if (source.startsWith(VIRTUAL_CORE_PREFIX)) {
        return source;
      }
    },

    async load(id) {
      if (!isRemote) return;
      if (!id.startsWith(VIRTUAL_CORE_PREFIX)) return;

      // Check cache
      if (jsrSourceCache.has(id)) return jsrSourceCache.get(id);

      // Normalize .js → .ts (Deno convention: imports use .js, files are .ts)
      let filePath = id.slice(VIRTUAL_CORE_PREFIX.length);
      if (filePath.endsWith('.js') && !filePath.endsWith('.ts')) {
        filePath = filePath.slice(0, -3) + '.ts';
      }

      // Fetch TypeScript source from JSR
      const url = `${jsrSrcBase}${filePath}`;
      let tsCode: string;
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error(
            `[less:core-resolve] Failed to fetch ${url}: HTTP ${resp.status}`,
          );
        }
        tsCode = await resp.text();
      } catch (err) {
        throw new LessError(
          `Failed to load @lessjs/core module from JSR: ${filePath}. ` +
            `URL: ${url}. Error: ${err instanceof Error ? err.message : String(err)}`,
          'JSR_FETCH_ERROR',
          500,
          false,
        );
      }

      // Compile TypeScript → JavaScript via esbuild.
      // Virtual modules (\0 prefix) bypass Vite's standard transform pipeline,
      // so TS syntax like `export type` reaches Rolldown's parser which only
      // understands JavaScript. esbuild strips types and produces clean ESM.
      let jsCode: string;
      try {
        const result = await esbuildTransform(tsCode, {
          loader: 'ts',
          target: 'esnext',
          format: 'esm',
        });
        jsCode = result.code;
      } catch (err) {
        throw new LessError(
          `Failed to compile @lessjs/core module from JSR: ${filePath}. ` +
            `Error: ${err instanceof Error ? err.message : String(err)}`,
          'JSR_COMPILE_ERROR',
          500,
          false,
        );
      }

      jsrSourceCache.set(id, jsCode);
      return jsCode;
    },
  };
}

/**
 * LessJS Framework Vite plugin.
 * Jamstack: M=SSG+DSD, A=API Routes, J=Islands.
 *
 * less() handles dev mode plus Phase 1 metadata for production builds.
 *
 * @param options - Framework options
 * @param externalCtx - Optional shared LessBuildContext (used by lessjs() umbrella)
 */
export function less(options: FrameworkOptions = {}, externalCtx?: LessBuildContext): Plugin[] {
  const metaUrl = import.meta.url;
  const isRemote = metaUrl.startsWith('https://') || metaUrl.startsWith('http://');

  let headExtras = options.headExtras;

  const validateSafeUrl = (url: string, context: string): string => {
    const trimmed = url.trim().toLowerCase();
    if (trimmed.startsWith('javascript:') || trimmed.startsWith('data:')) {
      throw new LessError(
        `Unsafe URL in ${context}: "${url}" - javascript: and data: protocols are not allowed`,
        'UNSAFE_URL',
        400,
        false,
      );
    }
    return url;
  };

  if (options.inject && !headExtras) {
    const fragments: string[] = [];
    for (const href of options.inject.stylesheets || []) {
      validateSafeUrl(href, 'inject.stylesheets');
      const safeHref = escapeHtmlAttr(href);
      fragments.push(`<link rel="stylesheet" href="${safeHref}" />`);
    }
    for (const src of options.inject.scripts || []) {
      validateSafeUrl(src, 'inject.scripts');
      const safeSrc = escapeHtmlAttr(src);
      fragments.push(`<script type="module" src="${safeSrc}"></script>`);
    }
    for (const frag of options.inject.headFragments || []) {
      // Security: warn if fragment contains inline <script> tags
      if (/<script[\s>]/i.test(frag)) {
        log.warn(
          'inject.headFragments contains <script> tags. Ensure this content is ' +
            'developer-controlled, not user-supplied, to prevent XSS. For safe URL injection, ' +
            'use inject.scripts instead.',
        );
      }
      fragments.push(frag);
    }
    headExtras = fragments.join('\n  ');
  }

  const resolvedOptions: FrameworkOptions = {
    ...options,
    routesDir: options.routesDir || 'app/routes',
    islandsDir: options.islandsDir || 'app/islands',
    componentsDir: options.componentsDir || 'app/components',
    headExtras,
  };

  const ctx = externalCtx || new LessBuildContext(resolvedOptions);

  const VIRTUAL_ENTRY_ID = 'virtual:less-hono-entry';
  const RESOLVED_ENTRY_ID = '\0' + VIRTUAL_ENTRY_ID;

  function generateEntry(
    routes: RouteEntry[],
    islandTagNames: string[] = [],
    packageIslands: PackageIslandMeta[] = [],
    islandFiles: string[] = [],
  ): string {
    return generateHonoEntryCode(routes, {
      routesDir: resolvedOptions.routesDir,
      islandsDir: resolvedOptions.islandsDir,
      componentsDir: resolvedOptions.componentsDir,
      middleware: resolvedOptions.middleware,
      islandTagNames,
      islandFiles,
      packageIslands,
      headExtras: resolvedOptions.headExtras,
      html: resolvedOptions.html,
      upgradeStrategy: resolvedOptions.island?.upgradeStrategy || 'lazy',
    });
  }

  const corePlugin: Plugin = {
    name: 'less:core',

    config(userConfig) {
      if (userConfig.resolve?.alias && !ctx.userResolveAlias) {
        ctx.userResolveAlias = userConfig.resolve.alias as
          | Record<string, string>
          | import('vite').Alias[];
      }

      // ADR 0015+0016: Auto-inject @lessjs/core subpath aliases (local mode).
      // For local execution (file:// import.meta.url), resolve.alias with local
      // file paths works perfectly — fast, HMR-compatible, no virtual module overhead.
      // For JSR remote execution (https:// import.meta.url), aliases would need
      // to point to https:// URLs which Node.js ESM loader rejects. Instead, the
      // coreResolvePlugin handles resolution via resolveId+load virtual modules.
      const coreSubpathAliases = isRemote ? [] : buildCoreSubpathAliases();

      return {
        build: {
          rollupOptions: {
            input: [VIRTUAL_ENTRY_ID],
          },
        },
        resolve: {
          alias: coreSubpathAliases,
        },
      };
    },

    configResolved(cfg) {
      if (cfg.resolve?.alias && !ctx.userResolveAlias) {
        ctx.userResolveAlias = cfg.resolve.alias;
      }
      ctx.honoEntryCode = generateEntry(
        [],
        ctx.islandTagNames,
        ctx.packageIslands,
        ctx.islandFiles,
      );
    },

    async buildStart() {
      ctx.reset();

      try {
        const routes = await scanRoutes(resolvedOptions.routesDir!);

        const islandsRoot = join(process.cwd(), resolvedOptions.islandsDir || 'app/islands');
        const islandFiles = await scanIslands(islandsRoot);
        ctx.islandTagNames = islandFiles.map((f) => fileToTagName(f));
        ctx.islandFiles = islandFiles;

        if (resolvedOptions.packageIslands && resolvedOptions.packageIslands.length > 0) {
          ctx.packageIslands = await scanPackageIslands(resolvedOptions.packageIslands);
          if (ctx.packageIslands.length > 0) {
            log.info(
              `Package islands: ${ctx.packageIslands.map((i) => i.tagName).join(', ')}`,
            );
          }
        }

        ctx.honoEntryCode = generateEntry(
          routes,
          ctx.islandTagNames,
          ctx.packageIslands,
          ctx.islandFiles,
        );
        const pageCount = routes.filter((r) => r.type === 'page' && !r.special).length;
        const apiCount = routes.filter((r) => r.type === 'api' && !r.special).length;
        const totalIslands = ctx.islandTagNames.length + ctx.packageIslands.length;
        log.info(
          `Routes: ${pageCount} page(s), ${apiCount} API route(s), ` +
            `${totalIslands} island(s) - LessJS Architecture`,
        );
      } catch (err) {
        throw new LessError(
          `Route scan failed: ${err instanceof Error ? err.message : String(err)}`,
          'ROUTE_SCAN_ERROR',
          500,
          false,
        );
      }
    },
  };

  const virtualEntryPlugin: Plugin = {
    name: 'less:virtual-entry',

    resolveId(id) {
      if (id === VIRTUAL_ENTRY_ID) return RESOLVED_ENTRY_ID;
    },

    load(id) {
      if (id === RESOLVED_ENTRY_ID) {
        return ctx.honoEntryCode ||
          generateEntry([], ctx.islandTagNames, ctx.packageIslands, ctx.islandFiles);
      }
    },
  };

  const devServerPlugin = honoDevServer({
    entry: VIRTUAL_ENTRY_ID,
    injectClientScript: true,
  }) as unknown as Plugin;

  return [
    corePlugin,
    createCoreResolvePlugin(metaUrl),
    virtualEntryPlugin,
    devServerPlugin,
    islandTransformPlugin(resolvedOptions.islandsDir!),
    buildPlugin(resolvedOptions, ctx),
  ];
}

export default less;
