# LessJS

[English](./README.en.md) | 简体中文

Deno-first Web Components 框架。基于 **Declarative Shadow DOM SSR/SSG + Island 升级**：先输出可爬取、可缓存的 HTML，再按需升级交互组件。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Deno](https://img.shields.io/badge/Deno-2.7%2B-000000)](https://deno.com/)
[![JSR](https://img.shields.io/badge/JSR-published-blue)](https://jsr.io/@lessjs/core)
[![@lessjs/core](https://img.shields.io/jsr/v/@lessjs/core?label=@lessjs/core)](https://jsr.io/@lessjs/core)

## 特性

- **SSG-first** — 静态 HTML 输出，零 JS 首屏
- **Declarative Shadow DOM** — WHATWG 标准，无框架标记
- **Island 升级** — 仅交互组件加载客户端 JS
- **Renderer Protocol** — 结构化渲染输出 + 错误分类 + DSD 指标
- **多适配器** — Lit 内置，可扩展非 Lit 适配器
- **Deno workspace** — 纯 ESM，零 `package.json`

## 快速开始

```bash
deno run -A jsr:@lessjs/create my-app
cd my-app
deno task dev      # 开发服务器
deno task build    # SSG 构建
```

要求：Deno 2.7+ / 支持 Declarative Shadow DOM 的现代浏览器

## 包

| 包                     | 职责                                              |
| ---------------------- | ------------------------------------------------- |
| `@lessjs/core`         | DSD 渲染器、Renderer Protocol、island、navigation |
| `@lessjs/adapter-vite` | Vite 编排、路由扫描、SSG 管线                     |
| `@lessjs/adapter-lit`  | Lit TemplateResult → DSD HTML                     |
| `@lessjs/app`          | 统一入口 `lessjs()`                               |
| `@lessjs/content`      | Blog、Nav、Sitemap 插件                           |
| `@lessjs/i18n`         | 国际化路由                                        |
| `@lessjs/ui`           | Web Components 组件库                             |
| `@lessjs/signals`      | Signals 辅助                                      |
| `@lessjs/rpc`          | Fetch RPC                                         |
| `@lessjs/create`       | 项目脚手架                                        |

## 渲染管线

```
render() → RenderAdapter → renderDSD() → DSD HTML → SSG → 浏览器解析
                                                       ↓
                                            customElements.upgrade()
                                                       ↓
                                            dsd-interactive → 绑定 hydrateEvents
```

## 路线图

| 版本  | 目标                     | 状态   |
| ----- | ------------------------ | ------ |
| v0.15 | Renderer Kernel Protocol | 开发中 |
| v0.16 | WC Package Protocol      | 规划中 |
| v0.17 | Ecosystem Entry          | 规划中 |
| v1.0  | API Freeze               | 远期   |

详见 [ADR-0024](docs/adr/README.md) 和 [ADR-0025](docs/adr/0025-renderer-protocol.md)。

## 治理文档

```
docs/
├── adr/           架构决策记录
├── changelog/     版本变更日志
├── conventions/   编码规范
├── sop/           标准作业流程
└── status/        项目状态 + 审核归档
```

## 贡献

参见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## License

MIT
