import{t as e}from"./rolldown-runtime-B_k5qpF0.js";import{a as t,i as n,n as r}from"./island-api-consumer-DZ1zs91I.js";var i=e({default:()=>o,tagName:()=>a}),a=`counter-island`,o=class extends r{static styles=t`
    :host {
      display: block;
    }
    .counter {
      display: inline-flex;
      align-items: center;
      gap: 0;
      border: 1px solid var(--less-border, #ddd);
      border-radius: var(--radius, 8px);
      overflow: hidden;
      background: var(--less-bg-base, #fff);
    }
    .count {
      font-size: 1.5rem;
      font-weight: 700;
      min-width: 3.5rem;
      text-align: center;
      color: var(--less-text-primary, inherit);
      padding: 0.35rem 0.75rem;
      border-left: 1px solid var(--less-border, #ddd);
      border-right: 1px solid var(--less-border, #ddd);
      background: var(--less-bg-surface, #f5f5f5);
    }
    button {
      background: transparent;
      color: var(--less-text-secondary, #666);
      border: none;
      border-radius: 0;
      padding: 0.4rem 0.85rem;
      font-size: 1.15rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s ease, color 0.15s ease;
      line-height: 1;
      min-width: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button:hover {
      background: var(--less-accent-subtle, #f0f0f0);
      color: var(--less-text-primary, inherit);
    }
    button:active {
      background: var(--less-bg-hover, #e8e8e8);
      transform: scale(0.97);
    }
  `;static properties={count:{type:Number}};constructor(){super(),this.count=0}render(){return n`
      <div class="counter">
        <button aria-label="Decrease count" @click="${()=>this.count--}">−</button>
        <span class="count">${this.count}</span>
        <button aria-label="Increase count" @click="${()=>this.count++}">+</button>
      </div>
    `}};try{customElements.define(a,o)}catch{}export{i as t};