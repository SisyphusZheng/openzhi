# LessJS v0.8.0 审核项解决 PRD

**版本**: v0.8.0 审核专项
**定位**: 消除工程债务 + 建立可持续的工程质量基线
**前置**: v0.8.0 已完成功能开发（signals 测试、render-dsd 拆分、DsdLitElement 统一、blog 启动等）
**文档日期**: 2026-05-08
**文档作者**: 许清楚 (Xu) · Product Manager

---

## 1. 产品目标

消除 LessJS v0.8.0 审核中发现的 5 项工程债务，使框架从「功能可用」进入「工程可信」状态——核心代码无手工同步风险、错误分类有据可依、渲染性能可扩展、高级特性有文档、关键路径有浏览器级测试覆盖。

---

## 2. 用户故事

### P0-1: 消除 runtime-shim.ts 手工同步风险

- **US-1**: 作为 LessJS 核心开发者，我希望修改 render-dsd.ts / render-nested.ts / html-escape.ts 后 runtime-shim.ts 能自动同步生成，这样我不必手动维护一份 418 行的 JS 模板字面量，也不担心因遗忘同步而引入难以排查的 drift bug
- **US-2**: 作为 LessJS 新贡献者，我希望 runtime-shim.ts 文件头部标注"自动生成，请勿手动编辑"并由 CI 守护一致性，这样我不会误以为是可手动修改的源码

### P0-2: 明确错误分类指南

- **US-3**: 作为 LessJS 应用开发者，我希望框架的 console 输出有统一的格式和清晰的级别语义（debug/warn/error），这样我能快速区分「需要处理的警告」和「仅用于调试的信息」
- **US-4**: 作为 LessJS 贡献者，我希望框架有一个结构化的日志 API 和错误分类指南，这样我在添加新日志时知道该用什么级别和前缀，而不必猜测惯例

### P1-3: 优化嵌套 DSD 渲染 O(n²)

- **US-5**: 作为 LessJS 应用开发者，我希望含深嵌套组件树或大页面（100+ 组件）的 SSG 构建时间在合理范围内，这样即使站点规模增长，构建性能也不成为瓶颈

### P1-4: 完善高级特性文档

- **US-6**: 作为 LessJS 框架评估者，我希望能在文档中找到 DSD、Island、RPC 等高级特性的完整使用指南和架构说明，这样我能评估 LessJS 是否适合我的项目需求
- **US-7**: 作为 LessJS 应用开发者，我希望高级特性文档包含完整的代码示例和常见场景的最佳实践，这样我能快速上手而不必阅读源码

### P1-5: 添加集成测试

- **US-8**: 作为 LessJS 贡献者，我希望框架有浏览器级 E2E 测试覆盖 DSD 渲染和 Island 水合等核心流程，这样我对核心路径的正确性有信心，重构时不会引入浏览器级回归

---

## 3. 需求池

### P0 — 必须完成（版本阻断项）

| # | 需求 | 说明 | 验收标准 | 影响范围 |
|---|------|------|----------|----------|
| P0-1 | **消除 runtime-shim.ts 手工同步风险** | runtime-shim.ts 是 418 行手写 JS 模板字面量，镜像 3 个 TS 源文件，已有 drift | 1. runtime-shim.ts 由构建脚本从 TS 源文件自动生成，不再需要手动编辑<br>2. 现有所有 drift 修复（regex 漂移、错误消息不一致、缺失特性）<br>3. CI 新增一致性检查：生成的 shim 与 TS 源文件同步，drift 时构建失败<br>4. runtime-shim.ts 文件头包含"自动生成"标注 | packages/core |
| P0-2 | **明确错误分类指南** | 124+ 处 console.* 调用，前缀格式不统一（[LessJS] / [LessJS SSG] / [LessJS Blog]），级别语义模糊 | 1. 创建结构化日志模块（基于已有 LessError 层次），提供 `logger.debug/warn/error` API<br>2. 统一前缀格式规范：`[LessJS]`（core）、`[LessJS/SSG]`（SSG 构建）、`[LessJS/Blog]`（blog 插件）<br>3. 定义错误分类指南文档：明确 debug/warn/error 使用场景和边界<br>4. 替换现有全部 124+ 处自由格式 console.* 调用为结构化 API<br>5. console.debug 在生产构建中可通过配置静默 | packages/core, packages/adapter-lit, packages/blog, packages/signals |

