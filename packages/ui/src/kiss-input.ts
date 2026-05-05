/**
 * @lessjs/ui - kiss-input
 *
 * Minimal input field following Swiss International Style.
 * Clean borders, subtle focus states.
 *
 * Features:
 * - Form-associated: participates in native <form> submission
 * - Supports label, placeholder, error, disabled, required
 * - Dispatches 'kiss-input' custom event on value change
 *
 * Usage:
 * ```html
 * <kiss-input placeholder="Enter text"></kiss-input>
 * <kiss-input type="email" label="Email"></kiss-input>
 * <kiss-input type="password" label="Password" required></kiss-input>
 * <form onsubmit="console.log(new FormData(this))">
 *   <kiss-input name="username" label="Username"></kiss-input>
 *   <button type="submit">Submit</button>
 * </form>
 * ```
 *
 * KISS Architecture (S — Semantic):
 * Form-associated custom elements integrate with native <form>,
 * maintaining progressive enhancement and semantic correctness.
 */

import { css, type CSSResult, html, LitElement, nothing, type TemplateResult } from 'lit';
import { kissDesignTokens } from './design-tokens.js';

export const tagName = 'kiss-input';

export class KissInput extends LitElement {
  /** Enable form association for native <form> participation */
  static formAssociated = true;

  /** Element internals for form participation */
  private _internals?: ElementInternals;

  static override styles: CSSResult[] = [
    kissDesignTokens,
    css`
      :host {
        display: block;
      }

      .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--kiss-size-2);
      }

      label {
        font-size: var(--kiss-font-size-sm);
        font-weight: var(--kiss-font-weight-medium);
        color: var(--kiss-text-tertiary);
        letter-spacing: var(--kiss-letter-spacing-wide);
      }

      .input {
        width: 100%;
        padding: var(--kiss-size-2) var(--kiss-size-3);
        font-family: var(--kiss-font-sans);
        font-size: var(--kiss-font-size-md);
        color: var(--kiss-text-primary);
        background: var(--kiss-bg-base);
        border: 0.5px solid var(--kiss-border);
        border-radius: var(--kiss-radius-md);
        transition:
          border-color var(--kiss-transition-normal),
          box-shadow var(--kiss-transition-normal);
        outline: none;
      }

      .input::placeholder {
        color: var(--kiss-text-muted);
      }

      .input:hover {
        border-color: var(--kiss-border-hover);
      }

      .input:focus {
        border-color: var(--kiss-accent);
        box-shadow: 0 0 0 1px var(--kiss-accent);
      }

      .input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background: var(--kiss-bg-surface);
      }

      .input--error {
        border-color: var(--kiss-error, #e55);
      }

      .error-message {
        font-size: var(--kiss-font-size-xs);
        color: var(--kiss-error, #e55);
      }
    `,
  ];

  static override properties = {
    type: { type: String },
    placeholder: { type: String },
    label: { type: String },
    value: { type: String },
    name: { type: String },
    disabled: { type: Boolean, reflect: true },
    required: { type: Boolean },
    error: { type: String },
  };

  /** Input type: 'text', 'email', 'password', 'number', or 'url' (default: 'text') */
  declare type: 'text' | 'email' | 'password' | 'number' | 'url';
  /** Placeholder text shown when input is empty */
  declare placeholder: string | undefined;
  /** Label text displayed above the input */
  declare label: string | undefined;
  /** Current value of the input */
  declare value: string | undefined;
  /** Name attribute for form submission */
  declare name: string | undefined;
  /** Whether the input is disabled */
  declare disabled: boolean;
  /** Whether the input is required (shows * after label) */
  declare required: boolean;
  /** Error message displayed below the input (also applies error styling) */
  declare error: string | undefined;

  constructor() {
    super();
    this.type = 'text';
    this.placeholder = undefined;
    this.label = undefined;
    this.value = undefined;
    this.name = undefined;
    this.disabled = false;
    this.required = false;
    this.error = undefined;
  }

  override connectedCallback() {
    super.connectedCallback();
    // Initialize ElementInternals for form participation
    this._internals = this.attachInternals();
    this._internals.setFormValue(this.value ?? '');
  }

  /** Called by the browser when the form is reset */
  formResetCallback() {
    this.value = '';
    this.error = undefined;
    this._internals?.setFormValue('');
  }

  /** Called by the browser when the form's disabled state changes */
  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  override render(): TemplateResult {
    // KISS S-constraint: use aria-describedby + aria-errormessage for
    // accessible error association; <small role="alert"> is semantic.
    const errorId = this.error ? 'input-error' : undefined;
    return html`
      <div class="input-wrapper">
        ${this.label
          ? html`
            <label for="input">${this.label}${this.required ? ' *' : ''}</label>
          `
          : ''}
        <input
          id="input"
          class="input ${this.error ? 'input--error' : ''}"
          type="${this.type}"
          placeholder="${this.placeholder}"
          .value="${this.value ?? ''}"
          name="${this.name}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          aria-invalid="${this.error ? 'true' : nothing}"
          aria-describedby="${errorId || nothing}"
          aria-errormessage="${errorId || nothing}"
          @input="${(e: Event) => this._handleInput(e)}"
        />
        ${this.error
          ? html`
            <small id="input-error" role="alert" class="error-message">${this.error}</small>
          `
          : ''}
      </div>
    `;
  }

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    // Sync form value for native <form> submission
    this._internals?.setFormValue(input.value);
    // KISS I-constraint: composed:false keeps events within Shadow DOM.
    // Parent islands must listen via `addEventListener('kiss-input', ...)` on
    // the <kiss-input> host element — NOT by capturing from the light DOM.
    this.dispatchEvent(
      new CustomEvent('kiss-input', {
        detail: { value: input.value },
        bubbles: true,
        composed: false,
      }),
    );
  }
}

// Guard: idempotent across SSR paths
try {
  customElements.define(tagName, KissInput);
} catch { /* already defined */ }
