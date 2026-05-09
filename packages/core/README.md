# @lessjs/core

LessJS 框架核心 — 路由扫描、SSR/SSG 构建、Declarative Shadow DOM 渲染、CLI。

## 安装

```bash
deno add jsr:@lessjs/core
```

## 快速开始

```ts
// vite.config.ts
import { less } from '@lessjs/core';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    less({
      routesDir: 'app/routes',
      islandsDir: 'app/islands',
    }),
  ],
});
```

## 核心能力

- **路由扫描**：基于文件系统的路由，自动发现 `app/routes/` 下的页面和 API 路由
- **SSR/SSG 构建**：三阶段构建管线（SSR bundle → Client islands → SSG）
- **Declarative Shadow DOM**：服务端渲染输出原生 DSD，零客户端 JS 依赖
- **Island Upgrade**：按需水合交互组件，4 种加载策略（eager/lazy/idle/visible）
- **View Transitions**：跨页面 MPA 动画，默认开启
- **Speculation Rules**：浏览器 prefetch/prerender，显式启用
- **Hono API Routes**：基于 Fetch API 的服务端路由

## 配置选项

```ts
less({
  routesDir: 'app/routes', // 页面路由目录
  islandsDir: 'app/islands', // Island 组件目录
  componentsDir: 'app/components', // 共享组件目录
  html: { title: 'My App' }, // HTML 模板配置
  viewTransition: true, // View Transitions API（默认开启）
  speculation: true, // Speculation Rules API（默认关闭）
  pwa: { name: 'My App' }, // PWA 配置
  inject: { // 自定义注入
    stylesheets: [],
    scripts: [],
    headFragments: [],
  },
  packageIslands: [], // 第三方包 Island
});
```

## 导出路径

| 路径                            | 说明                        |
| ------------------------------- | --------------------------- |
| `@lessjs/core`                  | 主插件 `less()`             |
| `@lessjs/core/render-dsd`       | DSD SSR 渲染器              |
| `@lessjs/core/less-runtime`     | SSR 运行时 shim             |
| `@lessjs/core/logger`           | 结构化日志 `createLogger()` |
| `@lessjs/core/navigation`       | Navigation API              |
| `@lessjs/core/island-manifest`  | Island 清单生成             |
| `@lessjs/core/cli/build`        | 构建命令                    |
| `@lessjs/core/cli/build-client` | 客户端构建                  |
| `@lessjs/core/cli/build-ssg`    | SSG 构建                    |

## 许可

MIT License
