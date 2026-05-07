import{a as e}from"./island-api-consumer-DZ1zs91I.js";var t=e`
  :host {
    /* === Spacing Scale (4px base unit) === */
    --less-size-1: 0.25rem; /* 4px */
    --less-size-2: 0.375rem; /* 6px */
    --less-size-3: 0.5rem; /* 8px */
    --less-size-4: 0.75rem; /* 12px */
    --less-size-5: 1rem; /* 16px */
    --less-size-6: 1.25rem; /* 20px */
    --less-size-7: 1.5rem; /* 24px */
    --less-size-8: 2rem; /* 32px */
    --less-size-9: 2.5rem; /* 40px */
    --less-size-10: 3rem; /* 48px */

    /* === Border Radius (Swiss: minimal) === */
    --less-radius-sm: 2px;
    --less-radius-md: 4px;
    --less-radius-lg: 6px;

    /* === Transitions === */
    --less-transition-fast: 0.1s ease;
    --less-transition-normal: 0.15s ease;
    --less-transition-slow: 0.25s ease;

    /* === Z-Index Scale === */
    --less-z-dropdown: 100;
    --less-z-sticky: 200;
    --less-z-fixed: 300;
    --less-z-modal-backdrop: 400;
    --less-z-modal: 500;
    --less-z-popover: 600;
    --less-z-tooltip: 700;
  }
`,n=e`
  :host {
    /* === Font Families === */
    --less-font-sans:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      "Helvetica Neue",
      Arial,
      sans-serif;
    --less-font-mono: "SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace;

    /* === Font Sizes (modular scale ~1.125) === */
    --less-font-size-xs: 0.6875rem; /* 11px */
    --less-font-size-sm: 0.75rem; /* 12px */
    --less-font-size-md: 0.875rem; /* 14px */
    --less-font-size-lg: 1rem; /* 16px */
    --less-font-size-xl: 1.125rem; /* 18px */
    --less-font-size-2xl: 1.25rem; /* 20px */
    --less-font-size-3xl: 1.5rem; /* 24px */

    /* === Font Weights === */
    --less-font-weight-normal: 400;
    --less-font-weight-medium: 500;
    --less-font-weight-semibold: 600;
    --less-font-weight-bold: 700;
    --less-font-weight-extrabold: 800;

    /* === Line Heights === */
    --less-line-height-tight: 1.2;
    --less-line-height-normal: 1.5;
    --less-line-height-relaxed: 1.7;

    /* === Letter Spacing === */
    --less-letter-spacing-tight: -0.03em;
    --less-letter-spacing-normal: 0;
    --less-letter-spacing-wide: 0.02em;
    --less-letter-spacing-wider: 0.05em;
    --less-letter-spacing-widest: 0.15em;
  }
`,r={"--less-bg-base":`var(--gray-12)`,"--less-bg-surface":`var(--gray-11)`,"--less-bg-elevated":`var(--gray-10)`,"--less-bg-hover":`var(--gray-11)`,"--less-bg-card":`var(--gray-11)`,"--less-border":`var(--gray-9)`,"--less-border-hover":`var(--gray-8)`,"--less-text-primary":`var(--gray-0)`,"--less-text-secondary":`var(--gray-5)`,"--less-text-tertiary":`var(--gray-7)`,"--less-text-muted":`var(--gray-8)`,"--less-accent":`var(--gray-0)`,"--less-accent-dim":`var(--gray-4)`,"--less-accent-subtle":`var(--gray-11)`,"--less-code-bg":`var(--gray-10)`,"--less-code-border":`var(--gray-9)`,"--less-error":`var(--red-4)`,"--less-scrollbar-track":`transparent`,"--less-scrollbar-thumb":`var(--gray-9)`},i={"--less-bg-base":`var(--gray-0)`,"--less-bg-surface":`var(--gray-1)`,"--less-bg-elevated":`var(--gray-2)`,"--less-bg-hover":`var(--gray-2)`,"--less-bg-card":`var(--gray-0)`,"--less-border":`var(--gray-3)`,"--less-border-hover":`var(--gray-4)`,"--less-text-primary":`var(--gray-12)`,"--less-text-secondary":`var(--gray-8)`,"--less-text-tertiary":`var(--gray-7)`,"--less-text-muted":`var(--gray-6)`,"--less-accent":`var(--gray-12)`,"--less-accent-dim":`var(--gray-8)`,"--less-accent-subtle":`var(--gray-2)`,"--less-code-bg":`var(--gray-2)`,"--less-code-border":`var(--gray-3)`,"--less-error":`var(--red-7)`,"--less-scrollbar-track":`transparent`,"--less-scrollbar-thumb":`var(--gray-4)`};function a(e){return Object.entries(e).map(([e,t])=>`${e}:${t}`).join(`;`)}function o(){return`:root,[data-theme="light"]{${a(i)};color-scheme:light}[data-theme="dark"]{${a(r)};color-scheme:dark}`}var s=e`
  :host {
    /* v0.6: Color tokens inherit from :root via CSS custom property cascade.
      DO NOT redeclare them on :host — that breaks inheritance!
      Setting --less-bg-base: initial would make var(--less-bg-base) invalid
      inside the shadow root, because 'initial' for custom properties means
      "guaranteed-invalid value", NOT "inherit from parent".

      For standalone usage (without LessJS head styles), the page must
      inject lessRootColorCSS into <head> — this is the expected setup.
      If tokens are missing, var() references without fallbacks will simply
      not apply, which is acceptable for standalone mode. */
    color-scheme: light dark;
  }
`;o();var c=e`
  ${t} ${n} ${s} ${e`
  :host {
    --less-shadow-sm: var(--shadow-1);
    --less-shadow-md: var(--shadow-3);
    --less-shadow-lg: var(--shadow-5);
  }

  /* Dark mode: override with light-on-dark shadows */
  :host([data-theme="dark"]) {
    --less-shadow-sm: var(--inner-shadow-1);
    --less-shadow-md: var(--inner-shadow-2);
    --less-shadow-lg: var(--inner-shadow-3);
  }
`};
`;export{c as t};