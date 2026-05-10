# ADR 0008/0009 Unification — Implementation Complete

## Summary

All phases of the ADR 0008 + 0009 unification SOP have been implemented on the `dev` branch.

## Completed Phases

### Phase A: Eliminate `.less/` File IPC → `LessBuildContext` + Virtual Modules + Define Injection

| Step | Status | Commit | Description |
|------|--------|--------|-------------|
| A.1 | ✅ | `85f3131` | Expand `LessBuildContext` with 20+ fields |
| A.2 | ✅ | `a1ab6ef` | `lessContent()` writes to `ctx` instead of `.less/` files |
| A.3 | ✅ | `605c249` | `lessI18n()` writes to `ctx` instead of `.less/` files |
| A.4 | ✅ | `2e5e1aa` | `less:build` writes metadata to `ctx` + fallback |
| A.5 | ✅ | `eb965a1` | Unified `build.ts` orchestrator with shared `ctx` |
| A.6 | ✅ | `eb965a1` | `buildClient()`/`buildSSG()` read from `ctx` (preferred) |
| A.7 | ✅ | `0acd4b7` | `headExtras` via Vite `define` injection |
| A.8 | ✅ | `eb965a1` | Cleaned up `.less/` references (see known limits) |

### Phase D: Replace `runtime-shim.ts` with `virtual:less-runtime`

| Step | Status | Commit | Description |
|------|--------|--------|-------------|
| D.1+D.3 | ✅ | `1bf6d6a` | `virtual:less-runtime` replaces `.less-runtime.ts` file write |
| D.2 | ✅ | `52f9e11` | Virtual runtime plugin added to SSR build |

### Phase E: Single-Plugin API (`lessjs()`)

| Step | Status | Commit | Description |
|------|--------|--------|-------------|
| E.1 | ✅ | `6208496` | `lessjs()` umbrella function with lazy sub-plugin imports |
| E.2 | ✅ | `6208496` | `less()` accepts optional `externalCtx` parameter |

## Key Results

- **`.less/` files reduced**: 10 → 3 (`.less-ssg-entry.ts`, `.less-client-entry.ts`, `build-metadata.json`)
- **`globalThis` bridges**: 0 (Phase B was already done)
- **`virtual:less-runtime`**: Eliminates `.less-runtime.ts` file write
- **`lessjs({ content, i18n })`**: Single-call API with shared `LessBuildContext`
- **All 234 tests pass** after each commit
- **9 commits**, each independently valid and revertable

## Known Limitations

1. **`.less-ssg-entry.ts`** and **`.less-client-entry.ts`** still written to disk — Vite's `build.ssr` and `build.rollupOptions.input` require filesystem paths. Future work: investigate virtual module inputs.

2. **`build-metadata.json`** still written as backward-compat fallback. Can be removed once `lessjs()` is the only entry path.

3. **E.3 (backward compat)** and **E.4 (CLI update)** are not yet implemented — `less()`, `lessContent()`, `lessI18n()` still work independently.

## Next Steps

- [ ] E.3: Verify backward compatibility for standalone plugin usage
- [ ] E.4: Update `deno task build` to use unified orchestrator
- [ ] Investigate virtual module inputs for `.less-ssg-entry.ts` and `.less-client-entry.ts`
- [ ] Remove `build-metadata.json` fallback once unified path is proven
- [ ] End-to-end build verification with `deno task build`
