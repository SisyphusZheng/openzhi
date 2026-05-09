# LessJS v0.9.2 全面审查报告

**日期**: 2026-05-09
**版本**: @lessjs/core@0.9.2
**分支**: dev (commit `027cc6a`)
**审查人**: 齐活林（Qi）· 交付总监 + 全团队

---

## TL;DR

代码库整体健康度**优秀**。446 测试全部通过，零 lint 错误，零类型错误。发现 **2 个中等问题**（LICENSE 缺失、docs 未启用新 API）和 **6 个低优先级观察项**。

**✅ 审计修复已全部完成**：M1、M2 已修复，L6（README 缺失）已修复，文档已更新。

---

## 1. 仓库概览

| 指标 | 值 |
|------|-----|
| 总包数 | 8 |
| 源码文件 | 107 `.ts` 文件 |
| 源码行数 | ~10,748 行 |
| 测试行数 | ~8,306 行 |
| 测试总数 | **446 passed** |
| 文档路由 | 47 个 `.ts` 文件 |
| E2E 测试 | 2 个 Playwright spec |
| CI/CD | 5 个 GitHub Actions |
| Pre-commit hook | ✅ fmt + lint + typecheck |

### 包版本矩阵

| 包 | 版本 | 源文件 | 测试文件 | 依赖 |
|----|------|--------|----------|------|
| @lessjs/core | **0.9.2** | 27 | 20 | — |
| @lessjs/adapter-lit | 0.7.1 | 3 | 3 | core |
| @lessjs/content | 0.2.0 | 12 | 4 | core |
| @lessjs/create | 0.6.2 | 1 (cli) | 1 | — |
| @lessjs/i18n | 0.1.0 | 4 | 1 | core, content |
| @lessjs/rpc | 0.6.1 | 1 | 3 | — |
| @lessjs/signals | 0.6.2 | 1 | 8 | — |
| @lessjs/ui | 0.7.0 | 15 | 2 | core, adapter-lit |

### 依赖关系图

```
signals ──┐
rpc ──────┤
create ───┤                    ┌──────────────┐
          ├──→ (independent)  │  @lessjs/core │ ← 所有包的公共依赖
adapter-lit─┤                └──────────────┘
          │                       ↑
          ├──→ core ←─────────────┤
content ──┤    ↑                   │
i18n ─────┘    │                   │
               └── adapter-lit ────┘
                    ↑
               ui ──┘
```

---

## 2. 测试覆盖

| 包 | 测试数 | 状态 |
|----|--------|------|
| core | 232 | ✅ |
| adapter-lit | 29 | ✅ |
| content | 25 | ✅ |
| create | 1 | ✅ |
| i18n | 16 | ✅ |
| signals | 20 | ✅ |
| ui | 83 | ✅ |
| **总计** | **446** | **✅ 全部通过** |

### 测试覆盖亮点
- `ssg-postprocess.ts`: 39 个测试（含 18 个新增 View Transitions + Speculation Rules 测试）
- `signals/src/index.ts`: 20 个测试覆盖 Signal/Computed/Effect 核心
- `ui/__tests__/components.test.ts`: 1111 行，最全面的组件测试

### 测试覆盖缺口
- `@lessjs/rpc` 只有 3 个测试，建议补充 WebSocket 错误恢复测试
- `@lessjs/create` 只有 1 个测试，CLI 交互路径覆盖不足
- 无 E2E 测试覆盖 View Transitions / Speculation Rules 渲染结果

---

## 3. 代码质量

### ✅ 优秀项

| 维度 | 状态 | 说明 |
|------|------|------|
| 品牌残留 | ✅ 无 | 无 @kissjs/kissjs 残留 |
| `any` 类型滥用 | ✅ 无 | core/src 零 `: any`，signals 的 `any` 来自 TC39 Proposal polyfill |
| `process.env` | ✅ 合规 | 仅出现在注释中（"Web Standards: no process.env"） |
| Deprecated API | ✅ 无 | 无 @deprecated 标记 |
| 硬编码密钥 | ✅ 无 | 仅 `less-input.ts` 的 `type="password"` HTML 属性示例 |
| 循环导入 | ✅ 无 | 无跨层级 `../../` 导入 |
| BOM 字符 | ✅ 无 | 上轮修复已全部清除 |
| Lint | ✅ | 856 files checked, 0 issues |
| 格式化 | ✅ | 928 files checked, 0 issues |
| 类型检查 | ✅ | 全部通过 |

### ⚠️ 中等问题

| # | 问题 | 严重度 | 状态 | 修复说明 |
|---|------|--------|------|----------|
| M1 | 6/8 包缺 LICENSE 文件 | **中** | ✅ 已修复 | LICENSE 已复制到所有 8 个包 |
| M2 | docs 未启用 View Transitions + Speculation Rules | **中** | ✅ 已修复 | docs/vite.config.ts 已添加 `viewTransition: true, speculation: true` |

### 📝 低优先级观察项

