/**
 * @lessjs/ui - Design Tokens: Color Values
 *
 * Pure data — color token values for LessJS themes.
 * ZERO dependencies (no lit, no framework).
 *
 * This file is the SINGLE SOURCE OF TRUTH for all color token values.
 * Both the Lit CSSResult module (colors.ts) and the SSG post-processor
 * (ssg-postprocess.ts) import from here — no more duplicated hard-coded strings.
 *
 * Token naming: --less-{category}-{variant}
 * Values reference OpenProps CSS variables (loaded via CDN at runtime).
 * See: https://open-props.style/#colors
 *
 * Do NOT edit CSS strings elsewhere — edit the values below.
 */

/** Dark theme color values */
export const lessDarkColors = {
  '--less-bg-base': 'var(--gray-12)',
  '--less-bg-surface': 'var(--gray-11)',
  '--less-bg-elevated': 'var(--gray-10)',
  '--less-bg-hover': 'var(--gray-11)',
  '--less-bg-card': 'var(--gray-11)',
  '--less-border': 'var(--gray-9)',
  '--less-border-hover': 'var(--gray-8)',
  '--less-text-primary': 'var(--gray-0)',
  '--less-text-secondary': 'var(--gray-5)',
  '--less-text-tertiary': 'var(--gray-7)',
  '--less-text-muted': 'var(--gray-8)',
  '--less-accent': 'var(--gray-0)',
  '--less-accent-dim': 'var(--gray-4)',
  '--less-accent-subtle': 'var(--gray-11)',
  '--less-brand': '#534AB7',
  '--less-brand-subtle': '#EEEDFE',
  '--less-code-bg': 'var(--gray-10)',
  '--less-code-border': 'var(--gray-9)',
  '--less-error': 'var(--red-4)',
  '--less-scrollbar-track': 'transparent',
  '--less-scrollbar-thumb': 'var(--gray-9)',
} as const;

/** Light theme color values */
export const lessLightColors = {
  '--less-bg-base': 'var(--gray-0)',
  '--less-bg-surface': 'var(--gray-1)',
  '--less-bg-elevated': 'var(--gray-2)',
  '--less-bg-hover': 'var(--gray-2)',
  '--less-bg-card': 'var(--gray-0)',
  '--less-border': 'var(--gray-3)',
  '--less-border-hover': 'var(--gray-4)',
  '--less-text-primary': 'var(--gray-12)',
  '--less-text-secondary': 'var(--gray-8)',
  '--less-text-tertiary': 'var(--gray-7)',
  '--less-text-muted': 'var(--gray-6)',
  '--less-accent': 'var(--gray-12)',
  '--less-accent-dim': 'var(--gray-8)',
  '--less-accent-subtle': 'var(--gray-2)',
  '--less-brand': '#534AB7',
  '--less-brand-subtle': '#EEEDFE',
  '--less-code-bg': 'var(--gray-2)',
  '--less-code-border': 'var(--gray-3)',
  '--less-error': 'var(--red-7)',
  '--less-scrollbar-track': 'transparent',
  '--less-scrollbar-thumb': 'var(--gray-4)',
} as const;

// ─── CSS Generators ────────────────────────────────────────────

/** Generate CSS declarations string from a values object */
export function declarations(values: Readonly<Record<string, string>>): string {
  return Object.entries(values)
    .map(([prop, value]) => `${prop}:${value}`)
    .join(';');
}

/**
 * Generate page-level CSS for :root injection.
 *
 * Output format:
 *   :root,[data-theme="light"]{--less-bg-base:var(--gray-0);...;color-scheme:light}
 *   [data-theme="dark"]{--less-bg-base:var(--gray-12);...;color-scheme:dark}
 *
 * Use in vite.config.ts `inject.headFragments` or SSG post-processing.
 */
export function generateRootColorCSS(): string {
  return `:root,[data-theme="light"]{${
    declarations(lessLightColors)
  };color-scheme:light}[data-theme="dark"]{${declarations(lessDarkColors)};color-scheme:dark}`;
}
