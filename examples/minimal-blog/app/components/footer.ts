import { LitElement, html, css } from 'lit'

/**
 * Footer component
 *
 * Static component - no JS needed.
 * Uses Open Props for design tokens.
 */
import '../../open-props.css'

export class Footer extends LitElement {
  static styles = css`
    footer {
      padding: var(--size-4) var(--size-6);
      border-top: 1px solid var(--gray-3);
      text-align: center;
      color: var(--gray-6);
      font-size: var(--font-size-0);
      background: var(--gray-1);
    }

    p {
      margin: var(--size-1) 0;
    }

    a {
      color: var(--blue-6);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <footer>
        <p>Built with <a href="https://github.com/SisyphusZheng/kiss" target="_blank">KISS Framework</a></p>
        <p>Zero JS by default. Islands for interactivity.</p>
      </footer>
    `
  }
}

customElements.define('app-footer', Footer)
