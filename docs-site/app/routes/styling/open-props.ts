import { LitElement, html, css } from 'lit'
import 'webawesome/components/button.js'

/**
 * Open Props styling guide page
 *
 * Shows how to use Open Props with KISS.
 */
export class OpenPropsPage extends LitElement {
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

    .grid-item {
      padding: var(--size-4);
      background: var(--gray-0);
      border: 1px solid var(--gray-3);
      border-radius: var(--radius-2);
      text-align: center;
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
          <h1>Styling with Open Props</h1>
          <p>Open Props provides design tokens as CSS custom properties.</p>

          <div class="demo-box">
            <h3>Colors</h3>
            <div class="grid-demo">
              <div class="grid-item" style="background: var(--blue-0); color: var(--blue-9);">Blue</div>
              <div class="grid-item" style="background: var(--gray-0); color: var(--gray-9);">Gray</div>
              <div class="grid-item" style="background: var(--red-0); color: var(--red-9);">Red</div>
            </div>
            <pre><code>background: var(--blue-0);
color: var(--blue-9);</code></pre>
          </div>

          <div class="demo-box">
            <h3>Spacing</h3>
            <p style="padding: var(--size-4); background: var(--gray-0);">
              Padding: var(--size-4) = 1.5rem
            </p>
            <pre><code>padding: var(--size-4);  /* 1.5rem */</code></pre>
          </div>

          <div class="demo-box">
            <h3>Font Sizes</h3>
            <p style="font-size: var(--font-size-3);">Font size: var(--font-size-3) = 1.5rem</p>
            <pre><code>font-size: var(--font-size-3);  /* 1.5rem */</code></pre>
          </div>

          <wa-button href="/styling/web-awesome">
            Compare: Web Awesome →
          </wa-button>
        </div>
      </main>
      <app-footer></app-footer>
    `;
  }
}

customElements.define('page-open-props', OpenPropsPage)
