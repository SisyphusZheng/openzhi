import{a as e,i as t,n,r}from"./island-api-consumer-DZ1zs91I.js";import{t as i}from"./design-tokens-B_ByjwIP.js";var a=`less-input`,o=class extends n{static formAssociated=!0;static delegatesFocus=!0;_internals;_dsdHydrated=!1;createRenderRoot(){return this.shadowRoot&&this.shadowRoot.childElementCount>0?(this._dsdHydrated=!0,this.shadowRoot):this.attachShadow({mode:`open`})}static styles=[i,e`
      :host {
        display: block;
      }

      .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--less-size-2);
      }

      label {
        font-size: var(--less-font-size-sm);
        font-weight: var(--less-font-weight-medium);
        color: var(--less-text-tertiary);
        letter-spacing: var(--less-letter-spacing-wide);
      }

      .input {
        width: 100%;
        padding: var(--less-size-2) var(--less-size-3);
        font-family: var(--less-font-sans);
        font-size: var(--less-font-size-md);
        color: var(--less-text-primary);
        background: var(--less-bg-base);
        border: 0.5px solid var(--less-border);
        border-radius: var(--less-radius-md);
        transition:
          border-color var(--less-transition-normal),
          box-shadow var(--less-transition-normal);
        outline: none;
      }

      .input::placeholder {
        color: var(--less-text-muted);
      }

      .input:hover {
        border-color: var(--less-border-hover);
      }

      .input:focus {
        border-color: var(--less-accent);
        box-shadow: 0 0 0 1px var(--less-accent);
      }

      .input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background: var(--less-bg-surface);
      }

      .input--error {
        border-color: var(--less-error, #e55);
      }

      /* :state() pseudo-class support — CSS custom states via ElementInternals */
      :host(:state(disabled)) .input {
        opacity: 0.5;
        cursor: not-allowed;
        background: var(--less-bg-surface);
      }

      :host(:state(invalid)) .input {
        border-color: var(--less-error, #e55);
      }

      .error-message {
        font-size: var(--less-font-size-xs);
        color: var(--less-error, #e55);
      }
    `];static properties={type:{type:String},placeholder:{type:String},label:{type:String},value:{type:String},name:{type:String},disabled:{type:Boolean,reflect:!0},required:{type:Boolean},error:{type:String}};constructor(){super(),this.type=`text`,this.placeholder=void 0,this.label=void 0,this.value=void 0,this.name=void 0,this.disabled=!1,this.required=!1,this.error=void 0}connectedCallback(){super.connectedCallback(),this._internals=this.attachInternals(),this._internals.setFormValue(this.value??``),this._updateStates()}_updateStates(){this._internals?.states&&(this.disabled?(this._internals.states.add(`disabled`),this._internals.states.delete(`enabled`)):(this._internals.states.delete(`disabled`),this._internals.states.add(`enabled`)))}updated(e){super.updated(e),(e.has(`disabled`)||e.has(`error`))&&this._updateStates()}formResetCallback(){this.value=``,this.error=void 0,this._internals?.setFormValue(``)}formDisabledCallback(e){this.disabled=e}render(){if(this._dsdHydrated)return r;let e=this.error?`input-error`:void 0;return t`
      <div class="input-wrapper">
        ${this.label?t`
            <label for="input">${this.label}${this.required?` *`:``}</label>
          `:``}
        <input
          id="input"
          class="input ${this.error?`input--error`:``}"
          type="${this.type}"
          placeholder="${this.placeholder}"
          .value="${this.value??``}"
          name="${this.name}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          aria-invalid="${this.error?`true`:r}"
          aria-describedby="${e||r}"
          aria-errormessage="${e||r}"
          @input="${e=>this._handleInput(e)}"
        />
        ${this.error?t`
            <small id="input-error" role="alert" class="error-message">${this.error}</small>
          `:``}
      </div>
    `}_handleInput(e){let t=e.target;this.value=t.value,this._internals?.setFormValue(t.value),this.dispatchEvent(new CustomEvent(`less-input`,{detail:{value:t.value},bubbles:!0,composed:!1}))}};customElements.get(`less-input`)||customElements.define(a,o);export{o as LessInput,a as tagName};