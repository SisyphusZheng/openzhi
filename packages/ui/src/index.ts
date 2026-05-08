/**
 * @lessjs/ui - LessJS UI Component Library
 *
 * Swiss International Style: Pure B&W, minimal, typography-driven.
 * Built on Lit + design tokens CSS custom properties.
 *
 * Components:
 * - less-button: Button with variants (default, primary, ghost)
 * - less-card: Card container with optional header/footer
 * - less-input: Input field with label and error states
 * - less-code-block: Code block with copy button
 * - less-layout: App layout with header, sidebar, footer
 * - less-theme-toggle: Theme toggle Island (Dark/Light)
 *
 * Usage:
 * ```ts
 * // Import all components
 * import '@lessjs/ui';
 *
 * // Or import specific components
 * import { LessButton } from '@lessjs/ui/less-button';
 * ```
 *
 * @module @lessjs/ui
 */

import type { PackageIslandMeta } from '@lessjs/core';

// Design tokens (CSS custom properties)
export { lessDesignTokens } from './design-tokens.js';
// Individual token sub-modules (for partial imports)
export { lessSpacingTokens } from './tokens/spacing.js';
export { lessTypographyTokens } from './tokens/typography.js';
export { lessColorTokens } from './tokens/colors.js';
export { lessEffectTokens } from './tokens/effects.js';

// Components
export { LessButton, tagName as lessButtonTagName } from './less-button.js';
export { LessCard, tagName as lessCardTagName } from './less-card.js';
export { LessInput, tagName as lessInputTagName } from './less-input.js';
export { LessCodeBlock, tagName as lessCodeBlockTagName } from './less-code-block.js';
export { LessLayout, tagName as lessLayoutTagName } from './less-layout.js';
export type { HeaderNavLink, NavItem, NavSection } from './less-layout.js';
export { LessThemeToggle, tagName as lessThemeToggleTagName } from './less-theme-toggle.js';
export { default as LessHeroPing, tagName as lessHeroPingTagName } from './less-hero-ping.js';
export { LessDialog, tagName as lessDialogTagName } from './less-dialog.js';

// Island metadata for auto-detection by @lessjs/core
// These components are Islands with Shadow DOM and client-side behavior.
// Any component that appears in SSR output must be listed here so the
// client entry can import it for custom element self-registration.
export const islands: PackageIslandMeta[] = [
  {
    tagName: 'less-theme-toggle',
    modulePath: '@lessjs/ui/less-theme-toggle',
    strategy: 'eager', // Theme should be applied immediately
  },
  {
    tagName: 'less-button',
    modulePath: '@lessjs/ui/less-button',
    strategy: 'lazy',
  },
  {
    tagName: 'less-input',
    modulePath: '@lessjs/ui/less-input',
    strategy: 'lazy', // Form interaction needs JS
  },
  {
    tagName: 'less-code-block',
    modulePath: '@lessjs/ui/less-code-block',
    strategy: 'lazy', // Copy button needs JS
  },
  {
    tagName: 'less-layout',
    modulePath: '@lessjs/ui/less-layout',
    strategy: 'eager', // Layout shell must be interactive immediately (hamburger menu, sidebar)
  },
  {
    tagName: 'less-hero-ping',
    modulePath: '@lessjs/ui/less-hero-ping',
    strategy: 'lazy',
  },
  {
    tagName: 'less-dialog',
    modulePath: '@lessjs/ui/less-dialog',
    strategy: 'lazy',
  },
];
