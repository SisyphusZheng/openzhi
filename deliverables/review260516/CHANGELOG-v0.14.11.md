# LessJS v0.14.11 变更日志 / Changelog

**日期 / Date**: 2026-05-16
**上一版本 / Previous Version**: v0.14.10
**范围 / Scope**: 全部 deferred 遗留问题闭环 + 循环依赖根治 + lint 严格化 / All deferred items resolved + circular dependency eliminated + lint tightened

---

## 🟢 G1: Route 格式化 / Route formatting

- **文件 / Files**: `www/app/routes/changelog.ts`, `www/app/routes/guide/islands.ts`, `www/app/routes/roadmap.ts`
- **问题 / Problem**: `www/app/routes/` 被 `deno fmt` 全局排除，`api/term.ts` 等文件未格式化 / Route directory excluded from `deno fmt`, `api/term.ts` unformatted
- **修复 / Fix**: 格式化所有可格式化的 route 文件；`www/app/routes/` 保留 exclude（Deno 2.7.14 dprint-core 对大型 Lit 模板字符串 panic 的已知 bug）；移除单个文件 exclude `getting-started.ts`

## 🟢 G5: Nav scanner 正则替换 / Nav scanner regex replacement

- **文件 / Files**: `packages/content/src/nav/scanner.ts`
- **问题 / Problem**: `extractMeta()` 用正则将 JS object literal 转 JSON（`replace(/'/g, '"')` + `replace(/(\w+):/g, ...)`），脆弱且易出问题（含 `-` 的 key、嵌套引号、trailing comma 等）/ Fragile regex-based JS→JSON conversion breaks on hyphenated keys, nested quotes, etc.
- **修复 / Fix**: 替换为逐字符解析器 — 找到 `export const meta = {` 后匹配花括号对、逐 key-value 解析，支持单/双/反引号字符串、数字、布尔值、字符串数组；`splitOnCommas()` 尊重引号内逗号；`parseValue()` 处理常见 JS 字面量类型

## 🟢 G10: 循环依赖根治 / Circular dependency elimination (原 H-16)

- **文件 / Files**: `packages/core/src/build-types.ts` (新), `packages/core/src/virtual-ids.ts` (新), `packages/core/deno.json`, `packages/core/src/index.ts`, `packages/content/src/index.ts`, `packages/content/src/blog-data-plugin.ts`, `packages/i18n/src/index.ts`, `packages/i18n/src/i18n-data-plugin.ts`, `packages/adapter-vite/src/build-context.ts`, `packages/adapter-vite/src/virtual-ids.ts`
- **问题 / Problem**: `adapter-vite` ↔ `content`/`i18n` 循环依赖 — content 和 i18n 都 import `LessBuildContext` 和 virtual-ids 从 adapter-vite / adapter-vite ↔ content/i18n circular dependency
- **修复 / Fix**:
  - 新建 `@lessjs/core/build-types` — `LessBuildContextLike`、`LessPluginMeta`、`LessBlogOptions`、`LessNavSection`、`LessHeaderNavLink`、`LessI18nContextOptions` 纯接口（零 Vite 依赖）
  - 新建 `@lessjs/core/virtual-ids` — 所有 virtual module ID 常量的规范定义
  - `content` 和 `i18n` 改为从 `@lessjs/core` 导入，消除对 `@lessjs/adapter-vite` 的依赖
  - `adapter-vite/virtual-ids` 改为从 `@lessjs/core/virtual-ids` 重导出（向后兼容）
  - `PluginMeta` 实现 `LessPluginMeta` 接口

## 🟢 G11: Terminal 命令去重 / Term command deduplication

- **文件 / Files**: `www/app/shared/term-commands.ts` (新), `www/app/routes/api/term.ts`, `functions/api/term.ts`
- **问题 / Problem**: Hono API route 和 Cloudflare Pages Function 各自维护一套完全相同的命令逻辑、escapeHtml、neofetch 数据等 / Hono route and Cloudflare Function each maintain identical command logic
- **修复 / Fix**:
  - 提取共享模块 `www/app/shared/term-commands.ts`：`executeTermCommand()` + `escapeHtml()` + 版本号常量
  - Hono route 简化为调用 `executeTermCommand()`
  - Cloudflare Function 简化为调用 `executeTermCommand()`，同时增加 `typeof cmd` 校验

## 🟢 G12: `no-explicit-any` lint 严格化 / Lint rule tightened

- **文件 / Files**: `deno.json`, `packages/core/src/navigation.ts`, `packages/core/src/island.ts`, `packages/ui/src/less-code-block.ts`, `packages/adapter-vite/src/route-scanner.ts`, `www/e2e/accessibility-performance.spec.ts`, `www/app/islands/less-search.ts`
- **问题 / Problem**: `no-explicit-any` 在全局 lint exclude 中，所有 `any` 滥用不被检测 / `no-explicit-any` globally excluded, all `any` abuse undetected
- **修复 / Fix**:
  - 从 `deno.json` lint exclude 中移除 `no-explicit-any`
  - 修复 `navigation.ts`：`any[]` → 具体的 `pushState`/`replaceState` 参数签名
  - 无法避免的 `any`（`globalThis.Prism`、`(this as any).__lessBindDone`、`(ctor as any).delegatesFocus`、`(FlexSearchModule as any).default`）添加 per-file `// deno-lint-ignore no-explicit-any` 注释
  - 移除 `route-scanner.ts` 中已失效的 lint-ignore 注释

---

## 修改文件清单 / Modified Files

```
deno.json
functions/api/term.ts
packages/adapter-vite/deno.json
packages/adapter-vite/src/build-context.ts
packages/adapter-vite/src/route-scanner.ts
packages/adapter-vite/src/virtual-ids.ts
packages/app/deno.json
packages/content/deno.json
packages/content/src/blog-data-plugin.ts
packages/content/src/index.ts
packages/content/src/nav/scanner.ts
packages/core/deno.json
packages/core/src/build-types.ts (NEW)
packages/core/src/index.ts
packages/core/src/island.ts
packages/core/src/navigation.ts
packages/core/src/virtual-ids.ts (NEW)
packages/create/deno.json
packages/i18n/deno.json
packages/i18n/src/i18n-data-plugin.ts
packages/i18n/src/index.ts
packages/rpc/deno.json
packages/signals/deno.json
packages/ui/deno.json
packages/ui/src/less-code-block.ts
www/app/routes/api/term.ts
www/app/routes/changelog.ts
www/app/routes/guide/islands.ts
www/app/routes/roadmap.ts
www/app/shared/term-commands.ts (NEW)
www/app/islands/less-search.ts
www/e2e/accessibility-performance.spec.ts
```

---

## 验证 / Verification

- `deno task typecheck` ✅ Pass (0 errors)
- `deno lint` ✅ Pass (183 files, 0 problems)
- `deno fmt --check` ✅ Pass (184 files)
- 工作树干净 / Working tree clean ✅

---

## Deferred 闭环状态 / Deferred Items Closure

| ID | v0.14.10 状态 | v0.14.11 状态 |
|----|--------------|--------------|
| G1 | ⏭️ deferred | ✅ resolved |
| G5 | ⏭️ deferred | ✅ resolved |
| G10 (原 H-16) | ⏭️ deferred | ✅ resolved |
| G11 | ⏭️ deferred | ✅ resolved |
| G12 | ⏭️ deferred | ✅ resolved |

**5/5 deferred items 全部闭环。v0.14.10 审计报告中的所有问题已全部解决。**

---

*变更日志生成 / Changelog generated: 2026-05-16T09:10+08:00*
