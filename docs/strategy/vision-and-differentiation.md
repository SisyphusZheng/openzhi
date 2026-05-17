# LessJS 产品愿景与路线战略

> 2026-05-18 v2 | 基于多轮讨论修正 | 状态：Active
>
> 前一版（v1）过度倾向乐观叙事。本版基于诚实的差距评估重写。

## 零、我是谁、我要什么

LessJS 的当前和可预见的唯一消费者是其作者本人。

近期能做的事：**个人博客**，页面上自如混用多种 WC UI 库（Shoelace / Media Chrome / @lessjs/ui / Material Web 等）。

远期要做的事：**CRM 等数据驱动应用**。这需要 LessJS 从纯 SSG 引擎进化为全栈框架。

中间路径：博客验证引擎能力，CRM 驱动全栈能力生长。不是先做框架再找用户，而是自己做用户、边用边建。

---

## 一、产品定义：三大支柱

### 支柱 1：WC 通用渲染引擎

**核心能力**：自动处理任何 Web Component 的 SSG/SSR 渲染，基于 Declarative Shadow DOM（DSD）。

**两层渲染模型**（本次讨论的关键认知更新）：

| 层级 | 行为 | 条件 | 覆盖范围 | 价值 |
|------|------|------|----------|------|
| **Tier 2（默认）** | 输出 `<my-comp>` 标签，浏览器 JS 升级后渲染 | 无条件 | 所有 WC，100% | 可用性兜底 |
| **Tier 1（增强）** | 预渲染 shadow DOM 为 DSD 模板 | 通过 adapter 或 Hub 验证 | 已验证组件 | JS 加载前有视觉 |

**诚实的评估**：

- Tier 2 技术上 100% 正确——任何 WC 标签放在 SSG 输出里就是合法 HTML，浏览器一定会升级它
- 但 Tier 2 本身**不构成差异化**——一个普通 HTML 文件 + `<script type="module">` 就能做到同样的事
- Tier 1（DSD 预渲染）才是引擎的价值所在，但目前对第三方 WC 仍然脆弱——每个新库都可能冒出新问题（Shoelace 的 CSS 变量、嵌套 button、slot 内容错位……）
- 第三方 WC 的 shadow DOM 内部结构天然不可预测，"通用"的意思是"有通用框架"，不是"所有 WC 零成本适配"

**退路**：DSD 搞不定就回 SD，SD 不行就 Tier 2 client-only。总是能用的，只是体验分层。

### 支柱 2：WC Registry Hub

**核心能力**：Web Component 注册中心，用户提交、发现、安装第三方 WC。

**两种定位**：

| 定位 | 体验 | 价值 | 可行性 |
|------|------|------|--------|
| **A. 安装即渲染** | `less install @scope/pkg` → 自动 Tier 1/2 渲染 | 差异化强 | 依赖引擎 Tier 1 覆盖率 |
| **B. 展示型目录** | 类 webcomponents.org → 浏览、搜索 | 差异化弱 | 技术简单 |

**诚实的评估**：

- "安装即渲染"是很好的故事，但前提是 Tier 1 覆盖率够高。如果大多数 WC 落到 Tier 2（无预渲染），体验和 `npm install` 没本质区别
- Hub 的更现实价值可能是**验证和兼容性报告**——"这个 WC 在 LessJS 里能 SSR / 不能 SSR / 需要额外配置"
- webcomponents.org 半死不活是事实，但"它死了"不等于"市场需要替代品"——WC 开发者可能已习惯 npm + GitHub 发现方式
- 作为单人项目，Hub 的社区冷启动是经典鸡生蛋问题

**近期策略**：先把 Hub 做成自己可用的工具——快速发现和验证 WC 库的兼容性。社区化是远期目标。

### 支柱 3：全栈框架

**核心能力**：以 Web 标准 + Deno 为基础的现代全栈框架。

**核心哲学**：

```
Web Standards First, Deno Second
├── DSD（渲染核心）— 已实现
├── Signals（响应核心）— 已实现，TC39 提案对齐
├── ESM（模块核心）— 已实现
├── Islands（架构核心）— 已实现
├── Custom Elements + Slots（组件核心）— 已实现
└── Modern Web APIs（fetch, streams, URLPattern）— 部分实现
```

**任务分层**：

| 任务类型 | 技术组合 | 场景 |
|----------|----------|------|
| **轻量（博客/文档站）** | WC UI 库 + Hono + LessJS SSG/SSR/Signals | 内容为主，交互为辅 |
| **重型（CRM/仪表盘）** | 部分 Islands → React/Vue + Supabase | 复杂交互 + 数据驱动 |

