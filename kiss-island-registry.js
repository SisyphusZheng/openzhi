// KISS Island Registry (auto-generated at build time)
// DO NOT EDIT — changes will be overwritten

import Island_0 from './app/islands/code-block.ts';
import Island_1 from './app/islands/counter-island.ts';
import Island_2 from './app/islands/kiss-theme-toggle.ts';
import Island_3 from './app/islands/theme-toggle.ts';

// Register all island custom elements
if (!customElements.get('code-block')) {
  customElements.define('code-block', Island_0);
}
if (!customElements.get('counter-island')) {
  customElements.define('counter-island', Island_1);
}
if (!customElements.get('kiss-theme-toggle')) {
  customElements.define('kiss-theme-toggle', Island_2);
}
if (!customElements.get('theme-toggle')) {
  customElements.define('theme-toggle', Island_3);
}
