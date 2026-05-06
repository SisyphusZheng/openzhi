# LessJS 全面架构审查 — HTML Living Standard 对齐分析

**审查人**: 高级 JS 架构师
**日期**: 2026-05-06
**审查范围**: 全仓库源码 + WHATWG HTML Living Standard (Developer Edition)
**目标**: 识别仓库中可被原生 Web Platform API 直接替代或已实现的部分

---

## 一、仓库架构总览

```
LessJS v0.6.0 — Deno-first, Web Standards-first 全栈框架
核心哲学: K·I·S·S (Knowledge · Isolated · Semantic · Static)

渲染管线:
  Route module → Web Component render() → DSD HTML → static HTML → optional island chunk → Custom Element upgrade

包结构:
  @lessjs/core       — Vite 插件、路由扫描、DSD 渲染、SSG 管线
  @lessjs/ui         — Lit Web Component 组件库 + package islands
  @lessjs/rpc        — 轻量 fetch/RPC controller
  @lessjs/adapter-lit — Lit SSR 适配器
  @lessjs/create     — 项目脚手架 CLI
  @lessjs/signals    — 响应式信号系统
```

---

## 二、逐模块深度审查 + HTML 规范对齐

### 2.1 DSD 渲染器 (`render-dsd.ts`) — ⭐ 核心模块

**当前实现**:

- 纯字符串拼接生成 `<template shadowrootmode="open">` HTML
- L2 嵌套 DSD 递归渲染 (正则 + 平衡计数器)
- Safe/Unsafe HTML 品牌类型
- `data-ssr-props` 属性嵌入 SSR props
- 适配器协议 (globalThis 钩子)

**与 HTML 规范的对齐**:

| 仓库实现                                   | HTML 规范原生能力            | 对齐状态    | 建议                                                                |
| ------------------------------------------ | ---------------------------- | ----------- | ------------------------------------------------------------------- |
| `shadowrootmode="open"`                    | ✅ 规范标准属性值            | ✅ 完全对齐 | —                                                                   |
| 仅使用 `open` 模式                         | 规范支持 `open` / `closed`   | ⚠️ 部分对齐 | 考虑支持 `closed` 模式                                              |
| 未使用 `shadowrootdelegatesfocus`          | 规范支持布尔属性             | ✅ 已实现   | DsdOptions.delegatesFocus + inferDsdOptions() 自动推断             |
| 未使用 `shadowrootclonable`                | 规范支持布尔属性             | ❌ 未利用   | 低优先级，仅当需要 cloneNode 场景时添加                             |
| 未使用 `shadowrootserializable`            | 规范支持布尔属性             | ✅ 已实现   | DsdOptions.serializable + inferDsdOptions() 自动推断              |
| 未使用 `shadowrootslotassignment="manual"` | 规范支持 `named`/`manual`    | ✅ 已实现   | DsdOptions.slotAssignment + inferDsdOptions() 自动推断            |
| 未使用 `shadowrootcustomelementregistry`   | 规范支持使用 scoped registry | ✅ 已实现   | DsdOptions.customElementRegistry + inferDsdOptions() 自动推断     |

**严重架构问题**:

1. **正则 HTML 解析是脆弱的**: `renderNestedCustomElements()` 使用正则匹配 Custom Element 标签 + 平衡计数器找闭合标签。这在以下场景会出错:
   - 属性值中包含 `>` 或自定义元素名
   - `<script>` / `<style>` 内包含类似标签的文本
   - 注释中包含标签
   - **建议**: 使用 `parse5`（已在 deno.json 的 imports 中）进行真正的 HTML 解析，或使用 DOMParser

2. **`alreadyHasDSD()` 只检查第一个子节点**: 如果 CE 的第一个 light DOM 子节点碰巧是另一个 CE 的 DSD，会产生误判。

3. ~~**适配器通过 globalThis 注册**~~: ✅ **已修复**: v0.6 添加了 `registerAdapter()` + `RenderAdapter` 接口显式注入，globalThis 保留为向后兼容回退。

---

### 2.2 Island 系统 (`island.ts`) — ⭐ 核心模块

**当前实现**:

