/**
 * LessJS runtime shim — built-in, auto-injected by less() plugin.
 *
 * v0.6.0: Pure build/SSR runtime. No LessElement, no Lit.
 * Exports registerAdapter so adapters (e.g., @lessjs/adapter-lit) can
 * register from the same module scope as renderDSD — no globalThis bridge.
 *
 * Note: Hono is NOT re-exported here. Generated entry code imports Hono
 * directly from 'hono' (via buildEntryDescriptor), so this indirection
 * is unnecessary. Keeping less-runtime focused on LessJS-only APIs.
 */
import { createLogger, type LessLogger } from './logger.js';

const log: LessLogger = createLogger('core');

export { log };
export { registerAdapter } from './adapter-registry.js';
export { renderDSD, renderDSDByName } from './render-dsd.js';
export { wrapInDocument } from './ssr-handler.js';
