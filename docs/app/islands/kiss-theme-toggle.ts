/**
 * kiss-theme-toggle Island — local bridge for monorepo dogfooding.
 *
 * KISS Architecture: Island component with Shadow DOM + hydration.
 *
 * WHY THIS FILE EXISTS (instead of using packageIslands):
 * The packageIslands feature works for JSR consumers (where @kissjs/ui
 * is installed as a proper dependency with lit in node_modules).
 * In the monorepo, the client build (configFile: false, Node/Vite)
 * cannot resolve `import from 'lit'` without Deno's npm: protocol.
 *
 * This file imports from @kissjs/core (which has a Vite alias to the
 * runtime shim), avoiding the lit resolution issue.
 *
 * Once kiss-ui distributes pre-compiled JS (v0.3.0+), this file can
 * be deleted and replaced with packageIslands: ['@kissjs/ui'].
 */
import { css, html, LitElement } from '@kissjs/core';

export const tagName = 'kiss-theme-toggle';

export default class KissThemeToggle extends LitElement {
  static override styles = css`
    :host { display: inline-flex; align-items: center; }
    .theme-toggle {
      display: inline-flex; align-items: center; justify-content: center;
      width: 32px; height: 32px; padding: 0;
      border: 1px solid var(--kiss-border, #1a1a1a); border-radius: 6px;
      background: transparent; color: var(--kiss-text-tertiary, #666);
      cursor: pointer; font-size: 0; line-height: 1;
      transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
    }
    .theme-toggle:hover {
      color: var(--kiss-text-primary, #fff);
      border-color: var(--kiss-border-hover, #333);
      background: var(--kiss-accent-subtle, rgba(255,255,255,0.05));
    }
    .theme-toggle svg { width: 16px; height: 16px; }
    .theme-toggle .icon-sun { display: block; }
    .theme-toggle .icon-moon { display: none; }
    .theme-toggle.is-light .icon-sun { display: none; }
    .theme-toggle.is-light .icon-moon { display: block; }
  `;

  static override properties = { _isLight: { state: true } };
  _isLight = false;

  override connectedCallback() {
    super.connectedCallback();
    if (localStorage.getItem('kiss-theme') === 'light') this._isLight = true;
  }

  private _handleToggle() {
    this._isLight = !this._isLight;
    const theme = this._isLight ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kiss-theme', theme);
  }

  override render() {
    return html`
      <button class="theme-toggle ${this._isLight ? 'is-light' : ''}"
        title="${this._isLight ? 'Switch to dark theme' : 'Switch to light theme'}"
        aria-label="Toggle theme" @click="${this._handleToggle}">
        <svg class="icon-sun" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round">
          <circle cx="8" cy="8" r="3"/><line x1="8" y1="1" x2="8" y2="3"/><line x1="8" y1="13" x2="8" y2="15"/>
          <line x1="1" y1="8" x2="3" y2="8"/><line x1="13" y1="8" x2="15" y2="8"/>
          <line x1="3.05" y1="3.05" x2="4.46" y2="4.46"/><line x1="11.54" y1="11.54" x2="12.95" y2="12.95"/>
          <line x1="3.05" y1="12.95" x2="4.46" y2="11.54"/><line x1="11.54" y1="4.46" x2="12.95" y2="3.05"/>
        </svg>
        <svg class="icon-moon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round">
          <path d="M13.5 9.14A5.5 5.5 0 0 1 6.86 2.5 5.5 5.5 0 1 0 13.5 9.14Z"/>
        </svg>
      </button>`;
  }
}

customElements.define(tagName, KissThemeToggle);
