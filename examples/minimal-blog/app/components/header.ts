import { LitElement, html, css } from 'lit'

/**
 * Header component
 *
 * This is a static component (no JS needed).
 * It's rendered on the server and shipped as HTML only (0 KB JS).
 *
 * Uses Open Props for design tokens:
 * https://open-props.com/
 */
import '../../open-props.css'

export class Header extends LitElement {
  static styles = css`
    header {
      padding: var(--size-4) var(--size-6);
      border-bottom: 1px solid var(--gray-3);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--gray-0);
    }

    .logo {
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-7);
      color: var(--gray-9);
      text-decoration: none;
    }

    nav a {
      margin-left: var(--size-5);
      color: var(--gray-7);
      text-decoration: none;
      font-weight: var(--font-weight-5);
    }

    nav a:hover {
      color: var(--blue-6);
      text-decoration: underline;
    }

    /* Theme toggle button - will be hydrated as Island */
    .theme-toggle-container {
      margin-left: var(--size-5);
    }
  `;

  render() {
    return html`
      <header>
        <a class="logo" href="/">Minimal Blog</a>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <span class="theme-toggle-container">
            <!-- This will be hydrated as an Island -->
            <theme-toggle></theme-toggle>
          </span>
        </nav>
      </header>
    `
  }
}

customElements.define('app-header', Header)