### P1 — 应该完成（版本重要项）

| # | 需求 | 说明 | 验收标准 | 影响范围 |
|---|------|------|----------|----------|
| P1-3 | **优化嵌套 DSD 渲染 O(n²)** | renderNestedCustomElements() 每次迭代重新扫描整个 HTML 字符串，最多 50 次迭代 | 1. 使用 parse5 AST 替代正则匹配（parse5@7.0.0 已是项目依赖）<br>2. 嵌套 CE 渲染时间复杂度从 O(n²) 优化到 O(n·d)，n 为 HTML 长度，d 为嵌套深度<br>3. 现有 render-dsd 测试全部通过<br>4. 100 组件深嵌套场景的 SSG 构建时间可测量改善 | packages/core |
| P1-4 | **完善高级特性文档** | DSD、Island、RPC 等高级特性文档不完整 | 1. 新增 DSD 渲染架构指南（三层模型、slot 投影、WHATWG 属性）<br>2. 新增 Island 架构指南（三层 Layer、upgrade 策略、Speculative Loading）<br>3. 新增 RPC 使用指南（@lessjs/rpc 配置和示例）<br>4. 每篇文档包含完整代码示例和架构图<br>5. 基于 Dogfooding 经验补充常见问题和最佳实践 | docs/ |
| P1-5 | **添加集成测试** | 19 个纯 Deno 单元测试，零浏览器/E2E 测试 | 1. 引入 Playwright 作为 E2E 测试框架<br>2. 覆盖核心流程：DSD 渲染 → 浏览器解析 → Island 水合 → 事件绑定<br>3. 覆盖三种 Layer 的组件行为验证<br>4. 至少 5 个 E2E 测试用例通过<br>5. CI 集成 Playwright 测试（可选运行，不阻断主 CI） | 全局 |

### P2 — 可以推迟（不阻断版本发布）

| # | 需求 | 说明 | 推迟理由 |
|---|------|------|----------|
| P2-1 | **runtime-shim 产物体积优化** | 自动生成后可进一步 tree-shake 未使用函数 | 不阻断发布，可在后续版本持续优化 |
| P2-2 | **日志输出可配置化** | 支持 JSON 结构化输出、日志级别运行时配置 | 当前 console 输出已满足开发需求，可随日志系统演进逐步添加 |

---

## 4. 需求依赖关系

```
P0-1 (runtime-shim 自动生成)
  └── 依赖 P0-3 (render-dsd 拆分已完成) — 源文件拆分后才可准确映射生成

P0-2 (错误分类指南)
  └── 无硬依赖，但建议在 P0-1 之后（runtime-shim 自动生成时同步处理其内部 console 调用）

P1-3 (parse5 优化 O(n²))
  └── 依赖 P0-3 (render-dsd 拆分已完成) — render-nested.ts 独立后才可安全重构

P1-4 (高级特性文档)
  └── 依赖 P0-1 (runtime-shim 自动生成) — DSD 文档需要反映最终实现
  └── 依赖 P1-3 (parse5 优化) — 嵌套渲染文档需基于优化后的实现

P1-5 (Playwright 集成测试)
  └── 依赖 P0-1 (runtime-shim 自动生成) — E2E 测试需基于稳定的 runtime
  └── 依赖 P0-2 (错误分类指南) — 测试需验证结构化日志输出
```

**建议实施顺序**:
1. **P0-1** (runtime-shim 自动生成) — 消除最大工程风险
2. **P0-2** (错误分类指南) — 统一日志体系
3. **P1-3** (parse5 优化) — 性能提升
4. **P1-4** (高级特性文档) — 基于稳定实现撰写
5. **P1-5** (Playwright 集成测试) — 最终验证

