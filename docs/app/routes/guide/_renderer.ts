/**
 * _renderer.ts — Layout renderer for the guide section.
 *
 * Adds "Edit this page" link and search button.
 *
 * @see {@link ../../packages/core/src/types.ts} for LessRenderer interface
 */

import type { LessRenderer } from '@lessjs/core';

const GITHUB_EDIT_BASE = 'https://github.com/lessjs-run/lessjs/edit/main/docs/app/routes';

function routeToSourcePath(path: string): string {
  const p = path.endsWith('/') ? path.slice(0, -1) : path;
  if (p === '' || p === '/') return 'index/index.ts';
  const rel = p.startsWith('/') ? p.slice(1) : p;
  return `${rel}.ts`;
}

const renderer: LessRenderer = {
  wrap(html: string, ctx: { req: { path: string } }) {
    const sourcePath = routeToSourcePath(ctx.req.path);
    const editUrl = `${GITHUB_EDIT_BASE}/${sourcePath}`;

    // Inject search button into header slot (must be direct child of <less-layout>)
    const layoutOpen = html.indexOf('<less-layout');
    if (layoutOpen >= 0) {
      const closeGt = html.indexOf('>', layoutOpen);
      if (closeGt > 0) {
        html = html.slice(0, closeGt + 1) +
          '<less-search slot="header-actions"></less-search>' +
          html.slice(closeGt + 1);
      }
    }

    // Add "Edit this page" footer before </less-layout>
    html = html.replace(
      '</less-layout>',
      `<div style="margin-top:3rem;padding-top:1.5rem;border-top:0.5px solid var(--less-border);font-size:0.8125rem;">
  <a href="${editUrl}" target="_blank" rel="noopener" style="color:var(--less-text-tertiary);text-decoration:none;">Edit this page on GitHub →</a>
</div>
</less-layout>`,
    );

    return html;
  },
};

export default renderer;
