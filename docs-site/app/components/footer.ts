import { LitElement, html, css } from 'lit'

/**
 * Docs footer component
 */
export class DocsFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-top: var(--size-8);
    }

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
        <p>
          <a href="https://webawesome.com/" target="_blank">Web Awesome</a> by Font Awesome Team
        </p>
      </footer>
    `;
  }
}

customElements.define('app-footer', DocsFooter)
