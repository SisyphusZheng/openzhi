/**
 * Theme Toggle Island — Interactive Component
 *
 * I 约束演示：
 * - localStorage 持久化
 * - Shadow DOM 封装
 * - 跨组件通信（CSS 自定义属性）
 */
import { css, html, LitElement } from 'lit';

export class ThemeToggle extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
    button {
      background: none;
      border: 1px solid #333;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-size: 1rem;
      color: #fff;
      transition: background 0.2s ease;
    }
    button:hover {
      background: #1a1a1a;
    }
  `;

  static properties = {
    theme: { type: String },
  };

  constructor() {
    super();
    this.theme = 'dark';
  }

  connectedCallback() {
    super.connectedCallback();
    const saved = localStorage.getItem('theme');
    if (saved) {
      this.theme = saved;
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', this.theme);
    this.applyTheme();
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  render() {
    return html`
      <button @click="${this.toggleTheme}">
        ${this.theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>
    `;
  }
}

customElements.define('theme-toggle', ThemeToggle);