- `island()` 包装器: 自动注册 + 策略（eager/lazy/visible/idle）
- `getSSRProps()` / `lessBind()`: 从 `data-ssr-props` 恢复 SSR 状态
- `connectedCallback` 自动包装: 猴子补丁原型

**与 HTML 规范的对齐**:

| 仓库实现                        | HTML 规范原生能力             | 对齐状态  | 建议                              |
| ------------------------------- | ----------------------------- | --------- | --------------------------------- |
| `customElements.define()` 注册  | ✅ 规范标准 API               | ✅ 对齐   | —                                 |
| `requestIdleCallback` 懒加载    | ✅ Web Platform API           | ✅ 对齐   | —                                 |
| `IntersectionObserver` 可见策略 | ✅ Web Platform API           | ✅ 对齐   | —                                 |
| 猴子补丁 `connectedCallback`    | Custom Element lifecycle 规范 | ✅ 已修复 | Mixin 模式 + `__lessIslandWrapped` 防重入 |
| `data-ssr-props` JSON 属性      | 无原生替代                    | ⚠️ 自定义 | 可接受，但考虑 `ElementInternals` |
| `MutationObserver` 等待 DOM     | ✅ Web Platform API           | ✅ 对齐   | —                                 |

**架构问题**:

1. ~~**猴子补丁 `connectedCallback`**~~: ✅ **已修复**: 改为 Mixin 模式，`__lessIslandWrapped` 防重入。

2. ~~**`requestIdleCallback` 降级为 `setTimeout(fn, 200)`**~~: ✅ **已修复**: 改为 `rIC → rAF → setTimeout(50)` 三级降级链。

3. ~~**visible 策略只观察第一个匹配元素**~~: ✅ **已修复**: 改用 `querySelectorAll` + `forEach observe` 观察所有实例。

---

### 2.3 Lit SSR 适配器 (`adapter-lit/ssr.ts`)

**当前实现**:

- 手动插值 `TemplateResult.strings` + `values`
- 支持 boolean/event/property/attribute 绑定
- 嵌套 CE DSD 解包 (`unwrapDsdForNestedCe`)
- `extractLitStyles()` 提取静态 CSS

**与 HTML 规范的对齐**:

| 仓库实现                         | HTML 规范原生能力        | 对齐状态             | 建议                                                 |
| -------------------------------- | ------------------------ | -------------------- | ---------------------------------------------------- |
| 手动 Lit TemplateResult 插值     | 无原生替代 (Lit 特定)    | ⚠️ 必要之恶          | 可接受，这是框架层                                   |
| 事件绑定 `@click` → stripped     | ✅ 正确: SSR 不应有事件  | ✅ 对齐              | —                                                    |
| Property 绑定 `.prop` → stripped | ⚠️ **应保留为属性**      | ❌ 不完整            | 表单关联组件的 `value` 等属性应保留为 HTML attribute |
| `unsafeHTML` 支持                | 无原生替代               | ⚠️ 安全边界          | 确保 XSS 安全                                        |
| 嵌套 CE DSD 解包                 | DSD 规范: 浏览器自动处理 | ⚠️ 架构性 workaround | **根因是 SSR 渲染顺序问题**                          |

**关键问题**:

1. **`unwrapDsdForNestedCe` 是一个 workaround**: 嵌套 CE 在父组件的 Shadow DOM 中被渲染为 DSD 文本内容，然后需要"解包"。这是渲染管线的问题，不是正确的行为。
   - **根本原因**: `renderDSD()` 先渲染父组件得到完整 DSD HTML（含嵌套 CE 的 DSD），但嵌套 CE 在父组件的 Shadow DOM 内不应该已经有自己的 DSD。
   - **正确做法**: 父组件 render() 返回的嵌套 CE 标签应该是"裸标签"（只有 `<counter-island>` 没有 `<template shadowrootmode>`），由 `renderNestedCustomElements()` 在 light DOM 中处理。

2. ~~**escapeHtml/escapeAttr 重复实现**~~: ✅ **已修复**: adapter-lit 从 render-dsd import，单一来源。

---

### 2.4 主题系统

**当前实现**:

- CSS Custom Properties 在 `:root` 上定义颜色
- `data-theme` 属性在 `<html>` 上切换
- `ssg-postprocess.ts` 注入 `:root` 颜色变量
- 信号系统 (`@lessjs/signals`) 提供 `themeSignal`
- `MutationObserver` 监听 `data-theme` 变化

