import{t as e}from"./rolldown-runtime-B_k5qpF0.js";import{a as t,i as n,n as r}from"./island-api-consumer-DZ1zs91I.js";var i=e({default:()=>o,tagName:()=>a}),a=`code-block`,o=class extends r{static styles=t`
    :host {
      display: block;
      position: relative;
    }

    ::slotted(pre) {
      margin: 0;
      padding: 1.25rem;
      background: var(--less-code-bg);
      border: 0.5px solid var(--less-code-border);
      border-radius: 2px;
      overflow-x: auto;
      font-family: "SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace;
      font-size: 0.8125rem;
      line-height: 1.6;
      color: var(--less-text-secondary);
      scrollbar-width: thin;
      scrollbar-color: var(--less-scrollbar-thumb) transparent;
    }

    .copy-btn {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: var(--less-bg-elevated);
      color: var(--less-text-tertiary);
      border: 0.5px solid var(--less-border);
      padding: 0.25rem 0.625rem;
      font-size: 0.6875rem;
      font-family: inherit;
      cursor: pointer;
      border-radius: 2px;
      transition: color 0.15s, border-color 0.15s;
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
  `;static properties={_copyState:{state:!0}};constructor(){super(),this._copyState=`idle`}render(){return n`
      <slot></slot>
      <button
        class="copy-btn ${this._copyState===`copied`?`copied`:``} ${this._copyState===`failed`?`failed`:``}"
        @click="${()=>this._copy()}"
      >
        ${this._copyState===`copied`?`✓ Copied!`:this._copyState===`failed`?`✗ Failed`:`Copy`}
      </button>
    `}async _copy(){try{let e=this.textContent||``;await navigator.clipboard.writeText(e),this._copyState=`copied`,setTimeout(()=>{this._copyState=`idle`},2e3)}catch{this._copyState=`failed`,setTimeout(()=>{this._copyState=`idle`},2e3)}}};try{customElements.define(a,o)}catch{}export{i as t};