# v0.5.0-alpha.1

> [Compare to v0.4.0](https://github.com/SisyphusZheng/kiss/compare/v0.4.0...v0.5.0-alpha.1)

v0.5 不做新功能。它做减法，然后查漏补缺。

---

## v0.5-alpha-0：架构精简 — 砍掉不必要的

### 删掉的

**KissElement — 废弃**
用 `innerHTML` 更新 DOM 的 base class。四个致命问题：状态丢失（input focus/scroll）、不安全（不转义）、不组合（全量替换）、性能差。任何想"零运行时但有声明式模板"的方案，最后都会变成重写 Lit。

**@kissjs/core 运行时导出 — 归零**
core 不再导出 `LitElement`、`html`、`css`、`signal`、`effect`。运行时依赖从 2 个变成 0 个。core = 纯构建/SSR 基础设施。

**@kissjs/rpc Lit 耦合 — 解除**
RPC 控制器改为 structural typing。`addController`/`requestUpdate` 接口自己声明，Lit/HTMLElement/任何框架都兼容。

**双 deno.json — 合并**
根目录 + docs/ 的 deno.json 合并为单根配置。`vendor: true`，`deno install` 一站式。

### 留下的

- **Lit 保留在 @kissjs/ui** — 9 个组件已稳定运行。15KB gzip 被所有组件共享。用户写 `<kiss-button>` 不需要知道里面有 Lit。
- **DSD 双通道** — 纯字符串拼接 + adapter-lit 适配器。原生组件和 Lit 组件各有 SSR 通道。
- **OpenProps 设计系统** — 颜色/shadow token 从硬编码 hex → CSS 变量。天然穿透 Shadow DOM，零构建步骤。

### 新架构

```
@kissjs/core    — 纯构建/SSR            [零运行时]
@kissjs/rpc     — fetch + AbortController [零运行时]  
@kissjs/ui      — OpenProps + Lit 组件库  [仅 UI 层]
@kissjs/adapter-lit — Lit → DSD 适配器   [构建时]
create-kiss     — 脚手架                 [CLI]
```

---

## v0.5-alpha-1：架构审计 — 查漏补缺

在 alpha-0 的精简基础上，做了一次端到端的全栈审查。3 个 agent 深度扫描 13,000+ 行源码。

### Bug 修复

| Bug | 描述 |
|-----|------|
| CSS 注入失败 | `extractLitStyles()` 用 `strings` → Lit 3.x 只有 `cssText`。删 42 行死代码 |
| Island 水合死锁 | api-consumer `connectedCallback` 同步 → `updateComplete.then()` |
| SW 缓存竞态 | `Response.clone()` 需在 `caches.open()` 之前 |

### 配置精简

- 删 `jsr.json` ×4（kiss-core, kiss-ui, kiss-rpc, create-kiss）
- 删 `package.json` ×2（kiss-rpc, kiss-ui）
- 所有包统一 `deno.json` 单一配置源

### 审查发现（已知问题）

| 问题 | 严重度 |
|------|--------|
| @kissjs/adapter-lit 零测试 | 🔴 P0 |
| 所有 9 Island eager 加载 → 67.8KB/页 → Lighthouse 30 | 🔴 P0 |
| @lit-labs/ssr-client 仍在依赖中 | 🔴 P0 |
| escapeHtml 在 3 处重复（编码不同） | 🟡 P1 |
| renderNestedDsd() 空函数 | 🟢 P2 |

### 新增设计原则

1. **Lit Update Safety** — 禁止 connectedCallback 中同步改 reactive props
2. **Adapter Test Coverage** — 每个 adapter 必须有测试
3. **Error Visibility** — 构建错误绝不静默
4. **Island Lazy by Default** — 默认 IntersectionObserver
5. **CSS Single Source** — 全局 CSS 一处定义
6. **One Config File** — 单 deno.json

---

## 包版本

| 包 | v0.4.0 | v0.5.0-alpha.1 |
|----|--------|----------------|
| @kissjs/core | 0.4.x | **0.5.0-alpha.1** |
| @kissjs/adapter-lit | — | **0.5.0-alpha.1** (新) |
| @kissjs/ui | 0.4.0 | **0.5.0-alpha.1** |
| @kissjs/rpc | 0.2.5 | **0.3.0-alpha.1** |
| @kissjs/create | 0.3.4 | **0.4.0-alpha.1** |

---

## 后续

- **v0.5.2** — adapter-lit 测试 + 移除 ssr-client + P0 清零
- **v0.6.0** — Island 懒加载 + Lighthouse 90+ + DRY 消除
- **v0.7.0** — E2E + 结构化 inject API + 中文错误
- **v0.8.0** — .kiss 编译器 Alpha
- **v1.0.0** — API 冻结
