import { lessjs } from '@lessjs/app';
import { lessRootColorCSS } from '@lessjs/ui/tokens/colors';
import { defineConfig } from 'vite';

// All LessJS packages ship as JSR modules. www/ is a consumer of the
// public framework API — no workspace aliases needed.
//
// When running via `deno task dev` the Deno module resolver maps
// jsr:@lessjs/* → the local workspace packages/ via the root deno.json.
// When published to JSR, consumers get the real JSR tarballs. Either way
// the import specifier is identical: clean and version-pinned.

const APP_VER = '0.14.7';

const lessUiAliases = {
  '@lessjs/ui': `jsr:/@lessjs/ui@^${APP_VER}/src/index.ts`,
  '@lessjs/ui/design-tokens': `jsr:/@lessjs/ui@^${APP_VER}/src/design-tokens.ts`,
  '@lessjs/ui/less-button': `jsr:/@lessjs/ui@^${APP_VER}/src/less-button.ts`,
  '@lessjs/ui/less-card': `jsr:/@lessjs/ui@^${APP_VER}/src/less-card.ts`,
  '@lessjs/ui/less-code-block': `jsr:/@lessjs/ui@^${APP_VER}/src/less-code-block.ts`,
  '@lessjs/ui/less-dialog': `jsr:/@lessjs/ui@^${APP_VER}/src/less-dialog.ts`,
  '@lessjs/ui/less-hero-ping': `jsr:/@lessjs/ui@^${APP_VER}/src/less-hero-ping.ts`,
  '@lessjs/ui/less-input': `jsr:/@lessjs/ui@^${APP_VER}/src/less-input.ts`,
  '@lessjs/ui/less-layout': `jsr:/@lessjs/ui@^${APP_VER}/src/less-layout.ts`,
  '@lessjs/ui/less-theme-toggle': `jsr:/@lessjs/ui@^${APP_VER}/src/less-theme-toggle.ts`,
  '@lessjs/ui/tokens/colors': `jsr:/@lessjs/ui@^${APP_VER}/src/tokens/colors.ts`,
  '@lessjs/ui/tokens/color-values': `jsr:/@lessjs/ui@^${APP_VER}/src/tokens/color-values.ts`,
};

const colorTokensStyle =
  `<style>${lessRootColorCSS}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>`;

export default defineConfig({
  base: '/',
  resolve: {
    alias: lessUiAliases,
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
  plugins: [
    lessjs({
      routesDir: 'app/routes',
      islandsDir: 'app/islands',
      componentsDir: 'app/components',
      html: {
        title: 'LessJS',
      },
      // Use packageIslands to consume @lessjs/ui components
      // (less-theme-toggle is no longer a local copy — it comes from the package)
      packageIslands: ['@lessjs/ui'],
      // SSR configuration: bundle @lessjs/ui instead of externalizing
      // This fixes "Unsupported decorator location: field" error in SSR
      ssr: {
        noExternal: ['@lessjs/ui'],
      },
      pwa: {
        name: 'LessJS Framework — Less is More',
        shortName: 'LessJS',
        themeColor: '#000000',
        backgroundColor: '#ffffff',
      },
      viewTransition: true,
      speculation: true,
      inject: {
        stylesheets: [],
        scripts: [
          { src: '/theme-init.js' },
          { src: '/mobile-menu.js', defer: true },
          { src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js', defer: true },
          {
            src:
              'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js',
            defer: true,
          },
          {
            src:
              'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js',
            defer: true,
          },
          {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json.min.js',
            defer: true,
          },
          {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js',
            defer: true,
          },
          {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-css.min.js',
            defer: true,
          },
          {
            src:
              'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup.min.js',
            defer: true,
          },
          { src: '/prism-init.js', defer: true },
          {
            src: 'https://gc.zgo.at/count.js',
            async: true,
            attrs: { 'data-goatcounter': 'https://lessjs.goatcounter.com/count' },
          },
        ],
        headFragments: [
          // Meta: Open Graph / Twitter Cards
          '<meta property="og:site_name" content="LessJS">',
          '<meta property="og:type" content="website">',
          '<meta property="og:title" content="LessJS — Less is More">',
          '<meta property="og:description" content="DSD-first Web Standards framework. Zero-runtime core, SSG + Island architecture, Lit Web Components, Hono API routes.">',
          '<meta property="og:url" content="https://lessjs.org">',
          '<meta property="og:image" content="https://lessjs.org/assets/og-image.svg">',
          '<meta name="twitter:card" content="summary_large_image">',
          '<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">',
          // Non-blocking OpenProps: media="print" prevents render-block, onload switches to all
          '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media=\'all\'">',
          // Anti-flash: CLS prevention — removed by theme-init.js
          '<style id="less-anti-flash">html{visibility:hidden}</style>',
          // Favicon (transparent bg, less-than symbol)
          '<link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />',
          '<link rel="apple-touch-icon" href="/assets/less-logo.svg" />',
          // DSD (Declarative Shadow DOM) polyfill removed — all modern browsers
          // (Chrome 90+, Safari 16.4+, Firefox 123+) support native DSD.
          // The old document.write() polyfill caused:
          //   1. "parser-blocking, cross-site script" browser warnings
          //   2. "Cannot use import statement outside a module" SyntaxError
          //   3. document.write() is hostile to modern browsers and CSP
          // Theme system: Pure B&W — Dark / Light
          // DRY: CSS values come from @lessjs/ui/tokens/colors.ts (single source of truth)
          colorTokensStyle,
          // Init theme from localStorage or prefers-color-scheme
          // Mobile sidebar: universal JS for open/close (all browsers)
          // Code syntax highlighting (Prism, loaded async to avoid blocking)
          '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css" media="print" onload="this.media=\'all\'">',
          // Pre-load common grammars with PROPER dependency order:
          // typescript extends javascript → javascript MUST load before typescript
          // Prism auto-init: adds default language class + highlights after DSD settles
          // Privacy-friendly analytics (GoatCounter, no cookies)
        ],
      },
      // @lessjs/content: Blog + Nav + Sitemap (unified content plugin)
      content: {
        blog: {
          contentDir: 'content/blog',
          basePath: '/blog',
        },
        nav: {
          routesDir: 'app/routes',
          headerNav: [
            { href: '/guide/positioning', label: 'Docs' },
            { href: '/guide/architecture', label: 'Architecture' },
            { href: '/blog', label: 'Blog' },
            { href: '/ui', label: 'UI' },
            { href: '/roadmap', label: 'Roadmap' },
            { href: '/community', label: 'Community' },
            { href: 'https://jsr.io/@lessjs/core', label: 'JSR' },
          ],
        },
        sitemap: {
          hostname: 'https://lessjs.org',
        },
      },
      // @lessjs/i18n: Internationalization (locales, path helpers)
      i18n: {
        locales: ['en', 'zh'],
        defaultLocale: 'en',
      },
    }),
  ],
});
