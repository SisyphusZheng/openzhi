# LessJS v0.5.4 — Full Rebrand & npm Publish Pipeline

**Released:** May 5, 2026 | **Commit:** `7ec7204` | **25 commits** since v0.5.3

> The LessJS name is now real. Every component tag, CSS variable, Vite plugin name, build log, and npm package has been migrated from `kiss-*` to `less-*`. The framework also gained its first working npm publish pipeline.

---

## 🔄 Full Brand Migration: KISS → LessJS

### Component System Rename
All UI component tags migrated `kiss-*` → `less-*`:

| Old | New |
|------|------|
| `<kiss-layout>` | `<less-layout>` |
| `<kiss-button>` | `<less-button>` |
| `<kiss-card>` | `<less-card>` |
| `<kiss-input>` | `<less-input>` |
| `<kiss-code-block>` | `<less-code-block>` |
| `<kiss-theme-toggle>` | `<less-theme-toggle>` |
| `<kiss-hero-ping>` | `<less-hero-ping>` |
| `<kiss-ui-plugin>` | `<less-ui-plugin>` |

Source files renamed accordingly: `kiss-button.ts` → `less-button.ts` (8 source files).

### CSS Design Tokens
All `--kiss-*` CSS custom properties → `--less-*` (60+ variables covering colors, spacing, typography, shadows, radii, animations).

### Events & Attributes

| Old | New |
|----|----|
| `kiss:ready` | `less:ready` |
| `kiss:build` | `less:build` |
| `data-kiss` | `data-less` |
| `#kiss-anti-flash` | `#less-anti-flash` |
| `localStorage('kiss-theme')` | `localStorage('less-theme')` |

### Vite Plugin Names

```
kiss:core             →  less:core
kiss:virtual-entry    →  less:virtual-entry
kiss:island-transform →  less:island-transform
less:build            →  less:build
```

### Internal Renames
- Template variable `kissUiAliases` → `lessUiAliases`
- Default document title `KISS App` → `LessJS`
- Build log prefix `[KISS]` → `[LessJS]`
- PWA fallback name `KISS App` → `LessJS App`
- Default title in `ssr-handler` / `render-dsd` / `runtime-shim` → `LessJS`

### Package Scope Migration
All packages moved from `@kissjs/*` to `@lessjs/*`:

| Old directory | New directory | JSR package |
|------|------|------|
| `packages/kiss-core` | `packages/core` | `@lessjs/core` |
| `packages/kiss-ui` | `packages/ui` | `@lessjs/ui` |
| `packages/kiss-rpc` | `packages/rpc` | `@lessjs/rpc` |
| `packages/kiss-adapter-lit` | `packages/adapter-lit` | `@lessjs/adapter-lit` |
| `packages/create-kiss` | `packages/create` | `@lessjs/create` |

---

## 🎨 Visual Assets

### Logo System
Four logo variants based on the `<` (less-than) symbol:

| File | Use |
|------|------|
| `less-logo.svg` | Symbol only — GitHub/npm avatar |
| `less-logo-inverted.svg` | Black background, white symbol |
| `less-logo-horizontal.svg` | Horizontal lockup with "Less" wordmark + "less is more" tagline |
| `less-favicon.svg` | 32×32 browser tab icon with dark mode support |

### Homepage Hero
- Inline `<` symbol logo + large "Less" wordmark
- Dark background + white symbol for visual impact

### Tagline
- **"Less is More"** in meta description and PWA name

---

## 🚀 npm Publish Pipeline

### dnt Build Scripts
All 4 Deno-native packages now have `_build_npm.ts` scripts that convert Deno source to npm-compatible packages via `@deno/dnt`:

| Package | Shims | Dependencies |
|---|---|---|
| `@lessjs/rpc` | none | Zero-dep |
| `@lessjs/adapter-lit` | none | Zero-dep |
| `@lessjs/core` | deno + node | hono, vite, parse5, entities |
| `@lessjs/ui` | Vite-built | lit (peer dep) |

### CI Dual Publish
- **JSR**: `deno publish` (automatic on tag push)
- **npm**: `dnt` transform → `npm publish` (automatic, requires `NPM_TOKEN` secret)
- **Manual trigger**: `publish-manual.yml` supports `workflow_dispatch`

### Build Fixes
- **dnt workspace resolution**: Running `deno run -A packages/rpc/_build_npm.ts` from repo root caused dnt to resolve `./src/index.ts` against the workspace root `deno.json`. Fixed by running inside each package directory: `(cd packages/rpc && deno run -A --config deno.json _build_npm.ts)`.
- **dnt typeCheck failures**: `__tests__/` files use `Deno.test` and `@std/assert` (modern Set methods) which aren't valid in Node TypeScript. Fixed by setting `typeCheck: false` + `skipLibCheck: true` on all dnt build configs.
- **ui exports map**: npm exports still listed `kiss-*` filenames but dist/ contained `less-*` files. Fixed to match actual output.

---

## 🔧 CI Fixes

- Vite alias resolution: `file://` URLs misinterpreted by Rolldown as relative paths → use plain absolute filesystem paths for `resolve.alias`, keep `file://` only for `packageIslands` (Deno `import()` needs it)
- `kiss-runtime.ts` → `less-runtime.ts`: file wasn't renamed during brand migration but all imports referenced `@lessjs/core/less-runtime`
- Deploy target: `kiss.js.org` → `lessjs.com`
- `.workbuddy/` removed from git tracking, added to `.gitignore`

---

## 📝 Documentation

- Full docs site rebrand: every page, nav item, footer link updated from KISS → LessJS
- Guide section titles now in Chinese
- README restructured: Chinese-primary, English secondary
- Dead `@kissjs/*` references replaced with `@lessjs/*`
- Legacy path references fixed (`packages/vite/` → `packages/core/`, `packages/kiss-core/` → `packages/core/`)

---

## 📊 Stats

| Metric | Value |
|---|---|
| Commits since v0.5.3 | 25 |
| Files changed | 161 |
| Lines added | +2,760 |
| Lines removed | -3,032 |
| Tests | 310/310 passing |

---

## ⚠️ Breaking Changes

**Component tag names changed.** If you used `<kiss-layout>`, `<kiss-button>`, etc., you must update to `<less-layout>`, `<less-button>`, etc. CSS variable names also changed from `--kiss-*` to `--less-*`.

The `@kissjs/*` JSR packages are no longer updated. Use `@lessjs/*` going forward.

---

## What's Next

v0.6 will focus on **DSD Renderer 2**: safe/unsafe HTML contracts, nested DSD support, slot/projection behavior, and error observability.
