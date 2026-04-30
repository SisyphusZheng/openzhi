import { css, html, LitElement } from '@kissjs/core';
import '@kissjs/ui/kiss-layout';

export const tagName = 'docs-home';

export default class DocsHome extends LitElement {
  static styles = css`
    :host { display: block; }

    /* Hero — minimal, inside layout */
    .hero {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      padding: 3rem 0 2rem;
      border-bottom: 0.5px solid var(--kiss-border);
      margin-bottom: 2rem;
    }
    .hero-brand {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .hero-kiss {
      font-size: 42px;
      font-weight: 500;
      color: var(--kiss-text-primary);
      letter-spacing: -2px;
      line-height: 1;
    }
    .hero-tagline {
      font-size: 10px;
      color: var(--kiss-text-muted);
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .hero-term {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .hero-ping {
      padding: 4px 16px;
      border-radius: 2px;
      border: 0.5px solid var(--kiss-text-primary);
      background: transparent;
      color: var(--kiss-text-primary);
      font-size: 10px;
      cursor: pointer;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      transition: all 0.15s;
      font-family: inherit;
      white-space: nowrap;
    }
    .hero-ping:hover {
      background: var(--kiss-text-primary);
      color: var(--kiss-bg-base);
    }
    .hero-ping:disabled {
      opacity: 0.25;
      cursor: not-allowed;
    }
    .hero-result {
      font-family: 'SF Mono','Fira Code','Consolas',monospace;
      font-size: 10px;
      color: var(--kiss-text-muted);
      min-width: 120px;
    }
    .hero-result .r { color: var(--kiss-text-primary); }

    /* Features */
    .features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      margin-bottom: 2rem;
    }
    .feature {
      padding: 1rem 0;
      border-top: 0.5px solid var(--kiss-border);
    }
    .feature:nth-child(-n+2) { border-top: none; }
    .feature h3 {
      font-size: 12px;
      font-weight: 500;
      color: var(--kiss-text-primary);
      margin: 0 0 4px;
    }
    .feature p {
      font-size: 11px;
      color: var(--kiss-text-tertiary);
      margin: 0;
      line-height: 1.6;
    }

    /* Links */
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
      padding: 0.75rem 0;
      transition: all 0.15s;
    }
    .link-item + .link-item { border-left: 0.5px solid var(--kiss-border); }
    .link-item:hover {
      color: var(--kiss-text-primary);
      background: var(--kiss-bg-surface);
    }

    @media (max-width: 640px) {
      .hero { flex-direction: column; align-items: flex-start; gap: 16px; }
      .hero-kiss { font-size: 32px; }
      .features { grid-template-columns: 1fr; }
      .feature:nth-child(2) { border-top: 0.5px solid var(--kiss-border); }
    }
  `;

  _loading = false;
  _result = '';

  _ping = async () => {
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
        <div class="hero">
          <div class="hero-brand">
            <div class="hero-kiss">KISS</div>
            <div class="hero-tagline">keep it simple, stupid</div>
          </div>
          <div class="hero-term">
            <button class="hero-ping" @click=${this._ping} ?disabled=${this._loading}>
              ${this._loading ? 'pinging...' : 'ping server'}
            </button>
            <span class="hero-result">
              ${this._loading ? html`<span>connecting...</span>` : ''}
              ${this._result ? html`<span class="r">${this._result}</span>` : ''}
            </span>
          </div>
        </div>

        <div class="features">
          <div class="feature">
            <h3>Web standards first</h3>
            <p>HTTP via Fetch API, UI via Web Components, modules via ESM.</p>
          </div>
          <div class="feature">
            <h3>Islands architecture</h3>
            <p>Only interactive components load JS. Static pages ship zero.</p>
          </div>
          <div class="feature">
            <h3>Type-safe RPC</h3>
            <p>End-to-end types via Hono RPC — no code generation.</p>
          </div>
          <div class="feature">
            <h3>SSG + DSD</h3>
            <p>Build-time static generation with instant client hydration.</p>
          </div>
        </div>

        <div class="links">
          <a class="link-item" href="/guide/getting-started">Getting started →</a>
          <a class="link-item" href="/demo">Live demo →</a>
          <a class="link-item" href="https://github.com/SisyphusZheng/kiss">GitHub →</a>
          <a class="link-item" href="https://jsr.io/@kissjs/core">JSR →</a>
        </div>
      </kiss-layout>
    `;
  }
}

customElements.define('docs-home', DocsHome);
