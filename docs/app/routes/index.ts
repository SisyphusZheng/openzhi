import { css, html, LitElement } from '@kissjs/core';
import '@kissjs/ui/kiss-layout';

export const tagName = 'docs-home';

export default class DocsHome extends LitElement {
  static styles = css`
    :host { display: block; }

    /* ─── Hero — full-width diagonal split ─── */
    .hero-wrap {
      position: relative;
      height: 400px;
      background: var(--kiss-bg-base);
      overflow: hidden;
    }
    .hero-dark {
      position: absolute; inset: 0;
      clip-path: polygon(0 0, 58% 0, 100% 42%, 100% 100%, 38% 100%);
      background: #000;
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
      color: var(--kiss-text-primary, #fff);
      letter-spacing: -4px;
      line-height: 0.9;
      margin: 0;
    }
    .hero-tagline {
      font-size: 10px;
      color: #555;
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
      border: 0.5px solid var(--kiss-text-primary, #000);
      background: transparent;
      color: var(--kiss-text-primary, #000);
      font-size: 11px;
      cursor: pointer;
      letter-spacing: 2px;
      text-transform: uppercase;
      transition: all 0.15s;
      font-family: inherit;
    }
    .hero-ping:hover {
      background: var(--kiss-text-primary, #000);
      color: var(--kiss-bg-base, #fff);
    }
    .hero-ping:disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }
    .hero-box {
      background: var(--kiss-bg-base, #fff);
      border: 0.5px solid var(--kiss-border, #ccc);
      border-radius: 2px;
      padding: 10px 14px;
      min-width: 180px;
      min-height: 36px;
      font-family: 'SF Mono','Fira Code','Consolas',monospace;
      font-size: 10px;
      color: var(--kiss-text-secondary, #555);
      line-height: 1.6;
    }
    .hero-box .prompt { color: var(--kiss-text-muted, #aaa); }
    .hero-box .result { color: var(--kiss-text-primary, #000); }
    .hero-box .loading { color: var(--kiss-text-tertiary, #888); }
    .hero-dot {
      position: absolute;
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--kiss-text-primary, #000);
      top: 38%; left: 61%;
      z-index: 3;
    }
    .hero-foot {
      position: absolute;
      bottom: 20px;
      left: 48px;
      z-index: 3;
      font-size: 9px;
      color: var(--kiss-text-muted, #444);
      letter-spacing: 3px;
    }
    .hero-foot em { font-style: normal; font-weight: 500; }

    /* ─── Content sections (minimal) ─── */
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

    /* Features — minimal grid, no borders */
    .features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
    }
    .feature {
      padding: 1.5rem 0;
      border-top: 0.5px solid var(--kiss-border);
    }
    .feature:nth-child(-n+2) { border-top: none; }
    .feature h3 {
      font-size: 12px;
      font-weight: 500;
      color: var(--kiss-text-primary);
      margin: 0 0 6px;
    }
    .feature p {
      font-size: 11px;
      color: var(--kiss-text-tertiary);
      margin: 0;
      line-height: 1.7;
    }

    /* Links row */
    .links {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 0.5px solid var(--kiss-border);
    }
    .link-item {
      font-size: 11px;
      color: var(--kiss-text-secondary);
      text-decoration: none;
      padding: 4px 0;
      border-bottom: 0.5px solid transparent;
      transition: all 0.15s;
    }
    .link-item:hover {
      color: var(--kiss-text-primary);
      border-color: var(--kiss-text-primary);
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
          <div class="hero-dark"></div>
          <div class="hero-line">
            <svg viewBox="0 0 1000 400" preserveAspectRatio="none">
              <line x1="580" y1="0" x2="380" y2="400" stroke="var(--kiss-border)" stroke-width="0.5"/>
            </svg>
          </div>
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
            <em style="color:var(--kiss-text-muted)">jamstack</em>
            ·
            <em style="color:var(--kiss-text-primary)">islands</em>
            ·
            <em style="color:var(--kiss-text-muted)">web std</em>
          </div>
        </div>

        <!-- Content -->
        <div class="content">
          <div class="section-label">Built with web standards</div>
          <div class="features">
            <div class="feature">
              <h3>Web standards first</h3>
              <p>No new abstractions. Know the platform, know KISS. HTTP via Fetch API, UI via Web Components, modules via ESM.</p>
            </div>
            <div class="feature">
              <h3>Islands architecture</h3>
              <p>Only interactive components load JavaScript. Zero JS for static content, full interactivity where you need it.</p>
            </div>
            <div class="feature">
              <h3>Type-safe RPC</h3>
              <p>End-to-end type safety via Hono RPC. No code generation. Server and client share types directly.</p>
            </div>
            <div class="feature">
              <h3>SSG + DSD</h3>
              <p>Build-time static generation with Declarative Shadow DOM. Server-rendered HTML that hydrates instantly on the client.</p>
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
