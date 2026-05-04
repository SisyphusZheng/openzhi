import { css, html, LitElement } from 'lit';
import { pageStyles } from '../../components/page-styles.js';
import '@kissjs/ui/kiss-layout';
import '../../islands/code-block.js';

export class GettingStartedPage extends LitElement {
  static override styles = [
    pageStyles,
    css`
      .step {
        margin-bottom: 2rem;
      }
      .step-header {
        font-size: 1rem;
        font-weight: 600;
        margin: 0 0 0.5rem;
        color: var(--kiss-text-primary);
      }
      .step-desc {
        color: var(--kiss-text-tertiary);
        font-size: 0.8125rem;
        margin-bottom: 0.5rem;
      }
      .note {
        background: var(--kiss-bg-surface);
        border: 0.5px solid var(--kiss-border);
        border-radius: 4px;
        padding: 0.75rem 1rem;
        font-size: 0.8125rem;
        color: var(--kiss-text-secondary);
        margin-top: 1rem;
      }
      .inline-code {
        font-family: "SF Mono", "Fira Code", monospace;
        font-size: 0.8125rem;
        background: var(--kiss-bg-elevated);
        padding: 0.125rem 0.375rem;
        border-radius: 3px;
      }
    `,
  ];
  override render() {
    return html`
      <kiss-layout currentPath="/guide/getting-started">
        <div class="container">
          <h1>快速上手</h1>
          <p class="subtitle">一条命令创建，一条命令构建，静态产物随处部署。</p>

          <div class="step">
            <h2 class="step-header">1. 创建项目</h2>
            <p class="step-desc">使用 create-kiss CLI 一键生成脚手架。</p>
            <code-block
            ><pre>
              <code>deno run -A jsr:@kissjs/create my-app
              cd my-app</code></pre></code-block>
            <div class="note">
              <strong>版本说明：</strong>v0.5.0 起，新项目直接从
              <span class="inline-code">lit</span> 导入 Lit API，生产构建使用
              <span class="inline-code">deno task build</span> 单命令主路径。
            </div>
          </div>

          <div class="step">
            <h2 class="step-header">2. 启动开发服务器</h2>
            <p class="step-desc">Vite 开发服务器 + Hono SSR，实时刷新。</p>
            <code-block><pre><code>deno task dev</code></pre></code-block>
            <p>打开 <span class="inline-code">localhost:5173</span> 查看页面。</p>
          </div>

          <div class="step">
            <h2 class="step-header">3. 构建</h2>
            <p class="step-desc">KISS 使用单命令生产构建，输出静态 HTML 和必要的 island JS。</p>
            <code-block><pre>
              <code>deno task build</code></pre></code-block>
            <div class="note">
              <strong>架构说明：</strong>单命令内部仍保留三个可观测阶段：SSR bundle +
              <span class="inline-code">.kiss/build-metadata.json</span>、Island client chunks、SSG static
              HTML。分阶段是调试和 CI 边界，不是 quickstart 主心智。
            </div>
            <div class="note">
              <strong>工具链说明：</strong>KISS runtime、SSG CLI 和文档站任务都是 Deno-first。请使用 Deno
              2.7+；Vite 8 通过 <span class="inline-code">deno run -A npm:vite</span>
              执行。如果遇到 <span class="inline-code">node:util.parseEnv</span> 兼容缺口，请先运行
              <span class="inline-code">deno upgrade</span>。
            </div>
          </div>

          <div class="step">
            <h2 class="step-header">4. 预览构建产物</h2>
            <code-block><pre><code>deno task preview</code></pre></code-block>
          </div>

          <div class="step">
            <h2 class="step-header">5. 部署到 GitHub Pages</h2>
            <p class="step-desc">
              <span class="inline-code">dist/</span> 目录为纯静态网站，可直接部署到任意静态托管平台。
            </p>
            <code-block
            ><pre>
              <code># 示例：gh-pages 分支
              cd dist
              git init
              git add -A
              git commit -m "Deploy"
              git push -f https://github.com/USER/REPO.git HEAD:gh-pages</code></pre></code-block>
            </div>

            <div class="step">
              <h2 class="step-header">项目结构</h2>
              <code-block
              ><pre>
                <code>my-app/
                ├── app/
                │   ├── routes/          # 页面组件（LitElement）
                │   │   ├── index.ts     # 首页 /
                │   │   └── ...
                │   └── islands/         # 交互式 Island（LitElement）
                │       └── my-counter.ts
                ├── deno.json            # 任务定义 + 依赖
                └── vite.config.ts       # KISS 插件配置</code></pre></code-block>
              </div>

              <div class="nav-row">
                <a href="/guide/design-philosophy" class="nav-link">设计哲学 &rarr;</a>
                <a href="/examples" class="nav-link">示例 &rarr;</a>
              </div>
            </div>
          </kiss-layout>
        `;
      }
    }

    customElements.define('page-getting-started', GettingStartedPage);
    export default GettingStartedPage;
    export const tagName = 'page-getting-started';
