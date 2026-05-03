/**
 * _renderer.ts — Homepage renderer
 *
 * Strips the legacy defer-hydration marker from <kiss-hero-ping> to prevent
 * nested upgrade conflict with the parent <docs-home> shadow DOM.
 * The island upgrades independently when its chunk loads.
 */
import type { KissRenderer } from '@kissjs/core';

const renderer: KissRenderer = {
  wrap(html, _ctx) {
    return html.replace(
      '<kiss-hero-ping defer-hydration',
      '<kiss-hero-ping',
    );
  },
};

export default renderer;
