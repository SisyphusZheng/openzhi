# LessJS

简体中文 | [English](./README.en.md)

A Deno-first Web Components framework built on **Declarative Shadow DOM SSR/SSG +
Island Upgrade**: render crawlable, cacheable HTML first, then upgrade only the
interactive components that need browser APIs.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Deno](https://img.shields.io/badge/Deno-2.7%2B-000000)](https://deno.com/)
[![JSR](https://img.shields.io/badge/JSR-published-blue)](https://jsr.io/@lessjs/core)
[![@lessjs/core](https://img.shields.io/jsr/v/@lessjs/core?label=@lessjs/core)](https://jsr.io/@lessjs/core)

## Features

- **SSG-first** — static HTML output, zero-JS first paint
- **Declarative Shadow DOM** — WHATWG standard, no framework markers
- **Island upgrade** — client JS loaded only for interactive components
- **Renderer Protocol** — structured render output, error taxonomy, DSD metrics
- **Multi-adapter** — Lit built-in, extensible to non-Lit adapters
- **Deno workspace** — pure ESM, no `package.json`

## Quick Start

```bash
deno run -A jsr:@lessjs/create my-app
cd my-app
deno task dev      # dev server
deno task build    # SSG build
```

Requirements: Deno 2.7+ / modern browser with Declarative Shadow DOM support

## Packages

| Package                | Role                                                 |
| ---------------------- | ---------------------------------------------------- |
| `@lessjs/core`         | DSD renderer, Renderer Protocol, islands, navigation |
| `@lessjs/adapter-vite` | Vite orchestration, route scanning, SSG pipeline     |
| `@lessjs/adapter-lit`  | Lit TemplateResult → DSD HTML bridge                 |
| `@lessjs/app`          | Unified `lessjs()` entry                             |
| `@lessjs/content`      | Blog, nav, sitemap build plugins                     |
| `@lessjs/i18n`         | Locale expansion and route helpers                   |
| `@lessjs/ui`           | Web Components library and package islands           |
| `@lessjs/signals`      | Signals helpers and island effects                   |
| `@lessjs/rpc`          | Fetch-based RPC controller                           |
| `@lessjs/create`       | Project scaffold CLI                                 |

## Rendering Pipeline

```
render() → RenderAdapter → renderDSD() → DSD HTML → SSG → browser parses
                                                       ↓
                                            customElements.upgrade()
                                                       ↓
                                            dsd-interactive → bind hydrateEvents
```

## Roadmap

| Version | Target                   | Status         |
| ------- | ------------------------ | -------------- |
| v0.15   | Renderer Kernel Protocol | In development |
| v0.16   | WC Package Protocol      | Planned        |
| v0.17   | Ecosystem Entry          | Planned        |
| v1.0    | API Freeze               | Future         |

See [ADR-0024](docs/adr/README.md) and [ADR-0025](docs/adr/0025-renderer-protocol.md).

## Governance Docs

```
docs/
├── adr/           Architecture Decision Records
├── changelog/     Version changelogs
├── conventions/   Coding conventions
├── sop/           Standard Operating Procedures
└── status/        Project status + review archive
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT
