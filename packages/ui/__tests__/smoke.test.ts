/**
 * @lessjs/ui — Smoke tests
 *
 * Minimal tests to verify components can be imported and registered.
 * CI should never use continue-on-error — if tests fail, the build fails.
 */
import { assertEquals, assertExists } from 'jsr:@std/assert@^1.0.0';

Deno.test('less-ui — index exports islands array', async () => {
  const mod = await import('../src/index.ts');
  assertExists(mod.islands, 'islands export should exist');
  assertEquals(Array.isArray(mod.islands), true);
  assertEquals(mod.islands.length, 7);
  assertEquals(mod.islands[0].tagName, 'less-theme-toggle');
  assertEquals(mod.islands[0].strategy, 'eager');
  assertEquals(mod.islands[1].tagName, 'less-button');
  assertEquals(mod.islands[2].tagName, 'less-input');
  assertEquals(mod.islands[3].tagName, 'less-code-block');
  assertEquals(mod.islands[4].tagName, 'less-layout');
  assertEquals(mod.islands[5].tagName, 'less-hero-ping');
  assertEquals(mod.islands[6].tagName, 'less-dialog');
});

Deno.test('less-ui — less-theme-toggle exports tagName', async () => {
  const mod = await import('../src/less-theme-toggle.ts');
  assertEquals(mod.tagName, 'less-theme-toggle');
  assertExists(mod.LessThemeToggle, 'LessThemeToggle class should be exported');
});

Deno.test('less-ui — design-tokens exports lessDesignTokens', async () => {
  const mod = await import('../src/design-tokens.ts');
  assertExists(mod.lessDesignTokens, 'lessDesignTokens should be exported');
});

Deno.test('less-ui — all components export tagName', async () => {
  const components = [
    'less-button',
    'less-card',
    'less-input',
    'less-code-block',
    'less-layout',
    'less-hero-ping',
    'less-dialog',
  ];
  for (const name of components) {
    const mod = await import(`../src/${name}.ts`);
    assertExists(mod.tagName, `${name} should export tagName`);
  }
});
