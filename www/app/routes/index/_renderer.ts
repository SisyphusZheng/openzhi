/**
 * _renderer.ts — Homepage renderer
 *
 * Homepage renderer kept as the route-local customization hook.
 * Injects search button into header slot (consistent with guide/engine renderers).
 * The island upgrades independently when its chunk loads.
 */
import type { LessRenderer } from '@lessjs/core';

const renderer: LessRenderer = {
  wrap(html, _ctx) {
    // Inject search button into header slot
    const layoutOpen = html.indexOf('<less-layout');
    if (layoutOpen >= 0) {
      const closeGt = html.indexOf('>', layoutOpen);
      if (closeGt > 0) {
        html = html.slice(0, closeGt + 1) +
          '<less-search slot="header-actions"></less-search>' +
          html.slice(closeGt + 1);
      }
    }
    return html;
  },
};

export default renderer;
