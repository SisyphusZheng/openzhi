import { LitElement, html, css } from '@kissjs/core'

export class DocsHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 100;
      background: #0a0a0a;
      border-bottom: 1px solid #1a1a1a;
    }

    .header-inner {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      height: 56px;
      gap: 2rem;
    }

    .logo {
      font-size: 1rem;
      font-weight: 800;
      color: #fff;
      text-decoration: none;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .logo:hover {
      color: #888;
    }

    .logo-sub {
      font-size: 0.6875rem;
      font-weight: 400;
      color: #444;
      margin-left: 0.375rem;
      letter-spacing: 0.02em;
    }

    nav {
      display: flex;
      gap: 0.25rem;
      flex: 1;
    }

    nav a {
      color: #666;
      text-decoration: none;
      font-size: 0.8125rem;
      font-weight: 500;
      padding: 0.375rem 0.75rem;
      letter-spacing: 0.01em;
      transition: color 0.15s;
      border-radius: 2px;
    }

    nav a:hover {
      color: #fff;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .github-link {
      color: #555;
      text-decoration: none;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0.375rem 0.75rem;
      border: 1px solid #222;
      border-radius: 2px;
      transition: color 0.15s, border-color 0.15s;
    }

    .github-link:hover {
      color: #ccc;
      border-color: #444;
    }
  `

  render() {
    return html`
      <header class="header-inner">
        <a class="logo" href="/kiss/">KISS<span class="logo-sub">framework</span></a>
        <nav>
          <a href="/kiss/guide/getting-started">Docs</a>
          <a href="https://jsr.io/@kissjs/core">JSR</a>
        </nav>
        <div class="header-right">
          <a class="github-link" href="https://github.com/SisyphusZheng/kiss">GitHub</a>
        </div>
      </header>
    `
  }
}

customElements.define('app-header', DocsHeader)
