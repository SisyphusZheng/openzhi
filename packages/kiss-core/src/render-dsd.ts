/**
 * @kissjs/core - DSD Renderer
 *
 * Pure string-based Declarative Shadow DOM SSR renderer.
 * Framework-agnostic — no Lit dependency, no TemplateResult knowledge.
 *
 * KISS Architecture (v0.5.1+):
 * - Takes a registered Custom Element class + props → DSD HTML string
 * - Components MUST implement render(): string (pure function from state → HTML)
 * - Rendering is synchronous string concatenation — no DOM shim needed
 * - Framework adapters (e.g. @kissjs/adapter-lit) can hook into the
 *   rendering pipeline via globalThis to handle framework-specific types
 *
 * SSR Lifecycle:
 *   1. Instantiate component class (new Class())
 *   2. Set attributes/properties from props
 *   3. Call render() to get Shadow DOM HTML string
 *   4. Wrap in <template shadowrootmode="open">
 *   5. Recurse for nested custom elements (optional, Phase 2)
 *
 * Adapter Protocol:
 *   Adapters register via globalThis hooks (set by installLitAdapter()):
 *   - __kissLitTemplateCheck(value) → boolean  (is this a framework object?)
 *   - __kissLitSsrRenderer(value, tagName) → Promise<string>  (convert to string)
 *   Core never imports any framework — adapters are opt-in.
 *
 * Client Lifecycle (no hydration needed):
 *   1. Browser parses DSD → attaches Shadow DOM automatically
 *   2. customElements.define() upgrades existing elements
 *   3. connectedCallback fires — add event listeners to existing DOM
 *   4. No duplicate rendering, no hydrate() call needed
 *
 * @module @kissjs/core/render-dsd
 */

// ─── HTML Escaping ───────────────────────────────────────────────

/** Escape text content for safe HTML insertion */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Escape an HTML attribute value */
export function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Escape a string for use as an attribute value (double-quoted) */
export function escapeAttrValue(value: unknown): string {
  if (value === null || value === undefined) return '';
  return escapeAttr(String(value));
}

// ─── Adapter Protocol ──────────────────────────────────────────

/** Type for the adapter's template check function */
type TemplateCheckFn = (value: unknown) => boolean;

/** Type for the adapter's SSR renderer function */
type SsrRendererFn = (value: unknown, tagName: string) => Promise<string>;

/**
 * Check if an adapter has registered a template type checker.
 * Returns the checker function if available, undefined otherwise.
 */
function getAdapterTemplateCheck(): TemplateCheckFn | undefined {
  return (globalThis as Record<string, unknown>).__kissLitTemplateCheck as
    | TemplateCheckFn
    | undefined;
}

/**
 * Check if an adapter has registered an SSR renderer.
 * Returns the renderer function if available, undefined otherwise.
 */
function getAdapterSsrRenderer(): SsrRendererFn | undefined {
  return (globalThis as Record<string, unknown>).__kissLitSsrRenderer as
    | SsrRendererFn
    | undefined;
}

// ─── DSD Rendering ──────────────────────────────────────────────

/** Serialize key-value strings to HTML attribute string */
export function serializeAttributes(props: Record<string, string | boolean | undefined>): string {
  const parts: string[] = [];
  for (const [key, val] of Object.entries(props)) {
    if (val === false || val === null || val === undefined) continue;
    if (val === true) {
      parts.push(key);
    } else {
      parts.push(`${key}="${escapeAttrValue(val)}"`);
    }
  }
  return parts.length > 0 ? ' ' + parts.join(' ') : '';
}

/**
 * Interface that components must implement to be DSD-renderable.
 * Works with any Custom Element class that has render() and connectedCallback().
 *
 * render() MUST return a string. If you use Lit components that return
 * TemplateResult, install @kissjs/adapter-lit to handle the conversion.
 */
export interface DsdComponent {
  /** Return Shadow DOM inner HTML as a string */
  render(): string | unknown;

  /** Optional: called after setting props, before render() */
  connectedCallback?(): void;

  /** Set named property/value */
  [key: string]: unknown;
}

/**
 * Render a single component to DSD HTML string.
 *
 * @param tagName - Custom element tag name (e.g. 'kiss-button')
 * @param componentClass - Registered Custom Element class constructor
 * @param props - Attribute/property key-value pairs
 * @returns Complete DSD HTML string
 *
 * @example
 * ```ts
 * const html = renderDSD('kiss-button', KissButton, { variant: 'primary' })
 * // → <kiss-button variant="primary">
 * //      <template shadowrootmode="open">
 * //        <style>:host{...}</style>
 * //        <button>Click</button>
 * //      </template>
 * //    </kiss-button>
 * ```
 */
