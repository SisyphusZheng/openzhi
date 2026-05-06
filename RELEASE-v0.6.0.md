# v0.6.0-alpha.1 — Declarative Shadow DOM + Islands Architecture + Web Standards

## 概述

v0.6.0-alpha.1 是 LessJS 的重大架构升级版本，引入了 Declarative Shadow DOM (DSD)、岛屿懒加载架构、Safe/Unsafe HTML 品牌类型、TC39 Signals 二开、Form-Associated Custom Elements、Navigation API，以及全面采用 Web Standards 规范。

基于 WHATWG HTML Living Standard 全面架构审查（ARCHITECTURE-REVIEW.md），完成 8 个 Phase 共 38 项任务。

---

## 主要变更

### 🚀 核心架构升级

| 功能                             | 描述                               | 规范参考                                                                                           |
| -------------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Declarative Shadow DOM (DSD)** | 服务端直接输出 Shadow DOM 结构     | [WHATWG HTML Standard](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element) |
| **L2 Nested DSD**                | 支持嵌套 Custom Elements 递归渲染  | DOM Standard                                                                                       |
| **DSD 规范对齐**                | `shadowrootdelegatesfocus`/`shadowrootserializable`/`shadowrootslotassignment`/`shadowrootcustomelementregistry` | WHATWG HTML Standard |
| **岛屿懒加载**                   | visible/idle 策略的 client islands | Custom Elements                                                                                    |
| **Safe/Unsafe HTML**             | 品牌类型区分安全/非安全 HTML       | 遵循 Lit 语义                                                                                      |
| **CSS 变量主题**                 | 替代 `_propagateTheme()` DOM 遍历  | CSS Custom Properties                                                                              |
| **TC39 Signals 二开**            | 基于 signal-polyfill 的 `@lessjs/signals`，支持 `signal()`/`computed()`/`effect()`/`islandEffect()` | TC39 Signals Proposal |
| **Form-Associated CE**           | `less-button`/`less-input` 使用 `ElementInternals` 参与表单提交/验证，支持 `:state()` 伪类 | HTML Living Standard |
| **Navigation API**               | `navigate()`/`onNavigate()`/`matchRoute()`，URLPattern 路由匹配 | WHATWG Navigation API |
| **Speculative Loading**          | `<link rel="modulepreload">` for eager islands，`<link rel="prefetch">` for lazy islands | Resource Hints |
| **dialog/popover + inert**       | 原生 `<dialog>` + `::backdrop` + `popover` + `inert` 无障碍 | HTML Living Standard |

### 🎨 主题系统重构

| 变更                     | 描述                                   |
| ------------------------ | -------------------------------------- |
| CSS Custom Properties    | 主题颜色通过 CSS 变量注入到 `:root`    |
| `_propagateTheme()` 移除 | 不再需要递归 DOM 遍历设置 `data-theme` |
| 主题切换性能             | O(1) 复杂度，不受组件树深度影响        |
| Closed Shadow DOM 支持   | CSS 变量自动穿透                       |

### 📦 新增包

| 包                | 描述                            |
| ----------------- | ------------------------------- |
| `@lessjs/signals` | 响应式信号系统（TC39 Signals 二开） |
| `navigation.ts`   | Navigation API + URLPattern 路由 |
| `less-dialog.ts`  | 原生 dialog/popover 组件        |

### 🔧 改进

| 范围                  | 变更                                        |
| --------------------- | ------------------------------------------- |
| `render-dsd.ts`       | `data-ssr-props` 属性保留 SSR 属性          |
| `ssg-postprocess.ts`  | CSS 变量注入到 `:root`，parse5 re-export    |
| `less-layout.ts`      | 统一 sidebar（移除 mobile-sidebar-overlay），语义化 HTML（div→nav/footer），inert 无障碍 |
| `adapter-lit/ssr.ts`  | `unsafeHTML` directive 支持，unwrap DSD for nested CE |
| `entry-generators.ts` | visible/idle 懒加载策略，speculative links  |
| `adapter protocol`    | 消除所有 `globalThis` 污染，改用同模块作用域注册 |
| `runtime-shim.ts`     | DsdOptions 对象模式（delegatesFocus/serializable/slotAssignment/customElementRegistry） |
| `navigation.ts`       | Navigation API 集成，URLPattern 路由匹配，navigationType 修复 |
| `island.ts`           | Mixin 替代猴子补丁，`__lessIslandWrapped` 防重入 |
| `design-tokens.ts`    | `prefers-color-scheme` 检测 + `color-scheme` 属性设置 |
| `tokens/colors.ts`    | `color-values.ts` 零依赖单一数据源，消除 token 漂移 |