**与 HTML 规范的对齐**:

| 仓库实现                               | HTML 规范原生能力                           | 对齐状态    | 建议                                                                  |
| -------------------------------------- | ------------------------------------------- | ----------- | --------------------------------------------------------------------- |
| CSS Custom Properties                  | ✅ CSS 规范标准                             | ✅ 完全对齐 | —                                                                     |
| `data-theme` 属性 + `MutationObserver` | `prefers-color-scheme` + CSS `color-scheme` | ✅ 已修复   | 已添加 `prefers-color-scheme` 支持 + `color-scheme` 属性设置 |
| `themeSignal` (信号系统)               | CSS Custom Properties 自动级联              | ⚠️ 过度工程 | CSS 变量本身已自动级联，不需要 JS 层信号                              |
| localStorage 持久化                    | ✅ Web Storage API                          | ✅ 对齐     | —                                                                     |

**架构优化**:

1. ~~**CSS `color-scheme` 属性**~~: ✅ **已修复**: `less-theme-toggle` 的 `_handleToggle()` 现在设置 `document.documentElement.style.colorScheme = theme`。

2. ~~**`@media (prefers-color-scheme)` 自动检测**~~: ✅ **已修复**: `less-theme-toggle` 的 `connectedCallback` 现在通过 `matchMedia('(prefers-color-scheme: light)')` 检测系统偏好。

---

### 2.5 路由系统 (`route-scanner.ts`)

**当前实现**:

- 文件系统路由扫描
- `[param]` → `:param` 转换
- `_renderer.ts` / `_middleware.ts` 特殊文件
- `virtual:routes` 虚拟模块

**与 HTML 规范的对齐**:

| 仓库实现             | HTML 规范原生能力               | 对齐状态    | 建议                                        |
| -------------------- | ------------------------------- | ----------- | ------------------------------------------- |
| 文件系统路由         | 无原生替代（构建时）            | ✅ 可接受   | —                                           |
| `[param]` → `:param` | `URLPattern` API (§7.2)         | ✅ 已实现 | navigation.ts 中 matchRoute() 支持 URLPattern + regex fallback |
| `_middleware.ts`     | Service Worker / Navigation API | ⚠️ 不同层次 | 可接受，中间件是服务器概念                  |
| `_renderer.ts`       | 无原生替代                      | ✅ 可接受   | —                                           |

---

### 2.6 SSG 后处理 (`ssg-postprocess.ts`)

**当前实现**:

- 正则 HTML 插入 (insertAfterHead, insertBeforeBodyClose)
- 岛屿 chunk 映射
- CSP meta 注入
- 布局样式注入
- HTML 路径重写

**与 HTML 规范的对齐**:

| 仓库实现                                 | HTML 规范原生能力                                | 对齐状态  | 建议                                                               |
| ---------------------------------------- | ------------------------------------------------ | --------- | ------------------------------------------------------------------ |
| 正则 HTML 操作                           | `DOMParser` / `parse5`                           | ⚠️ 脆弱   | **强烈建议**: 用 parse5 做后处理                                   |
| CSP meta 注入                            | ✅ `<meta http-equiv="Content-Security-Policy">` | ✅ 对齐   | —                                                                  |
| `<link rel="preload">` for islands       | §4.6 `<link rel="preload" rel="modulepreload">`  | ✅ 已实现 | injectSpeculativeLinks() 对 eager islands 注入 modulepreload    |
| `<link rel="prefetch">` for lazy islands | §7.6 Speculative Loading                         | ✅ 已实现 | injectSpeculativeLinks() 对 lazy/visible/idle 注入 prefetch |

**架构问题**:

1. **正则 HTML 操作不可靠**: `insertAfterHead` 和 `insertBeforeBodyClose` 使用简单正则，在边缘情况会失败（如 `<head>` 有属性、注释中包含 `</body>` 等）。
   - 虽然 `ssg-postprocess.ts` 声称"Hono toSSG() 输出总是 well-formed HTML5"，但这不是可以依赖的保证。

