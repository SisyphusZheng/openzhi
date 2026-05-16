# SOP: Version Release

## Pre-flight

1. Read `docs/status/STATUS.md` — confirm current version and branch state
2. Ensure `origin/dev` and `origin/main` are in expected state
3. Run full check: `deno task typecheck && deno lint packages/ && deno fmt --check packages/`

## Version Bump

1. Update `packages/*/deno.json` `version` fields to new version
2. Update `docs/status/STATUS.md` current version
3. Update `docs/changelog/` with new changelog file

## Commit & Push

1. `git add -A && git commit -m "release: vX.Y.Z — ..."`
2. `git push origin dev`
3. Wait for CI to pass on dev

## Sync to Main

1. Force push dev to main: `git push origin origin/dev:refs/heads/main --force`
2. Tag: `git tag vX.Y.Z && git push origin vX.Y.Z`
3. Update `docs/status/STATUS.md` branch status and tags

## Post-release

1. Verify JSR publish succeeds in CI
2. Verify npm publish succeeds (if applicable)
3. Update `docs/status/STATUS.md` known issues if any

## Rules

- NEVER push directly to main unless explicitly ordered
- ALWAYS bump version in all 10 packages simultaneously
- ALWAYS update `docs/status/STATUS.md` after any branch operation
