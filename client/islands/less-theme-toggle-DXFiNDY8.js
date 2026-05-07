import{a as e,i as t,r as n}from"./island-api-consumer-DZ1zs91I.js";import{t as r}from"./design-tokens-B_ByjwIP.js";import{t as i}from"./src-DX1dVt7k.js";var a=`less-theme-toggle`,o=class extends i{static delegatesFocus=!0;static hydrateEvents=[{selector:`button.theme-toggle`,event:`click`,method:`_handleToggle`}];static styles=[r,e`
      :host {
        display: inline-block;
      }

      .theme-toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        padding: 0;
        border: 0.5px solid var(--less-border);
        border-radius: var(--less-radius-md);
        background: transparent;
        color: var(--less-text-tertiary);
        cursor: pointer;
        font-size: 0;
        line-height: 1;
        transition:
          color var(--less-transition-normal),
          border-color var(--less-transition-normal),
          background var(--less-transition-normal);
        }

        .theme-toggle:hover {
          color: var(--less-text-primary);
          border-color: var(--less-border-hover);
          background: var(--less-accent-subtle);
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
      `];static properties={theme:{type:String,reflect:!0},_isLight:{state:!0}};constructor(){super(),this.theme=void 0,this._isLight=!1}connectedCallback(){if(super.connectedCallback(),this.theme===`light`)this._isLight=!0;else if(this.theme===`dark`)this._isLight=!1;else if(document.documentElement.dataset.theme===`light`)this._isLight=!0;else{let e=!1;try{let t=localStorage.getItem(`less-theme`);t===`light`?(this._isLight=!0,e=!0):t===`dark`&&(this._isLight=!1,e=!0)}catch{}if(!e&&typeof globalThis<`u`&&globalThis.matchMedia){let e=globalThis.matchMedia(`(prefers-color-scheme: light)`);this._isLight=e.matches}}this.setAttribute(`data-theme`,this._isLight?`light`:`dark`)}_handleToggle(){this._isLight=!this._isLight;let e=this._isLight?`light`:`dark`;document.documentElement.setAttribute(`data-theme`,e),document.documentElement.style&&(document.documentElement.style.colorScheme=e);try{localStorage.setItem(`less-theme`,e)}catch{}this.setAttribute(`data-theme`,e),this._updateToggleDOM()}_updateToggleDOM(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector(`button.theme-toggle`);e&&(e.classList.toggle(`is-light`,this._isLight),e.setAttribute(`title`,this._isLight?`Switch to dark theme`:`Switch to light theme`))}render(){return this._dsdHydrated?n:t`
        <button
          class="theme-toggle ${this._isLight?`is-light`:``}"
          title="${this._isLight?`Switch to dark theme`:`Switch to light theme`}"
          aria-label="Toggle theme"
          @click="${()=>this._handleToggle()}"
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
      `}};customElements.get(`less-theme-toggle`)||customElements.define(a,o);export{o as LessThemeToggle,a as tagName};