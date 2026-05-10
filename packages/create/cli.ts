/**
 * @lessjs/create - Minimal project scaffold for LessJS framework.
 *
 * Usage: deno run -A jsr:@lessjs/create my-app
 *
 * LessJS Architecture: Keep It Simple, Stupid.
 * One template, zero prompts, instant start.
 */

import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

// ─── Package versions ──────────────────────────────────────────
// ADR 0016: Handle both local (file://) and JSR remote (https://) execution.
// When running from JSR, import.meta.url is https://jsr.io/... and
// fileURLToPath() throws ERR_INVALID_URL_SCHEME. We detect the scheme
// and use hardcoded fallback versions for remote execution.
//
// IMPORTANT: When bumping package versions for release, update BOTH
// the deno.json files AND the REMOTE_VERSIONS map below.

/** Hardcoded versions for JSR remote execution — must be updated at release time. */
const REMOTE_VERSIONS: Record<string, string> = {
  core: '0.10.2',
  adapterLit: '0.8.0',
  app: '0.2.1',
  content: '0.3.0',
  i18n: '0.1.0',
  ui: '0.7.0',
  signal: '0.6.2',
};

function loadWorkspaceVersion(pkg: string): string {
  const metaUrl = import.meta.url;
  const isRemote = metaUrl.startsWith('https://') || metaUrl.startsWith('http://');

  if (isRemote) {
    // Running from JSR — workspace files are not accessible.
    const version = REMOTE_VERSIONS[pkg];
    if (!version) {
      throw new Error(
        `No hardcoded version for @lessjs/${pkg}. Update REMOTE_VERSIONS in cli.ts.`,
      );
    }
    return version;
  }

  // Running locally from workspace — read version from deno.json.
  const selfPath = fileURLToPath(new URL('.', metaUrl));
  const wsPath = resolve(selfPath, '..', '..', 'packages', pkg, 'deno.json');
  try {
    const version = JSON.parse(Deno.readTextFileSync(wsPath)).version;
    if (!version) throw new Error(`No version found in ${wsPath}`);
    return version;
  } catch (e) {
    throw new Error(
      `Failed to read version for @lessjs/${pkg} from ${wsPath}. ` +
        `Run this script from the LessJS workspace or ensure deno.json is accessible.\n` +
        `Original error: ${e}`,
    );
  }
}

const _v = {
  core: loadWorkspaceVersion('core'),
  adapterLit: loadWorkspaceVersion('adapter-lit'),
  app: loadWorkspaceVersion('app'),
  content: loadWorkspaceVersion('content'),
  i18n: loadWorkspaceVersion('i18n'),
  ui: loadWorkspaceVersion('ui'),
  signal: loadWorkspaceVersion('signals'),
};

