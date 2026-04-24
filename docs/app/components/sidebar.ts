import { LitElement, html, css } from '@kissjs/core'

const NAV = [
  {
    section: 'Introduction',
    items: [
      { label: 'Getting Started', href: '/kiss/guide/getting-started' },
      { label: 'Design Philosophy', href: '/kiss/guide/design-philosophy' },
    ],
  },
  {
    section: 'Core',
    items: [
      { label: 'Routing', href: '/kiss/guide/routing' },
      { label: 'Islands', href: '/kiss/guide/islands' },
      { label: 'API Routes', href: '/kiss/guide/api-routes' },
      { label: 'API Design', href: '/kiss/guide/api-design' },
      { label: 'SSG', href: '/kiss/guide/ssg' },
    ],
  },
  {
    section: 'Guides',
    items: [
      { label: 'Configuration', href: '/kiss/guide/configuration' },
      { label: 'Error Handling', href: '/kiss/guide/error-handling' },
      { label: 'Security & Middleware', href: '/kiss/guide/security-middleware' },
      { label: 'Testing', href: '/kiss/guide/testing' },
    ],
  },
  {
    section: 'Reference',
    items: [
      { label: 'Architecture', href: '/kiss/guide/architecture' },
      { label: 'Deployment', href: '/kiss/guide/deployment' },
      { label: 'Web Awesome', href: '/kiss/styling/web-awesome' },
    ],
  },
]

export class DocsSidebar extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 240px;
      flex-shrink: 0;
      border-right: 1px solid #1a1a1a;
      padding: 1.5rem 0;
      overflow-y: auto;
      height: calc(100vh - 56px);
      position: sticky;
      top: 56px;
      scrollbar-width: thin;
      scrollbar-color: #222 transparent;
    }

    :host::-webkit-scrollbar {
      width: 4px;
    }

    :host::-webkit-scrollbar-thumb {
      background: #222;
      border-radius: 2px;
    }

    .nav-section {
      margin-bottom: 1.25rem;
    }

    .nav-section-title {
      font-size: 0.6875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #444;
      padding: 0 1.25rem;
      margin-bottom: 0.375rem;
    }

    a {
      display: block;
      color: #777;
      text-decoration: none;
      font-size: 0.8125rem;
      padding: 0.3rem 1.25rem;
      transition: color 0.15s, background 0.15s;
      border-left: 2px solid transparent;
    }

    a:hover {
      color: #ccc;
      background: rgba(255,255,255,0.03);
    }

    a.active {
      color: #fff;
      border-left-color: #fff;
      background: rgba(255,255,255,0.05);
    }
  `

  static properties = {
    currentPath: { type: String },
  }

  constructor() {
    super()
    this.currentPath = ''
  }

  connectedCallback() {
    super.connectedCallback()
    this.currentPath = window.location.pathname
  }

  render() {
    return html`
      ${NAV.map(section => html`
        <div class="nav-section">
          <div class="nav-section-title">${section.section}</div>
          ${section.items.map(item => html`
            <a
              href="${item.href}"
              class="${this.currentPath === item.href ? 'active' : ''}"
            >${item.label}</a>
          `)}
        </div>
      `)}
    `
  }
}

customElements.define('docs-sidebar', DocsSidebar)
