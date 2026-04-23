import { LitElement, html, css } from 'lit'
import 'webawesome/components/button.js'
import 'webawesome/components/card.js'

/**
 * Routing Guide page
 *
 * Converted from docs/routing.md
 */
export class RoutingGuidePage extends LitElement {
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

    .route-table {
      width: 100%;
      border-collapse: collapse;
      margin: var(--size-4) 0;
    }

    .route-table th,
    .route-table td {
      border: 1px solid var(--gray-3);
      padding: var(--size-2);
      text-align: left;
    }

    .route-table th {
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
          <h1>Routing Guide</h1>
          <p>KISS uses <strong>file-based routing</strong>. Create a file in <code>app/routes/</code>, and it becomes a route.</p>

          <wa-card>
            <h2 slot="header">Basic Routes</h2>
            <table class="route-table">
              <thead>
                <tr>
                  <th>File</th>
                  <th>Route</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>app/routes/index.ts</code></td>
                  <td><code>/</code></td>
                </tr>
                <tr>
                  <td><code>app/routes/about.ts</code></td>
                  <td><code>/about</code></td>
                </tr>
                <tr>
                  <td><code>app/routes/contact.ts</code></td>
                  <td><code>/contact</code></td>
                </tr>
              </tbody>
            </table>
          </wa-card>

          <wa-card>
            <h2 slot="header">Dynamic Routes</h2>
            <p>Use square brackets for dynamic segments:</p>
            <table class="route-table">
              <thead>
                <tr>
                  <th>File</th>
                  <th>Route</th>
                  <th>Params</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>app/routes/posts/[slug].ts</code></td>
                  <td><code>/posts/:slug</code></td>
                  <td><code>slug</code></td>
                </tr>
              </tbody>
            </table>

            <h3>Access params in your component:</h3>
            <pre><code>// app/routes/posts/[slug].ts
import { LitElement, html } from 'lit'

export class PostPage extends LitElement {
  static properties = {
    slug: { type: String },
  }

  constructor() {
    super()
    this.slug = ''
  }

  render() {
    return html`
      <h1>Post: ${this.slug}</h1>
    `
  }
}

customElements.define('post-page', PostPage)</code></pre>
          </wa-card>

          <wa-button href="/guide/islands">Next: Islands Guide →</wa-button>
        </div>
      </main>
      <app-footer></app-footer>
    `;
  }
}

customElements.define('page-routing-guide', RoutingGuidePage)
