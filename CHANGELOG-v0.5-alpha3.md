# v0.5.0-alpha.3 Changes

## @kissjs/core (0.5.0-alpha.3)
- **escapeHtml/escapeAttr unified** — removed duplicate implementations from `ssr-handler.ts`, all HTML escaping now uses `render-dsd.ts` exports (-20 lines)
- **build-client minify** — added `minify: 'esbuild'` to client island build (JS payload ~40% smaller)
- **@lit-labs/ssr-client removed** — no longer needed (naive interpolation replaces Lit SSR hydration)

## @kissjs/adapter-lit (0.1.0 → 0.1.1)
- **extractLitStyles error visibility** — wrapped in try/catch with `console.warn` output (was silently swallowing CSS extraction failures)
- **rendenLitSsrRenderer** — removed unnecessary `async` keyword (deno lint `require-await` fix)

## @kissjs/ui (0.4.1 → 0.4.2)
- **kiss-layout github-link** — added `aria-label="GitHub repository"` (previously hidden text broke accessibility tree)
- **kiss-layout header nav** — added `text-decoration: underline` on hover (previously relied on color alone)
- **CLS prevention** — `theme-init.js` removes `#kiss-anti-flash` cloak after setting theme

## CI/CD
- **publish.yml** — OIDC authentication (no token needed), publishes all 5 packages, `--allow-dirty` flag
- **deploy** — package.json `exports` field restored for npm `file:` resolution
