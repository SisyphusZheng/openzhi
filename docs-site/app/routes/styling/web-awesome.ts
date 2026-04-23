import { LitElement, html, css } from 'lit'
import 'webawesome/components/button.js'
import 'webawesome/components/card.js'
import 'webawesome/components/badge.js'

/**
 * Web Awesome styling guide page
 *
 * Shows how to use Web Awesome components with KISS.
 */
export class WebAwesomePage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: var(--size-6) var(--size-4);
    }

    .demo-box {
      padding: var(--size-4);
      border: 1px solid var(--gray-3);
      border-radius: var(--radius-3);
      margin: var(--size-4) 0;
    }

    .demo-box h3 {
      margin-top: 0;
      color: var(--blue-6);
    }

    pre {
      background: var(--gray-1);
      padding: var(--size-4);
      border-radius: var(--radius-2);
      overflow-x: auto;
      font-family: var(--font-mono);
      font-size: var(--font-size-1);
    }

    .grid-demo {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--size-4);
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
          <h1>Styling with Web Awesome</h1>
          <p>Web Awesome provides 50+ UI components.</p>

          <div class="demo-box">
            <h3>Buttons</h3>
            <wa-button variant="brand">Brand</wa-button>
            <wa-button variant="success">Success</wa-button>
            <wa-button variant="danger">Danger</wa-button>

            <pre><code>import 'webawesome/components/button.js'

&lt;wa-button variant="brand"&gt;Brand&lt;/wa-button&gt;</code></pre>
          </div>

          <div class="demo-box">
            <h3>Cards</h3>
            <wa-card>
              <h2 slot="header">Card Title</h2>
              <p>This is a Web Awesome card component.</p>
              <wa-button slot="footer" variant="primary">
                Action
              </wa-button>
            </wa-card>

            <pre><code>import 'webawesome/components/card.js'

&lt;wa-card&gt;
  &lt;h2 slot="header"&gt;Title&lt;/h2&gt;
  &lt;p&gt;Content&lt;/p&gt;
&lt;/wa-card&gt;</code></pre>
          </div>

          <div class="demo-box">
            <h3>Badges</h3>
            <div class="grid-demo">
              <wa-badge type="primary">Primary</wa-badge>
              <wa-badge type="success">Success</wa-badge>
              <wa-badge type="danger">Danger</wa-badge>
            </div>

            <pre><code>import 'webawesome/components/badge.js'

&lt;wa-badge type="primary"&gt;Primary&lt;/wa-badge&gt;</code></pre>
          </div>

          <wa-button href="/">
            ← Back to Home
          </wa-button>
        </div>
      </main>
      <app-footer></app-footer>
    `;
  }
}

customElements.define('page-web-awesome', WebAwesomePage)
