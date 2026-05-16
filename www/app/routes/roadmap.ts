export const meta = {
  section: 'Roadmap & Decisions',
  label: 'Roadmap',
  order: 10,
};

import { headerNav, navSections } from 'virtual:less-nav';
import { css, html, LitElement } from 'lit';
import { pageStyles } from '../components/page-styles.js';
import '@lessjs/ui/less-layout';

export class RoadmapPage extends LitElement {
  declare locale?: string;

  static override styles = [
    pageStyles,
    css`
      .callout {
        padding: 1rem;
        background: var(--less-bg-muted);
        border-left: 4px solid var(--less-color-primary);
        margin: 1.5rem 0;
      }

      .callout p {
        margin: 0;
      }

      .reset-table,
      .version-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
      }

      .reset-table th,
      .reset-table td,
      .version-table th,
      .version-table td {
        border: 1px solid var(--less-border);
        padding: 0.75rem;
        text-align: left;
        vertical-align: top;
      }

      .reset-table th,
      .version-table th {
        background: var(--less-bg-muted);
        font-weight: 600;
      }

      .tracks {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
        gap: 1rem;
        margin: 1.5rem 0;
      }

      .track {
        border: 1px solid var(--less-border);
        border-radius: 8px;
        padding: 1rem;
        background: var(--less-bg-surface);
      }

      .track h3 {
        margin: 0 0 0.5rem;
        font-size: 1rem;
      }

      .track p {
        margin: 0;
        color: var(--less-text-secondary);
      }

      .phase {
        border-left: 4px solid var(--less-color-primary);
        padding-left: 1rem;
        margin: 2rem 0;
      }

      .phase h3 {
        margin: 0 0 0.5rem;
        color: var(--less-color-primary);
      }

      .phase.deferred {
        border-left-color: var(--less-text-secondary);
      }

      .status {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .status.done {
        background: #d4edda;
        color: #155724;
      }

      .status.next {
        background: #fff3cd;
        color: #856404;
      }

      .status.planned {
        background: #cce5ff;
        color: #004085;
      }

      .status.deferred {
        background: var(--less-bg-muted);
        color: var(--less-text-secondary);
      }

      .compact-list,
      .criteria-list {
        margin: 0.75rem 0 0;
        padding-left: 1.25rem;
      }

      .compact-list li,
      .criteria-list li {
        margin: 0.45rem 0;
      }

      code {
        font-size: 0.92em;
        overflow-wrap: anywhere;
      }

      @media (max-width: 720px) {
        .reset-table,
        .version-table {
          display: block;
          overflow-x: auto;
        }

        .reset-table th,
        .reset-table td,
        .version-table th,
        .version-table td {
          min-width: 9rem;
        }
      }
    `,
  ];

  override render() {
    return (this.locale || 'zh') === 'en' ? this._renderEn() : this._renderZh();
  }

