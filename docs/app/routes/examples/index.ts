/**
 * Examples Gallery — KISS Architecture in Action
 *
 * 展示 KISS 框架的三个范式继承：
 * - Jamstack：静态前端 + Serverless API
 * - Islands Architecture：按需水合的交互岛屿
 * - Progressive Enhancement：语义基线，无 JS 可用
 */
import { css, html, LitElement } from '@kissjs/core';
import { pageStyles } from '../../components/page-styles.js';
import '../../components/layout.js';
import '../../islands/code-block.js';
import '@kissjs/ui/kiss-card';
import '@kissjs/ui/kiss-button';

export class ExamplesPage extends LitElement {
  static styles = [
    pageStyles,
    css`
      .example-grid {
        display: grid;
        gap: 1.5rem;
        margin: 1.5rem 0;
      }
      .example-card {
        padding: 1.5rem;
        background: var(--bg-surface);
        border: 1px solid var(--border-base);
        border-radius: 6px;
        transition: border-color 0.2s ease;
      }
      .example-card:hover {
        border-color: var(--border-hover);
      }
      .example-card h3 {
        margin: 0 0 0.5rem;
        font-size: 1.125rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .example-card .tag {
        font-size: 0.6875rem;
        padding: 0.125rem 0.375rem;
        background: var(--code-bg);
        border-radius: 3px;
        font-weight: 500;
      }
      .example-card .tag.k {
        color: #00e87b;
      }
      .example-card .tag.i {
        color: #f59e0b;
      }
      .example-card .tag.s1 {
        color: #3b82f6;
      }
      .example-card .tag.s2 {
        color: #8b5cf6;
      }
      .example-card p {
        margin: 0.5rem 0 1rem;
        color: var(--text-secondary);
        font-size: 0.9375rem;
      }
      .constraint-badges {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 1rem;
      }
      .constraint-badge {
        padding: 0.25rem 0.5rem;
        background: var(--bg-base);
        border: 1px solid var(--border-base);
        border-radius: 4px;
        font-size: 0.75rem;
        font-family: "SF Mono", "Fira Code", monospace;
      }
      .architecture-diagram {
        padding: 1.25rem;
        background: var(--bg-surface);
        border: 1px solid var(--border-base);
        border-radius: 6px;
        margin: 1.5rem 0;
        font-size: 0.8125rem;
        line-height: 1.8;
        font-family: "SF Mono", "Fira Code", monospace;
        white-space: pre-wrap;
        color: var(--text-secondary);
      }
      .nav-links {
        display: flex;
        gap: 0.75rem;
        margin-top: 1rem;
      }
    `,
  ];