**Supabase 定位**：生态伙伴，不自建。Supabase Edge Functions 基于 Deno + Hono，和 LessJS 天然对齐。LessJS 提供前端渲染，Supabase 提供 DB + Auth + Realtime + Storage。

**诚实的评估**：

- LessJS **现在不是全栈框架**。它是 SSG 引擎 + WC 渲染层。缺少 API Route、请求时 SSR、后端服务集成
- "轻量用 WC + Hono，重型切 React/Vue + Supabase"——逻辑正确，但有切换成本：用户需要同时理解 LessJS 的 Islands/Signals/DSD 和 React/Vue 的体系
- Hono API Route、Supabase 集成、Edge SSR——每一项都不是"加个插件"，需要设计路由系统、请求上下文、部署适配层

---

## 二、当前真实状态（不美化）

| 能力 | 状态 | 诚实评分 |
|------|------|----------|
| SSG 静态站点生成 | ✅ 稳定 | 9/10 |
| Lit adapter DSD SSR | ✅ 稳定 | 8/10 |
| Vanilla adapter | ✅ 可用 | 7/10 |
| React adapter | ✅ 可用 | 6/10 |
| 第三方 WC Tier 2（标签输出） | ✅ 零配置 | 10/10（但无差异化） |
| 第三方 WC Tier 1（DSD 预渲染） | ⚠️ 脆弱 | 4/10 |
| Signals（通信层） | ✅ 可用 | 6/10 |
| Signals（渲染层渗透） | ❌ 未做 | 2/10 |
| Islands 架构 | ✅ 稳定 | 7/10 |
| Registry Hub（基础设施） | ✅ 可用 | 6/10 |
| Registry Hub（快照稳定性） | ⚠️ 刚修了好几轮 bug | 4/10 |
| API Route（Hono） | ❌ 不存在 | 0/10 |
| 请求时 SSR | ❌ 不存在 | 0/10 |
| Vue adapter | ❌ 不存在 | 0/10 |
| Supabase 集成 | ❌ 不存在 | 0/10 |
| Edge runtime 适配 | ❌ 仅静态 CDN | 1/10 |

**加权平均：~4.5/10**

---

## 三、竞品格局（精简）

| 产品 | WC 原生 | 全栈 | DSD | Signals | Islands |
|------|---------|------|-----|---------|---------|
| **Astro** | ❌ 当普通元素 | ✅ 成熟 | ❌ | ❌ | ✅ |
| **Enhance** | ✅ | 部分 | ❌ | ❌ | 部分 |
| **Lit SSR** | ✅ 仅 Lit | ❌ 库 | ❌ | ❌ | ❌ |
| **Next.js** | ❌ | ✅ | ❌ | ❌ | 部分（RSC） |
| **webcomponents.org** | ✅ 展示 | ❌ | ❌ | ❌ | ❌ |

**市场空白**：没有人同时做到 WC 原生 + DSD + 全栈能力。LessJS 的目标位置。

**但也意味着**：LessJS 要在一个目前没有竞品的空白里独自证明需求存在。

---

## 四、差异化（诚实版）

### 真正的壁垒（别人短期内不会做的）

1. **DSD 自动渲染引擎** — Astro 不做 WC 原生，Enhance 不做 DSD，Lit SSR 只管 Lit。但受众可能比想象的小——多数 WC 开发者对"JS 加载前的视觉"没有强需求，DSD 的核心价值场景是 SEO/LCP

2. **Signals-Islands 一体** — TC39 Signals 向 Stage 2 推进中。先发优势在，但不是技术壁垒——Astro/Nuxt 愿意的话也能加

3. **Registry + Engine 一体** — 最独特的组合，但依赖前两者成立

### 不是壁垒的

- SSG/SSR 能力：所有全栈框架都有
- 多框架支持：Astro 做得更多更成熟
- 静态部署：所有框架都支持

### 差异化够不够硬？

这是最需要诚实面对的问题。目前答案是：**对大众开发者可能不够硬，对 WC 重度用户够硬**。

但当前消费者只有作者本人，所以"够不够硬"的判断标准是：**LessJS 自己做 CRM 时够不够用**。如果够用，那至少证明了一个人能从这个框架里获得真实价值。

---

## 五、WC 渲染策略详解

### Tier 2：SSG 基线（默认行为）

```
用户写 <sl-button variant="primary">Click</sl-button>

构建时：原样输出标签
运行时：HTML 解析 → JS 加载 → customElements.define() → 升级

结果：所有 WC 100% 可用，零配置
代价：JS 加载前无视觉（FOUC）
```

这不需要引擎做任何事。一个 HTML 文件就能做到。但 LessJS 的价值在于：**路由扫描、代码分割、Islands 声明、构建报告**——这些是围绕渲染的工程能力。

