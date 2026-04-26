/**
 * Hello World - KISS Framework Example
 *
 * Demonstrates:
 * - SSG with DSD
 * - KISS UI components
 * - Minimal setup
 */
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@kissjs/ui/kiss-button';
import '@kissjs/ui/kiss-card';

export const tagName = 'hello-page';

@customElement(tagName)
export class HelloPage extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
          min-height: 100vh;
          background: #000;
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
          text-align: center;
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
        .cards {
          display: grid;
          gap: 1rem;
          margin-top: 2rem;
          text-align: left;
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
        .actions {
          margin-top: 2rem;
          display: flex;
          gap: 0.5rem;
          justify-content: center;
        }
      </style>
      <div class="container">
        <h1>Hello, KISS!</h1>
        <p class="subtitle">
          Minimal full-stack framework built entirely on Web Standards.
        </p>
        <div class="actions">
          <kiss-button variant="primary" href="https://jsr.io/@kissjs/core">
            Get Started
          </kiss-button>
          <kiss-button href="https://github.com/SisyphusZheng/kiss">
            GitHub
          </kiss-button>
        </div>
        <div class="cards">
          <kiss-card>
            <h3 slot="header">SSG + DSD</h3>
            <p>Static Site Generation with Declarative Shadow DOM. Content visible before JavaScript loads.</p>
          </kiss-card>
          <kiss-card>
            <h3 slot="header">Islands Architecture</h3>
            <p>Interactive components hydrate on demand. Zero-JS by default, progressive enhancement.</p>
          </kiss-card>
          <kiss-card>
            <h3 slot="header">API Routes</h3>
            <p>Serverless endpoints with Hono RPC. Type-safe from server to client.</p>
          </kiss-card>
        </div>
      </div>
    `;
  }
}

export default HelloPage;