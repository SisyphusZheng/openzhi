import { LitElement, html, css } from 'lit'
import 'webawesome/components/hero.js'
import 'webawesome/components/button.js'

/**
 * Docs home page
 *
 * This page introduces KISS framework and links to guides.
 */
export class DocsHome extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--size-6) var(--size-4);
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--size-4);
      margin-top: var(--size-6);
    }

    .feature-card {
      padding: var(--size-4);
      border: 1px solid var(--gray-3);
      border-radius: var(--radius-3);
    }

    .feature-card h2 {
      margin-top: 0;
      color: var(--blue-6);
    }

    .cta {
      margin-top: var(--size-6);
      text-align: center;
    }
  `;

  render() {
    return html`
      <app-header></app-header>
      <main>
        <div class="container">
          <wa-hero>
            <h1 slot="heading">KISS Framework</h1>
            <p slot="text">
              Keep It Simple, Stupid.<br/>
              A minimal full-stack framework built on Web Standards.
            </p>
          </wa-hero>

          <div class="features">
            <div class="feature-card">
              <h2>🌐 Web Standards</h2>
              <p>HTTP = Fetch API, UI = Web Components, Build = ESM. No new abstractions.</p>
            </div>

            <div class="feature-card">
              <h2>🏝️ Islands</h2>
              <p>Only interactive components load JS. Default homepage: 0 KB JS.</p>
            </div>

            <div class="feature-card">
              <h2>🔌 Type-Safe</h2>
              <p>End-to-end type safety with Hono RPC. No codegen needed.</p>
            </div>

            <div class="feature-card">
              <h2>🌍 Multi-Runtime</h2>
              <p>Same code runs on Deno, Node, Bun, Cloudflare Workers.</p>
            </div>
          </div>

          <div class="cta">
            <wa-button variant="brand" href="/guide/getting-started">
              Get Started
            </wa-button>
            <wa-button href="https://github.com/SisyphusZheng/kiss">
              GitHub
            </wa-button>
          </div>
        </div>
      </main>
      <app-footer></app-footer>
    `
  }
}

customElements.define('docs-home', DocsHome)