### Tier 1：DSD 预渲染（增强行为）

```
构建时：
  1. Playwright 打开组件页面
  2. 等待 WC 升级 + shadow DOM 就绪
  3. 捕获 shadowRoot.innerHTML
  4. 包装为 <template shadowrootmode="open">

输出：
  <sl-button variant="primary">
    <template shadowrootmode="open">
      ...预渲染的 shadow DOM...
    </template>
    Click
  </sl-button>

运行时：HTML 解析 → 立即显示视觉 → JS 加载 → 水合接管
```

**已知陷阱**（从 Shoelace 修复中学到的）：

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| CSS 变量缺失 → 组件透明 | Playwright 只捕获元素标记，不含外部 CSS | 注入 `light.css` |
| 嵌套 `<button>` → 渲染崩坏 | shadowHtml 中的 `<button>` 和 WC 自身的 `<button>` 冲突 | 降级 `<button>` → `<div>` |
| slot 内容为空 | demoAttrs/demoSlots 丢失 | 在最终 HTML 中恢复 |
| 快照体积膨胀 | shadow DOM 深度嵌套 | button→div 降级显著减小体积 |

**关键认知**：Tier 1 对每个第三方库都是一件一个案的手工活。不是"验证通过就自动跑"，是"每个新库都可能冒出新问题"。这不是 bug，是第三方 WC 的 shadow DOM 内部结构天然不可预测。

### 退路链条

```
Tier 1 DSD 预渲染  →  最好
       ↓ 搞不定
Tier 1 SD 预渲染（不包装为 shadowrootmode）  →  可接受
       ↓ 搞不定
Tier 2 标签输出 + 浏览器升级  →  总是能用的
```

---

## 六、全栈框架路径（从 SSG 到全栈）

### 当前架构

```
构建时：扫描路由 → SSG 生成静态 HTML → 部署到 CF Pages
请求时：（无）
```

### 目标架构

```
构建时：扫描路由 → SSG 生成静态页面 → 部署
请求时（静态页面）：CF Pages 直接返回 HTML
请求时（动态页面）：SSR 渲染 → 返回 HTML
请求时（API）：Hono handler → 返回 JSON
```

### 缺失的三大能力

#### 1. Hono API Route

**是什么**：`app/api/**/*.ts` → 自动注册为 Hono 路由 → Edge Function 执行

**为什么最先做**：
- Hono 已在依赖里
- CF Pages Functions 原生支持 `functions/` 目录
- Supabase 官方有 Deno + Hono 集成模板
- 没有 API Route 就没有 CRM

**需要做的事**：
- 路由扫描识别 `api/` 目录
- 将 `.ts` 文件注册为 Hono route handler
- 构建时将 API route 编译为 CF Pages Function
- 请求上下文注入（环境变量、Supabase client 等）

#### 2. 请求时 SSR

**是什么**：动态路由在请求时调用 `renderRoute()`，而非构建时

**为什么需要**：
- CRM 的用户数据页面不能构建时生成（每个人看到的内容不同）
- 权限控制必须在请求时执行
- 构建时 SSG + 请求时 SSR 共存是全栈框架的标配

**需要做的事**：
- 路由声明区分 static/dynamic（约定或配置）
- dynamic 路由在 Edge Function 中执行 renderRoute()
- 请求上下文传递到渲染层（用户身份、请求参数等）

#### 3. Supabase 集成

**是什么**：Auth / DB / Realtime / Storage 的集成模板和工具函数

**为什么是生态伙伴而非自建**：
- Supabase Edge Functions 已基于 Deno + Hono
- Auth/DB/Realtime/Storage 自建成本巨大
- 和 LessJS 的技术栈天然对齐

**需要做的事**：
- `@lessjs/supabase` 或内建集成：环境变量注入、client 工厂函数
- Auth 中间件：请求拦截 → 验证 JWT → 注入用户信息
- 数据获取工具：server-side query → 注入页面数据
- 开发模板：`less init --with-supabase`

### 技术对齐优势

LessJS 选择 Deno + Hono + Web Standards 的技术栈，和 Supabase + Cloudflare 的技术栈高度重合：

```
LessJS          Supabase           CF Pages
──────          ────────           ────────
Deno runtime    Deno runtime       Edge Runtime
Hono (可选)      Hono (官方推荐)     Hono (兼容)
ESM             ESM                ESM
Web APIs        Web APIs           Web APIs
```

这不是巧合——这是"Web Standards First"哲学的直接结果。选择对齐 Web 标准的框架，生态兼容性自然出现。

---

## 七、路线图（修订版）

