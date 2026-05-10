import adr0001 from '../decisions/0001-keep-hono-vite-dev-server.md?raw';
import adr0002 from '../decisions/0002-less-compiler-eliminate-lit.md?raw';
import adr0003 from '../decisions/0003-pwa-support.md?raw';
import adr0004 from '../decisions/0004-blog-system.md?raw';
import adr0005 from '../decisions/0005-with-dsd-hydration-mixin.md?raw';
import adr0006 from '../decisions/0006-version-strategy.md?raw';
import adr0007 from '../decisions/0007-view-transitions-speculation-rules.md?raw';
import adr0008 from '../decisions/0008-eliminate-createserver-globalthis-bridges.md?raw';
import adr0010 from '../decisions/0010-eliminate-all-dot-less-temp-files.md?raw';
import adr0011 from '../decisions/0011-eliminate-last-globalthis-via-closebundle.md?raw';
import adr0012 from '../decisions/0012-extract-lessjs-umbrella-to-app-package.md?raw';
import adr0013 from '../decisions/0013-eliminate-less-runtime-barrel-inline-shim.md?raw';
import adr0014 from '../decisions/0014-ssr-bundle-export-renderroute.md?raw';

export interface DecisionDoc {
  id: string;
  title: string;
  status: string;
  path: string;
  summary: string;
  source: string;
}

export const DECISIONS: DecisionDoc[] = [
  {
    id: '0001',
    title: 'Keep @hono/vite-dev-server',
    status: 'Kept',
    path: '/decisions/0001-keep-hono-vite-dev-server',
    summary: 'Retain the official Hono x Vite dev integration because it has zero production cost.',
    source: adr0001,
  },
  {
    id: '0002',
    title: '.less Compiler',
    status: 'Draft',
    path: '/decisions/0002-less-compiler-eliminate-lit',
    summary:
      'Explore an optional compiler that emits vanilla Custom Elements without framework runtime. Target v0.11.0 alpha.',
    source: adr0002,
  },
  {
    id: '0003',
    title: 'PWA Support',
    status: 'Partially Implemented',
    path: '/decisions/0003-pwa-support',
    summary:
      'Use NetworkFirst for HTML/API and CacheFirst for assets instead of full HTML precache.',
    source: adr0003,
  },
  {
    id: '0004',
    title: '@lessjs/content',
    status: 'Adopted',
    path: '/decisions/0004-blog-system',
    summary:
      'Unified content plugin (blog + nav + sitemap) — SSG content pipeline with auto-generated navigation.',
    source: adr0004,
  },
  {
    id: '0005',
    title: 'WithDsdHydration Mixin',
    status: 'Adopted',
    path: '/decisions/0005-with-dsd-hydration-mixin',
    summary:
      'Self-built SSR + WithDsdHydration Mixin to bridge DSD hydration gaps without framework-native SSR.',
    source: adr0005,
  },
  {
    id: '0006',
    title: 'Version Strategy',
    status: 'Adopted',
    path: '/decisions/0006-version-strategy',
    summary:
      'v0.7–0.11 progressive stabilization → v1.0 API stability promise → v1.x incremental → v2.0 only if needed.',
    source: adr0006,
  },
  {
    id: '0007',
    title: 'View Transitions + Speculation Rules',
    status: 'Adopted',
    path: '/decisions/0007-view-transitions-speculation-rules',
    summary:
      'Native cross-page animations (View Transitions) and browser prefetch/prerender (Speculation Rules) in SSG post-process pipeline. Zero runtime cost.',
    source: adr0007,
  },
  {
    id: '0008',
    title: 'Eliminate createServer() + globalThis Bridges',
    status: 'Adopted',
    path: '/decisions/0008-eliminate-createserver-globalthis-bridges',
    summary:
      'Remove createServer() wrapper and all globalThis bridges (__lessDevServer, __lessIslands, __lessRoutes, __lessPluginCtx, __lessBuildMetadata). Replace with explicit Vite plugin ctx passing.',
    source: adr0008,
  },
  {
    id: '0010',
    title: 'Eliminate .less/ Temp Files',
    status: 'Adopted',
    path: '/decisions/0010-eliminate-all-dot-less-temp-files',
    summary:
      'Replace filesystem intermediate state (.less/routes.json, .less/nav.json, etc.) with build ctx in-memory passing. Eliminates temp file I/O and race conditions.',
    source: adr0010,
  },
  {
    id: '0011',
    title: 'Eliminate Last globalThis via closeBundle',
    status: 'Adopted',
    path: '/decisions/0011-eliminate-last-globalthis-via-closebundle',
    summary:
      'Replace globalThis.__lessBuildMetadata with closeBundle hook data passing. Final globalThis elimination in the build pipeline.',
    source: adr0011,
  },
  {
    id: '0012',
    title: 'Extract @lessjs/app Umbrella Package',
    status: 'Adopted',
    path: '/decisions/0012-extract-lessjs-umbrella-to-app-package',
    summary:
      'Move lessApp(), lessContent(), lessI18n() umbrella functions from core to standalone @lessjs/app package. Core focuses on build/SSR infrastructure only.',
    source: adr0012,
  },
  {
    id: '0013',
    title: 'Eliminate less-runtime Barrel + Inline Shim',
    status: 'Adopted',
    path: '/decisions/0013-eliminate-less-runtime-barrel-inline-shim',
    summary:
      'Remove less-runtime.ts barrel re-exports. Each adapter file inlines its own shim (DOMStringMap, idempotent customElements.define). Reduces unnecessary module loading and coupling.',
    source: adr0013,
  },
  {
    id: '0014',
    title: 'SSR Bundle Export renderRoute()',
    status: 'Adopted',
    path: '/decisions/0014-ssr-bundle-export-renderroute',
    summary:
      'SSR bundle exports renderRoute(path, opts)→HTML, getStaticPaths(path)→params[], and routeInfo[] as clean public APIs. build-ssg.ts is orchestration only (path enumeration + file writing).',
    source: adr0014,
  },
];
