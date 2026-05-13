/**
 * @lessjs/adapter-vite - ssg-render.ts tests
 */
import { assertEquals, assertRejects } from 'jsr:@std/assert@^1.0.0';
import { Hono } from 'hono';
import { ssgRender } from '../src/cli/ssg-render.js';
import type { SsgRenderOptions, SsrBundle } from '../src/cli/ssg-render.js';

function createMockBundle(overrides: Partial<SsrBundle> = {}): SsrBundle {
  const app = new Hono();
  app.get('/', (c) => c.text('ok'));
  return {
    default: app,
    routeInfo: [
      { path: '/', tagName: 'index-page', isDynamic: false, paramNames: [] },
      { path: '/about', tagName: 'about-page', isDynamic: false, paramNames: [] },
    ],
    ...overrides,
  };
}

const defaultOptions: SsgRenderOptions = {
  outDir: './dist-test-ssg-render',
};

Deno.test('ssgRender — rejects when module has no default export', async () => {
  const bundle = createMockBundle({ default: undefined });
  await assertRejects(
    () => ssgRender(bundle as SsrBundle, defaultOptions),
    Error,
    'no Hono app found',
  );
});

Deno.test('ssgRender — handles empty routeInfo gracefully', async () => {
  const bundle = createMockBundle({ routeInfo: [] });
  await ssgRender(bundle, defaultOptions);
});

Deno.test('ssgRender — handles dynamic routes with no getStaticPaths', async () => {
  const bundle = createMockBundle({
    routeInfo: [
      { path: '/blog/:slug', tagName: 'blog-page', isDynamic: true, paramNames: ['slug'] },
    ],
    renderRoute: undefined,
    getStaticPaths: undefined,
  });
  await ssgRender(bundle, defaultOptions);
});

Deno.test('ssgRender — handles getStaticPaths failure gracefully', async () => {
  const bundle = createMockBundle({
    routeInfo: [
      { path: '/blog/:slug', tagName: 'blog-page', isDynamic: true, paramNames: ['slug'] },
    ],
    renderRoute: async () => '<html><body>test</body></html>',
    getStaticPaths: async () => {
      throw new Error('fail');
    },
  });
  await ssgRender(bundle, defaultOptions);
});

Deno.test('ssgRender — handles empty getStaticPaths gracefully', async () => {
  const bundle = createMockBundle({
    routeInfo: [
      { path: '/blog/:slug', tagName: 'blog-page', isDynamic: true, paramNames: ['slug'] },
    ],
    renderRoute: async () => '<html><body>test</body></html>',
    getStaticPaths: async () => [],
  });
  await ssgRender(bundle, defaultOptions);
});

Deno.test('ssgRender — handles options with viewTransition disabled', async () => {
  const bundle = createMockBundle();
  await ssgRender(bundle, { ...defaultOptions, viewTransition: false });
});

Deno.test('ssgRender — handles options with speculation enabled', async () => {
  const bundle = createMockBundle();
  await ssgRender(bundle, { ...defaultOptions, speculation: true });
});
