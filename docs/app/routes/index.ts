import { css, html, LitElement } from '@kissjs/core';
import '@kissjs/ui/kiss-layout';

export const tagName = 'docs-home';

export default class DocsHome extends LitElement {
  static styles = css`
    :host {
      display: block;
      /* Hero uses its own color vars, independent of page theme
         because the hero simultaneously uses black AND white backgrounds. */
      --hero-text: #fff;
      --hero-text-dim: #888;
      --hero-text-muted: #555;
      --hero-bg-dark: #000;
      --hero-bg-light: #fff;
      --hero-text-light: #000;
      --hero-border-light: #ccc;
      --hero-text-light-dim: #888;
    }

    /* ─── Hero — full-width diagonal split ─── */
    .hero-wrap {
      position: relative;
      height: 400px;
      overflow: hidden;
      /* Break out of layout container constraints to be full viewport width */
      width: 100vw;
      margin-left: calc(-50vw + 50%);
    }
    .hero-diag {
      position: absolute; inset: 0;
      /* Clean diagonal: black on top-left, white on bottom-right */
      background: linear-gradient(to bottom right, #000 0%, #000 51%, #f8f8f8 51%, #f8f8f8 100%);
    }
    .hero-diag-line {
      position: absolute; inset: 0;
      pointer-events: none;
      /* Diagonal accent line exactly on the split */
      background: linear-gradient(to bottom right, transparent 0%, transparent calc(51% - 0.25px), #ccc calc(51% - 0.25px), #ccc 51%, transparent 51%, transparent 100%);
    }
    .hero-line {
      position: absolute; inset: 0;
      pointer-events: none;
      z-index: 1;
    }
    .hero-line svg { width: 100%; height: 100%; display: block; }

    .hero-brand {
      position: absolute;
      left: 48px; top: 56px;
      z-index: 3;
    }
    .hero-kiss {
      font-size: 88px;
      font-weight: 500;
      color: var(--hero-text);
      letter-spacing: -4px;
      line-height: 0.9;
      margin: 0;
    }
    .hero-tagline {
      font-size: 10px;
      color: var(--hero-text-dim);
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-top: 16px;
    }

    .hero-term {
      position: absolute;
      right: 48px; bottom: 48px;
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 12px;
    }
    .hero-ping {
      padding: 6px 20px;
      border-radius: 2px;
      border: 0.5px solid var(--hero-text-light);
      background: transparent;
      color: var(--hero-text-light);
      font-size: 11px;
      cursor: pointer;
      letter-spacing: 2px;
      text-transform: uppercase;
      transition: all 0.15s;
      font-family: inherit;
    }
    .hero-ping:hover {
      background: var(--hero-text-light);
      color: var(--hero-bg-light);
    }
    .hero-ping:disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }
    .hero-box {
      background: var(--hero-bg-light);
      border: 0.5px solid var(--hero-border-light);
      border-radius: 2px;
      padding: 10px 14px;
      min-width: 180px;
      min-height: 36px;
      font-family: 'SF Mono','Fira Code','Consolas',monospace;
      font-size: 10px;
      color: var(--hero-text-light-dim);
      line-height: 1.6;
    }
    .hero-box .prompt { color: var(--hero-border-light); }
    .hero-box .result { color: var(--hero-text-light); }
    .hero-box .loading { color: var(--hero-text-light-dim); }
    .hero-dot {
      position: absolute;
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--hero-text-light);
      top: 38%; left: 61%;
      z-index: 3;
    }
    .hero-foot {
      position: absolute;
      bottom: 20px;
      left: 48px;
      z-index: 3;
      font-size: 9px;
      color: var(--hero-text-muted);
      letter-spacing: 3px;
    }
    .hero-foot em { font-style: normal; font-weight: 500; }

    /* ─── Content sections ─── */
    .content {
      max-width: 800px;
      margin: 0 auto;
      padding: 4rem 2rem 6rem;
    }
    .section-label {
      font-size: 9px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--kiss-text-muted);
      margin-bottom: 2rem;
    }
    .section-label-line {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .section-label-line span {
      font-size: 9px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--kiss-text-muted);
      white-space: nowrap;
    }
    .section-label-line hr {
      flex: 1;
      border: none;
      border-top: 0.5px solid var(--kiss-border);
      margin: 0;
    }

    /* Features grid */
    .features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      margin-bottom: 3rem;
    }
    .feature {
      padding: 1.5rem 0;
      border-top: 0.5px solid var(--kiss-border);
      transition: background 0.15s;
      padding-left: 1rem;
      padding-right: 1rem;
      margin: 0 -1rem;
      border-radius: 2px;
    }
    .feature:hover {
      background: var(--kiss-bg-surface);
    }
    .feature:nth-child(-n+2) { border-top: none; }
    .feature h3 {
      font-size: 12px;
      font-weight: 500;
      color: var(--kiss-text-primary);
      margin: 0 0 6px;
      letter-spacing: -0.01em;
    }
    .feature p {
      font-size: 11px;
      color: var(--kiss-text-tertiary);
      margin: 0;
      line-height: 1.7;
    }

    /* Stats row */
    .stats {
      display: flex;
      gap: 0;
      border-top: 0.5px solid var(--kiss-border);
      padding-top: 2rem;
      margin-bottom: 3rem;
    }
    .stat {
      flex: 1;
      text-align: center;
    }
    .stat + .stat {
      border-left: 0.5px solid var(--kiss-border);
    }
    .stat-val {
      font-size: 28px;
      font-weight: 500;
      color: var(--kiss-text-primary);
      line-height: 1;
      margin-bottom: 4px;
    }
    .stat-label {
      font-size: 9px;
      color: var(--kiss-text-muted);
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    /* Links row */
    .links {
      display: flex;
      gap: 0;
      border-top: 0.5px solid var(--kiss-border);
    }
    .link-item {
      flex: 1;
      text-align: center;
      font-size: 11px;
      color: var(--kiss-text-secondary);
      text-decoration: none;
      padding: 1rem 0;
      transition: all 0.15s;
    }
    .link-item + .link-item {
      border-left: 0.5px solid var(--kiss-border);
    }
    .link-item:hover {
      color: var(--kiss-text-primary);
      background: var(--kiss-bg-surface);
    }

    @media (max-width: 640px) {
      .hero-wrap { height: 500px; }
      .hero-kiss { font-size: 56px; }
      .hero-brand { left: 24px; top: 32px; }
      .hero-term { right: 24px; bottom: 24px; align-items: flex-start; }
      .hero-foot { left: 24px; bottom: 16px; }
      .content { padding: 2rem 1.5rem 4rem; }
      .features { grid-template-columns: 1fr; }
    }
  `;