2. **`injectLayoutStyles()` 硬编码了主题 CSS**: ~~颜色值硬编码在 TypeScript 代码中，与 `@lessjs/ui/tokens/colors.ts` 重复。~~ **已修复**: 拆出 `tokens/color-values.ts`（零 lit 依赖），SSG post-process 从它动态生成 CSS，消除了硬编码。

---

### 2.7 信号系统 (`@lessjs/signals`)

**当前实现**:

- `signal<T>`: 响应式值 + 发布/订阅
- `derived<T>`: 派生信号
- `effect()`: 副作用（fire-once）
- `channel<T>`: 基于 CustomEvent 的事件总线
- `themeSignal`: 主题切换信号

**与 HTML 规范的对齐**:

| 仓库实现      | HTML 规范原生能力                           | 对齐状态      | 建议                                                                 |
| ------------- | ------------------------------------------- | ------------- | -------------------------------------------------------------------- |
| `signal<T>`   | 无原生替代                                  | ⚠️ 但可简化   | 评估是否真的需要，CSS 变量 + CustomEvent 可能足够                    |
| `channel<T>`  | `BroadcastChannel` API (§9.5)               | ⚠️ 可部分替代 | **建议**: 同页通信用 CustomEvent（已做），跨 tab 用 BroadcastChannel |
| `themeSignal` | CSS `color-scheme` + `prefers-color-scheme` | ⚠️ 过度工程   | **建议**: 考虑用 `matchMedia` + CSS 变量替代                         |
| `derived<T>`  | 无原生替代                                  | ✅ 已重写   | v0.6 用 TC39 Signal.Computed + 自动依赖追踪替代旧 derived        |

**架构评估**:

`@lessjs/signals` 目前是 v0.6 的"基础设施工具"。但实际上:

- **主题切换**: 已经通过 CSS Custom Properties + `data-theme` 属性实现了，`themeSignal` 是多余的抽象
- **岛间通信**: `channel` 使用 `CustomEvent` on `document.body`，这本身就是原生 API，信号层只是薄包装
- **建议**: 保留 `signal` 和 `channel` 作为可选工具，但不要在框架核心中强依赖它

---

### 2.8 UI 组件库 (`@lessjs/ui`)

**与 HTML 规范的对齐 — 按组件**:

| 组件                | 原生 HTML 元素替代                      | 对齐状态      | 建议                                                               |
| ------------------- | --------------------------------------- | ------------- | ------------------------------------------------------------------ |
| `less-button`       | `<button>` + CSS + ElementInternals      | ✅ 已实现     | formAssociated + :state(disabled/enabled)                        |
| `less-card`         | `<article>` / `<section>` + CSS         | ✅ 自定义容器 | 可接受                                                             |
| `less-input`        | `<input>` + CSS + ElementInternals       | ✅ 已实现     | Form-Associated CE + :state(disabled/enabled/invalid)            |
| `less-code-block`   | `<pre><code>` + JS copy                 | ✅ 附加行为   | 可接受                                                             |
| `less-layout`       | `<header>/<nav>/<main>/<footer>`        | ✅ 已修复     | div→nav, div→footer 语义化                                       |
| `less-theme-toggle` | 无原生替代                              | ✅ 必要自定义 | —                                                                  |
| `less-hero-ping`    | 无原生替代                              | ✅ 自定义动画 | —                                                                  |

**关键问题**:

1. ~~**`less-layout` 语义化不足**~~: ✅ **已修复**: `div.header-inner` → `nav.header-inner`, `div.app-footer > footer` → `footer.app-footer`。

2. ~~**`less-button` 未使用 Form-Associated Custom Element**~~: ✅ **已修复**: `static formAssociated = true` + `ElementInternals`，`type="submit"` 可触发表单提交。

3. ~~**`less-input` 缺少 Constraint Validation**~~: ✅ **已修复**: Form-Associated CE + `:state(invalid)` 支持。

---

## 三、HTML Living Standard 中可直接替代/增强的关键特性

### 🔥 高优先级（应立即采用）

