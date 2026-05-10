/**
 * @lessjs/core - Adapter Registry
 *
 * Module-level adapter storage for framework-specific rendering.
 *
 * With viteBuild(ssr:true, noExternal) producing a self-contained ESM bundle,
 * all virtual modules resolve at compile time and there is only one module
 * instance — so a plain module variable replaces the former globalThis bridge.
 *
 * The public API (registerAdapter / getAdapter) is unchanged.
 */

import type { RenderAdapter } from './types.js';

let _adapter: RenderAdapter | undefined;

/** Register a render adapter explicitly. */
export function registerAdapter(adapter: RenderAdapter | undefined): void {
  _adapter = adapter;
}

/** Get the currently registered adapter. */
export function getAdapter(): RenderAdapter | undefined {
  return _adapter;
}
