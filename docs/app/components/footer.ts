import { LitElement, html, css } from '@kissjs/core'

export class DocsFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-top: auto;
    }

    footer {
      padding: 2rem 1.5rem;
      border-top: 1px solid #222;
      text-align: center;
      color: #666;
      font-size: 0.75rem;
      letter-spacing: 0.02em;
      background: #000;
    }

    p {
      margin: 0.25rem 0;
    }

    a {
      color: #999;
      text-decoration: none;
      transition: color 0.15s;
    }

    a:hover {
      color: #fff;
    }

    .divider {
      display: inline-block;
      width: 1px;
      height: 10px;
      background: #333;
      vertical-align: middle;
      margin: 0 0.75rem;
    }
  `

  render() {
    return html`
      <footer>
        <p>
          Built with <a href="https://github.com/SisyphusZheng/kiss" target="_blank">KISS Framework</a>
          <span class="divider"></span>
          Self-bootstrapped from JSR
          <span class="divider"></span>
          UI by <a href="https://webawesome.com/" target="_blank">Web Awesome</a>
        </p>
      </footer>
    `
  }
}

customElements.define('app-footer', DocsFooter)
