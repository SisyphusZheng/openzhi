/**
 * @hvl/vite - SSR Handler
 * Coordinates Vite SSR loading + Lit rendering + Island collection.
 *
 * Key Phase 1 improvements:
 * - SsrContext injection: params/query/status flow through the render pipeline
 * - Precise Island collection: match against known Island map instead of
 *   regex-scraping all hyphenated tags from HTML (which would false-match
 *   non-Island custom elements like <my-header> from app/components/)
 * - Proper Lit SSR with Declarative Shadow DOM
 */

import type { ViteDevServer } from 'vite'
import type { RouteEntry, IslandMeta, SsrContext } from './types.js'
import { createSsrContext, extractParams, parseQuery } from './context.js'
import { fileToTagName } from './route-scanner.js'

/**
 * Collect islands from rendered HTML by matching against a known Island map.
 * This is precise — only tags we know are Islands get hydrated.
 * Non-Island custom elements (from app/components/) are left as pure SSR HTML.
 */
export function collectIslands(
  html: string,
  knownIslands: Map<string, string>
): IslandMeta[] {
  const islands: IslandMeta[] = []
  const seen = new Set<string>()

  for (const [tagName, modulePath] of knownIslands) {
    // Check if the tag appears in the rendered HTML (opening tag form)
    // Match `<tag-name` — covers both `<tag-name>` and `<tag-name attr="...">`
    const pattern = new RegExp(`<${tagName}[\\s>/]`, 'i')
    if (pattern.test(html) && !seen.has(tagName)) {
      seen.add(tagName)
      islands.push({ tagName, modulePath })
    }
  }

  return islands
}

/**
 * Render a page route to HTML string via Vite SSR + Lit.
 * Returns the rendered HTML and a list of collected islands.
 */
export async function renderPageToString(
  vite: ViteDevServer,
  route: RouteEntry,
  url: URL,
  routesDir: string,
  knownIslands?: Map<string, string>
): Promise<{ html: string; islands: IslandMeta[]; context: SsrContext }> {
  // Create the per-request SSR context
  const context = createSsrContext(route, url)

  // Load the route module via Vite SSR
  const module = await vite.ssrLoadModule(`/${routesDir}/${route.filePath}`)
  const PageComponent = module.default

  if (!PageComponent) {
    throw new Error(`[HVL] Route ${route.path} has no default export`)
  }

  // Call the loader function if exported
  if (typeof module.loader === 'function') {
    try {
      const loaderData = await module.loader(context)
      context.data = { ...context.data, ...loaderData }
    } catch (error) {
      console.error('[HVL] Loader error for route', route.path, error)
    }
  }

  // Render using @lit-labs/ssr
  const { render } = await import('@lit-labs/ssr')
  const { html } = await import('lit')

  // Determine tag name for the page component
  const tagName = module.__tagName || toKebabCase(PageComponent.name)

  // Build the page template — pass context data as properties
  const propsAttr = Object.keys(context.data).length > 0
    ? ' data-ssr="true"'
    : ''
  const templateResult = html`<${tagName}${propsAttr}></${tagName}>`

  // Render to string — @lit-labs/ssr outputs Declarative Shadow DOM
  let renderedBody = ''
  for await (const chunk of render(templateResult)) {
    renderedBody += chunk
  }

  // Collect islands — precise match against known map
  const islands = knownIslands
    ? collectIslands(renderedBody, knownIslands)
    : []

  context.islands = islands

  return { html: renderedBody, islands, context }
}

/**
 * Convert PascalCase to kebab-case.
 * e.g., 'MyCounter' → 'my-counter'
 */
function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}

/**
 * Wrap rendered body in a full HTML document.
 * Web Standards: plain HTML5 document, no framework runtime needed for Level 0.
 */
export function wrapInDocument(
  body: string,
  options: {
    title?: string
    lang?: string
    head?: string
    hydrateScript?: string
    meta?: Record<string, string>
  } = {}
): string {
  const {
    title = 'HVL App',
    lang = 'en',
    head = '',
    hydrateScript = '',
    meta = {},
  } = options

  const metaTags = Object.entries(meta)
    .map(([name, content]) => `  <meta name="${name}" content="${content}">`)
    .join('\n')

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
${metaTags}
  ${head}
</head>
<body>
${body}
${hydrateScript}
</body>
</html>`
}

/**
 * Render an error page for SSR failures.
 * Dev mode: shows detailed error with stack trace.
 * Production: shows generic error message.
 */
export function renderSSRError(
  error: Error,
  route: RouteEntry,
  isDev: boolean
): string {
  const message = isDev
    ? `
<div style="font-family: system-ui; padding: 2rem; color: #c00;">
  <h2>SSR Render Error</h2>
  <p><strong>Route:</strong> ${route.path}</p>
  <p><strong>File:</strong> ${route.filePath}</p>
  <p><strong>Error:</strong> ${escapeHtml(error.message)}</p>
  ${error.stack ? `<pre style="background: #f5f5f5; padding: 1rem; overflow: auto; font-size: 0.85rem;">${escapeHtml(error.stack)}</pre>` : ''}
</div>`
    : `<div style="padding: 2rem; text-align: center;">
  <h2>Something went wrong</h2>
  <p>We're working on fixing this. Please try again later.</p>
</div>`

  return wrapInDocument(message, {
    title: 'Error - HVL App',
  })
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