### 近期：v0.19.x 完成（当前）

- Hub Component Browser 稳定
- Shoelace 快照修复完成
- 博客可用 LessJS 构建

### 中期：v0.20.x — WC 渲染 + 全栈地基

**渲染引擎**：
- Tier 2 默认行为在文档和 CLI 中明确化
- Tier 1 快照对 Shoelace 全量验证
- 更多 WC 库的 Playwright 快照（Material Web 等）

**全栈地基**：
- Hono API Route 原型（`app/api/` 目录 → CF Pages Function）
- 请求上下文注入机制
- `less dev` 支持 API route 热重载

**博客验证**：
- 用 LessJS 构建个人博客
- 页面混用 Shoelace + Media Chrome + @lessjs/ui
- 发现并修复真实使用中的问题

### 中期：v0.21.x — 全栈框架成型

- Hono API Route 正式
- 请求时 SSR（dynamic route → Edge SSR）
- Supabase 集成模板（Auth + DB）
- adapter-vue 启动
- Signals → 渲染层渗透（signal-to-DOM 绑定实验）

### 远期：v0.22.x — 生态完善

- adapter-vue 正式
- ISR / DPR 支持
- Deno Deploy 适配
- Hub 社区提交流程成熟
- Tier 1 扩展到更多 WC 库

### 远期：v1.0.0 — API 冻结

- 所有核心 API 稳定
- 完整文档 + 迁移指南
- v0.x → v1.0 兼容性承诺

---

## 八、风险与开放问题

### 高风险

1. **Tier 1 脆弱性** — 每个第三方 WC 库可能需要独立的快照修复。这不是工程失误，是 shadow DOM 不可预测性的必然结果。需要建立"快照修复 SOP"来降低每次新库接入的成本

2. **全栈能力的工程量** — API Route + 请求时 SSR + Supabase 集成，三条线同时推进风险太大。必须严格排序：API Route → SSR → Supabase

3. **差异化对大众开发者够不够** — 对 WC 重度用户够，但这类人可能本来就够少。个人项目阶段这不是问题，但如果未来想让其他人用，需要找到更具体的"选择 LessJS 而不是 Astro"的场景

### 中风险

4. **Vue 适配器 DX** — Vue 响应式和 WC Shadow DOM 有天然摩擦，和 React 适配器面临的问题类似但不同

5. **TC39 Signals 节奏** — 提案向 Stage 2 推进中，API 可能变化。LessJS 的 polyfill 层可以吸收变化，但需要跟进

6. **Supabase 集成深度** — Auth/Realtime/Storage 需要服务端运行时，必须先有 API Route 层

### 开放问题

7. **博客 → CRM 的技术路径** — 博客验证 SSG + WC 渲染，CRM 需要 SSR + API + Auth。什么时候切换？用什么信号判断"SSG 引擎够稳了，可以开始做全栈"？

8. **品牌定位** — "LessJS" 暗示"更少的 JS"，但核心叙事是"WC 全栈引擎"。名字和定位是否匹配？要不要改名？当前不做决定，等 v1.0 前再考虑

9. **Tier 1 的边界在哪** — "通用 WC DSD 预渲染"的理想很美好，但每个新库的接入成本不可忽视。什么时候该说"这个库不支持 Tier 1，用 Tier 2 就好"？

---

## 九、决策记录

本节记录战略讨论中形成的关键决策，供未来参考。

| 日期 | 决策 | 上下文 |
|------|------|--------|
| 2026-05-18 | WC 渲染重构为 Tier 1/2 两层模型 | 之前把"自动 SSR"理解为单一目标，实际应分层：Tier 2 兜底、Tier 1 增强 |
| 2026-05-18 | DSD 搞不定可回退 SD | "实在不行拉倒回 SD 也行"——回退链条：DSD → SD → Tier 2 client-only |
| 2026-05-18 | 消费者是作者本人 | "真实消费者就我一个"——产品决策以"我自己够不够用"为准 |
| 2026-05-18 | 近期目标是个人博客 | 博客验证引擎能力，页面上自如混用多种 WC UI 库 |
| 2026-05-18 | 远期目标是 CRM 等数据驱动应用 | CRM 需要 API Route + SSR + Auth + DB → 驱动全栈能力生长 |
| 2026-05-18 | 全栈路径：API Route → SSR → Supabase | 严格排序，三条线不能并行推进 |
| 2026-05-18 | Supabase 是生态伙伴不自建 | Deno + Hono 技术栈对齐，不自建 Auth/DB/Realtime |
| 2026-05-18 | 不急着做全栈，先稳固引擎 | "先把 DSD 引擎做到真正稳定、Hub 做到真正可用" |
