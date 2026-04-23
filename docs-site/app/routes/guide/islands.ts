import { LitElement, html, css } from 'lit'
import 'webawesome/components/button.js'
import 'webawesome/components/card.js'

/**
 * Islands Guide page
 *
 * Converted from docs/islands.md
 */
export class IslandsGuidePage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: var(--size-6) var(--size-4);
    }

    pre {
      background: var(--gray-1);
      padding: var(--size-4);
      border-radius: var(--radius-2);
      overflow-x: auto;
    }

    code {
      font-family: var(--font-mono);
      font-size: var(--font-size-1);
    }

    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--size-4);
      margin: var(--size-4) 0;
    }

    .comparison-item {
      padding: var(--size-4);
      border: 1px solid var(--gray-3);
      border-radius: var(--radius-2);
    }

    .level-table {
      width: 100%;
      border-collapse: collapse;
      margin: var(--size-4) 0;
    }

    .level-table th,
    .level-table td {
      border: 1px solid var(--gray-3);
      padding: var(--size-2);
      text-align: left;
    }

    .level-table th {
      background: var(--gray-2);
    }

    wa-button {
      margin-top: var(--size-4);
    }
  `;

  render() {
    return html`
      <app-header></app-header>
      <main>
        <div class="container">
          <h1>Islands Guide</h1>
          <p>Islands are the secret sauce of KISS. They let you add <strong>interactivity only where needed</strong>.</p>

          <wa-card>
            <h2 slot="header">The Problem with SPA Frameworks</h2>
            <div class="comparison">
              <div class="comparison-item">
                <h3>Traditional SPA</h3>
                <ul>
                  <li>Entire page is JavaScript (100KB+)</li>
                  <li>Even static content needs JS to render</li>
                  <li>Slow initial load, poor SEO</li>
                </ul>
              </div>
              <div class="comparison-item">
                <h3>KISS Islands</h3>
                <ul>
                  <li>Only interactive parts load JS</li>
                  <li>Static content = pure HTML</li>
                  <li>Fast initial load, great SEO</li>
                </ul>
              </div>
            </div>
          </wa-card>

          <wa-card>
            <h2 slot="header">Progressive Enhancement Levels</h2>
            <table class="level-table">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Content</th>
                  <th>JS Size</th>
                  <th>Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>0</strong></td>
                  <td>Pure HTML + DSD</td>
                  <td><strong>0 KB</strong></td>
                  <td>Blog, Documentation</td>
                </tr>
                <tr>
                  <td><strong>2</strong></td>
                  <td>Partial Islands</td>
                  <td>~6 KB/island</td>
                  <td>Counter, Theme toggle</td>
                </tr>
              </tbody>
            </table>
            <p><strong>Default: Level 0</strong> (zero JS)</p>
          </wa-card>

          <wa-card>
            <h2 slot="header">Creating an Island</h2>
            <p>1. Create a file in <code>app/islands/</code></p>
            <pre><code>// app/islands/counter.ts
import { LitElement, html, css } from 'lit'

export class Counter extends LitElement {
  static properties = {
    count: { type: Number }
  }

  constructor() {
    super()
    this.count = 0
  }

  render() {
    return html`
      <p>Count: <strong>${this.count}</strong></p>
      <button @click=${() => this.count++}>Increment</button>
    `
  }
}

customElements.define('my-counter', Counter)</code></pre>

            <p>2. Use it in a route:</p>
            <pre><code>// app/routes/index.ts
import { LitElement, html, css } from 'lit'

export class HomePage extends LitElement {
  render() {
    return html`
      <h1>Home Page</h1>
      <p>This is static HTML (0 KB JS).</p>

      <h2>Counter Island</h2>
      <my-counter></my-counter>
      <!-- ^^^ This gets hydrated on the client -->
    `
  }
}

customElements.define('home-page', HomePage)</code></pre>
          </wa-card>

          <wa-button href="/guide/getting-started">← Back to Getting Started</wa-button>
        </div>
      </main>
      <app-footer></app-footer>
    `;
  }
}

customElements.define('page-islands-guide', IslandsGuidePage)
