import{a as e,i as t,r as n}from"./island-api-consumer-DZ1zs91I.js";import{t as r}from"./design-tokens-B_ByjwIP.js";import{t as i}from"./src-DX1dVt7k.js";var a=`less-code-block`,o=class extends i{static hydrateEvents=[{selector:`button.copy-btn`,event:`click`,method:`_copy`}];static styles=[r,e`
      :host {
        display: block;
        position: relative;
      }

      ::slotted(pre) {
        margin: 0;
        padding: var(--less-size-5);
        background: var(--less-code-bg);
        border: 0.5px solid var(--less-code-border);
        border-radius: var(--less-radius-sm);
        overflow-x: auto;
        font-family: var(--less-font-mono);
        font-size: var(--less-font-size-sm);
        line-height: var(--less-line-height-normal);
        color: var(--less-text-secondary);
        scrollbar-width: thin;
        scrollbar-color: var(--less-border) transparent;
      }

      .copy-btn {
        position: absolute;
        top: var(--less-size-2);
        right: var(--less-size-2);
        background: var(--less-bg-elevated);
        color: var(--less-text-muted);
        border: 0.5px solid var(--less-border);
        padding: var(--less-size-1) var(--less-size-3);
        font-size: var(--less-font-size-xs);
        font-family: var(--less-font-sans);
        cursor: pointer;
        border-radius: var(--less-radius-sm);
        transition: color var(--less-transition-normal), border-color var(--less-transition-normal);
        z-index: 1;
      }

      .copy-btn:hover {
        color: var(--less-text-secondary);
        border-color: var(--less-border-hover);
      }

      .copy-btn.copied {
        color: var(--less-text-primary);
        border-color: var(--less-border-hover);
      }

      .copy-btn.failed {
        color: var(--less-error, #e55);
        border-color: var(--less-error, #e55);
      }
    `];static properties={_copyState:{state:!0}};_copyTimer;constructor(){super(),this._copyState=`idle`}disconnectedCallback(){super.disconnectedCallback(),this._copyTimer!==void 0&&(clearTimeout(this._copyTimer),this._copyTimer=void 0)}render(){return this._dsdHydrated?n:t`
      <slot></slot>
      <button
        class="copy-btn ${this._copyState===`copied`?`copied`:``} ${this._copyState===`failed`?`failed`:``}"
        @click="${()=>this._copy()}"
      >
        ${this._copyState===`copied`?`Copied!`:this._copyState===`failed`?`Failed`:`Copy`}
      </button>
    `}async _copy(){try{let e=this.textContent||``;await navigator.clipboard.writeText(e),this._copyState=`copied`,this._updateCopyButtonDOM(),this._copyTimer=globalThis.setTimeout(()=>{this._copyState=`idle`,this._updateCopyButtonDOM(),this._copyTimer=void 0},2e3)}catch{this._copyState=`failed`,this._updateCopyButtonDOM(),this._copyTimer=globalThis.setTimeout(()=>{this._copyState=`idle`,this._updateCopyButtonDOM(),this._copyTimer=void 0},2e3)}}_updateCopyButtonDOM(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector(`button.copy-btn`);e&&(e.classList.toggle(`copied`,this._copyState===`copied`),e.classList.toggle(`failed`,this._copyState===`failed`),this._copyState===`copied`?e.textContent=`Copied!`:this._copyState===`failed`?e.textContent=`Failed`:e.textContent=`Copy`)}};customElements.get(`less-code-block`)||customElements.define(a,o);export{o as LessCodeBlock,a as tagName};