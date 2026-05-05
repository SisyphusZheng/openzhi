# v0.5.5 — KISS → LessJS Full Rebrand Complete + Sidebar Fix

## Overview

v0.5.5 completes the full brand rename from KISS to LessJS across 105 files. Fixes the mobile sidebar opening issue on all pages (including homepage), the PWA manifest favicon 404, and the dnt build error. All package versions updated.

---

## Key Changes

### 🏷️ Brand Rename Completed (KISS → LessJS)

| Scope | Change |
|-------|--------|
| Package names | `@kissjs/*` → `@lessjs/*` |
| Main function | `kiss()` → `less()` |
| Class names | `KissButton` → `LessButton`, `KissLayout` → `LessLayout`, etc. |
| Temp directory | `.kiss/` → `.less/` |
| Domain | `kiss.js.org` → `lessjs.com` |
| Documentation | Full README.en.md rewrite, CSS vars `--kiss-*` → `--less-*` (69), routes `/kiss-compiler` → `/less-compiler` |
| Global vars | `__kissLit*` → `__lessLit*`, `__kissSsrDefinePatched` → `__lessSsrDefinePatched` |
| CSS classes | `.kiss-row` → `.less-row` (K.I.S.S. acronym in examples page) |

### 🐛 Bug Fixes

| # | Issue | Fix |
|---|-------|-----|
| A6 | Mobile sidebar won't open (homepage + other pages) | `display:none` prevents transform from working; replaced with `width:0 + overflow:hidden` to keep box model alive |
| | Homepage hamburger shows backdrop only, no sidebar | Always render sidebar DOM, collapse on desktop, restore on mobile via `:host([menu-open])` CSS |
| | PWA manifest favicon 404 | `src: /favicon.svg` → `/assets/less-logo.svg`; added `docs/public/favicon.svg` |
| | dnt npm build failure | `packages/rpc/_build_npm.ts` LICENSE path `../LICENSE` → `../../LICENSE` |
| | CI format/lint failures | deno fmt fixed 5 files, lint cleaned unused imports, publish exclusion added `!dist` to un-exclude from gitignore |

### ✅ Tests

- **325 tests — all passing**
- adapter-lit added escape consistency tests
- `deno publish --dry-run` clean for all 5 packages

---

## Version Bumps

| Package | Old | New |
|---------|-----|-----|
| `@lessjs/core` | 0.5.4 | **0.5.5** |
| `@lessjs/ui` | 0.5.4 | **0.5.5** |
| `@lessjs/rpc` | 0.3.0 | **0.3.1** |
| `@lessjs/adapter-lit` | 0.2.0 | **0.2.1** |
| `@lessjs/create` | 0.4.5 | **0.4.6** |

---

## File Change Stats

- **~110 files changed** (cumulative for all Pre-0.6 tasks)
- **~1,400 insertions, ~1,000 deletions**
- 4 file renames, 2 new files

---

## Backward Compatibility

- `@kissjs/*` continues to work via npm redirects
- `kiss()` preserved as alias for `less()` (deprecated)
- `.kiss/` temp directory remains in .gitignore alongside `.less/`

---

## Upcoming

- **v0.6**: DSD + Island Communication (L2 Nested DSD, safe/unsafe HTML, slot/projection, Error visibility)
- **v0.7**: Serverless Fullstack
