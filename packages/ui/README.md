# @lessjs/ui

LessJS UI 组件库 — 基于 Lit + Declarative Shadow DOM 的 Web Components。

## 安装

```bash
deno add jsr:@lessjs/ui
```

## 组件清单

| 组件            | 标签名              | 说明                                     |
| --------------- | ------------------- | ---------------------------------------- |
| LessButton      | `less-button`       | 按钮（formAssociated, :state(disabled)） |
| LessInput       | `less-input`        | 输入框（:state(invalid), ARIA）          |
| LessCard        | `less-card`         | 卡片容器                                 |
| LessCodeBlock   | `less-code-block`   | 代码块（Prism 高亮 + 复制）              |
| LessLayout      | `less-layout`       | 页面布局（sidebar + header + footer）    |
| LessThemeToggle | `less-theme-toggle` | Dark/Light 主题切换                      |
| LessHeroPing    | `less-hero-ping`    | API 状态指示器                           |
| LessDialog      | `less-dialog`       | 原生 dialog + ::backdrop + inert         |

## 使用

```ts
// vite.config.ts
import { less } from '@lessjs/core';

export default defineConfig({
  plugins: [
    less({
      packageIslands: ['@lessjs/ui'],
    }),
  ],
});
```

```html
<less-button variant="primary" type="submit">Submit</less-button>
<less-input label="Email" type="email" required></less-input>
<less-theme-toggle></less-theme-toggle>
```

## 设计令牌

所有组件使用 CSS 自定义属性，支持 Dark/Light 主题切换：

```ts
import { lessRootColorCSS } from '@lessjs/ui/tokens/colors';
```

## 许可

MIT License
