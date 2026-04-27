# KISS Framework 当前状态

> 最后更新: 2026-04-27

## JSR 发布状态

| 包 | 版本 | JSR 状态 | 说明 |
|---|---|---|---|
| @kissjs/core | 0.2.1 | ✅ 已发布 | 核心框架 — 包内 Island 自动检测 |
| @kissjs/rpc | 0.1.3 | ✅ 已发布 | RPC 客户端 |
| @kissjs/ui | 0.2.0 | ✅ 已发布 | UI 组件库 — kiss-theme-toggle Island |

## v0.2.0 新功能

### Package Islands 自动检测
- `packageIslands` 配置项：声明要扫描的包名
- `scanPackageIslands()`：动态导入包并读取 `islands` 导出
- 客户端构建自动生成包内 Island 的导入和注册代码

### kiss-theme-toggle Island
- 从 kiss-layout 提取为独立 Island 组件
- DSD + hydration，策略 eager（立即应用主题）
- kiss-layout 简化为静态组件

### 已知限制
- `packageIslands` 的客户端构建（`configFile: false`）依赖 Vite alias 解析包路径
- 包内 Island 必须从 `@kissjs/core` 导入（而非直接 `import from 'lit'`），否则 Node/Vite 环境无法解析
- docs 站使用本地 Island 副本绕过此限制（dogfooding）

## CI/CD

| 工作流 | 触发条件 | 状态 |
|---|---|---|
| deploy.yml | push main | ✅ 自动部署到 GitHub Pages |
| publish.yml | deno.json 版本变更 | ✅ 自动发布到 JSR（需 JSR_TOKEN secret） |
| test.yml | push/PR | ✅ 30 个测试全绿 |
| lint.yml | push/PR | ✅ deno lint + fmt |

## 技术栈

| 层 | 技术 | 版本 |
|---|---|---|
| 运行时 | Deno | ^2.x |
| HTTP | Hono | ^4.x |
| UI | Lit | ^3.x |
| Build | Vite | ^6.x |
| SSR | @lit-labs/ssr | ^3.3.x |
| 类型 | TypeScript | ^5.x |

## 下一步

- [ ] 修复 packageIslands 客户端构建的包解析问题
- [ ] 添加 packageIslands 集成测试
- [ ] kiss-layout GitHub 链接可配置化
- [ ] 清理旧 theme-toggle Island（docs 站）