export async function renderDSD(
  tagName: string,
  componentClass: CustomElementConstructor,
  props: Record<string, string | boolean | undefined> = {},
): Promise<string> {
  // 1. Instantiate the component
  //    Note: In Node.js/Deno SSR, no DOM lifecycle fires.
  //    The component must be designed to work without connectedCallback.
  let instance: DsdComponent;
  try {
    instance = new componentClass() as unknown as DsdComponent;
  } catch (err) {
    console.error(`[KISS] Failed to instantiate <${tagName}>:`, err);
    return `<${tagName}><!-- render error --></${tagName}>`;
  }

  // 2. Set attributes/properties
  for (const [key, value] of Object.entries(props)) {
    try {
      (instance as Record<string, unknown>)[key] = value;
    } catch {
      // Some properties may be read-only — ignore silently
    }
  }

  // 3. DO NOT call connectedCallback in SSR.
  //    Lit's connectedCallback triggers performUpdate() → requestUpdate()
  //    which requires a real DOM (createComment, etc.).
  //    In DSD SSR we only need the render() return value.
  //    connectedCallback will fire on the client after upgrade.

  // 4. Call render() to get Shadow DOM content
  let content: string;
  try {
    const result = instance.render();
    if (result == null) {
      content = '';
    } else if (typeof result === 'string') {
      // Fast path: render() returned a plain string — no adapter needed
      content = result;
    } else {
      // Slow path: render() returned a non-string value.
      // Check if an adapter (e.g. @kissjs/adapter-lit) is installed.
      const templateCheck = getAdapterTemplateCheck();
      const ssrRenderer = getAdapterSsrRenderer();

      if (templateCheck && ssrRenderer && templateCheck(result)) {
        // Adapter handles the framework-specific type (e.g. Lit TemplateResult)
        content = await ssrRenderer(result, tagName);
      } else {
        // No adapter installed — this is a user error.
        // The component returned something that's not a string and no adapter
        // can handle it. Provide a clear error message.
        console.error(
          `[KISS] <${tagName}> render() returned ${typeof result} instead of string. ` +
          (isLitTemplateResultHeuristic(result)
            ? 'This looks like a Lit TemplateResult — install @kissjs/adapter-lit to handle it.'
            : 'Components must return a string from render().'),
        );
        content = `<!-- render error: ${typeof result} returned, expected string -->`;
      }
    }
  } catch (err) {
    console.error(`[KISS] <${tagName}> render() failed:`, err);
    content = '<!-- render error -->';
  }

  // 5. Wrap in DSD
  const attrs = serializeAttributes(props);
  return `<${tagName}${attrs}>
  <template shadowrootmode="open">
    ${content}
  </template>
</${tagName}>`;
}

/**
 * Heuristic check for Lit TemplateResult without importing Lit.
 * Checks for the _$litType$ marker that Lit uses internally.
 * This is only used for error messaging — actual rendering goes through adapters.
 */
function isLitTemplateResultHeuristic(value: unknown): boolean {
  return typeof value === 'object' && value !== null &&
    '_$litType$' in (value as Record<string, unknown>);
}

/**
 * Render a component from the global Custom Element registry.
 * Looks up the class by tag name using customElements.get().
 *
 * @param tagName - Registered custom element tag name
 * @param props - Attribute/property key-value pairs
 * @returns DSD HTML string, or error HTML if tag is not registered
 *
 * @example
 * ```ts
 * const html = renderDSD('kiss-button', { variant: 'primary' })
 * ```
 */
export async function renderDSDByName(
  tagName: string,
  props: Record<string, string | boolean | undefined> = {},
): Promise<string> {
  const cls = globalThis.customElements?.get(tagName);

  if (!cls) {
    console.warn(`[KISS] <${tagName}> is not registered — rendering as void element`);
    const attrs = serializeAttributes(props);
    return `<${tagName}${attrs}></${tagName}>`;
  }

  return await renderDSD(tagName, cls as CustomElementConstructor, props);
}

/**
 * Scan an HTML string for custom element tags and recursively render them.
 *
 * @param html - HTML string possibly containing custom element tags
 * @param renderFn - Function to render each detected component
 * @returns HTML with all custom elements replaced by their DSD-rendered output
 *
 * Phase 2 enhancement: This enables recursive rendering of nested components.
 * Currently returns the original HTML — full recursive implementation pending
 * the component registry integration.
 */
export function renderNestedDsd(
  html: string,
  _renderFn: (tag: string, props: Record<string, string>) => Promise<string> = renderDSDByName,
): string {
  // Phase 2: Implement regex or lightweight parser for custom element detection.
  // For v0.5.0 alpha, components are responsible for rendering their own children.
  return html;
}

// ─── Document Wrapping ──────────────────────────────────────────

/**
 * Wrap rendered DSD output in a full HTML document.
 * Replaces wrapInDocument from ssr-handler.ts for DSD-first pages.
 */
export function wrapDsdDocument(
  bodyHtml: string,
  options: {
    title?: string;
    lang?: string;
    headExtras?: string;
  } = {},
): string {
  const { title = 'KISS App', lang = 'en', headExtras = '' } = options;
  return `<!DOCTYPE html>
<html lang="${escapeAttr(lang)}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  ${headExtras}
</head>
<body>
  ${bodyHtml}
</body>
</html>`;
}

// ─── Convenience Re-exports ─────────────────────────────────────
export { wrapInDocument } from './ssr-handler.js';
