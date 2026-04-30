/**
 * _renderer.ts — Demo page renderer
 *
 * Injects <api-consumer> inside page-demo's template (correct position in layout)
 * but WITHOUT defer-hydration. This means:
 *   - It's positioned correctly within the kiss-layout slot
 *   - It's EXCLUDED from the batch defer-hydration group
 *   - It hydrates independently when its chunk defines the custom element
 *   - No simultaneous hydration conflict with the parent shadow DOM
 */
import type { KissRenderer } from '@kissjs/core';

const renderer: KissRenderer = {
  wrap(html, _ctx) {
    // Replace the placeholder comment with the actual <api-consumer> tag.
    // NO defer-hydration — it would cause dual-hydration conflict.
    return html.replace(
      '<!-- api-consumer rendered by renderer in light DOM -->',
      '<api-consumer></api-consumer>',
    );
  },
};

export default renderer;
