/**
 * @lessjs/adapter-vite - Build plugin
 * LessJS Architecture (K·I·S·S): Knowledge · Isolated · Semantic · Static
 * Build produces only static files (K+S), Islands are the only JS (I).
 * API Routes (S — Serverless extension) deploy separately.
 *
 * ADR 0011: closeBundle writes metadata to ctx, then triggers Phase 2/3.
 * ADR 0022: Phase 2/3 extracted into explicit BuildStep classes for
 *           error isolation and future extensibility.
 * No globalThis bridge — ctx stays in less() closure scope throughout.
 */

import type { Plugin, ResolvedConfig } from 'vite';
import type { FrameworkOptions } from '@lessjs/core';
import type { LessBuildContext, Phase1Token, Phase2Token } from './build-context.js';
import { createLogger } from '@lessjs/core/logger';

const log = createLogger('core');

/** A single build step with name, phase number, error isolation, and compile-time ordering. */
export interface BuildStep {
  readonly name: string;
  readonly phase: 1 | 2 | 3;
  run(ctx: LessBuildContext, token: Phase1Token | Phase2Token): Promise<void>;
}

/** Phase 2: Client island bundle */
class ClientBuildStep implements BuildStep {
  readonly name = 'Client island build';
  readonly phase = 2 as const;

  async run(ctx: LessBuildContext, token: Phase1Token): Promise<void> {
    ctx.completePhase2(token);
    const { buildClient } = await import('./cli/build-client.js');
    await buildClient(ctx);
  }
}

/** Phase 3: Static site generation */
class SSGBuildStep implements BuildStep {
  readonly name = 'Static site generation';
  readonly phase = 3 as const;

  async run(ctx: LessBuildContext, token: Phase1Token | Phase2Token): Promise<void> {
    ctx.verifyPhase2(token as Phase2Token);
    const { buildSSG } = await import('./cli/build-ssg.js');
    await buildSSG({}, ctx);
  }
}

/** Vite plugin: writes build metadata to ctx, then runs Phase 2 + Phase 3 */
export function buildPlugin(options: FrameworkOptions = {}, ctx?: LessBuildContext): Plugin {
  const outDir = options.build?.outDir || 'dist';

  let config: ResolvedConfig;
  let base: string = '/';

  return {
    name: 'less:build',

    configResolved(resolvedConfig) {
      config = resolvedConfig;
      base = resolvedConfig.base || '/';
      if (!base.endsWith('/')) base += '/';
    },

    async closeBundle() {
      // Only run in build mode (not dev)
      if (config.command !== 'build') return;

      const root = config.root;

      // Serialize SSR noExternal patterns (RegExp → marker objects)
      const ssrNoExternal = ((options.ssr?.noExternal ||
        (config.ssr as { noExternal?: (string | RegExp)[] } | undefined)?.noExternal) || [])
        .map((item) => {
          if (item instanceof RegExp) {
            return { __type: 'RegExp', source: item.source, flags: item.flags };
          }
          return item;
        });

      // ─── Write to LessBuildContext ──────────
      if (ctx) {
        ctx.phase3.root = root;
        ctx.phase3.outDir = outDir;
        ctx.phase3.base = base;
        ctx.phase3.ssrNoExternal =
          ssrNoExternal as (string | { __type: 'RegExp'; source: string; flags: string })[];
        ctx.phase3.routesDir = options.routesDir || 'app/routes';
        ctx.phase3.islandsDir = options.islandsDir || 'app/islands';
        ctx.phase3.componentsDir = options.componentsDir || 'app/components';
        ctx.phase3.middleware = options.middleware || null;
        ctx.phase3.html = options.html || null;
        ctx.phase3.pwa = options.pwa || null;
        ctx.phase3.upgradeStrategy = options.island?.upgradeStrategy || 'lazy';
        ctx.phase3.viewTransition = options.viewTransition ?? true;
        ctx.phase3.speculation = options.speculation ?? null;
        ctx.phase3.headExtras = options.headExtras || '';
      }

      const totalIslands = (ctx?.phase1.islandTagNames?.length || 0) +
        (ctx?.phase1.packageIslands?.length || 0);

      log.info('Phase 1/3 complete — SSR bundle + metadata written to ctx');

      // ADR 0021: Compile-time phase ordering via branded tokens.
      // Phase 1 token is created when Phase 1 completes (above).
      // Phase 2 steps receive Phase1Token; Phase 3 receives Phase2Token.
      const phase1Token = ctx!.completePhase1();
      const steps: BuildStep[] = [];
      if (ctx && totalIslands > 0) steps.push(new ClientBuildStep());
      if (ctx) steps.push(new SSGBuildStep());

      let currentToken: Phase1Token | Phase2Token = phase1Token;
      for (const step of steps) {
        try {
          log.info(`[${step.phase}/3] ${step.name}...`);
          await step.run(ctx!, currentToken);
          // After step completes, update token for next phase
          if (step.phase === 2) {
            currentToken = ctx!._phaseTokens[2] as Phase2Token;
          }
          log.info(`[${step.phase}/3] ${step.name} — complete`);
        } catch (error) {
          log.error(`[${step.phase}/3] ${step.name} — FAILED:`, error);
          throw error;
        }
      }

      log.info('Build complete.');
    },
  };
}