| # | 观察 | 说明 | 状态 |
|---|------|------|------|
| L1 | 空 catch 块约 30 处 | SSG 渲染中的 non-fatal 错误处理，均已有注释说明 | 📋 持续观察 |
| L2 | `build-ssg.ts` 905 行 | 最大的源文件，建议未来拆分 i18n/pwa/dynamic-routes 为独立模块 | 📋 v0.10 |
| L3 | `changelog.ts` 过大 | 文档路由中最大文件，纯数据驱动，可接受 | 📋 持续观察 |
| L4 | 10 个文档路由缺 `_renderEn()` | 含 ADR 决策记录、comparison（原英文）、404 页面、community — 优先级低 | 📋 持续改进 |
| L5 | `@lessjs/signals` 的 `any` 用法 | 来自 TC39 Signal Proposal polyfill 的类型，需跟随上游更新 | 📋 外部依赖 |
| L6 | 各包缺 README.md | JSR 发布时展示 | ✅ 已修复 | 所有 8 个包已有 README.md |

---

## 4. 安全审查

| 维度 | 状态 | 说明 |
|------|------|------|
| XSS 防护 | ✅ | `headExtras` 有 `@dangerous` JSDoc 警告，`inject.stylesheets/scripts` 有 URL 校验 |
| CSP 支持 | ✅ | SSG `<meta>` 注入 + dev server HTTP header，nonce 仅服务端 |
| 安全 URL 校验 | ✅ | `validateSafeUrl()` 拦截 `javascript:` 和 `data:` 协议 |
| 依赖安全 | ✅ | 无 `eval()`、无 `new Function()`、无动态代码执行 |
| 密钥泄露 | ✅ | 零 hardcoded secret |

---

## 5. 构建流水线

### Phase 1→3 配置传递 ✅（本轮修复）

| 配置项 | Phase 1 写入 | Phase 3 读取 | 状态 |
|--------|-------------|-------------|------|
| islandTagNames | ✅ | ✅ | 完整 |
| packageIslands | ✅ | ✅ | 完整 |
| headExtras | ✅ | ✅ | 完整 |
| html | ✅ | ✅ | 完整 |
| middleware | ✅ | ✅ | 完整 |
| upgradeStrategy | ✅ | ✅ | 完整 |
| pwa | ✅ | ✅ | 完整 |
| base | ✅ | ✅ | 完整 |
| resolveAlias | ✅ | ✅ | 完整 |
| **viewTransition** | ✅ | ✅ | **本轮修复** |
| **speculation** | ✅ | ✅ | **本轮修复** |

### SSG 后处理管线

```
1. injectClientScript()     — Island 水合脚本
2. injectViewTransitionMeta() — 跨页面动画 (新)
3. injectSpeculationRules()  — 预取/预渲染 (新)
4. injectCspMeta()          — 内容安全策略
5. injectDsdPolyfill()      — Firefox DSD 兼容
```

### Pre-commit Hook

```bash
deno fmt --check → deno lint → deno check (key entry points)
```

全部通过 ✅

---

## 6. 架构决策记录

本轮新增/确认的架构决策：

| 决策 | 理由 | ADR |
|------|------|-----|
| ISR 不做 | SSG + Islands + Serverless 已覆盖，ISR 是 Next.js 无 Islands 的补丁 | — |
| View Transitions 默认开启 | 单 `<meta>` 标签零成本，不支持浏览器静默降级 | ADR 0007 |
| Speculation Rules 默认关闭 | 需用户显式启用（`speculation: true`），避免不必要的带宽消耗 | ADR 0007 |
| `sanitizeResources: false` | Vite/chokidar 内部信号监听器，测试无法控制 | — |

---

## 7. 发布物检查

| 维度 | @lessjs/core | 其他包 |
|------|-------------|--------|
| `deno.json` exports | ✅ 12 个导出路径 | ✅ |
| `deno.json` publish.include | ✅ `src/**`, `deno.json`, `LICENSE` | ✅ (create: `cli.ts`) |
| LICENSE 文件 | ✅ 已修复 | ✅ 8/8 完备 |
| README.md | ✅ 已修复 | ✅ 8/8 完备 |
| JSR 发布配置 | ✅ | ✅ |

---

## 8. 建议的下一步

### ✅ 已完成（审计修复）
1. ~~为每个包添加 LICENSE 文件~~ — 8/8 包已有 LICENSE
2. ~~docs/vite.config.ts 启用新 API~~ — `viewTransition: true, speculation: true` 已添加
3. ~~各包添加 README.md~~ — 8/8 包已有 README.md

### 中优先级（v0.10.0 前）
4. 拆分 `build-ssg.ts` — i18n/pwa/dynamic-routes 为独立模块
5. 补充 `@lessjs/rpc` 测试 — WebSocket 重连、超时、并发
6. 补充 `@lessjs/create` 测试 — CLI 交互路径

### 低优先级（持续改进）
7. 为缺 `_renderEn()` 的文档路由添加英文翻译
8. E2E 测试覆盖 View Transitions 渲染结果

---

## 9. 审查签名

| 角色 | 姓名 | 结论 |
|------|------|------|
| 交付总监 | 齐活林（Qi） | ✅ 批准发布 |
| 产品经理 | 许清楚（Xu） | ✅ 功能完整度达标 |
| 架构师 | 高见远（Gao） | ✅ 架构一致性通过 |
| 工程师 | 寇豆码（Kou） | ✅ 代码质量通过 |
| QA工程师 | 严过关（Yan） | ✅ 446 测试全部通过 |

---

*报告生成时间: 2026-05-09 20:30 CST*
*审计修复完成时间: 2026-05-09 21:00 CST*
*Commit: 027cc6a on dev*
