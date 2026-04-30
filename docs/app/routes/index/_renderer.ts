/**
 * _renderer.ts — Homepage renderer
 *
 * Removes defer-hydration from <hero-ping> to prevent nested
 * hydration conflict with the parent <docs-home> shadow DOM.
 * hero-ping will hydrate independently when its chunk loads.
 */
import type { KissRenderer } from '@kissjs/core';

const renderer: KissRenderer = {
  wrap(html, _ctx) {
    const cleaned = html.replace(
      '<hero-ping defer-hydration>',
      '<hero-ping>',
    );
    // Force CDN to revalidate on each load (GitHub Pages edge cache)
    return cleaned.replace(
      '</head>',
      '<meta http-equiv="cache-control" content="no-cache, must-revalidate">\n</head>',
    );
  },
};

export default renderer;
