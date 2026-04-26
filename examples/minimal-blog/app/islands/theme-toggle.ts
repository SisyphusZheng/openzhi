import { css, html, LitElement } from 'lit';

/**
 * Theme Toggle Island
 *
 * This is an Island component - it will be hydrated on the client.
 * The rest of the page is static HTML (0 KB JS).
 *
 * This component demonstrates:
 * - Interactive Island (hydrated on client)
 * - LocalStorage persistence
 * - CSS custom properties (Open Props compatible)
 *
 * Note: Uses static properties + customElements.define() for Vite SSR compatibility.
 * See docs/app/routes/guide/ssg.ts for details.
 */
export class ThemeToggle extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      background: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-size: 1rem;
    }

    button:hover {
      background: #f5f5f5;
    }

    :host([data-theme="dark"]) button {
      border-color: #555;
      color: #fff;
      background: #333;
    }
  `;

  static properties = {
    theme: { type: String },
  };

  constructor() {
    super();
    this.theme = 'light';
  }

  connectedCallback() {
    super.connectedCallback();
    // Read saved theme from localStorage
    const saved = localStorage.getItem('theme');
    if (saved) {
      this.theme = saved;
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    this.applyTheme();
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  render() {
    return html`
      <button @click="${this.toggleTheme}">
        ${this.theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    `;
  }
}

// Register component (Web Standards First - no decorator needed)
customElements.define('theme-toggle', ThemeToggle);
