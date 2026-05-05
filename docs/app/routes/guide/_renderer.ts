/**
 * _renderer.ts — Layout renderer for the guide section.
 *
 * LessJS Architecture: Renderers wrap page SSR output, like Next.js layout.tsx.
 * This renderer is a pass-through — the sidebar navigation in <less-layout>
 * already provides section context, so no additional wrapping is needed.
 *
 * Convention:
 *   - _renderer.ts default-exports a LessRenderer object
 *   - The `.wrap(html, ctx)` method receives the page's SSR HTML
 *   - Return the wrapped HTML (can be async)
 *   - ctx.req.path gives the current URL path for active nav highlighting
 *
 * @see {@link ../packages/less-core/src/types.ts} for LessRenderer interface
 */

import type { LessRenderer } from '@lessjs/core';

const renderer: LessRenderer = {
  wrap(html, _ctx) {
    // Pass-through: <less-layout> sidebar already provides navigation context.
    // No breadcrumb or section wrapper needed — it would render outside
    // the <less-layout> component and appear above the sticky header.
    return html;
  },
};

export default renderer;
