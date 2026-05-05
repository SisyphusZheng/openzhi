/**
 * @lessjs/ui - KISS UI Component Library
 *
 * Swiss International Style: Pure B&W, minimal, typography-driven.
 * Built on Lit + design tokens CSS custom properties.
 *
 * Components:
 * - kiss-button: Button with variants (default, primary, ghost)
 * - kiss-card: Card container with optional header/footer
 * - kiss-input: Input field with label and error states
 * - kiss-code-block: Code block with copy button
 * - kiss-layout: App layout with header, sidebar, footer
 * - kiss-theme-toggle: Theme toggle Island (Dark/Light)
 *
 * Usage:
 * ```ts
 * // Import all components
 * import '@lessjs/ui';
 *
 * // Or import specific components
 * import { KissButton } from '@lessjs/ui/kiss-button';
 * ```
 *
 * @module @lessjs/ui
 */

interface PackageIslandMeta {
  tagName: string;
  modulePath: string;
  strategy?: 'eager' | 'lazy' | 'idle' | 'visible';
}

// Design tokens (CSS custom properties)
export { kissDesignTokens } from './design-tokens.js';
// Individual token sub-modules (for partial imports)
export { kissSpacingTokens } from './tokens/spacing.js';
export { kissTypographyTokens } from './tokens/typography.js';
export { kissColorTokens } from './tokens/colors.js';
export { kissEffectTokens } from './tokens/effects.js';

// Components
export { KissButton, tagName as kissButtonTagName } from './kiss-button.js';
export { KissCard, tagName as kissCardTagName } from './kiss-card.js';
export { KissInput, tagName as kissInputTagName } from './kiss-input.js';
export { KissCodeBlock, tagName as kissCodeBlockTagName } from './kiss-code-block.js';
export { KissLayout, tagName as kissLayoutTagName } from './kiss-layout.js';
export type { HeaderNavLink, NavItem, NavSection } from './kiss-layout.js';
export { KissThemeToggle, tagName as kissThemeToggleTagName } from './kiss-theme-toggle.js';
export { default as KissHeroPing, tagName as kissHeroPingTagName } from './kiss-hero-ping.js';

// Vite plugin for Web Awesome CDN injection (convenience only)
export { kissUI } from './kiss-ui-plugin.js';
export type { KissUIOptions } from './kiss-ui-plugin.js';

// Island metadata for auto-detection by @lessjs/core
// These components are Islands with Shadow DOM and client-side behavior.
// Any component that appears in SSR output must be listed here so the
// client entry can import it for custom element self-registration.
export const islands: PackageIslandMeta[] = [
  {
    tagName: 'kiss-theme-toggle',
    modulePath: '@lessjs/ui/kiss-theme-toggle',
    strategy: 'eager', // Theme should be applied immediately
  },
  {
    tagName: 'kiss-button',
    modulePath: '@lessjs/ui/kiss-button',
    strategy: 'lazy',
  },
  {
    tagName: 'kiss-input',
    modulePath: '@lessjs/ui/kiss-input',
    strategy: 'lazy', // Form interaction needs JS
  },
  {
    tagName: 'kiss-code-block',
    modulePath: '@lessjs/ui/kiss-code-block',
    strategy: 'lazy', // Copy button needs JS
  },
  {
    tagName: 'kiss-layout',
    modulePath: '@lessjs/ui/kiss-layout',
    strategy: 'lazy',
  },
  {
    tagName: 'kiss-hero-ping',
    modulePath: '@lessjs/ui/kiss-hero-ping',
    strategy: 'lazy',
  },
];
