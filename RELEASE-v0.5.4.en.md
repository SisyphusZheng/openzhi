# v0.5.4 — KISS → LessJS Full Rebrand + Pre-0.6 Fixes

## Overview

v0.5.4 is a comprehensive brand rename and code cleanup release. The framework has been officially renamed from **KISS** to **LessJS**, spanning 90+ files and 1,000+ lines of code. This release also fixes the critical mobile sidebar bug and strengthens test coverage.

---

## Key Changes

### 🏷️ Brand Rename: KISS → LessJS

| Scope | Change |
|-------|--------|
| Package names | `@kissjs/*` → `@lessjs/*` (updated on JSR/npm) |
| Main function | `kiss()` → `less()` |
| Class names | `KissButton` → `LessButton`, `KissLayout` → `LessLayout`, etc. |
| Temp directory | `.kiss/` build temp → `.less/` |
| Domain | `kiss.js.org` → `lessjs.com` |
| Documentation | Full README.en.md rewrite, all doc pages rebranded |
| CSS variables | `--kiss-*` → `--less-*` (69 occurrences) |
| UI components | `kissUI()` → `lessUI()`, all TagName exports updated |
| Route paths | `/kiss-compiler` → `/less-compiler`, `/kiss-ui` → `/less-ui` |
| Internal vars | `kissColorTokens` → `lessColorTokens`, etc. |
| Event names | Custom events `kiss-*` → `less-*` |
| CI | `deploy-api.yml` KISS references updated |
| ADR | All 4 decision documents rebranded |

### 🐛 Bug Fixes

| # | Issue | Fix |
|---|-------|-----|
| A6 | Mobile sidebar shows backdrop but no sidebar on hamburger click | CSS `:has()` cannot penetrate Shadow DOM. Replaced with `:host([menu-open])` + `firstUpdated()` listener + universal JS manager |
| A2 | Ghost `PlannedIslandStrategy` type declaration | Added `@deprecated` annotation |

### ✅ Test Improvements

| # | Change |
|---|--------|
| A7 | Added adapter-lit tests for: CSS extraction, nested templates, event/property stripping, nothing sentinel, array values, escape consistency |
| | Total: **322 tests — all passing** |

---

## File Change Statistics

- **105 files changed**
- **1,171 insertions, 905 deletions**
- 4 file renames (kiss-compiler → less-compiler ×2, kiss-ui → less-ui, ADR)
- 2 new files: `mobile-menu.js`, `escape-consistency.test.ts`

---

## Backward Compatibility

- `@kissjs/*` package names continue to work via npm redirects, but all new projects should use `@lessjs/*`
- `kiss()` is preserved as an alias for `less()` but marked as deprecated
- `.kiss/` temp directory remains in .gitignore alongside the new `.less/`
- Old routes `/kiss-compiler` and `/kiss-ui` are no longer served; redirects to new paths

---

## Upcoming

- **v0.6**: DSD + Island Communication (L2 Nested DSD, safe/unsafe HTML, slot/projection, Error visibility)
- **v0.7**: Serverless Fullstack
- **v0.8**: SSG + ISR + PWA + Streaming DSD
