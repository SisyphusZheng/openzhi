# v0.5.4 — KISS → LessJS 全面更名 + Pre-0.6 修复

## 概述

v0.5.4 是一次全面的品牌更名与代码清理版本。框架从「KISS」正式更名为「LessJS」，完成了 90+ 个文件、1000+ 行代码的重命名工作。同时修复了移动端 sidebar 无法打开的关键 Bug，并补完善了测试覆盖。

---

## 主要变更

### 🏷️ 品牌更名：KISS → LessJS

| 范围 | 变更内容 |
|------|---------|
| 包名 | `@kissjs/*` → `@lessjs/*`（JSR/npm 已更新）|
| 主函数 | `kiss()` → `less()` |
| 类名 | `KissButton` → `LessButton`, `KissLayout` → `LessLayout` 等 |
| 目录 | `.kiss/` 构建临时目录 → `.less/` |
| 域名 | `kiss.js.org` → `lessjs.com` |
| 文档 | README.en.md 全文重写，所有文档页面品牌更新 |
| CSS 变量 | `--kiss-*` → `--less-*`（69 处） |
| UI 组件 | `kissUI()` → `lessUI()`, 所有 TagName 变量更新 |
| 路由路径 | `/kiss-compiler` → `/less-compiler`, `/kiss-ui` → `/less-ui` |
| 内部变量 | `kissColorTokens` → `lessColorTokens` 等 |
| 事件名 | 自定义事件 `kiss-*` → `less-*` |
| CI | `deploy-api.yml` KISS 引用更新 |
| ADR | 全部 4 个决策文档品牌更新 |

### 🐛 Bug 修复

| # | 问题 | 修复 |
|---|------|------|
| A6 | 移动端 sidebar 点击汉堡菜单只出现遮罩，无 sidebar | CSS `:has()` 不能穿透 Shadow DOM，改用 `:host([menu-open])` + `firstUpdated()` 监听器 + 通用 JS 管理器 |
| A2 | `PlannedIslandStrategy` 类型幽灵声明 | 添加 `@deprecated` 标注 |

### ✅ 测试增强

| # | 变更 |
|---|------|
| A7 | adapter-lit 新增：CSS提取、嵌套模板、事件/属性剥离、nothing sentinel、数组值、escape 一致性测试 |
| | 总测试数：**322 个全部通过** |

---

## 文件变更统计

- **105 个文件变更**
- **1,171 行新增，905 行删除**
- 4 个文件重命名（kiss-compiler → less-compiler ×2, kiss-ui → less-ui, ADR）
- 2 个新文件：`mobile-menu.js`, `escape-consistency.test.ts`

---

## 向前兼容说明

- `@kissjs/*` 包名仍可通过 npm 重定向使用，但建议所有新项目使用 `@lessjs/*`
- `kiss()` 函数作为 `less()` 的别名保留，但标记为废弃
- `.kiss/` 临时目录仍被 .gitignore 忽略，同时新增 `.less/`
- 所有旧路由 `/kiss-compiler` 和 `/kiss-ui` 不再提供服务，已重定向到新路径

---

## 后续计划

- **v0.6**：DSD + Island Communication（L2 Nested DSD、safe/unsafe HTML、slot/projection、Error visibility）
- **v0.7**：Serverless Fullstack
- **v0.8**：SSG + ISR + PWA + Streaming DSD
