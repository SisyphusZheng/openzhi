# v0.5.5 — KISS → LessJS 全面更名完成 + Sidebar 修复

## 概述

v0.5.5 完成了品牌从 KISS 到 LessJS 的全面更名，覆盖 105 个文件。修复了移动端 sidebar 在所有页面（包括首页）的打开问题，修复了 PWA manifest favicon 404 和 dnt 构建错误。所有 package 版本已更新。

---

## 主要变更

### 🏷️ 品牌更名完成（KISS → LessJS）

| 范围     | 变更内容                                                                                                   |
| -------- | ---------------------------------------------------------------------------------------------------------- |
| 包名     | `@kissjs/*` → `@lessjs/*`                                                                                  |
| 主函数   | `kiss()` → `less()`                                                                                        |
| 类名     | `KissButton` → `LessButton`, `KissLayout` → `LessLayout` 等                                                |
| 临时目录 | `.kiss/` → `.less/`                                                                                        |
| 域名     | `kiss.js.org` → `lessjs.com`                                                                               |
| 文档站   | README.en.md 全文重写，CSS 变量 `--kiss-*` → `--less-*`（69 处），路由 `/kiss-compiler` → `/less-compiler` |
| 全局变量 | `__kissLit*` → `__lessLit*`, `__kissSsrDefinePatched` → `__lessSsrDefinePatched`                           |
| CSS 类   | `.kiss-row` → `.less-row`（示例页面 K.I.S.S. 首字母缩写）                                                  |

### 🐛 Bug 修复

| #  | 问题                                     | 修复                                                                                                |
| -- | ---------------------------------------- | --------------------------------------------------------------------------------------------------- |
| A6 | 移动端 sidebar 打不开（首页 + 其他页面） | CSS `display:none` 阻止 transform 生效；改用 `width:0 + overflow:hidden` 保留盒模型                 |
|    | 首页 hamburger 只显示遮罩无 sidebar      | 始终渲染 sidebar DOM，桌面端折叠，移动端通过 `:host([menu-open])` 控制显隐                          |
|    | PWA manifest.json favicon 404            | `src: /favicon.svg` → `/assets/less-logo.svg`；添加 `docs/public/favicon.svg`                       |
|    | dnt npm 构建失败                         | `packages/rpc/_build_npm.ts` LICENSE 路径 `../LICENSE` → `../../LICENSE`                            |
|    | CI 格式/lint 失败                        | deno fmt 格式化 5 文件，lint 清理未使用 imports，publish exclusion 添加 `!dist` 取消 gitignore 排除 |

### ✅ 测试

- **325 个测试全部通过**
- adapter-lit 新增 escape 一致性测试
- `deno publish --dry-run` 全部 5 个包干净通过

---

## 版本号

| 包                    | 旧版本 | 新版本    |
| --------------------- | ------ | --------- |
| `@lessjs/core`        | 0.5.4  | **0.5.5** |
| `@lessjs/ui`          | 0.5.4  | **0.5.5** |
| `@lessjs/rpc`         | 0.3.0  | **0.3.1** |
| `@lessjs/adapter-lit` | 0.2.0  | **0.2.1** |
| `@lessjs/create`      | 0.4.5  | **0.4.6** |

---

## 文件变更统计

- **~110 个文件变更**（累计 Pre-0.6 全部任务）
- **~1400 行新增，~1000 行删除**
- 4 个文件重命名，2 个新文件

---

## 向前兼容

- `@kissjs/*` 可通过 npm 重定向继续使用
- `kiss()` 作为 `less()` 别名保留（标记为废弃）
- `.kiss/` 临时目录仍在 .gitignore 中保留

---

## 后续计划

- **v0.6**：DSD + Island Communication（L2 Nested DSD、safe/unsafe HTML、slot/projection、Error visibility）
- **v0.7**：Serverless Fullstack
