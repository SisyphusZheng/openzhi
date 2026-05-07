import{a as e,i as t,n,r}from"./island-api-consumer-DZ1zs91I.js";import{t as i}from"./design-tokens-B_ByjwIP.js";var a=`less-button`,o=class extends n{static delegatesFocus=!0;static formAssociated=!0;_internals;_dsdHydrated=!1;createRenderRoot(){return this.shadowRoot&&this.shadowRoot.childElementCount>0?(this._dsdHydrated=!0,this.shadowRoot):this.attachShadow({mode:`open`})}static styles=[i,e`
      :host {
        display: inline-block;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--less-size-2);
        font-family: var(--less-font-sans);
        font-weight: var(--less-font-weight-medium);
        text-decoration: none;
        cursor: pointer;
        border: 0.5px solid var(--less-border);
        background: transparent;
        color: var(--less-text-primary);
        border-radius: var(--less-radius-md);
        transition:
          color var(--less-transition-normal),
          border-color var(--less-transition-normal),
          background var(--less-transition-normal);
        white-space: nowrap;
        letter-spacing: var(--less-letter-spacing-wide);
      }

      /* Sizes */
      .btn--sm {
        padding: var(--less-size-1) var(--less-size-3);
        font-size: var(--less-font-size-sm);
        height: 28px;
      }

      .btn--md {
        padding: var(--less-size-2) var(--less-size-4);
        font-size: var(--less-font-size-md);
        height: 36px;
      }

      .btn--lg {
        padding: var(--less-size-3) var(--less-size-5);
        font-size: var(--less-font-size-lg);
        height: 44px;
      }

      /* Variants */
      .btn--default:hover {
        color: var(--less-text-primary);
        border-color: var(--less-border-hover);
        background: var(--less-accent-subtle);
      }

      .btn--primary {
        background: var(--less-accent);
        color: var(--less-bg-base);
        border-color: var(--less-accent);
      }

      .btn--primary:hover {
        background: var(--less-accent-dim);
        border-color: var(--less-accent-dim);
      }

      .btn--ghost {
        border-color: transparent;
      }

      .btn--ghost:hover {
        background: var(--less-accent-subtle);
        border-color: transparent;
      }

      /* States */
      .btn:disabled,
      .btn[aria-disabled="true"] {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      }

      .btn:focus-visible {
        outline: 2px solid var(--less-accent);
        outline-offset: 2px;
      }

      /* :state() pseudo-class support — CSS custom states via ElementInternals */
      :host(:state(disabled)) .btn {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      }
    `];static properties={variant:{type:String,reflect:!0},size:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},href:{type:String,reflect:!0},target:{type:String,reflect:!0},type:{type:String}};constructor(){super(),this.variant=`default`,this.size=`md`,this.disabled=!1,this.href=void 0,this.target=void 0,this.type=`button`,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this._updateState()}_updateState(){this._internals?.states&&(this.disabled?(this._internals.states.delete(`enabled`),this._internals.states.add(`disabled`)):(this._internals.states.delete(`disabled`),this._internals.states.add(`enabled`)))}updated(e){super.updated(e),e.has(`disabled`)&&this._updateState()}_preventClick(e){e.preventDefault()}render(){if(this._dsdHydrated)return r;let e=`btn btn--${this.variant} btn--${this.size}`;return this.href?t`
        <a
          class="${e}"
          href="${(this.disabled?void 0:this.href)??r}"
          target="${this.target||r}"
          aria-disabled="${this.disabled||r}"
          rel="${this.target===`_blank`?`noopener noreferrer`:r}"
          @click="${this.disabled?this._preventClick:r}"
        >
          <slot></slot>
        </a>
      `:t`
      <button class="${e}" ?disabled="${this.disabled}" type="${this.type}">
        <slot></slot>
      </button>
    `}};customElements.get(`less-button`)||customElements.define(a,o);export{o as LessButton,a as tagName};