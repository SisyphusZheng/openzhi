# Registry Hub v0.19 Audit Gaps

**Problem**: v0.19.0 is documented as a Registry Hub + submission pipeline, but
the current implementation is still a prototype and does not yet satisfy the
SOP exit criteria.

**Date**: 2026-05-17

**Status**: Open

## Summary

The direction is sound: a static Hub backed by validation artifacts and GitHub
PR submissions fits the LessJS rule of deterministic evidence over runtime
magic. The current source tree, however, is not ready to be called a complete
v0.19.0 release.

Treat the current state as:

- Hub SDK skeleton: present.
- Demo index and registry UI: present.
- Evidence-backed submission pipeline: incomplete.
- CI trust gate: incomplete.
- Static package detail pages: incomplete.
- Release/publish integration: incomplete.

Do not mark v0.19.0 as Done until the open blockers below are resolved and the
verification checklist passes.

## Open Blockers

### 1. `less hub submit` cannot reach PR mode

Files:

- `packages/hub/src/cli/hub-submit.ts`
- `packages/hub/src/submitter.ts`

Evidence:

- `parseArgs()` initializes `dryRun: true`.
- There is `--dry-run`, but no positive flag such as `--pr`, `--submit`, or
  `--no-dry-run` to set `dryRun` to false.
- `runSubmission()` only calls `createGithubPr()` when `options.dryRun` is
  false, so normal CLI usage cannot create a PR.

Required fix:

- Add an explicit PR mode flag and make the UX unambiguous.
- Add CLI tests for dry-run, bundle-only, and PR-mode option parsing.
- Keep dry-run safe by default if desired, but make PR mode reachable.

Acceptance check:

```bash
deno run --allow-read --allow-write --allow-env --allow-run packages/hub/src/cli/hub-submit.ts --help
deno run --allow-read --allow-write --allow-env --allow-run packages/hub/src/cli/hub-submit.ts --dir <fixture> --dry-run --json
deno test packages/hub/__tests__/ --allow-read --allow-write --allow-env --allow-run
```

### 2. Submission CLI does not use real validation/build artifacts

Files:

- `packages/hub/src/cli/hub-submit.ts`
- `packages/core/src/validate-manifest.ts`
- `packages/core/src/cli/validate-manifest.ts`
- `packages/core/src/less-add.ts`

Evidence:

- The CLI manually parses CEM JSON and creates a simplified validation report.
- It does not call the real manifest validation pipeline.
- It does not generate or ingest `dsd-report.json`.
- It does not generate bundle reports or snapshot artifacts.
- It defaults CEM-only packages to client-only without using the current
  compatibility classifier output.

Required fix:

- Route manifest validation through the real `@lessjs/core` validation API.
- Preserve validation errors, warnings, compatibility tiers, and skip reasons.
- Only run build/snapshot generation for admitted SSR or explicit
  experimental-dom cases.
- Ensure `installGuidance` matches `less validate-manifest` and `less add`
  behavior.

Acceptance check:

```bash
deno run --allow-read packages/core/src/cli/validate-manifest.ts <fixture-cem> --json
deno run --allow-read --allow-write --allow-env --allow-run packages/hub/src/cli/hub-submit.ts --dir <fixture> --dry-run --json
```

The Hub submission JSON must embed or reference the same validation facts as
the core CLI output.

### 3. Manifest integrity is not implemented

Files:

- `packages/hub/src/schema.ts`
- `packages/hub/src/builder.ts`
- `packages/hub/src/cli/hub-submit.ts`
- `hub-index/packages/*.json`

Evidence:

- `HubPackageRecord.manifestHash` is documented as sha256.
- `buildPackageRecord()` currently sets `manifestHash: ''`.
- Generated records in `hub-index/packages/` also have an empty hash.

Required fix:

- Add `manifestHash` and `manifestPath` to `BuildPackageRecordOptions`.
- Compute sha256 from the exact submitted CEM content.
- Reject missing hash when `manifestPath` or CEM content exists.
- Add schema tests for empty or malformed hash.

Acceptance check:

```bash
deno test packages/hub/__tests__/schema.test.ts packages/hub/__tests__/builder.test.ts
```

### 4. Hub CI is too shallow to be a trust gate

File:

- `.github/workflows/hub-ci.yml`

Evidence:

- CI uses ad hoc `jq` checks instead of the package validator.
- Duplicate-tag check reads `.packages[].records[].tags[]`, but current
  `hub-index/index.json` has `.packages[].tags[]`.
- Missing snapshot artifacts only produce warnings.
- `grep -q "$TIER"` can accept substring matches instead of exact tier values.
- CI does not verify artifact hashes or regenerate `hub-index/index.json`.

Required fix:

- Add a Deno-based validator command in `packages/hub` for records and index.
- Make duplicate tag conflicts a hard failure unless explicitly allowed.
- Make missing referenced artifacts a hard failure.
- Verify `manifestHash` and snapshot size limits.
- Regenerate and diff-check `hub-index/index.json` in CI.

Acceptance check:

```bash
deno task hub:validate
deno task hub:check-index
```

If these tasks do not exist yet, create them before claiming Hub CI coverage.