  private _renderZh() {
    return html`
      <less-layout
        locale="${this.locale || 'zh'}"
        .locales="${['en', 'zh']}"
        .navItems="${navSections}"
        .headerNav="${headerNav}"
        current-path="/roadmap"
      >
        <div class="container">
          <h1>Roadmap</h1>
          <p class="subtitle">
            从渲染内核到通用 WC SSR/SSG 引擎 + Registry Hub。六个 Phase，近细远粗。 当前版本 <code
            >v0.15.3</code>，下一里程碑 <code>v0.16.0</code>。
          </p>

          <div class="callout">
            <p>
              事实优先、标准优先、协议优先。已测试的能力进入文档；未冻结的留在 roadmap 和 ADR；registry
              hub 只在 renderer kernel、package manifest 和 release parity 稳定之后才建设。版本纪律遵循
              ADR 0006。
            </p>
          </div>

          <h2>Six-Phase Vision</h2>
          <table class="version-table">
            <thead>
              <tr>
                <th>Phase</th>
                <th>Version</th>
                <th>Name</th>
                <th>Goal</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>v0.15.x</td>
                <td>Renderer Kernel</td>
                <td>结构化渲染输出、错误分类、构建报告</td>
                <td><span class="status done">Done</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>v0.16.x</td>
                <td>WC Package Protocol</td>
                <td>CEM manifest + 本地 registry + 构建集成</td>
                <td><span class="status next">Next</span></td>
              </tr>
              <tr>
                <td>3</td>
                <td>v0.17.x</td>
                <td>Ecosystem Entry</td>
                <td>第三方 WC 包接入、CLI 工具、多适配器</td>
                <td><span class="status planned">Planned</span></td>
              </tr>
              <tr>
                <td>4</td>
                <td>v0.18.x</td>
                <td>Hub Foundation</td>
                <td>公共 registry API、搜索、快照预览、安全审计</td>
                <td><span class="status deferred">Far</span></td>
              </tr>
              <tr>
                <td>5</td>
                <td>v0.19.x</td>
                <td>Platform Maturity</td>
                <td>Scoped Registries、设计系统 CI/CD、Edge 渲染</td>
                <td><span class="status deferred">Far</span></td>
              </tr>
              <tr>
                <td>6</td>
                <td>v1.0.x</td>
                <td>General-Purpose Engine</td>
                <td>任意 CEM manifest WC 包 → 自动 SSR/SSG</td>
                <td><span class="status deferred">Vision</span></td>
              </tr>
            </tbody>
          </table>

          <h2>Phase Details</h2>

          <div class="phase">
            <span class="status done">Done</span>
            <h3>Phase 1: v0.15.x — Renderer Kernel</h3>
            <p>
              v0.15.1 审计门禁、v0.15.2 RenderOutput + RenderHooks、v0.15.3 dsd-report + Release Gate。
              渲染内核产品化完成。
            </p>
            <ul class="compact-list">
              <li>
                <code>RenderOutput</code> / <code>RenderError</code> / <code>HydrationHint</code>
                结构化类型
              </li>
              <li><code>RendererProtocol</code> 命名适配器 + <code>RenderHooks</code> 生命周期</li>
              <li><code>dsd-report.json</code> SSG 构建报告</li>
              <li>7-gate release pipeline: fmt / lint / typecheck / audit / test / build / e2e</li>
            </ul>
          </div>

          <div class="phase">
            <span class="status next">Next</span>
            <h3>Phase 2: v0.16.x — WC Package Protocol</h3>
            <p>
              从 3 字段 <code>PackageIslandMeta</code> 升级为 20+ 字段 CEM 兼容
              <code>LessPackageManifest</code>。LessJS 第一次能以数据描述 WC 包。
            </p>
            <ul class="compact-list">
              <li>v0.16.0: Manifest 类型系统 + 本地 registry + validate + @lessjs/ui manifest</li>
              <li>v0.16.1: Manifest 驱动构建集成（条件性 — 可能推到 v0.17）</li>
              <li>关键规则: v0.16.0 可独立交付，不因 v0.16.1 阻塞</li>
            </ul>
          </div>

          <div class="phase">
            <span class="status planned">Planned</span>
            <h3>Phase 3: v0.17.x — Ecosystem Entry</h3>
            <p>从"只能用自己的包"变成"能接入生态"。</p>
            <ul class="compact-list">
              <li><code>less add &lt;pkg&gt;</code> 一键安装第三方 WC 包</li>
              <li><code>less validate-manifest</code> 验证任意包的 manifest</li>
              <li>npm 兼容层 + 第三方 WC 包 SSR 降级策略</li>
              <li>多框架适配器探索（adapter-vanilla 增强、adapter-react）</li>
            </ul>
          </div>

          <div class="phase">
            <span class="status planned">Planned</span>
            <h3>Phase 4: v0.18.x — Hub Foundation</h3>
            <p>从本地 registry 到公共 registry，需要 Web 服务基础设施。</p>
            <ul class="compact-list">
              <li>Hub API + 包搜索 + 浏览界面</li>
              <li>SSR/SSG 快照预览 + bundle cost 分析</li>
              <li>版本冲突检测 + 安全审计 + 发布者身份验证</li>
            </ul>
          </div>

          <div class="phase deferred">
            <span class="status deferred">Far</span>
            <h3>Phase 5: v0.19.x — Platform Maturity</h3>
            <p>生产就绪平台：Scoped Registries、设计系统 CI/CD、Edge 渲染。</p>
          </div>

          <div class="phase deferred">
            <span class="status deferred">Vision</span>
            <h3>Phase 6: v1.0.x — General-Purpose Engine</h3>
            <p>任意 CEM manifest WC 包 → 自动 SSR/SSG，零配置。从"工具"走向"标准"。</p>
          </div>

          <h2>Rejected / Deferred</h2>
          <ul class="criteria-list">
            <li>No webpack：不把 LessJS 路线图倒回 webpack 或旧 bundler preset。</li>
            <li>
              No OpenWC toolchain adoption：OpenWC 可学习，但不采用其旧测试栈和项目模板作为 LessJS
              主路径。
            </li>
            <li>
              No generic full-stack promise before renderer protocol stabilizes：先把 DSD/WC
              渲染内核做稳，再扩展上层能力。
            </li>
            <li>
              No centralized WC hub before
              manifest/protocol：先做自描述、扫描、索引和安全边界，再讨论中心化分发。
            </li>
          </ul>

          <h2>Reference Positioning</h2>
          <p>
            路线图参考
            <a href="https://html.spec.whatwg.org/multipage/scripting.html#the-template-element"
            >WHATWG HTML template / DSD 属性</a>、
            <a href="https://custom-elements-manifest.open-wc.org/">Custom Elements Manifest</a>、
            <a href="https://open-ui.org/">Open UI</a> 组件契约方向、
            <a href="https://open-wc.org/docs/">OpenWC</a> 的历史工具链经验、
            <a href="https://lit.dev/docs/v2/ssr/overview/">Lit SSR</a>、
            <a href="https://fast.design/docs/getting-started/quick-start">FAST</a>、
            <a href="https://wicg.github.io/webcomponents/proposals/Scoped-Custom-Element-Registries.html"
            >Scoped Custom Element Registries</a> 和
            <a href="https://drafts.css-houdini.org/">CSS Houdini</a>。这些参考只校准边界，不改变 LessJS
            的 Deno-first、standards-first 路线。
          </p>

          <nav class="nav-row">
            <a class="nav-link" href="/zh/decisions/20260515-1-renderer-kernel-registry-sop"
            >20260515 ADR/SOP →</a>
            <a class="nav-link" href="/decisions/0024-standards-first-wc-renderer-roadmap"
            >Strategic Roadmap ADR →</a>
            <a class="nav-link" href="/docs/decisions/adr-0006-version-roadmap">Version Roadmap ADR →</a>
            <a class="nav-link" href="/docs/decisions/adr-0007-npm-publishing-strategy"
            >Publishing Strategy →</a>
            <a class="nav-link" href="/docs/architecture">Architecture →</a>
          </nav>
        </div>
      </less-layout>
    `;
  }

