/**
 * _renderer.ts — Layout renderer for the Registry section.
 *
 * v0.19.0: Injects search island into registry pages.
 */

import type { LessRenderer } from '@lessjs/core';

const renderer: LessRenderer = {
  wrap(html: string, _ctx: { req: { path: string } }) {
    // Inject registry search into header slot
    const layoutOpen = html.indexOf('<less-layout');
    if (layoutOpen >= 0) {
      const closeGt = html.indexOf('>', layoutOpen);
      if (closeGt > 0) {
        html = html.slice(0, closeGt + 1) +
          '<less-registry-search slot="header-actions"></less-registry-search>' +
          html.slice(closeGt + 1);
      }
    }
    return html;
  },
};

export default renderer;
