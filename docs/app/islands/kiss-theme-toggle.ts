/**
 * kiss-theme-toggle Island — self-contained for docs site dogfooding.
 *
 * KISS Architecture: Island component with Shadow DOM + hydration.
 * Theme state persisted via localStorage, applied via data-theme attribute.
 *
 * This is a local copy of @kissjs/ui/kiss-theme-toggle to avoid
 * package resolution issues in the client build (configFile: false).
 *
 * NOTE: kissDesignTokens omitted intentionally — the package's design-tokens
 * module imports from 'lit' which can't be resolved in the client build.
 * Hardcoded values (6px, 0.2s ease) are functionally equivalent.
 */
import { css, html, LitElement } from '@kissjs/core';

export const tagName = 'kiss-theme-toggle';

export default class KissThemeToggle extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
    }

    .theme-toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      padding: 0;
      border: 1px solid var(--kiss-border, #1a1a1a);
      border-radius: 6px;
      background: transparent;
      color: var(--kiss-text-tertiary, #666);
      cursor: pointer;
      font-size: 0;
      line-height: 1;
      transition:
        color 0.2s ease,
        border-color 0.2s ease,
        background 0.2s ease;
    }

    .theme-toggle:hover {
      color: var(--kiss-text-primary, #fff);
      border-color: var(--kiss-border-hover, #333);
      background: var(--kiss-accent-subtle, rgba(255, 255, 255, 0.05));
    }

    .theme-toggle svg {
      width: 16px;
      height: 16px;
    }

    .theme-toggle .icon-sun {
      display: block;
    }

    .theme-toggle .icon-moon {
      display: none;
    }

    .theme-toggle.is-light .icon-sun {
      display: none;
    }

    .theme-toggle.is-light .icon-moon {
      display: block;
    }
  `;

  static override properties = {
    _isLight: { state: true },
  };

  _isLight = false;

  override connectedCallback() {
    super.connectedCallback();
    const saved = localStorage.getItem('kiss-theme');
    if (saved === 'light') {
      this._isLight = true;
    }
  }

  private _handleToggle() {
    this._isLight = !this._isLight;
    const theme = this._isLight ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kiss-theme', theme);
  }

  override render() {
    return html`
      <button
        class="theme-toggle ${this._isLight ? 'is-light' : ''}"
        title="${this._isLight ? 'Switch to dark theme' : 'Switch to light theme'}"
        aria-label="Toggle theme"
        @click="${this._handleToggle}"
      >
        <svg
          class="icon-sun"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="1.2"
          stroke-linecap="round"
        >
          <circle cx="8" cy="8" r="3" />
          <line x1="8" y1="1" x2="8" y2="3" />
          <line x1="8" y1="13" x2="8" y2="15" />
          <line x1="1" y1="8" x2="3" y2="8" />
          <line x1="13" y1="8" x2="15" y2="8" />
          <line x1="3.05" y1="3.05" x2="4.46" y2="4.46" />
          <line x1="11.54" y1="11.54" x2="12.95" y2="12.95" />
          <line x1="3.05" y1="12.95" x2="4.46" y2="11.54" />
          <line x1="11.54" y1="4.46" x2="12.95" y2="3.05" />
        </svg>
        <svg
          class="icon-moon"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="1.2"
          stroke-linecap="round"
        >
          <path d="M13.5 9.14A5.5 5.5 0 0 1 6.86 2.5 5.5 5.5 0 1 0 13.5 9.14Z" />
        </svg>
      </button>
    `;
  }
}

// Auto-register when loaded as a module
// This is also handled by the KISS client entry, but included for
// consistency with the package version and standalone usage.
customElements.define(tagName, KissThemeToggle);