  private _renderEn() {
    return html`
      <less-layout
        locale="${this.locale || 'en'}"
        .locales="${['en', 'zh']}"
        .navItems="${navSections}"
        .headerNav="${headerNav}"
        current-path="/en/roadmap"
      >
        <div class="container">
          <h1>Roadmap</h1>
          <p class="subtitle">
            From renderer kernel to general-purpose WC SSR/SSG engine + Registry Hub. Six phases,
            near-term fine and far-term coarse. Current version <code>v0.15.3</code>, next milestone <code
            >v0.16.0</code>.
          </p>

          <div class="callout">
            <p>
              Fact-first, standards-first, protocol-first. Tested capabilities move into docs; unfinished
              boundaries stay in the roadmap and ADRs; the registry hub only follows renderer kernel,
              package manifest, and release parity stability. Version discipline follows ADR 0006.
            </p>
          </div>

          <h2>Six-Phase Vision</h2>
          <table class="version-table">
            <thead>
              <tr>
                <th>Phase</th>
                <th>Version</th>
                <th>Name</th>
                <th>Goal</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>v0.15.x</td>
                <td>Renderer Kernel</td>
                <td>Structured render output, error taxonomy, build report</td>
                <td><span class="status done">Done</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>v0.16.x</td>
                <td>WC Package Protocol</td>
                <td>CEM manifest + local registry + build integration</td>
                <td><span class="status next">Next</span></td>
              </tr>
              <tr>
                <td>3</td>
                <td>v0.17.x</td>
                <td>Ecosystem Entry</td>
                <td>Third-party WC packages, CLI tooling, multi-adapter</td>
                <td><span class="status planned">Planned</span></td>
              </tr>
              <tr>
                <td>4</td>
                <td>v0.18.x</td>
                <td>Hub Foundation</td>
                <td>Public registry API, search, snapshots, security audit</td>
                <td><span class="status deferred">Far</span></td>
              </tr>
              <tr>
                <td>5</td>
                <td>v0.19.x</td>
                <td>Platform Maturity</td>
                <td>Scoped Registries, design system CI/CD, Edge rendering</td>
                <td><span class="status deferred">Far</span></td>
              </tr>
              <tr>
                <td>6</td>
                <td>v1.0.x</td>
                <td>General-Purpose Engine</td>
                <td>Any CEM manifest WC package → automatic SSR/SSG</td>
                <td><span class="status deferred">Vision</span></td>
              </tr>
            </tbody>
          </table>

          <h2>Phase Details</h2>

          <div class="phase">
            <span class="status done">Done</span>
            <h3>Phase 1: v0.15.x — Renderer Kernel</h3>
            <p>
              v0.15.1 audit gates, v0.15.2 RenderOutput + RenderHooks, v0.15.3 dsd-report + Release Gate.
              The rendering kernel is productized.
            </p>
            <ul class="compact-list">
              <li>
                <code>RenderOutput</code> / <code>RenderError</code> / <code>HydrationHint</code>
                structured types
              </li>
              <li><code>RendererProtocol</code> named adapters + <code>RenderHooks</code> lifecycle</li>
              <li><code>dsd-report.json</code> SSG build report</li>
              <li>7-gate release pipeline: fmt / lint / typecheck / audit / test / build / e2e</li>
            </ul>
          </div>

          <div class="phase">
            <span class="status next">Next</span>
            <h3>Phase 2: v0.16.x — WC Package Protocol</h3>
            <p>
              Upgrade from 3-field <code>PackageIslandMeta</code> to 20+ field CEM-compatible
              <code>LessPackageManifest</code>. LessJS can describe WC packages as data for the first
              time.
            </p>
            <ul class="compact-list">
              <li>v0.16.0: Manifest type system + local registry + validate + @lessjs/ui manifest</li>
              <li>v0.16.1: Manifest-driven build integration (conditional — may defer to v0.17)</li>
              <li>Key rule: v0.16.0 ships even if v0.16.1 integration is not ready</li>
            </ul>
          </div>

          <div class="phase">
            <span class="status planned">Planned</span>
            <h3>Phase 3: v0.17.x — Ecosystem Entry</h3>
            <p>From "own packages only" to "ecosystem-ready".</p>
            <ul class="compact-list">
              <li><code>less add &lt;pkg&gt;</code> one-command install of third-party WC packages</li>
              <li><code>less validate-manifest</code> validate any package's manifest</li>
              <li>npm compat layer + third-party WC SSR fallback strategies</li>
              <li>Multi-framework adapter exploration (adapter-vanilla enhanced, adapter-react)</li>
            </ul>
          </div>

          <div class="phase">
            <span class="status planned">Planned</span>
            <h3>Phase 4: v0.18.x — Hub Foundation</h3>
            <p>From local registry to public registry. Requires Web service infrastructure.</p>
            <ul class="compact-list">
              <li>Hub API + package search + browse UI</li>
              <li>SSR/SSG snapshot previews + bundle cost analysis</li>
              <li>Version conflict detection + security audit + publisher authentication</li>
            </ul>
          </div>

          <div class="phase deferred">
            <span class="status deferred">Far</span>
            <h3>Phase 5: v0.19.x — Platform Maturity</h3>
            <p>Production-ready platform: Scoped Registries, design system CI/CD, Edge rendering.</p>
          </div>

          <div class="phase deferred">
            <span class="status deferred">Vision</span>
            <h3>Phase 6: v1.0.x — General-Purpose Engine</h3>
            <p>
              Any CEM manifest WC package → automatic SSR/SSG, zero config. From "tool" to "standard".
            </p>
          </div>

          <h2>Rejected / Deferred</h2>
          <ul class="criteria-list">
            <li>No webpack: do not route LessJS back through webpack or older bundler presets.</li>
            <li>
              No OpenWC toolchain adoption: learn from OpenWC without adopting its older testing stack or
              project template as the main path.
            </li>
            <li>
              No generic full-stack promise before renderer protocol stabilizes: make the DSD/WC rendering
              kernel solid first.
            </li>
            <li>
              No centralized WC hub before manifest/protocol: self-description, scanning, indexing, and
              security boundaries come first.
            </li>
          </ul>

          <h2>Reference Positioning</h2>
          <p>
            This roadmap considers
            <a href="https://html.spec.whatwg.org/multipage/scripting.html#the-template-element"
            >WHATWG HTML template / DSD attributes</a>,
            <a href="https://custom-elements-manifest.open-wc.org/">Custom Elements Manifest</a>,
            <a href="https://open-ui.org/">Open UI</a> component-contract work,
            <a href="https://open-wc.org/docs/">OpenWC</a> historical tooling experience,
            <a href="https://lit.dev/docs/v2/ssr/overview/">Lit SSR</a>,
            <a href="https://fast.design/docs/getting-started/quick-start">FAST</a>,
            <a href="https://wicg.github.io/webcomponents/proposals/Scoped-Custom-Element-Registries.html"
            >Scoped Custom Element Registries</a>, and
            <a href="https://drafts.css-houdini.org/">CSS Houdini</a>. These references calibrate
            boundaries; they do not change LessJS's Deno-first, standards-first path.
          </p>

          <nav class="nav-row">
            <a class="nav-link" href="/zh/decisions/20260515-1-renderer-kernel-registry-sop"
            >20260515 ADR/SOP →</a>
            <a class="nav-link" href="/en/decisions/0024-standards-first-wc-renderer-roadmap"
            >Strategic Roadmap ADR →</a>
            <a class="nav-link" href="/en/docs/decisions/adr-0006-version-roadmap"
            >Version Roadmap ADR →</a>
            <a class="nav-link" href="/en/docs/decisions/adr-0007-npm-publishing-strategy"
            >Publishing Strategy →</a>
            <a class="nav-link" href="/en/docs/architecture">Architecture →</a>
          </nav>
        </div>
      </less-layout>
    `;
  }
}

customElements.define('page-roadmap', RoadmapPage);
export default RoadmapPage;
export const tagName = 'page-roadmap';
