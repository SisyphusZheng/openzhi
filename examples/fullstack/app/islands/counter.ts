/**
 * Counter Island - Interactive Component
 *
 * This is an Island - it will be hydrated on the client.
 * Demonstrates: state management, event handling, API calls.
 */
import { css, html, LitElement } from 'lit';

export class CounterIsland extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .counter {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .count {
      font-size: 2rem;
      font-weight: 700;
      min-width: 3rem;
      text-align: center;
    }
    button {
      background: #00e87b;
      color: #000;
      border: none;
      border-radius: 6px;
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.15s ease;
    }
    button:hover {
      transform: scale(1.05);
    }
    button:active {
      transform: scale(0.95);
    }
  `;

  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  render() {
    return html`
      <div class="counter">
        <button @click="${this.decrement}">−</button>
        <span class="count">${this.count}</span>
        <button @click="${this.increment}">+</button>
      </div>
    `;
  }
}

customElements.define('counter-island', CounterIsland);
