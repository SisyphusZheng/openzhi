/**
 * @kissjs/adapter-lit - Lit Adapter for KISS Framework
 *
 * Bridges Lit's TemplateResult → string for DSD SSR rendering.
 * Uses naive interpolation — no @lit-labs/ssr dependency.
 * Produces clean DSD HTML without Lit hydration markers.
 *
 * Architecture:
 *   @kissjs/core        — renderDSD() only accepts render(): string
 *   @kissjs/adapter-lit — converts TemplateResult → string at build time
 *   @kissjs/ui          — LitElement components (Lit + OpenProps)
 *
 * Usage (in vite.config.ts or build config):
 *   import { installLitAdapter } from '@kissjs/adapter-lit';
 *   installLitAdapter();  // patches renderDSD to handle Lit TemplateResult
 *
 * @module @kissjs/adapter-lit
 */

export { installLitAdapter, uninstallLitAdapter } from './ssr.js';
export { renderLitToString, isLitTemplateResult } from './ssr.js';
