# @lessjs/content

统一内容插件 — Blog + Nav + Sitemap 三合一，SSG 内容管线。

## 安装

```bash
deno add jsr:@lessjs/content
```

## 功能

- **Blog 模块**：Markdown frontmatter 解析、slug 生成、草稿过滤
- **Nav 模块**：路由文件 meta 扫描 → sidebar 自动生成，`virtual:less-nav` 虚拟模块
- **Sitemap 模块**：SSG 产物扫描 → `sitemap.xml` + `robots.txt` 自动生成

## 使用

```ts
// vite.config.ts
import { lessContent } from '@lessjs/content';

export default defineConfig({
  plugins: [
    lessContent({
      blog: {
        contentDir: resolve(__dir, 'content/blog'),
        basePath: '/blog',
      },
      nav: {
        routesDir: resolve(__dir, 'app/routes'),
        headerNav: [
          { href: '/guide/positioning', label: 'Docs' },
          { href: '/blog', label: 'Blog' },
        ],
      },
      sitemap: {
        hostname: 'https://example.com',
      },
    }),
  ],
});
```

## 许可

MIT License
