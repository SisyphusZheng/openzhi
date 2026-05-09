# @lessjs/adapter-lit

Lit 适配器 — 在 LessJS SSR 管线中渲染 Lit 模板为 Declarative Shadow DOM。

## 安装

```bash
deno add jsr:@lessjs/adapter-lit
```

## 功能

- **Lit TemplateResult SSR**：将 `html` 模板字面量渲染为 DSD HTML
- **属性绑定保留**：`.prop=${val}` 转换为 kebab-case HTML 属性 + JSON 序列化
- **安全转义**：复用 `@lessjs/core/render-dsd` 的 `escapeHtml` / `escapeAttrValue`
- **WithDsdHydration Mixin**：桥接 DSD hydration gap，消除重复渲染

## 使用

```ts
import { registerAdapter } from '@lessjs/core';
import { litAdapter } from '@lessjs/adapter-lit';

registerAdapter(litAdapter);
```

## 导出路径

| 路径                      | 说明                  |
| ------------------------- | --------------------- |
| `@lessjs/adapter-lit`     | 主适配器 `litAdapter` |
| `@lessjs/adapter-lit/ssr` | SSR 工具函数          |

## 许可

MIT License
