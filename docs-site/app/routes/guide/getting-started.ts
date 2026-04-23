import { LitElement, html, css } from 'lit'
import 'webawesome/components/button.js'
import 'webawesome/components/card.js'

/**
 * Getting Started guide page
 *
 * Converted from docs/getting-started.md
 */
export class GettingStartedPage extends LitElement {
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

    .step {
      margin-bottom: var(--size-6);
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
          <h1>Getting Started</h1>
          <p>Get started with KISS framework in 5 minutes.</p>

          <div class="step">
            <h2>1. Create a project</h2>
            <pre><code>mkdir my-app && cd my-app</code></pre>
          </div>

          <div class="step">
            <h2>2. Initialize Deno</h2>
            <pre><code>deno init</code></pre>
          </div>

          <div class="step">
            <h2>3. Install dependencies</h2>
            <pre><code>deno add @kiss/vite lit hono</code></pre>
          </div>

          <div class="step">
            <h2>4. Configure Vite</h2>
            <pre><code>// vite.config.ts
import { defineConfig } from 'vite'
import { kiss } from '@kiss/vite'

export default defineConfig({
  plugins: [
    kiss({
      routesDir: 'app/routes',
      islandsDir: 'app/islands',
    })
  ]
})</code></pre>
          </div>

          <div class="step">
            <h2>5. Create your first page</h2>
            <pre><code>// app/routes/index.ts
import { LitElement, html, css } from 'lit'

export class HomePage extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }
  `;

  render() {
    return html`
      <h1>Hello KISS!</h1>
      <p>This page is server-rendered. Zero JS by default.</p>
    `
  }
}

customElements.define('home-page', HomePage)</code></pre>
          </div>

          <div class="step">
            <h2>6. Start development server</h2>
            <pre><code>deno run -A npm:vite</code></pre>
            <p>Open <INTERNAL_HOST_REDACTED> to see your page!</p>
          </div>

          <wa-button href="/guide/routing">Next: Routing Guide →</wa-button>
        </div>
      </main>
      <app-footer></app-footer>
    `;
  }
}

customElements.define('page-getting-started', GettingStartedPage)
