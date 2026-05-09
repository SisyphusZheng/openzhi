/**
 * _renderer.ts — Layout renderer for the guide section.
 *
 * Adds "Edit this page" link, search button, and TOC for documentation content.
 *
 * @see {@link ../../packages/core/src/types.ts} for LessRenderer interface
 */

import type { LessRenderer } from '@lessjs/core';

const GITHUB_EDIT_BASE = 'https://github.com/lessjs-run/lessjs/edit/main/docs/app/routes';

/** Map URL path → source file path under docs/app/routes */
function routeToSourcePath(path: string): string {
  const p = path.endsWith('/') ? path.slice(0, -1) : path;
  if (p === '' || p === '/') return 'index/index.ts';
  const rel = p.startsWith('/') ? p.slice(1) : p;
  return `${rel}.ts`;
}

function injectAfterTag(html: string, tag: string, content: string): string {
  const idx = html.indexOf('>', html.indexOf(`<${tag}`)) + 1;
  if (idx <= 0) return html;
  return html.slice(0, idx) + content + html.slice(idx);
}

const renderer: LessRenderer = {
  wrap(html: string, ctx: { req: { path: string } }) {
    const sourcePath = routeToSourcePath(ctx.req.path);
    const editUrl = `${GITHUB_EDIT_BASE}/${sourcePath}`;

    // 1. Inject search into header slot (must be direct child of <less-layout> for slot projection)
    html = injectAfterTag(
      html,
      'less-layout',
      '<less-search slot="header-actions"></less-search>',
    );

    // 2. Wrap content + TOC in flex layout, keeping slot children as direct layout children.
    //    The search button is a slot child ─ must remain a direct child.
    //    Everything else after it goes into the flex wrapper.
    const searchTag = '<less-search slot="header-actions">';
    const searchEnd = html.indexOf('</less-search>');
    const closeTag = '</less-layout>';
    const closeIdx = html.lastIndexOf(closeTag);

    if (searchEnd > 0 && closeIdx > searchEnd) {
      const inner = html.slice(searchEnd + '</less-search>'.length, closeIdx);
      const flexWrapper = `<div style="display:flex;gap:2rem;position:relative;">
  <div style="flex:1;min-width:0">${inner}
  <div style="margin-top:3rem;padding-top:1.5rem;border-top:0.5px solid var(--less-border);font-size:0.8125rem;">
    <a href="${editUrl}" target="_blank" rel="noopener" style="color:var(--less-text-tertiary);text-decoration:none;">Edit this page on GitHub →</a>
  </div>
</div>
  <less-toc style="flex-shrink:0;width:200px;display:none"></less-toc>
</div>`;
      html = html.slice(0, searchEnd + '</less-search>'.length) + flexWrapper +
        html.slice(closeIdx);
    }

    return html;
  },
};

export default renderer;