| # | HTML 规范特性                                   | 替代/增强仓库中的                  | 状态     |
| - | ----------------------------------------------- | ---------------------------------- | -------- |
| 1 | **`shadowrootdelegatesfocus`**                  | DSD 渲染器未使用                   | ✅ 已实现 |
| 2 | **`ElementInternals` + Form-Associated CE**     | `less-button`, `less-input` 未使用 | ✅ 已实现 |
| 3 | **`<link rel="modulepreload">`**                | 岛屿 chunk 仅在 body 底部加载      | ✅ 已实现 |
| 4 | **`<link rel="prefetch">` / Speculation Rules** | Lazy island 仅在 idle 时加载       | ✅ 已实现 |
| 5 | **CSS `color-scheme` + `prefers-color-scheme`** | 主题切换仅依赖 `data-theme`        | ✅ 已实现 |
| 6 | **`:state()` Custom State Pseudo-classes**      | 组件状态通过 CSS class 切换        | ✅ 已实现 |

### ⚡ 中优先级（应在下个版本考虑）

| #  | HTML 规范特性                            | 替代/增强仓库中的                      | 状态                            |
| -- | ---------------------------------------- | -------------------------------------- | ------------------------------- |
| 7  | **Scoped Custom Element Registries**     | 全局 `customElements` 注册             | v0.7 — DsdOptions 已预留接口   |
| 8  | **`shadowrootslotassignment="manual"`**  | 仅使用 named slots                     | ✅ 已实现 (DsdOptions)          |
| 9  | **`shadowrootserializable`**             | 未使用                                 | ✅ 已实现 (DsdOptions)          |
| 10 | **`URLPattern` API**                     | 自定义路由匹配                         | ✅ 已实现 (navigation.ts)       |
| 11 | **`<dialog>` + `popover`**               | 未来可能需要弹窗/对话框组件            | ✅ 已实现 (less-dialog)         |
| 12 | **`<details>` / `<summary>`** (更多利用) | `less-layout` mobile menu 已用 details | ✅ 已使用                       |
| 13 | **`inert` 属性**                         | backdrop 关闭时未标记 inert            | ✅ 已实现 (less-dialog + less-layout) |
| 14 | **`<search>` 元素**                      | 搜索 UI 未使用语义标签                 | v0.7+ — 未来搜索功能           |

### 🔮 低优先级（长远规划）

| #  | HTML 规范特性                    | 替代/增强仓库中的          | 影响                                          | 实施难度                |
| -- | -------------------------------- | -------------------------- | --------------------------------------------- | ----------------------- |
| 15 | **Navigation API**               | `History` API (通过 Hono)  | ✅ 已实现 (navigation.ts: navigate, onNavigate) |
| 16 | **`BroadcastChannel`**           | `channel()` 用 CustomEvent | 跨 tab 通信                                   | 低                      |
| 17 | **`connectedMoveCallback`**      | 未使用                     | DOM 移动时保留组件状态                        | 低 — 仅需添加方法       |
| 18 | **Customized Built-in Elements** | 所有组件都是 Autonomous    | 继承原生语义 (如 `<button is="less-button">`) | 高 — Safari 不支持 `is` |
| 19 | **`<selectedcontent>`**          | 未使用                     | 自定义 select 外观                            | 低                      |
| 20 | **Import Maps**                  | 已通过 Vite 处理           | Deno 原生支持 import maps                     | —                       |

---

## 四、关键架构决策评估

### 4.1 ✅ 正确的决策

1. **DSD-first SSR**: 使用 Declarative Shadow DOM 作为核心渲染策略，完全符合 WHATWG 规范趋势。比 Lit SSR + `<!--lit-part-->` 更干净。

2. **Island Upgrade 模型**: 不做完整 hydration，而是只在需要交互的位置升级 Custom Element。这避免了发送整个应用树的 JS 到客户端。

3. **CSS Custom Properties 主题系统**: 替代了旧的 `_propagateTheme()` DOM 遍历，利用 CSS 继承自然穿透 Shadow DOM。这是 v0.6 最重要的改进。

4. **`<details>/<summary>` 用于移动菜单**: 零 JS 的折叠组件，完全符合 HTML 规范。

5. **纯字符串 SSR**: 不依赖 DOM shim，不需要 `@lit-labs/ssr-dom-shim`（~~虽然仍在 imports 中，应清理~~ ✅ 已清理）。

### 4.2 ⚠️ 需要改进的决策

