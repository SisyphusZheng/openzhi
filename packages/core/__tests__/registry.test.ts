/**
 * Tests for the @lessjs/ui package manifest.
 *
 * Verifies that the manifest-driven islands match the previous
 * hardcoded islands array behavior.
 */

import { assertEquals } from 'jsr:@std/assert@^1.0.0';
import { manifest } from '../../ui/src/manifest.js';
import {
  packageIslandFromManifest,
  validate as validateManifest,
} from '../../core/src/registry.js';

/** Previous hardcoded islands for backward compatibility verification */
const LEGACY_ISLANDS = [
  {
    tagName: 'less-theme-toggle',
    modulePath: '@lessjs/ui/less-theme-toggle',
    strategy: 'eager' as const,
  },
  { tagName: 'less-button', modulePath: '@lessjs/ui/less-button', strategy: 'lazy' as const },
  { tagName: 'less-input', modulePath: '@lessjs/ui/less-input', strategy: 'lazy' as const },
  {
    tagName: 'less-code-block',
    modulePath: '@lessjs/ui/less-code-block',
    strategy: 'lazy' as const,
  },
  { tagName: 'less-layout', modulePath: '@lessjs/ui/less-layout', strategy: 'eager' as const },
  { tagName: 'less-hero-ping', modulePath: '@lessjs/ui/less-hero-ping', strategy: 'lazy' as const },
  { tagName: 'less-dialog', modulePath: '@lessjs/ui/less-dialog', strategy: 'lazy' as const },
];

Deno.test('ui manifest - passes validation', () => {
  const result = validateManifest(manifest);
  assertEquals(
    result.valid,
    true,
    `Validation failed: ${result.errors.map((e: { message: string }) => e.message).join(', ')}`,
  );
});

Deno.test('ui manifest - has correct package metadata', () => {
  assertEquals(manifest.packageName, '@lessjs/ui');
  assertEquals(manifest.schemaVersion, '1.0.0');
  assertEquals(manifest.less?.adapter, 'lit');
  assertEquals(manifest.less?.cssPrefix, 'less');
});

Deno.test('ui manifest - generated islands match legacy islands', () => {
  const generatedIslands = packageIslandFromManifest(manifest);

  assertEquals(generatedIslands.length, LEGACY_ISLANDS.length, 'Island count mismatch');

  for (const legacy of LEGACY_ISLANDS) {
    const generated = generatedIslands.find((i) => i.tagName === legacy.tagName);
    assertEquals(generated !== undefined, true, `Missing island for ${legacy.tagName}`);
    assertEquals(generated!.tagName, legacy.tagName);
    assertEquals(generated!.modulePath, legacy.modulePath);
    assertEquals(generated!.strategy, legacy.strategy);
  }
});

Deno.test('ui manifest - all declarations have SSR and DSD enabled', () => {
  for (const decl of manifest.declarations) {
    assertEquals(decl.less?.ssr, true, `${decl.tagName} should have ssr: true`);
    assertEquals(decl.less?.dsd, true, `${decl.tagName} should have dsd: true`);
    assertEquals(
      decl.less?.module !== undefined,
      true,
      `${decl.tagName} should have a module path`,
    );
  }
});

Deno.test('ui manifest - tag names are valid custom element names', () => {
  for (const decl of manifest.declarations) {
    assertEquals(
      decl.tagName.startsWith('less-'),
      true,
      `${decl.tagName} should start with 'less-'`,
    );
    assertEquals(
      decl.tagName.includes('-'),
      true,
      `${decl.tagName} must contain a hyphen`,
    );
  }
});
