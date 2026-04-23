import { LitElement, html, css } from 'lit'
import 'webawesome/components/header.js'
import 'webawesome/components/button.js'

/**
 * Docs header component
 *
 * Uses Web Awesome components for navigation.
 */
export class DocsHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    wa-header {
      --header-background: var(--gray-0);
      --header-border-color: var(--gray-3);
    }

    .logo {
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-7);
      color: var(--gray-9);
      text-decoration: none;
    }

    .nav-links a {
      margin-left: var(--size-5);
      color: var(--gray-7);
      text-decoration: none;
    }

    .nav-links a:hover {
      color: var(--blue-6);
    }
  `;

  render() {
    return html`
      <wa-header>
        <a class="logo" slot="start" href="/">KISS</a>
        <nav class="nav-links" slot="center">
          <a href="/guide/getting-started">Guide</a>
          <a href="/styling/open-props">Open Props</a>
          <a href="/styling/web-awesome">Web Awesome</a>
        </nav>
        <div slot="end">
          <wa-button href="https://github.com/SisyphusZheng/kiss" variant="default" size="small">
            GitHub
          </wa-button>
        </div>
      </wa-header>
    `;
  }
}

customElements.define('app-header', DocsHeader)
