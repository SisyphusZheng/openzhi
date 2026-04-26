/**
 * App Layout — KISS Architecture compliant Shadow DOM component.
 *
 * DSD (Declarative Shadow DOM) makes content visible without JavaScript.
 * Shadow DOM provides style encapsulation — no global CSS leakage.
 *
 * Theme toggle: handled by a global script (headFragments), not Lit hydration.
 * This component is NOT an Island — it has no client-side JS.
 * The theme-toggle button uses composedPath() event delegation to cross
 * the Shadow DOM boundary. KISS Architecture: L2 > L4.
 */
import { html, LitElement } from '@kissjs/core';
import { layoutStyles } from './layout-styles.js';

export class AppLayout extends LitElement {
  static styles = layoutStyles;

  static properties = {
    home: { type: Boolean, reflect: true },
    currentPath: { type: String, attribute: 'current-path' },
  };

  constructor() {
    super();
    this.home = false;
    this.currentPath = '';
  }

  private _navLink(path: string, text: string) {
    const isActive = this.currentPath === path;
    return html`
      <a
        href="${path}"
        class="${isActive ? 'active' : ''}"
        aria-current="${isActive ? 'page' : undefined}"
      >${text}</a>
    `;
  }

  render() {
    return html`
      <div class="app-layout" ?home="${this.home}">
        <header class="app-header">
          <div class="header-inner">
            <a class="logo" href="/">KISS<span class="logo-sub">framework</span></a>
            <nav>
              <a href="/guide/getting-started">Docs</a>
              <a href="/ui">UI</a>
              <a href="https://jsr.io/@kissjs/core">JSR</a>
            </nav>
            <div class="header-right">
              <button
                class="theme-toggle"
                title="Switch to light theme"
                aria-label="Toggle theme"
              >
                <svg class="icon-sun" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round">
                  <circle cx="8" cy="8" r="3"/>
                  <line x1="8" y1="1" x2="8" y2="3"/>
                  <line x1="8" y1="13" x2="8" y2="15"/>
                  <line x1="1" y1="8" x2="3" y2="8"/>
                  <line x1="13" y1="8" x2="15" y2="8"/>
                  <line x1="3.05" y1="3.05" x2="4.46" y2="4.46"/>
                  <line x1="11.54" y1="11.54" x2="12.95" y2="12.95"/>
                  <line x1="3.05" y1="12.95" x2="4.46" y2="11.54"/>
                  <line x1="11.54" y1="4.46" x2="12.95" y2="3.05"/>
                </svg>
                <svg class="icon-moon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round">
                  <path d="M13.5 9.14A5.5 5.5 0 0 1 6.86 2.5 5.5 5.5 0 1 0 13.5 9.14Z"/>
                </svg>
              </button>
              <a class="github-link" href="https://github.com/SisyphusZheng/kiss">GitHub</a>
            </div>
          </div>
        </header>
        <div class="layout-body">
          ${!this.home
            ? html`
              <details class="mobile-nav-wrapper">
                <summary class="mobile-nav-btn" aria-label="Toggle navigation">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="3" y1="4.5" x2="15" y2="4.5"/>
                    <line x1="3" y1="9" x2="15" y2="9"/>
                    <line x1="3" y1="13.5" x2="15" y2="13.5"/>
                  </svg>
                </summary>
                <nav class="docs-sidebar" aria-label="Documentation navigation">
                <details class="nav-section" open>
                  <summary class="nav-section-title">Introduction</summary>
                  ${this._navLink('/guide/getting-started', 'Getting Started')} ${this
                    ._navLink('/guide/design-philosophy', 'Design Philosophy')} ${this
                    ._navLink('/guide/dia', 'KISS Architecture')}
                </details>
                <details class="nav-section" open>
                  <summary class="nav-section-title">Core</summary>
                  ${this._navLink('/guide/routing', 'Routing')} ${this._navLink(
                    '/guide/islands',
                    'Islands',
                  )} ${this._navLink('/guide/api-routes', 'API Routes')} ${this._navLink(
                    '/guide/api-design',
                    'API Design',
                  )} ${this._navLink('/guide/ssg', 'SSG')}
                </details>
                <details class="nav-section" open>
                  <summary class="nav-section-title">Guides</summary>
                  ${this._navLink('/guide/configuration', 'Configuration')} ${this._navLink(
                    '/guide/error-handling',
                    'Error Handling',
                  )} ${this._navLink(
                    '/guide/security-middleware',
                    'Security & Middleware',
                  )} ${this._navLink('/guide/testing', 'Testing')}
                </details>
                <details class="nav-section" open>
                  <summary class="nav-section-title">Reference</summary>
                  ${this._navLink('/guide/architecture', 'Architecture')} ${this._navLink(
                    '/guide/deployment',
                    'Deployment',
                  )} ${this._navLink('/styling/kiss-ui', '@kissjs/ui')} ${this._navLink(
                    '/styling/web-awesome',
                    'Web Awesome',
                  )}
                </details>
                <details class="nav-section" open>
                  <summary class="nav-section-title">UI</summary>
                  ${this._navLink('/ui', 'Design System')}
                </details>
              </nav>
              </details>
            `
            : ''}
          <main class="layout-main">
            <slot></slot>
          </main>
        </div>
        <div class="app-footer">
          <footer>
            <p>
              Built with <a href="https://github.com/SisyphusZheng/kiss" target="_blank"
              >KISS Framework</a>
              <span class="divider"></span>
              Self-bootstrapped from JSR
              <span class="divider"></span>
              KISS Architecture — K·I·S·S
            </p>
          </footer>
        </div>
      </div>
      <noscript>
        <div class="noscript-warning">
          This site works best with JavaScript enabled for enhanced navigation, but all content is
          accessible without it.
        </div>
      </noscript>
    `;
  }
}

customElements.define('app-layout', AppLayout);
