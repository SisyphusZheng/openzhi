/**
 * @lessjs/ui — Vite plugin for Web Awesome CDN injection (convenience only)
 *
 * **This is an OPTIONAL convenience plugin**, not part of the LessJS core architecture.
 * It exists solely for users who want a one-liner Web Awesome setup.
 *
 * The LessJS-recommended approach is to use `less({ inject: { stylesheets: [...], scripts: [...] } })`
 * from @lessjs/core, which gives full control over headFragments ordering and works
 * with any CSS framework (not just Web Awesome).
 *
 * This plugin is intentionally NOT used by the LessJS docs site itself —
 * the docs use less() with inject option directly.
 *
 * Usage:
 * ```ts
 * // vite.config.ts
 * import { lessUI } from '@lessjs/ui'
 *
 * export default defineConfig({
 *   plugins: [lessUI()]  // One-liner Web Awesome CDN
 * })
 * ```
 */

import type { Plugin } from 'vite';

export interface LessUIOptions {
  /**
   * Web Awesome version (default: '3.5.0')
   */
  version?: string;

  /**
   * Inject Web Awesome via CDN (default: true).
   * Set to false to disable CDN injection — import the package manually
   * via npm or use less({ inject }) for full control.
   */
  cdn?: boolean;
}

/**
 * LessJS UI Plugin - Injects Web Awesome CDN links
 */
export function lessUI(options: LessUIOptions = {}): Plugin {
  const { version = '3.5.0', cdn = true } = options;

  return {
    name: 'less:ui',

    transformIndexHtml(html) {
      if (!cdn) return html;

      const cdnBase = 'https://ka-f.webawesome.com/webawesome@' + version;

      return [
        {
          tag: 'link',
          injectTo: 'head-prepend',
          attrs: {
            rel: 'stylesheet',
            href: cdnBase + '/styles/webawesome.css',
          },
        },
        {
          tag: 'script',
          injectTo: 'head-prepend',
          attrs: {
            type: 'module',
            src: cdnBase + '/webawesome.loader.js',
          },
        },
      ];
    },
  };
}