### 🧹 代码质量

| 改进                 | 描述                                                     |
| -------------------- | -------------------------------------------------------- |
| globalThis 去污染    | `__lessRenderAdapter` / `__lessLitAdapterInstalled` 全移除 |
| adapter 模块作用域   | `installLitAdapter()` 改走 `server.ssrLoadModule()` 注册 |
| island.ts 语法修复   | 修复缺少右括号                                           |
| TypeScript 类型      | 修复 6 个类型断言问题                                    |
| JS 现代化            | `var` → `const/let`，移除禁用注释                        |
| 废弃代码删除         | `html-template.ts` / `less-bind.ts` / `vite-ext.d.ts`    |
| 重复类型合并         | `PackageIslandMeta` 统一从 `@lessjs/core` 导入           |
| CSS 别名清理         | 移除 `lessScaffoldColorCSS` 废弃别名                     |
| customElements.define 守卫 | 8 个 UI 组件 `try/catch` → `customElements.get()` 幂等守卫 |
| escapeHtml 统一      | `adapter-lit/ssr.ts` 从 `@lessjs/core/render-dsd` 导入，消除 3 处重复 |

---

## Web Standards 采用

v0.6 全面采用以下 Web 规范：

| 规范                      | 应用                               |
| ------------------------- | ---------------------------------- |
| **HTML Living Standard**  | DSD 模板、`<template>`, `<slot>`, `<dialog>`, `inert`, `popover` |
| **DOM Standard**          | Shadow DOM、Custom Elements        |
| **Custom Elements**       | `customElements.define()` 统一注册，Form-Associated CE，`ElementInternals`，`:state()` 伪类 |
| **CSS Custom Properties** | 主题系统、组件样式变量化           |
| **CSS Shadow Parts**      | 预备 `::part()` 样式穿透           |
| **Fetch Standard**        | 预备标准 Fetch API                 |
| **Navigation API**        | SPA 导航，URLPattern 路由匹配      |
| **TC39 Signals**          | `signal-polyfill` 二开，响应式状态管理 |

### 浏览器兼容性

| 特性                   | Chrome | Firefox | Safari | Edge |
| ---------------------- | ------ | ------- | ------ | ---- |
| Custom Elements v1     | ✅     | ✅      | ✅     | ✅   |
| Shadow DOM v1          | ✅     | ✅      | ✅     | ✅   |
| HTML Templates         | ✅     | ✅      | ✅     | ✅   |
| CSS Shadow Parts       | ✅     | ✅      | ✅     | ✅   |
| Declarative Shadow DOM | ✅     | ✅      | ✅     | ✅   |

---

## 测试

- **322 个测试全部通过**（含 95 steps）
- `deno lint` 137 files 无警告
- `deno task test` 完整通过
- create-less 集成测试全绿（SSG 一键构建管道验证）

---

## 版本号

| 包                    | 旧版本  | 新版本                |
| --------------------- | ------- | --------------------- |
| `@lessjs/core`        | 0.5.5   | **0.6.0-alpha.1**     |
| `@lessjs/ui`          | 0.5.5   | **0.6.0**             |
| `@lessjs/rpc`         | 0.3.1   | **0.3.1** (无变更)    |
| `@lessjs/adapter-lit` | 0.2.1   | **0.3.0**             |
| `@lessjs/create`      | 0.4.6   | **0.4.7**             |
| `@lessjs/signals`     | -       | **0.6.0-alpha.1** (NEW) |

---

## 破坏性变更

