# @lessjs/i18n

国际化插件 — SSG locale 展开、路径辅助、语言切换。

## 安装

```bash
deno add jsr:@lessjs/i18n
```

## 功能

- **SSG locale 展开**：构建时为每个 locale × 每个路由渲染页面
- **`i18nStaticPaths()`**：为动态路由提供 locale 参数展开
- **`switchLocale()`**：路由辅助函数，生成跨 locale 链接
- **Language switcher**：与 `less-layout` 集成的语言切换器

## 使用

```ts
// vite.config.ts
import { lessI18n } from '@lessjs/i18n';

export default defineConfig({
  plugins: [
    lessI18n({
      locales: ['en', 'zh'],
      defaultLocale: 'en',
    }),
  ],
});
```

## 许可

MIT License
