/**
 * @kissjs/adapter-lit - SSR adapter tests
 */

import { assertEquals, assertStringIncludes } from 'jsr:@std/assert@^1.0.0';
import { css, html, LitElement, nothing } from 'lit';
import {
  extractLitStyles,
  installLitAdapter,
  renderLitToString,
  uninstallLitAdapter,
} from '../src/ssr.ts';

function compactHtml(value: string): string {
  return value.replace(/>\s+</g, '><').trim();
}

function compactCss(value: string): string {
  return value
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;])\s*/g, '$1')
    .trim();
}

Deno.test('renderLitToString escapes text content values', () => {
  const rendered = renderLitToString(html`
    <p>${'<script>alert(1)</script>'}</p>
  `);
  assertEquals(compactHtml(rendered), '<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>');
});

Deno.test('renderLitToString escapes attribute values', () => {
  const rendered = renderLitToString(html`
    <a href="${'javascript:alert("x")'}">link</a>
  `);
  assertEquals(compactHtml(rendered), '<a href="javascript:alert(&quot;x&quot;)">link</a>');
});

Deno.test('renderLitToString supports boolean attributes', () => {
  assertEquals(
    compactHtml(renderLitToString(html`
      <button ?disabled="${true}">Save</button>
    `)),
    '<button disabled>Save</button>',
  );
  assertEquals(
    compactHtml(renderLitToString(html`
      <button ?disabled="${false}">Save</button>
    `)),
    '<button>Save</button>',
  );
});

Deno.test('renderLitToString strips event and property bindings', () => {
  const rendered = renderLitToString(
    html`
      <button @click="${() => undefined}" .value="${'private'}">Save</button>
    `,
  );
  assertEquals(compactHtml(rendered), '<button>Save</button>');
});

Deno.test('renderLitToString handles nothing, arrays, and nested templates', () => {
  const rendered = renderLitToString(html`
    <section title="${nothing}">
      ${[
        html`
          <span>${'A&B'}</span>
        `,
        ' ',
        html`
          <strong>${'<C>'}</strong>
        `,
      ]}
    </section>
  `);
  assertStringIncludes(rendered, '<section>');
  assertStringIncludes(rendered, '<span>A&amp;B</span>');
  assertStringIncludes(rendered, '<strong>&lt;C&gt;</strong>');
});

Deno.test('extractLitStyles reads single and array CSSResult values', () => {
  class StyledElement extends LitElement {
    static override styles = [
      css`
        :host {
          display: block;
        }
      `,
      css`
        .label {
          color: red;
        }
      `,
    ];
  }

  const styles = compactCss(
    extractLitStyles(StyledElement as unknown as CustomElementConstructor) ?? '',
  );
  assertStringIncludes(styles, ':host{display:block;}');
  assertStringIncludes(styles, '.label{color:red;}');
});

Deno.test('installLitAdapter registers idempotent global hooks and uninstall removes them', async () => {
  uninstallLitAdapter();
  installLitAdapter();
  installLitAdapter();

  const globals = globalThis as Record<string, unknown>;
  const check = globals.__kissLitTemplateCheck as (value: unknown) => boolean;
  const renderer = globals.__kissLitSsrRenderer as (
    value: unknown,
    tagName: string,
  ) => Promise<string>;
  const styles = globals.__kissLitStylesExtractor as (
    componentClass: CustomElementConstructor,
  ) => string | undefined;

  assertEquals(
    check(html`
      <p>ok</p>
    `),
    true,
  );
  assertEquals(
    compactHtml(
      await renderer(
        html`
          <p>${'<x>'}</p>
        `,
        'test-el',
      ),
    ),
    '<p>&lt;x&gt;</p>',
  );
  assertEquals(typeof styles, 'function');

  uninstallLitAdapter();
  assertEquals(globals.__kissLitTemplateCheck, undefined);
  assertEquals(globals.__kissLitSsrRenderer, undefined);
  assertEquals(globals.__kissLitStylesExtractor, undefined);
  assertEquals(globals.__kissLitAdapterInstalled, undefined);
});
