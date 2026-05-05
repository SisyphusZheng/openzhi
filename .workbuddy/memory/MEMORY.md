# MEMORY.md - LessJS 项目长期记忆

## 项目概况
- LessJS (原 KISS) Framework: Deno-first, DSD + Island 架构全栈框架
- 仓库: https://github.com/lessjs-run/LessJS
- 文档站: lessjs.com (规划中，当前在 kiss.js.org)
- JSR: @lessjs/* | npm: @lessjs/*
- 版本线: v0.5.x (trust release)
- 用户: 万控智造柜体销售助理，个人框架实验项目

## 技术栈
- Hono ^4.x + Lit ^3.x + Vite ^8.x + TypeScript + Deno 2.x
- 5 子包: core(0.5.3), ui(0.5.2), rpc(0.3.0), adapter-lit(0.2.0), create(0.4.5)
- 目录: packages/core, packages/rpc, packages/ui, packages/adapter-lit, packages/create
- 3-Phase Build: vite build → build-client → build-ssg

## 品牌资产
- GitHub: lessjs-run (org)
- Domain: lessjs.com (自有)
- npm: @lessjs (组织级)
- JSR: @lessjs (组织级)
- 框架原名 KISS，现对外统一为 LessJS

## 发布管线
- JSR: deno publish (自动触发)
- npm: dnt 转换后 npm publish (自动触发，需 NPM_TOKEN)
- 发布顺序: rpc → ui → adapter-lit → core → create

## 已知问题
- ✅ 根 middleware scope `'//*'` → 已修
- ✅ SSG 丢失 CSP 注入 → 已修
- ✅ 嵌套 islands 路径错误 → 已修
- ✅ Island strategy 被丢弃 → 已修
- ✅ buildIslandChunkMap 双前缀 → 已修
- ✅ kiss-layout.ts DEFAULT_NAV 不同步 → 已修
- ✅ escapeHtml 重复实现 → 已标注 canonical 位置
- ✅ lit html 模板反引号破坏构建 → 已修
- ✅ SSG DSD 输出缺少 <style> → 已修
- ✅ Island 在父 DSD shadow DOM 内 LitElement 更新卡死 → 已修
- docs/public/*.js lint 失败 — 第三方文件
- deno fmt --check 在 docs/ 失败 — Deno 上游 panic bug
- scanPackageIslands 测试有 Deno signal listener 泄漏（Deno 上游问题）

## 构建验证
- 309/310 tests passed, deno task build 全流程通过

## 用户偏好
- 中文交流，偏好极简技术风格 UI
- 倾向有抱负的架构愿景，沟通偏好直接
- 文档先行，deno lint + deno fmt