  render() {
    return html`
      <app-layout currentPath="/examples">
        <div class="container">
          <h1>Examples</h1>
          <p class="subtitle">
            KISS Architecture 实战 — 三范式继承 + 四约束验证
          </p>

          <h2>KISS Architecture = Jamstack</h2>
          <p>
            KISS 架构是唯一全链路 Web Standards 的 Jamstack 实现：
          </p>

          <div class="architecture-diagram">
            ┌─────────────────────────────────────────────────────────────────┐ │ KISS Architecture │ │ │
            │ Jamstack Islands Architecture Progressive Enh. │ │ ┌─────┐ ┌─────────┐ ┌───────────┐ │ │ │ M
            │ ←─────────── │ │ ←───────── │ Content │ │ │ │ A │ │ Shadow │ │ First │ │ │ │ J │ │ DOM │ │ │
            │ │ └─────┘ └─────────┘ └───────────┘ │ │ │ │ │ │ │ ▼ ▼ ▼ │ │
            ┌──────────────────────────────────────────────────────┐ │ │ │ K·I·S·S 四约束 │ │ │ │ K:
            Knowledge — SSG + DSD (构建时已知) │ │ │ │ I: Isolated — Islands + Shadow DOM (隔离) │ │ │ │
            S: Semantic — 无 JS 基线 (语义可达) │ │ │ │ S: Static — CDN + Serverless (静态部署) │ │ │
            └──────────────────────────────────────────────────────┘ │
            └─────────────────────────────────────────────────────────────────┘
          </div>

          <h2>示例项目</h2>
          <div class="example-grid">
            <div class="example-card">
              <h3>
                Hello World
                <span class="tag k">K</span>
                <span class="tag s1">S</span>
              </h3>
              <div class="constraint-badges">
                <span class="constraint-badge">SSG + DSD</span>
                <span class="constraint-badge">零运行时</span>
              </div>
              <p>
                最小化 KISS 应用。展示 SSG + DSD 输出，内容在 JS 加载前可见。 使用 @kissjs/ui 组件。
              </p>
              <code-block
              ><pre><code>deno run -A npm:vite build
                # 输出: dist/index.html (含 DSD)</code></pre></code-block>
              <div class="nav-links">
                <kiss-button size="sm" href="/examples/hello">查看 Demo</kiss-button>
                <kiss-button
                  size="sm"
                  variant="ghost"
                  href="https://github.com/SisyphusZheng/kiss/tree/main/examples/hello"
                >源码</kiss-button>
              </div>
            </div>

            <div class="example-card">
              <h3>
                Minimal Blog
                <span class="tag k">K</span>
                <span class="tag i">I</span>
                <span class="tag s1">S</span>
              </h3>
              <div class="constraint-badges">
                <span class="constraint-badge">SSG</span>
                <span class="constraint-badge">Theme Island</span>
                <span class="constraint-badge">aria-current</span>
              </div>
              <p>
                静态博客示例。主题切换是唯一 Island，使用 localStorage 持久化。 导航高亮用 aria-current +
                CSS（L0+L1），零 JS。
              </p>
              <div class="nav-links">
                <kiss-button size="sm" href="/examples/minimal-blog">查看 Demo</kiss-button>
                <kiss-button
                  size="sm"
                  variant="ghost"
                  href="https://github.com/SisyphusZheng/kiss/tree/main/examples/minimal-blog"
                >源码</kiss-button>
              </div>
            </div>

            <div class="example-card">
              <h3>
                Fullstack
                <span class="tag k">K</span>
                <span class="tag i">I</span>
                <span class="tag s1">S</span>
                <span class="tag s2">S</span>
              </h3>
              <div class="constraint-badges">
                <span class="constraint-badge">SSG + DSD</span>
                <span class="constraint-badge">API Routes</span>
                <span class="constraint-badge">Counter Island</span>
                <span class="constraint-badge">Serverless</span>
              </div>
              <p>
                全栈示例。静态前端 + Serverless API Routes。 展示 KISS 架构的完整四约束：静态文件部署到
                CDN，API 部署到 Serverless。
              </p>
              <code-block
              ><pre><code># 部署架构
                dist/           → CDN / GitHub Pages
                api/            → Deno Deploy / CF Workers</code></pre></code-block>
              <div class="nav-links">
                <kiss-button size="sm" href="/examples/fullstack">查看 Demo</kiss-button>
                <kiss-button
                  size="sm"
                  variant="ghost"
                  href="https://github.com/SisyphusZheng/kiss/tree/main/examples/fullstack"
                >源码</kiss-button>
              </div>
            </div>
          </div>

          <h2>四约束验证清单</h2>
          <p>每个示例必须通过 K·I·S·S 四约束审查：</p>
          <code-block
          ><pre><code>K — 内容需要运行时获取？  → 应在构建时预渲染 (SSG + DSD)
            I — 新增了全局 JS？       → 必须封装为 Island (Shadow DOM)
            S — Island 禁用 JS 可用？ → 必须有语义 HTML 基线
            S — 引入了服务端进程？     → 只允许静态文件 + Serverless API</code></pre></code-block>

            <div class="nav-row">
              <a href="/styling/kiss-ui" class="nav-link">&larr; @kissjs/ui</a>
              <a href="/guide/deployment" class="nav-link">Deployment &rarr;</a>
            </div>
          </div>
        </app-layout>
      `;
    }
  }

  customElements.define('page-examples', ExamplesPage);
  export default ExamplesPage;
  export const tagName = 'page-examples';