const TPL = {
  '.gitignore': `dist/
node_modules/
`,
  'deno.json': `{
  "imports": {
    "lit": "npm:lit@^3.2.0",
    "@lit/reactive-element": "npm:@lit/reactive-element@^2",
    "lit-element": "npm:lit-element@^4",
    "lit-html": "npm:lit-html@^3",
    "@lit-labs/ssr-dom-shim": "npm:@lit-labs/ssr-dom-shim@^1.5.0",
    "vite": "npm:vite@8.0.10",
    "@lessjs/app": "jsr:@lessjs/app@^${_v.app}",
    "@lessjs/adapter-lit": "jsr:@lessjs/adapter-lit@^${_v.adapterLit}",
    "@lessjs/content": "jsr:@lessjs/content@^${_v.content}",
    "@lessjs/core": "jsr:@lessjs/core@^${_v.core}",
    "@lessjs/core/adapter-registry": "jsr:@lessjs/core@^${_v.core}/adapter-registry",
    "@lessjs/core/html-escape": "jsr:@lessjs/core@^${_v.core}/html-escape",
    "@lessjs/core/navigation": "jsr:@lessjs/core@^${_v.core}/navigation",
    "@lessjs/core/render-dsd": "jsr:@lessjs/core@^${_v.core}/render-dsd",
    "@lessjs/core/ssr-handler": "jsr:@lessjs/core@^${_v.core}/ssr-handler",
    "@lessjs/i18n": "jsr:@lessjs/i18n@^${_v.i18n}",
    "@lessjs/signal": "jsr:@lessjs/signal@^${_v.signal}",
    "@lessjs/ui": "jsr:@lessjs/ui@^${_v.ui}",
    "@lessjs/ui/tokens/colors": "jsr:@lessjs/ui@^${_v.ui}/tokens/colors",
    "@lessjs/ui/tokens/color-values": "jsr:@lessjs/ui@^${_v.ui}/tokens/color-values",
    "@lessjs/ui/": "jsr:@lessjs/ui@^${_v.ui}/"
  },
  "nodeModulesDir": "auto",
  "tasks": {
    "dev": "deno run --config deno.json -A npm:vite",
    "build": "deno run --config deno.json -A jsr:@lessjs/core/cli/build",
    "build:ssr": "deno run --config deno.json -A npm:vite build",
    "build:client": "deno run --config deno.json -A jsr:@lessjs/core/cli/build-client",
    "build:ssg": "deno run --config deno.json -A jsr:@lessjs/core/cli/build-ssg",
    "preview": "deno run --config deno.json -A npm:vite preview"
  },
  "compilerOptions": { "lib": ["ES2022", "DOM", "DOM.Iterable"] }
}
`,
  'vite.config.ts': `import { lessjs } from '@lessjs/app';
import { lessRootColorCSS } from '@lessjs/ui/tokens/colors';
import { defineConfig } from 'vite';

// DRY: All color token values come from @lessjs/ui/tokens/colors.ts
// (single source of truth). Do NOT hand-write color values here.
const colorTokensStyle = '<style>' + lessRootColorCSS + 'body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>';

const lessUiAliases = {
  '@lessjs/ui': 'https://jsr.io/@lessjs/ui/${_v.ui}/src/index.ts',
  '@lessjs/ui/design-tokens': 'https://jsr.io/@lessjs/ui/${_v.ui}/src/design-tokens.ts',
  '@lessjs/ui/less-button': 'https://jsr.io/@lessjs/ui/${_v.ui}/src/less-button.ts',
  '@lessjs/ui/less-card': 'https://jsr.io/@lessjs/ui/${_v.ui}/src/less-card.ts',
  '@lessjs/ui/less-code-block': 'https://jsr.io/@lessjs/ui/${_v.ui}/src/less-code-block.ts',
  '@lessjs/ui/less-dialog': 'https://jsr.io/@lessjs/ui/${_v.ui}/src/less-dialog.ts',
  '@lessjs/ui/less-hero-ping': 'https://jsr.io/@lessjs/ui/${_v.ui}/src/less-hero-ping.ts',
  '@lessjs/ui/less-input': 'https://jsr.io/@lessjs/ui/${_v.ui}/src/less-input.ts',
  '@lessjs/ui/less-layout': 'https://jsr.io/@lessjs/ui/${_v.ui}/src/less-layout.ts',
  '@lessjs/ui/less-theme-toggle': 'https://jsr.io/@lessjs/ui/${_v.ui}/src/less-theme-toggle.ts',
  '@lessjs/ui/tokens/colors': 'https://jsr.io/@lessjs/ui/${_v.ui}/src/tokens/colors.ts',
  '@lessjs/ui/tokens/color-values': 'https://jsr.io/@lessjs/ui/${_v.ui}/src/tokens/color-values.ts',
};

export default defineConfig({
  resolve: {
    alias: lessUiAliases,
  },
  plugins: [lessjs({
    html: { title: 'My LessJS App' },
    // Use pre-built UI components from @lessjs/ui
    // (JSR distributes compiled JS - no decorator errors)
    packageIslands: ['@lessjs/ui'],
    // SSR must bundle @lessjs/ui (decorators need compilation)
    ssr: {
      noExternal: ['@lessjs/ui'],
    },
    inject: {
      headFragments: [
        // Design tokens - DRY: values from @lessjs/ui/tokens/colors.ts
        colorTokensStyle,
      ],
    },
    // Blog + Navigation + Sitemap (from @lessjs/content)
    content: {
      blog: {
        contentDir: 'content/blog',
        basePath: '/blog',
      },
      nav: {
        headerNav: [
          { href: '/', label: 'Home' },
          { href: '/blog', label: 'Blog' },
        ],
      },
    },
  })],
});
`,
  'app/routes/index.ts': `import { css, html, LitElement } from 'lit';

export const tagName = 'home-page';
export default class HomePage extends LitElement {
  static override styles = css\`
    :host { display: block; max-width: 800px; margin: 2rem auto; padding: 0 1rem; }
    h1 { font-size: 2rem; margin-bottom: 0.5rem; }
    p { color: var(--less-text-secondary, #666); }
    \`;

  override render() {
    return html\`
      <h1>Hello from LessJS!</h1>
      <p>Your LessJS app is running. Edit <code>app/routes/index.ts</code> to get started.</p>
      <my-counter></my-counter>
    \`;
  }
}
`,
  'app/islands/my-counter.ts': `import { css, html, LitElement } from 'lit';

export const tagName = 'my-counter';

export default class MyCounter extends LitElement {
  static override styles = css\`
    :host { display: inline-flex; gap: 0.5rem; align-items: center; margin-top: 1rem; }
    button { padding: 0.25rem 0.75rem; cursor: pointer; }
  \`;

  static override properties = { count: { type: Number } };

  declare count: number;

  constructor() {
    super();
    this.count = 0;
  }

  override render() {
    return html\`
      <button @click=\${() => this.count--}>-</button>
      <span>\${this.count}</span>
      <button @click=\${() => this.count++}>+</button>
    \`;
  }
}

if (!customElements.get(tagName)) {
  customElements.define(tagName, MyCounter);
}
  `,
};

async function main() {
  const name = Deno.args[0];
  if (!name) {
    console.error('Usage: deno run -A jsr:@lessjs/create <project-name>');
    Deno.exit(1);
  }

  const cwd = Deno.cwd();
  const targetDir = resolve(cwd, name);
  const relativeTarget = relative(cwd, targetDir);

  if (
    !relativeTarget || relativeTarget === '..' || relativeTarget.startsWith(`..${sep}`) ||
    isAbsolute(relativeTarget)
  ) {
    console.error(`Refusing to create project outside the current directory: ${name}`);
    Deno.exit(1);
  }

  try {
    await Deno.stat(targetDir);
    console.error(`Directory "${name}" already exists.`);
    Deno.exit(1);
  } catch (e) {
    if (!(e instanceof Deno.errors.NotFound)) {
      console.error(`Failed to inspect target directory "${name}": ${e}`);
      Deno.exit(1);
    }
  }

  try {
    await Deno.mkdir(targetDir, { recursive: true });
  } catch (e) {
    console.error(`Failed to create directory "${name}": ${e}`);
    Deno.exit(1);
  }

  for (const [path, content] of Object.entries(TPL)) {
    const fullPath = join(targetDir, path);
    await Deno.mkdir(dirname(fullPath), { recursive: true });
    await Deno.writeTextFile(fullPath, content);
    console.log(`  created ${path}`);
  }

  console.log(`\nLessJS project created at ./${relativeTarget}/`);
  console.log(`\n  cd ${relativeTarget}`);
  console.log('  deno task dev');
}

main();
