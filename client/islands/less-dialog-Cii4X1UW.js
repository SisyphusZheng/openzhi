import{a as e,i as t,r as n}from"./island-api-consumer-DZ1zs91I.js";import{t as r}from"./design-tokens-B_ByjwIP.js";import{t as i}from"./src-DX1dVt7k.js";var a=`less-dialog`,o=class extends i{static delegatesFocus=!0;static hydrateEvents=[{selector:`slot[name="trigger"]`,event:`click`,method:`_handleTrigger`},{selector:`dialog`,event:`cancel`,method:`_handleCancel`},{selector:`dialog`,event:`close`,method:`_handleClose`},{selector:`button.dialog-close`,event:`click`,method:`_handleClose`}];static formAssociated=!0;_internals;static styles=[r,e`
      :host {
        display: inline-block;
      }

      ::slotted([slot="trigger"]) {
        cursor: pointer;
      }

      dialog {
        border: 0.5px solid var(--less-border);
        border-radius: var(--less-radius-lg);
        background: var(--less-bg-elevated);
        color: var(--less-text-primary);
        padding: var(--less-size-6);
        max-width: min(90vw, 480px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        font-family: var(--less-font-sans);
      }

      dialog::backdrop {
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(4px);
      }

      dialog[open] {
        animation: dialogFadeIn 0.2s ease-out;
      }

      @keyframes dialogFadeIn {
        from {
          opacity: 0;
          transform: translateY(-8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--less-size-4);
      }

      .dialog-title {
        font-size: var(--less-font-size-lg);
        font-weight: var(--less-font-weight-semibold);
        color: var(--less-text-primary);
        margin: 0;
      }

      .dialog-close {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--less-text-muted);
        font-size: 1.25rem;
        line-height: 1;
        padding: var(--less-size-1);
        border-radius: var(--less-radius-sm);
        transition: color var(--less-transition-fast);
      }

      .dialog-close:hover {
        color: var(--less-text-primary);
        background: var(--less-accent-subtle);
      }

      .dialog-body {
        font-size: var(--less-font-size-md);
        color: var(--less-text-secondary);
        line-height: 1.5;
      }

      .dialog-footer {
        margin-top: var(--less-size-5);
        display: flex;
        justify-content: flex-end;
        gap: var(--less-size-2);
      }

      /* :state() pseudo-class support */
      :host(:state(open)) dialog {
        display: block;
      }
    `];static properties={open:{type:Boolean,reflect:!0},label:{type:String}};constructor(){super(),this.open=!1,this.label=void 0,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this._updateStates()}_updateStates(){this._internals?.states&&(this.open?(this._internals.states.add(`open`),this._internals.states.delete(`closed`)):(this._internals.states.delete(`open`),this._internals.states.add(`closed`)))}updated(e){super.updated(e),e.has(`open`)&&(this._updateStates(),this._syncDialogElement(),this._syncInert())}show(){this.open=!0}close(){this.open=!1}toggle(){this.open=!this.open}_syncDialogElement(){let e=this.shadowRoot?.querySelector(`dialog`);e&&(this.open&&!e.open?e.showModal():!this.open&&e.open&&e.close())}_syncInert(){if(!this.parentNode)return;let e=this.parentNode;if(this.open)for(let t of Array.from(e.children))t!==this&&t.setAttribute(`inert`,``);else for(let t of Array.from(e.children))t!==this&&t.removeAttribute(`inert`)}_handleClose(){this.open=!1,this._updateStates(),this._syncDialogElement(),this._syncInert(),this.dispatchEvent(new CustomEvent(`less-dialog-close`,{bubbles:!0,composed:!0}))}_handleCancel(e){e.preventDefault(),this._handleClose()}_handleTrigger(){this.toggle()}render(){return this._dsdHydrated?n:t`
      <slot name="trigger" @click="${this._handleTrigger}"></slot>
      <dialog
        ?open="${this.open}"
        aria-label="${this.label||n}"
        @cancel="${this._handleCancel}"
        @close="${this._handleClose}"
      >
        <div class="dialog-header">
          <h2 class="dialog-title">${this.label||``}</h2>
          <button class="dialog-close" @click="${this._handleClose}" aria-label="Close">&times;</button>
        </div>
        <div class="dialog-body">
          <slot></slot>
        </div>
        <div class="dialog-footer">
          <slot name="footer"></slot>
        </div>
      </dialog>
    `}};customElements.get(`less-dialog`)||customElements.define(a,o);export{o as LessDialog,a as tagName};