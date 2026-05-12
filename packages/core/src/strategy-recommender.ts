/**
 * @lessjs/core - Island Strategy Recommender
 *
 * Analyzes component characteristics during SSR to recommend
 * the optimal Island loading strategy (eager / lazy / visible / idle).
 *
 * The recommendation is a suggestion — developers can override it
 * by explicitly setting the strategy in their island configuration.
 *
 * @module @lessjs/core/strategy-recommender
 */

import type { ComponentLayer } from './types.ts';

/** Component characteristics analyzed during SSR */
export interface IslandProfile {
  tagName: string;
  hasEventListeners: boolean;
  hasDomMutations: boolean;
  usesExternalState: boolean;
  renderComplexity: 'simple' | 'moderate' | 'complex';
  isAboveFold: boolean;
  estimatedChunkSize: number;
  dependencyCount: number;
}

/** Recommended strategy with reasoning */
export interface StrategyRecommendation {
  tagName: string;
  current: ComponentLayer | undefined;
  recommended: 'eager' | 'lazy' | 'visible' | 'idle';
  reasoning: string;
}

/**
 * Recommend an Island loading strategy based on component profile.
 *
 * Decision tree:
 *   isAboveFold + hasEventListeners → eager   (critical interactive content)
 *   isAboveFold                     → lazy    (important but non-critical)
 *   hasEventListeners               → visible (IntersectionObserver)
 *   renderComplexity === 'complex'  → visible (heavy render, defer)
 *   otherwise                       → idle    (requestIdleCallback)
 */
export function recommendStrategy(profile: IslandProfile): {
  strategy: 'eager' | 'lazy' | 'visible' | 'idle';
  reasoning: string;
} {
  if (profile.isAboveFold && profile.hasEventListeners) {
    return {
      strategy: 'eager',
      reasoning: 'Above-fold interactive component — load immediately',
    };
  }

  if (profile.isAboveFold) {
    return {
      strategy: 'lazy',
      reasoning: 'Above-fold but no event handlers — defer to document idle',
    };
  }

  if (profile.hasEventListeners) {
    return {
      strategy: 'visible',
      reasoning: 'Has event handlers but below fold — load on visibility',
    };
  }

  if (profile.renderComplexity !== 'simple') {
    return {
      strategy: 'visible',
      reasoning: 'Complex render tree — defer until visible in viewport',
    };
  }

  return {
    strategy: 'idle',
    reasoning: 'Simple, below-fold, no events — load during browser idle time',
  };
}

/**
 * Build a strategy recommendation by comparing a component's current
 * layer with the recommended strategy.
 */
export function buildRecommendation(
  tagName: string,
  profile: IslandProfile,
  currentLayer?: ComponentLayer,
): StrategyRecommendation {
  const { strategy: recommended } = recommendStrategy(profile);

  // Map ComponentLayer to the matching strategy name
  let current: ComponentLayer | undefined = currentLayer;
  // 'dsd-static' and 'dsd-interactive' are not Island strategies
  // Only 'pure-island' maps to an island strategy
  if (currentLayer === 'pure-island' || !currentLayer) {
    current = currentLayer;
  }

  return {
    tagName,
    current,
    recommended,
    reasoning: recommendStrategy(profile).reasoning,
  };
}
