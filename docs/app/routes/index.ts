import { css, html, LitElement } from '@kissjs/core';
import '../components/layout.js';

export class DocsHome extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .hero {
      max-width: 800px;
      margin: 0 auto;
      padding: 6rem 2rem 3rem;
      text-align: center;
    }

    .hero h1 {
      font-size: 4.5rem;
      font-weight: 900;
      letter-spacing: -0.04em;
      margin: 0;
      color: #fff;
      line-height: 1;
    }

    .hero .tagline {
      font-size: 1.0625rem;
      color: #777;
      margin-top: 1.25rem;
      line-height: 1.7;
      font-weight: 400;
    }

    .hero .tagline strong {
      color: #ccc;
      font-weight: 600;
    }

    .hero .equation {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .eq-item {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: #fff;
    }

    .eq-item .eq-label {
      color: #555;
      font-weight: 400;
    }

    .eq-item .eq-val {
      padding: 0.25rem 0.5rem;
      border: 1px solid #222;
      border-radius: 2px;
      font-family: "SF Mono", "Fira Code", "Consolas", monospace;
      font-size: 0.8125rem;
      color: #bbb;
    }

    .cta {
      margin-top: 2.5rem;
      display: flex;
      gap: 0.75rem;
      justify-content: center;
    }

    .cta a {
      display: inline-flex;
      align-items: center;
      padding: 0.625rem 1.5rem;
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 2px;
      transition: background 0.15s, color 0.15s, border-color 0.15s;
    }

    .cta-primary {
      background: #fff;
      color: #000;
    }

    .cta-primary:hover {
      background: #ddd;
    }

    .cta-secondary {
      background: transparent;
      color: #777;
      border: 1px solid #222;
    }

    .cta-secondary:hover {
      color: #ccc;
      border-color: #444;
    }

    /* Standards */
    .standards {
      max-width: 800px;
      margin: 0 auto;
      padding: 2.5rem 2rem;
      border-top: 1px solid #1a1a1a;
      border-bottom: 1px solid #1a1a1a;
    }

    .standards .label {
      text-align: center;
      font-size: 0.6875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #444;
      margin-bottom: 1rem;
    }

    .standards .pill-row {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.375rem 0.75rem;
      border-radius: 2px;
      font-size: 0.75rem;
      font-weight: 500;
      background: #111;
      color: #999;
      border: 1px solid #1a1a1a;
    }

    .pill .check {
      color: #fff;
      font-size: 0.625rem;
    }

    /* Features */
    .features {
      max-width: 1000px;
      margin: 0 auto;
      padding: 3rem 2rem;
    }

    .features .section-label {
      font-size: 0.6875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #444;
      margin-bottom: 1.5rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1px;
      background: #1a1a1a;
      border: 1px solid #1a1a1a;
    }

    .feature-card {
      padding: 1.5rem;
      background: #0a0a0a;
      transition: background 0.2s;
    }

    .feature-card:hover {
      background: #0e0e0e;
    }

    .feature-card .icon {
      font-size: 1.25rem;
      margin-bottom: 0.625rem;
      opacity: 0.6;
    }

    .feature-card h2 {
      font-size: 0.9375rem;
      font-weight: 600;
      margin: 0 0 0.5rem;
      color: #fff;
      letter-spacing: -0.01em;
    }

    .feature-card p {
      font-size: 0.8125rem;
      color: #666;
      margin: 0;
      line-height: 1.6;
    }

    /* Comparison table */
    .comparison {
      max-width: 800px;
      margin: 0 auto;
      padding: 3rem 2rem;
      border-top: 1px solid #1a1a1a;
    }

    .comparison .label {
      font-size: 0.6875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #444;
      margin-bottom: 1.5rem;
    }

    .comparison-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px;
      background: #1a1a1a;
      border: 1px solid #1a1a1a;
    }

    .col-header {
      padding: 0.625rem 1rem;
      font-size: 0.6875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      background: #111;
    }

    .col-header.highlight {
      color: #fff;
    }
    .col-header.dim {
      color: #444;
    }

    .cell {
      padding: 0.625rem 1rem;
      background: #0a0a0a;
      font-size: 0.8125rem;
      color: #666;
    }

    .cell.highlight {
      color: #bbb;
      font-weight: 500;
    }

    /* JSR */
    .jsr {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 2rem 3rem;
      border-top: 1px solid #1a1a1a;
    }

    .jsr .label {
      text-align: center;
      font-size: 0.6875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #444;
      margin-bottom: 1rem;
    }

    .badge-row {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .jsr-badge {
      display: inline-flex;
      align-items: center;
      padding: 0.375rem 0.75rem;
      background: #111;
      border: 1px solid #1a1a1a;
      border-radius: 2px;
      font-size: 0.75rem;
      font-weight: 600;
      color: #999;
      text-decoration: none;
      font-family: "SF Mono", "Fira Code", "Consolas", monospace;
      transition: background 0.15s, color 0.15s, border-color 0.15s;
    }

    .jsr-badge:hover {
      background: #1a1a1a;
      color: #ccc;
      border-color: #333;
    }
  `;

  render() {
    return html`
      <app-layout home>
        <div class="hero">
          <h1>KISS</h1>
          <p class="tagline">
            <strong>Keep It Simple, Stupid.</strong><br>
            A minimal full-stack framework built on Web Standards.
          </p>
          <div class="equation">
            <span class="eq-item"><span class="eq-label">HTTP =</span> <span class="eq-val"
              >Fetch API</span></span>
            <span class="eq-item"><span class="eq-label">UI =</span> <span class="eq-val"
              >Web Components</span></span>
            <span class="eq-item"><span class="eq-label">Build =</span> <span class="eq-val"
              >ESM</span></span>
            </div>
            <div class="cta">
              <a class="cta-primary" href="/guide/getting-started">Get Started</a>
              <a class="cta-secondary" href="https://github.com/SisyphusZheng/kiss">GitHub</a>
            </div>
          </div>

          <div class="standards">
            <div class="label">Web Standards Coverage</div>
            <div class="pill-row">
              <span class="pill"><span class="check">&#10003;</span> Fetch API</span>
              <span class="pill"><span class="check">&#10003;</span> Web Components</span>
              <span class="pill"><span class="check">&#10003;</span> ESM</span>
              <span class="pill"><span class="check">&#10003;</span> Declarative Shadow DOM</span>
              <span class="pill"><span class="check">&#10003;</span> Islands</span>
            </div>
          </div>

          <div class="features">
            <div class="section-label">Why KISS</div>
            <div class="features-grid">
              <div class="feature-card">
                <div class="icon">&#9672;</div>
                <h2>Web Standards First</h2>
                <p>No new abstractions. If you know the web platform, you know KISS.</p>
              </div>
              <div class="feature-card">
                <div class="icon">&#9674;</div>
                <h2>Islands Architecture</h2>
                <p>Only interactive components load JS. Default homepage: 0 KB.</p>
              </div>
              <div class="feature-card">
                <div class="icon">&#9670;</div>
                <h2>Type-Safe RPC</h2>
                <p>End-to-end type safety with Hono RPC. No codegen needed.</p>
              </div>
              <div class="feature-card">
                <div class="icon">&#9651;</div>
                <h2>Multi-Runtime</h2>
                <p>Same code on Deno, Node, Bun, Cloudflare Workers.</p>
              </div>
              <div class="feature-card">
                <div class="icon">&#9656;</div>
                <h2>SSG Built-In</h2>
                <p>Pre-render to static HTML at build time. Zero config.</p>
              </div>
              <div class="feature-card">
                <div class="icon">&#9633;</div>
                <h2>Zero Lock-In</h2>
                <p>Your code works without KISS. Hono, Lit, Vite are all standard.</p>
              </div>
            </div>
          </div>

          <div class="comparison">
            <div class="label">Full-Chain Web Standards</div>
            <div class="comparison-grid">
              <div class="col-header highlight">KISS</div>
              <div class="col-header dim">Astro</div>
              <div class="col-header dim">Next.js</div>
              <div class="cell highlight">Fetch API</div>
              <div class="cell">Fetch API</div>
              <div class="cell">Custom API</div>
              <div class="cell highlight">Web Components</div>
              <div class="cell">Islands (custom)</div>
              <div class="cell">React only</div>
              <div class="cell highlight">ESM</div>
              <div class="cell">ESM</div>
              <div class="cell">ESM + Custom</div>
            </div>
          </div>

          <div class="jsr">
            <div class="label">Install from JSR</div>
            <div class="badge-row">
              <a class="jsr-badge" href="https://jsr.io/@kissjs/core">@kissjs/core</a>
              <a class="jsr-badge" href="https://jsr.io/@kissjs/ui">@kissjs/ui</a>
              <a class="jsr-badge" href="https://jsr.io/@kissjs/rpc">@kissjs/rpc</a>
            </div>
          </div>
        </app-layout>
      `;
    }
  }

  customElements.define('docs-home', DocsHome);

  export default DocsHome;
  export const tagName = 'docs-home';