### 5. Registry package detail pages are not statically generated

Files:

- `www/app/routes/registry/[package].ts`
- `www/app/routes/registry/index.ts`
- `packages/adapter-vite/src/cli/ssg-render.ts`

Evidence:

- The registry list links to `/registry/<scope>/<name>`.
- The route scanner maps `[package].ts` to `/registry/:package`, a single path
  segment.
- Scoped names such as `@shoelace-style/shoelace` contain a slash and do not
  fit that single-segment route shape.
- `deno task build` reports: `Dynamic route /registry/:package has no static
  paths - skipping`.
- `www/dist/registry/` contains only `index.html`, not package detail pages.

Required fix:

- Decide the URL contract:
  - encode package names as one segment, for example
    `/registry/%40shoelace-style%2Fshoelace`, or
  - add a catch-all route convention if the framework supports it, or
  - use `/registry/:scope/:package` style routes for scoped packages.
- Add `getStaticPaths()` for registry records.
- Ensure SSG emits detail pages for all records in `hub-index`.
- Add e2e coverage for at least `/registry`, one unscoped detail page, and one
  scoped detail page.

Acceptance check:

```bash
deno task build
Get-ChildItem www/dist/registry -Recurse
deno task test:e2e
```

### 6. Registry UI references a missing island

File:

- `www/app/routes/registry/_renderer.ts`

Evidence:

- `_renderer.ts` injects `<less-registry-search>`.
- No `www/app/islands/registry-search.ts` exists.
- The registry page currently implements search inside the page component, so
  the injected element is either stale design residue or an unimplemented
  island.

Required fix:

- Remove the renderer injection if page-local search is the chosen design, or
  implement and register the island if header search is required.
- Add an e2e assertion that the registry page has no custom-element console
  errors and that search works after hydration.

### 7. Root validation and publish flows do not include Hub

Files:

- `deno.json`
- `.github/workflows/test.yml`
- `.github/workflows/publish.yml`
- `packages/hub/deno.json`

Evidence:

- Root `typecheck` does not include `packages/hub`.
- The GitHub test matrix has no hub job.
- Root `publish` and `publish:dry-run` do not publish `@lessjs/hub`.
- `.github/workflows/publish.yml` does not publish `@lessjs/hub`.
- `packages/hub/deno.json` includes `README.md` and `LICENSE`, but those files
  are currently missing in `packages/hub/`.

Required fix:

- Add Hub entrypoints to root `typecheck`.
- Add `publish:hub`, `publish:hub --dry-run`, and GitHub publish ordering.
- Add a dedicated test job or ensure root CI runs hub tests.
- Add package README/LICENSE or adjust publish include.

Acceptance check:

```bash
deno task typecheck
deno task lint
deno task fmt:check
deno task test
deno task build
deno task publish:dry-run
```

### 8. Lint and format gates currently fail

Evidence from 2026-05-17 local audit:

- `deno task lint` failed with 8 issues, including:
  - `packages/hub/src/scanner.ts`: async function without await.
  - `packages/hub/src/scanner.ts`: unused `nodeModulesRoot`.
  - `packages/hub/src/submitter.ts`: `let` should be `const`.
  - `packages/hub/__tests__/indexer.test.ts`: unused import.
  - `packages/hub/__tests__/submitter.test.ts`: unused import/type.
  - `packages/hub/src/cli/hub-submit.ts`: unused import.
  - `www/app/routes/registry/[package].ts`: direct `window` usage trips Deno
    `no-window`.
- `deno task fmt:check` failed for:
  - `hub-index/index.json` missing final newline.
  - `packages/hub/src/scanner.ts` formatting.

Required fix:

- Make lint/fmt green before any release status update.
- Consider adding `packages/hub` to any focused CI command so this cannot
  regress unnoticed.

## Current Passing Checks

These passed during the 2026-05-17 audit:

```bash
deno audit
deno task typecheck
deno check packages/hub/mod.ts packages/hub/src/cli/hub-submit.ts packages/hub/src/scanner.ts packages/hub/scan.ts
deno test packages/hub/__tests__/ --allow-read --allow-write --allow-env --allow-net
deno task test
deno task build
deno task test:e2e
```

Important caveat: `deno task typecheck` passed because the root task did not
include Hub entrypoints. The explicit Hub `deno check` above was run separately.

## Verification Before Closing This Report

Do not close this report until:

- `deno task fmt:check` passes.
- `deno task lint` passes.
- Root `typecheck` includes Hub.
- Hub tests include CLI mode coverage and CI/index validators.
- Registry detail pages are emitted to `www/dist/registry/**/index.html`.
- Hub CI rejects malformed records, missing artifacts, duplicate tags, and bad
  hashes.
- STATUS no longer claims completed capabilities before those gates pass.

## Key Lesson

The Hub must remain an evidence viewer, not a marketing page. Every public Hub
claim should trace to one of:

- a real core validation report,
- a real DSD/build report,
- a real artifact hash,
- a real static route,
- or a CI check that can fail.

If a field is hand-written, inferred from a hard-coded package list, or only
shown in the UI without a validator behind it, it is not yet release evidence.
