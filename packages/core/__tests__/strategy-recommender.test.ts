/**
 * @lessjs/core - strategy-recommender.ts tests (Deno)
 */
import { assertEquals } from 'jsr:@std/assert@^1.0.0';
import { buildRecommendation, recommendStrategy } from '../src/strategy-recommender.ts';
import type { IslandProfile } from '../src/strategy-recommender.ts';

function makeProfile(overrides: Partial<IslandProfile> = {}): IslandProfile {
  return {
    tagName: 'test-island',
    hasEventListeners: false,
    hasDomMutations: false,
    usesExternalState: false,
    renderComplexity: 'simple',
    isAboveFold: false,
    estimatedChunkSize: 1024,
    dependencyCount: 0,
    ...overrides,
  };
}

Deno.test('recommendStrategy — above-fold interactive → eager', () => {
  const result = recommendStrategy(makeProfile({ isAboveFold: true, hasEventListeners: true }));
  assertEquals(result.strategy, 'eager');
  assertEquals(typeof result.reasoning, 'string');
});

Deno.test('recommendStrategy — above-fold static → lazy', () => {
  const result = recommendStrategy(makeProfile({ isAboveFold: true }));
  assertEquals(result.strategy, 'lazy');
});

Deno.test('recommendStrategy — below-fold with events → visible', () => {
  const result = recommendStrategy(makeProfile({ hasEventListeners: true }));
  assertEquals(result.strategy, 'visible');
});

Deno.test('recommendStrategy — complex render → visible', () => {
  const result = recommendStrategy(makeProfile({ renderComplexity: 'complex' }));
  assertEquals(result.strategy, 'visible');
});

Deno.test('recommendStrategy — simple below-fold no events → idle', () => {
  const result = recommendStrategy(makeProfile({}));
  assertEquals(result.strategy, 'idle');
});

Deno.test('recommendStrategy — moderate render → visible', () => {
  const result = recommendStrategy(makeProfile({ renderComplexity: 'moderate' }));
  assertEquals(result.strategy, 'visible');
});

Deno.test('buildRecommendation — produces correct structure', () => {
  const profile = makeProfile({ tagName: 'my-chart', hasEventListeners: true });
  const rec = buildRecommendation('my-chart', profile, 'pure-island');
  assertEquals(rec.tagName, 'my-chart');
  assertEquals(rec.recommended, 'visible');
  assertEquals(typeof rec.reasoning, 'string');
});