P0-1 和 P0-2 可并行；P1-3 与 P1-4 可并行（文档先基于当前实现起草，P1-3 完成后补充优化内容）。

---

## 5. 待确认问题

| # | 问题 | 影响 | 建议 |
|---|------|------|------|
| Q-1 | runtime-shim.ts 自动生成的技术选型：ts-morph vs 自定义 AST 转换 vs esbuild 插件？ | P0-1 实施方案和工期 | ts-morph API 更友好但引入新依赖；自定义 AST 无新依赖但开发量更大。建议 ts-morph，因为一次性代码生成脚本，不影响运行时 |
| Q-2 | runtime-shim 生成时机：Vite 插件 build 阶段 vs 独立 deno task？ | P0-1 构建流程 | 建议 Vite 插件 buildStart 钩子生成，与现有 SSG 流程一致 |
| Q-3 | 结构化日志模块是否需要支持日志级别运行时切换（如 `LESSJS_LOG_LEVEL=warn`）？ | P0-2 API 复杂度 | 建议 v0.8 仅支持编译时配置（debug 在生产构建中移除），运行时级别切换推迟到 P2 |
| Q-4 | 日志前缀规范：子包用 `[LessJS/SSG]` 还是保持 `[LessJS SSG]`？ | P0-2 前缀格式 | 建议统一用 `/` 分隔：`[LessJS]`、`[LessJS/SSG]`、`[LessJS/Blog]`，便于 grep 和日志分析工具解析 |
| Q-5 | parse5 优化后是否保留 regex 实现作为 fallback？ | P1-3 兼容性 | 不建议保留。parse5@7.0.0 已是项目依赖，无需 fallback。保留旧实现只会增加维护负担 |
| Q-6 | Playwright 测试运行环境：本地 Deno + Chromium vs CI Docker？ | P1-5 CI 集成 | 建议 CI 用 `npx playwright install --with-deps`，本地用 `deno task test:e2e`。SSG 产物是纯静态 HTML，Playwright 直接打开 dist/ 即可 |
| Q-7 | 高级特性文档的发布位置：docs 站内新增页面 vs 独立 guide 仓库？ | P1-4 发布策略 | 建议在现有 docs/ 站内新增，与已有文档保持一致 |
| Q-8 | P0-2 替换全部 124+ 处 console.* 调用是否属于 Breaking Change？ | 版本兼容 | 日志输出不是公开 API，不属于 Breaking Change。但需注意：如果下游用户 grep `[LessJS]` 前缀做监控，前缀格式变更可能影响 |

---

## 6. 约束与风险

### 约束

- **零运行时核心不变**: @lessjs/core 不引入运行时依赖（parse5 仅用于构建时 AST 解析，不进入 runtime bundle）
- **DSD-first**: 任何渲染管线变更不能破坏 Declarative Shadow DOM 的浏览器原生解析
- **技术栈**: Deno 2.x + TypeScript + Vite 8.x + parse5@7.0.0（已有依赖）+ Playwright（新增）
- **向后兼容**: runtime-shim.ts 自动生成后，导出 API 签名不变

### 风险

| 风险 | 概率 | 影响 | 缓解 |
|------|------|------|------|
| runtime-shim 自动生成脚本本身的正确性 | 中 | 高 | 生成后立即与现有手写版本做 diff 对比，确保零行为差异；CI 中增加一致性检查 |
| parse5 替换正则引入微妙的渲染差异 | 中 | 高 | 先用 parse5 重写，用现有 19 个单元测试 + docs 站全量构建输出做回归对比 |
| 124+ 处 console.* 替换引入遗漏或级别错误 | 低 | 中 | 分批替换：先替换 core（最多调用），每批替换后跑全量测试 |
| Playwright 在 Windows CI 上的稳定性 | 中 | 低 | E2E 测试设为可选（不阻断主 CI），CI 失败时允许重试 |
| 文档工作量超出预期 | 中 | 低 | 优先覆盖 DSD 和 Island（核心差异化特性），RPC 文档可降级为 API 参考 |

---

_文档作者: 许清楚 (Xu) · Product Manager | 2026-05-08_
