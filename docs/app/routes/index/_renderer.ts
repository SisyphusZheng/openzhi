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
    return html.replace(
      '<hero-ping defer-hydration>',
      '<hero-ping>',
    );
  },
};

export default renderer;
