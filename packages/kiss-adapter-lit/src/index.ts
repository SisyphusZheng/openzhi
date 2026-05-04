/**
 * @kissjs/adapter-lit - Lit adapter for KISS Framework.
 *
 * Bridges Lit TemplateResult values to strings for DSD SSR rendering.
 * Uses safe interpolation without @lit-labs/ssr.
 * Produces clean DSD HTML without Lit SSR marker comments.
 *
 * Architecture:
 *   @kissjs/core        renderDSD() only accepts render(): string
 *   @kissjs/adapter-lit converts TemplateResult to string at build time
 *   @kissjs/ui          LitElement components (Lit + OpenProps)
 *
 * Usage (in vite.config.ts or build config):
 *   import { installLitAdapter } from '@kissjs/adapter-lit';
 *   installLitAdapter(); // patches renderDSD to handle Lit TemplateResult
 *
 * @module @kissjs/adapter-lit
 */

export { installLitAdapter, uninstallLitAdapter } from './ssr.js';
export { isLitTemplateResult, renderLitToString } from './ssr.js';
