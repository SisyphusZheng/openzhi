/**
 * Blog System — @lessjs/blog feature guide
 */
import { html, LitElement } from 'lit';
import { pageStyles } from '../../components/page-styles.js';
import '@lessjs/ui/less-layout';
import '../../islands/code-block.js';

export class BlogSystemPage extends LitElement {
  static override styles = [pageStyles];

  override render() {
    return html`
      <less-layout currentPath="/guide/blog-system">
        <div class="container">
          <h1>博客系统</h1>
          <p class="subtitle">
            <span class="inline-code">@lessjs/blog</span> 是 LessJS 的 Markdown 博客插件。
            把 <span class="inline-code">.md</span> 文件丢进内容目录，自动获得文章列表和详情页。
            纯 SSG 插件，不依赖 Lit，博客页面不加载页面级框架运行时。
          </p>

          <h2>快速开始</h2>
          <p>
            在 <span class="inline-code">vite.config.ts</span> 中添加一个 Vite 插件调用即可：
          </p>
          <code-block><pre><code>// vite.config.ts
import { less } from '@lessjs/core';
import { lessBlog } from '@lessjs/blog';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    less(),
    lessBlog({
      contentDir: resolve(__dirname, 'content/blog'),
      basePath: '/blog',
    }),
  ],
});</code></pre></code-block>

          <h2>Markdown 文件</h2>
          <p>
            内容目录中的每个 <span class="inline-code">.md</span> 文件自动成为一篇博客文章。
            Frontmatter 支持 <span class="inline-code">title</span>、<span class="inline-code">date</span>、
            <span class="inline-code">tags</span>、<span class="inline-code">draft</span> 和
            <span class="inline-code">excerpt</span>：
          </p>
          <code-block><pre><code>&lt;!-- content/blog/2026-05-08-hello-world.md --&gt;
---
title: 'Hello World'
date: '2026-05-08'
tags: ['lessjs', 'meta']
excerpt: 'First post on the new blog system.'
---

This is my first post.</code></pre></code-block>

          <h2>生成的路由</h2>
          <ul>
            <li><span class="inline-code">/blog/</span> — 文章列表页（最新在前）</li>
            <li><span class="inline-code">/blog/hello-world</span> — 单篇文章页</li>
          </ul>

          <h2>API 参考</h2>

          <h3>lessBlog(options)</h3>
          <p>
            Vite 插件，将博客集成到构建管线。配置项：
          </p>
          <ul>
            <li><span class="inline-code">contentDir</span> — Markdown 文件目录路径（必填）</li>
            <li><span class="inline-code">basePath</span> — 博客路由 URL 前缀（默认 <span class="inline-code">/blog</span>）</li>
            <li><span class="inline-code">markdown</span> — 自定义 Markdown 渲染函数（可选）</li>
          </ul>

          <h3>getPosts()</h3>
          <p>
            返回所有非草稿文章，按日期降序排列。在路由组件中用于渲染列表页。
          </p>

          <h3>getPostBySlug(slug)</h3>
          <p>
            按 slug（文件名去掉日期前缀和 <span class="inline-code">.md</span>）获取单篇文章。
            未找到或为草稿时返回 <span class="inline-code">undefined</span>。
          </p>

          <h3>parseMarkdownFile(content, filename)</h3>
          <p>
            解析 Markdown 文件（含 gray-matter frontmatter）。
            返回 <span class="inline-code">{ frontmatter, content, html, slug }</span>。
          </p>

          <h3>slugFromFilename(filename)</h3>
          <p>
            从文件名提取 slug：<span class="inline-code">2026-05-08-my-post.md</span>
            → <span class="inline-code">my-post</span>。
          </p>

          <h2>架构约束</h2>
          <p>
            博客包不依赖 Lit，作为纯 SSG 插件运行：Markdown 输入，静态路由输出。
            博客页面不加载页面级框架运行时，交互组件仍以 island 形式存在。
          </p>
          <p>
            v0.8 范围：<span class="inline-code">.md → 路由 → 列表/文章页</span>。
            暂不支持 MDX、评论、分页和标签系统。
          </p>

          <div class="nav-row">
            <a href="/guide/ssg" class="nav-link">&larr; Rendering & SSG</a>
            <a href="/guide/rpc" class="nav-link">RPC 远程调用 &rarr;</a>
          </div>
        </div>
      </less-layout>
    `;
  }
}

customElements.define('page-blog-system', BlogSystemPage);
export default BlogSystemPage;
export const tagName = 'page-blog-system';