  private _loading = false;
  private _result = '';

  private async _ping() {
    this._loading = true;
    this._result = '';
    this.requestUpdate();
    try {
      const r = await fetch('https://kiss-demo-api.sisyphuszheng.deno.net/api');
      const d = await r.json();
      this._result = `${d.framework} v${d.version}  ${d.timestamp.slice(11,19)}`;
    } catch {
      this._result = 'failed';
    } finally {
      this._loading = false;
      this.requestUpdate();
    }
  }

  override render() {
    return html`
      <kiss-layout home>
        <!-- Hero -->
        <div class="hero-wrap">
          <div class="hero-diag"></div>
          <div class="hero-diag-line"></div>
          <div class="hero-dot"></div>

          <div class="hero-brand">
            <div class="hero-kiss">KISS</div>
            <div class="hero-tagline">keep it simple, stupid</div>
          </div>

          <div class="hero-term">
            <button class="hero-ping" @click=${this._ping} ?disabled=${this._loading}>
              ${this._loading ? 'pinging...' : 'ping server'}
            </button>
            <div class="hero-box">
              <span class="prompt">$ curl api.kiss</span>
              ${this._loading ? html`<span class="loading">connecting...</span>` : ''}
              ${this._result ? html`<span class="result">${this._result}</span>` : ''}
            </div>
          </div>

          <div class="hero-foot">
            <em style="color:var(--hero-text-muted)">jamstack</em>
            ·
            <em style="color:var(--hero-text)">islands</em>
            ·
            <em style="color:var(--hero-text-muted)">web std</em>
          </div>
        </div>

        <!-- Content -->
        <div class="content">
          <div class="section-label-line">
            <hr>
            <span>built with web standards</span>
            <hr>
          </div>
          <div class="features">
            <div class="feature">
              <h3>Web standards first</h3>
              <p>HTTP via Fetch API, UI via Web Components, modules via ESM. No framework lock-in.</p>
            </div>
            <div class="feature">
              <h3>Islands architecture</h3>
              <p>Only interactive components load JS. Static pages ship zero JavaScript.</p>
            </div>
            <div class="feature">
              <h3>Type-safe RPC</h3>
              <p>End-to-end types via Hono RPC — server and client share types without code generation.</p>
            </div>
            <div class="feature">
              <h3>SSG + DSD</h3>
              <p>Build-time static generation with Declarative Shadow DOM that hydrates instantly.</p>
            </div>
          </div>

          <div class="stats">
            <div class="stat">
              <div class="stat-val">&lt;20KB</div>
              <div class="stat-label">runtime payload</div>
            </div>
            <div class="stat">
              <div class="stat-val">0KB</div>
              <div class="stat-label">static pages</div>
            </div>
            <div class="stat">
              <div class="stat-val">4</div>
              <div class="stat-label">run-times</div>
            </div>
            <div class="stat">
              <div class="stat-val">100%</div>
              <div class="stat-label">web std</div>
            </div>
          </div>

          <div class="links">
            <a class="link-item" href="/guide/getting-started">Getting started →</a>
            <a class="link-item" href="/demo">Live demo →</a>
            <a class="link-item" href="https://github.com/SisyphusZheng/kiss">GitHub →</a>
            <a class="link-item" href="https://jsr.io/@kissjs/core">JSR →</a>
          </div>
        </div>
      </kiss-layout>
    `;
  }
}

customElements.define('docs-home', DocsHome);
