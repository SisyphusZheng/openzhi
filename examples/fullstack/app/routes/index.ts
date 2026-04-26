/**
 * Fullstack Example - KISS Framework
 *
 * Demonstrates:
 * - SSG with DSD
 * - @kissjs/ui components
 * - API Routes integration
 * - Islands Architecture
 */
import { html, LitElement } from 'lit';
import '@kissjs/ui/kiss-button';
import '@kissjs/ui/kiss-card';
import '../islands/counter';

export const tagName = 'home-page';

export class HomePage extends LitElement {
  render() {
    return html`
      <style>
      :host {
        display: block;
        min-height: 100vh;
        background: #000;
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 4rem 1.5rem;
      }
      h1 {
        font-size: 3rem;
        font-weight: 800;
        letter-spacing: -0.03em;
        margin: 0 0 1rem;
      }
      .subtitle {
        color: #666;
        font-size: 1.125rem;
        margin-bottom: 2rem;
      }
      .features {
        display: grid;
        gap: 1rem;
        margin-top: 2rem;
      }
      kiss-card {
        --kiss-bg-card: #0a0a0a;
      }
      kiss-card h3 {
        margin: 0;
        font-size: 1rem;
      }
      kiss-card p {
        margin: 0.5rem 0 0;
        color: #999;
        font-size: 0.875rem;
      }
      .island-demo {
        margin-top: 2rem;
        padding: 1.5rem;
        background: #0a0a0a;
        border: 1px solid #222;
        border-radius: 8px;
      }
      .island-demo h3 {
        margin: 0 0 1rem;
        font-size: 1rem;
        color: #00e87b;
      }
      </style>
      <div class="container">
        <h1>KISS Fullstack</h1>
        <p class="subtitle">
          SSG + API Routes + Islands — A complete fullstack example.
        </p>

        <div class="features">
          <kiss-card>
            <h3 slot="header">SSG + DSD</h3>
            <p>
              Static Site Generation with Declarative Shadow DOM. Zero-JS by default, content visible
              instantly.
            </p>
          </kiss-card>
          <kiss-card>
            <h3 slot="header">API Routes</h3>
            <p>
              Serverless endpoints with Hono. Type-safe RPC from server to client.
            </p>
          </kiss-card>
          <kiss-card>
            <h3 slot="header">Islands Architecture</h3>
            <p>
              Interactive components hydrate on demand. Minimal JS footprint.
            </p>
          </kiss-card>
        </div>

        <div class="island-demo">
          <h3>Interactive Island Demo</h3>
          <counter-island></counter-island>
        </div>
      </div>
    `;
  }
}

customElements.define(tagName, HomePage);
export default HomePage;
