# LessJS v0.5.4 — 品牌重塑与 npm 发布管线

**发布日期：** 2026-05-05 | **提交：** `7ec7204` | v0.5.3 以来 25 次提交

> **Less is More.**
> 从组件标签、CSS 变量、Vite 插件名、构建日志到 npm 包名，KISS 正式成为过去式。框架也获得了第一个可用的 npm 发布管线。

---

## 🔄 品牌迁移：KISS → LessJS

### 组件系统重命名
所有 UI 组件标签完成 `kiss-*` → `less-*` 迁移：

| 旧名 | 新名 |
|------|------|
| `<kiss-layout>` | `<less-layout>` |
| `<kiss-button>` | `<less-button>` |
| `<kiss-card>` | `<less-card>` |
| `<kiss-input>` | `<less-input>` |
| `<kiss-code-block>` | `<less-code-block>` |
| `<kiss-theme-toggle>` | `<less-theme-toggle>` |
| `<kiss-hero-ping>` | `<less-hero-ping>` |
| `<kiss-ui-plugin>` | `<less-ui-plugin>` |

源文件同步重命名：`kiss-button.ts` → `less-button.ts`（共 8 个源文件）。

### CSS 设计令牌
所有 `--kiss-*` CSS 自定义属性 → `--less-*`（颜色、间距、字体、阴影、圆角、动画等 60+ 个变量）。

### 事件与属性
| 旧 | 新 |
|----|----|
| `kiss:ready` | `less:ready` |
| `kiss:build` | `less:build` |
| `data-kiss` | `data-less` |
| `#kiss-anti-flash` | `#less-anti-flash` |
| `localStorage('kiss-theme')` | `localStorage('less-theme')` |

### Vite 插件名统一
```
kiss:core             →  less:core
kiss:virtual-entry    →  less:virtual-entry
kiss:island-transform →  less:island-transform
less:build            →  less:build
```

### 框架内在细节
- 模板变量 `kissUiAliases` → `lessUiAliases`
- 默认文档标题 `KISS App` → `LessJS`
- 构建日志 `KISS Architecture` → `LessJS Architecture`
- 构建前缀 `[KISS]` → `[LessJS]`
- PWA fallback name `KISS App` → `LessJS App`
- `ssr-handler` / `render-dsd` / `runtime-shim` 默认标题统一为 `LessJS`

### 包作用域迁移
所有包从 `@kissjs/*` 迁移到 `@lessjs/*`，目录也同步重命名：

| 旧目录 | 新目录 | JSR 包 |
|------|------|------|
| `packages/kiss-core` | `packages/core` | `@lessjs/core` |
| `packages/kiss-ui` | `packages/ui` | `@lessjs/ui` |
| `packages/kiss-rpc` | `packages/rpc` | `@lessjs/rpc` |
| `packages/kiss-adapter-lit` | `packages/adapter-lit` | `@lessjs/adapter-lit` |
| `packages/create-kiss` | `packages/create` | `@lessjs/create` |

---

## 🎨 视觉资产

### Logo 系统
4 种 Logo 变体，基于 `<`（小于号）符号设计：

| 文件 | 用途 |
|------|------|
| `less-logo.svg` | 透明底符号 — GitHub/npm 头像 |
| `less-logo-inverted.svg` | 黑底白标 — 暗色环境 |
| `less-logo-horizontal.svg` | 横排含 "Less" 字标 + "less is more" 标语 |
| `less-favicon.svg` | 32×32 浏览器标签页图标（支持暗色模式） |

### 首页 Hero 区
- 内嵌 `<` 符号 Logo + 「Less」大字横向排列
- 暗色背景 + 白色符号，视觉冲击更强

### 标语
- **「Less is More」** 写入 meta description 和 PWA name

---

## 🚀 npm 发布管线

### dnt 构建脚本
4 个 Deno 原生包新增 `_build_npm.ts` 脚本，通过 `@deno/dnt` 将 Deno 源码转为 npm 兼容包：

| 包 | Shims | 依赖 |
|---|---|---|
| `@lessjs/rpc` | 无 | 零依赖 |
| `@lessjs/adapter-lit` | 无 | 零依赖 |
| `@lessjs/core` | deno + node | hono, vite, parse5, entities |
| `@lessjs/ui` | Vite 构建 | lit (peer dep) |

### CI 双发
- **JSR**: `deno publish`（tag push 自动触发）
- **npm**: dnt 转换 → `npm publish`（自动触发，需 `NPM_TOKEN` 密钥）
- **手动触发**: `publish-manual.yml` 支持 `workflow_dispatch`

### 构建修复
- **dnt 工作区路径解析**：从仓库根运行 `deno run -A packages/rpc/_build_npm.ts` 导致 dnt 将 `./src/index.ts` 解析到仓库根而非包目录。修复为在包目录内运行：`(cd packages/rpc && deno run -A --config deno.json _build_npm.ts)`
- **dnt 类型检查失败**：`__tests__/` 测试文件使用 `Deno.test` 和 `@std/assert`（现代 Set 方法），在 Node TS 中不合法。所有 dnt 构建配置加 `typeCheck: false` + `skipLibCheck: true`
- **ui 导出映射**：npm exports 仍列 `kiss-*` 文件名但 dist/ 中已是 `less-*`。已修复匹配实际输出
- **kiss-runtime.ts 重命名**：文件未随品牌迁移重命名，但所有导入已指向 `@lessjs/core/less-runtime`。已重命名为 `less-runtime.ts`

---

## 🔧 CI 修复

- **Vite alias 路径格式**：Rolldown 将 `file://` URL 误解为相对路径导致 `UNLOADABLE_DEPENDENCY`。Vite `resolve.alias` 改用纯绝对路径，仅 `packageIslands`（Deno `import()`）保留 `file://` 协议
- **部署目标**：`kiss.js.org` → `lessjs.com`
- `.workbuddy/` 移除 git 跟踪 + `.gitignore` 新增
- publish CI 使用 `--config deno.json` 避免工作区根目录配置冲突
- 所有 `_build_npm.ts` 的 `jsr:@deno/dnt` 导入补全版本号

---

## 📝 文档与说明

### 文档站全面更新
- 全站 KISS → LessJS 品牌升级（首页、导航、页脚、指南、博客、更新日志）
- Guide 标题中文化
- README 中文优先
- 废弃的 `@kissjs/*` 文档引用替换为 `@lessjs/*`

### 遗留路径修复
- `packages/core/__tests__/route-scanner.test.ts` — `packages/vite/` → `packages/core/`
- `packages/core/__tests__/ssg-integration.test.ts` — `packages/kiss-core/` → `packages/core/`
- `docs/app/routes/roadmap.ts` — 残留 `@kissjs/ui` 修复
- `docs/app/routes/index/index.ts` — 首页 KISS 品牌移除

---

## 📊 统计

| 指标 | 数值 |
|---|---|
| v0.5.3 以来提交 | 25 |
| 变更文件 | 161 |
| 新增行数 | +2,760 |
| 删除行数 | -3,032 |
| 测试 | 310/310 通过 |

---

## ⚠️ 破坏性变更

**组件标签名已变更。** 如果使用了 `<kiss-layout>`、`<kiss-button>` 等，必须更新为 `<less-layout>`、`<less-button>`。CSS 变量名也从 `--kiss-*` 变为 `--less-*`。

`@kissjs/*` JSR 包不再更新，请使用 `@lessjs/*`。

---

## 下一步

v0.6 将聚焦 **DSD Renderer 2**：安全/非安全 HTML 契约、嵌套 DSD 支持、slot/projection 行为、错误可观测性。
