/**
 * _renderer.ts — Homepage renderer
 *
 * Homepage renderer kept as the route-local customization hook.
 * The island upgrades independently when its chunk loads.
 */
import type { KissRenderer } from '@lessjs/core';

const renderer: KissRenderer = {
  wrap(html, _ctx) {
    return html;
  },
};

export default renderer;