| 变更                          | 描述                                  |
| ----------------------------- | ------------------------------------- |
| `_propagateTheme()` 移除      | 主题系统改用 CSS 变量，不再需要此方法 |
| 移除 `mobile-sidebar-overlay` | 统一使用 `.docs-sidebar`              |
| CSS 变量命名                  | `--less-*` 继续使用，无变更           |
| `registerAdapter()` 协议      | 全局 `__lessLitSsrRenderer` 等 globalThis hook 移除，适配器必须通过 `registerAdapter()` 显式注册 |
| `installLitAdapter()` 调用方式 | SSG 构建通过 Vite SSR 模块加载自动安装，用户侧无需手动调用 |
| `derived()` + fire-once `effect()` 移除 | `@lessjs/signals` 旧 API 完全删除，替换为 TC39 标准的 `computed()`/`effect()` |
| `island()` Mixin 替代猴子补丁 | `__lessIslandWrapped` 防重入，旧猴子补丁模式不再生效 |

---

## 迁移指南

### 从 v0.5.x 迁移

1. **主题切换**：无需改动，`less-theme-toggle` 自动适配
2. **自定义样式**：使用 `var(--less-*)` 变量替代硬编码颜色
3. **岛屿组件**：无需改动，`island.ts` 向后兼容

### 新增用法

```ts
// 响应式信号
import { signal, computed, effect, islandEffect } from '@lessjs/signals';

// SSR Props 绑定
import { less } from '@lessjs/core';

// 岛屿懒加载
import { Island } from '@lessjs/core/island';

// Navigation API
import { navigate, onNavigate, matchRoute } from '@lessjs/core/navigation';
```

---

### 🐛 Bug 修复

| Bug                       | 根因                                                                                                                      | 修复                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **站点颜色全灭**          | `:host { --less-bg-base: initial; }` 把 CSS 自定义属性设为 guaranteed-invalid value，切断了 `:root` → Shadow DOM 的继承链 | 删除 `:host` 中所有 `initial` 声明，让 CSS Custom Properties 自然穿透 Shadow DOM        |
| **SSG inline CSS 死代码** | `ssg-postprocess.ts` 注入 `less-layout .app-layout{...}` 等 document-scope 选择器，Shadow DOM 封装导致永远匹配不到        | 移除所有 shadow-internal 选择器，仅保留 `less-layout{display:block}` + `:root` 颜色变量 |
| **首页高度不足**          | `docs-home` 组件未撑满视口                                                                                                | 添加 `min-height: 100vh`                                                                |
| **SSG Lit 渲染失败**      | `installLitAdapter()` 通过 Deno `import()` 注册到 Deno 模块实例，但 `renderDSD()` 运行在 Vite SSR 的另一份模块实例，`_globalAdapter` 不共享 | 改用 `server.ssrLoadModule()` 安装 adapter，与 `renderDSD` 同一模块作用域 |
| **CSS token 数据漂移**    | `ssg-postprocess.ts` 硬编码 14 个颜色 token，与 `tokens/colors.ts` 的 18 个 token 重复，缺少 4 个 token                    | 新建 `color-values.ts` 作为单一数据源，`ssg-postprocess.ts` 从中动态生成                  |

> **核心教训 1**：CSS 自定义属性的 `initial` ≠ "恢复默认/继承上级"，而是 "guaranteed-invalid value"。
> 这与普通 CSS 属性（如 `color: initial` → 继承）的行为**完全相反**。
> 在 Shadow DOM 组件的 `:host` 中重声明自定义属性会**主动切断**继承链。
>
> **核心教训 2**：Vite SSR 有独立模块图，`import()` 和 `server.ssrLoadModule()` 不共享模块实例。
> 需要同一模块作用域的代码（如 adapter 注册 + renderDSD）必须都走 `server.ssrLoadModule()`，
> 不要用 globalThis 做桥接——那只是掩盖问题的创可贴。

---

## 后续计划

- **v0.7**：Serverless Fullstack + Edge Deployment
- **v0.8**：SSG + ISR + PWA + Streaming DSD
- **v0.9**：.less Compiler Alpha

---

_Built with Web Standards. Less is More._