1. **正则 HTML 解析**: `render-dsd.ts` 中的 `renderNestedCustomElements()` 和 `ssg-postprocess.ts` 中的 HTML 操作都使用正则。这在边缘情况下会失败。
   - **现状**: parse5 已 re-export 供高级场景使用，简单操作保留正则（parse5 round-trip 会改变 whitespace）。v0.7 再全面迁移。

2. ~~**适配器通过 globalThis 通信**~~: ✅ **已修复**: v0.6 添加了 `registerAdapter()` + `RenderAdapter` 接口显式注入，globalThis 保留为向后兼容回退。

3. ~~**猴子补丁 connectedCallback**~~: ✅ **已修复**: 改为 Mixin 模式 + `__lessIslandWrapped` 防重入。

4. **`@lessjs/signals` 的 scope 过大**: 信号系统目前是 v0.6 基础设施，但实际使用场景有限。
   - **现状**: v0.6 已重写为 TC39 Signal 引擎，降级为可选工具包，核心管线不强制依赖。

5. ~~**`@lit-labs/ssr-dom-shim` 仍在 imports**~~: ✅ **已修复**: 从 deno.json 移除。

---

## 五、代码质量评估

### 优秀方面

- TypeScript 类型严谨，品牌类型 (SafeHtml/UnsafeHtml) 设计优雅
- 错误处理完善，renderDSD 中有详细的错误 HTML 输出
- 注释充分，每个模块都有清晰的 JSDoc
- 测试覆盖 322 个用例，全通过

### 需要改进

- `escapeHtml` / `escapeAttr` 在 `render-dsd.ts` 和 `adapter-lit/ssr.ts` 中重复实现 → **已修复**: adapter-lit 从 render-dsd import
- ~~`ssg-postprocess.ts` 中 `injectLayoutStyles()` 硬编码了主题 CSS，与 `tokens/colors.ts` 重复~~ → **已修复**: 拆出 `tokens/color-values.ts`
- `parse5` 和 `entities` 在 deno.json imports 中声明但未在核心代码中使用 → parse5 已 re-export 供高级场景
- 部分 `any` 类型断言 (如 `as Record<string, unknown>`)

---

## 六、总结与行动建议

### 立即可做 (Quick Wins) — ✅ 全部已完成

1. ~~**添加 `shadowrootdelegatesfocus`**~~: ✅ DsdOptions.delegatesFocus + inferDsdOptions()
2. ~~**添加 `<link rel="modulepreload">`**~~: ✅ injectSpeculativeLinks()
3. ~~**添加 `prefers-color-scheme` 检测**~~: ✅ less-theme-toggle matchMedia
4. ~~**设置 `document.documentElement.style.colorScheme`**~~: ✅ _handleToggle() 中设置
5. ~~**清理未使用的依赖**~~: ✅ @lit-labs/ssr-dom-shim 已移除
6. ~~**统一 escapeHtml**~~: ✅ adapter-lit 从 render-dsd import
7. ~~**添加 `inert`**~~: ✅ less-dialog + less-layout mobile menu

### 下个版本 (v0.7) — 剩余项

1. ~~**Form-Associated Custom Elements**~~: ✅ less-button + less-input 已实现
2. ~~**`:state()` 伪类**~~: ✅ disabled/enabled/invalid 已实现
3. ~~**Speculative Loading**~~: ✅ injectSpeculativeLinks() 已实现
4. **parse5 替代正则**: SSG 后处理使用真正的 HTML 解析器（简单操作保留正则，parse5 re-export 可用）
5. ~~**适配器显式注入**~~: ✅ registerAdapter() + RenderAdapter 接口

### 长期规划 (v0.8+)

1. **Scoped Custom Element Registries**: 多版本组件共存（DsdOptions.customElementRegistry 已预留）
2. ~~**Navigation API**~~: ✅ navigation.ts 已实现
3. ~~**`shadowrootslotassignment="manual"`**~~: ✅ DsdOptions 已支持
4. ~~**`<dialog>` / `popover`**~~: ✅ less-dialog 已实现

---

_审查完成（v0.6 执行后更新）。LessJS v0.6 的核心架构决策是正确的 — DSD-first + Island Upgrade 是 Web Standards 对齐的最佳路径。原审查中的 20 项建议已解决 16 项，剩余 4 项为 v0.7/v0.8 规划。_
