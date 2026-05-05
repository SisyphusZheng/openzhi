/**
 * @kiss/ui - Vite library mode build config
 * Pure ESM output, no CJS. Multi-entry for per-component imports.
 *
 * v0.5.0: components import Lit directly. @lessjs/core remains a
 * build/SSR framework package, not a Lit re-export layer.
 */
import { defineConfig, type Plugin } from 'vite';
import dts from 'vite-plugin-dts';

function jsrSelfTypes(): Plugin {
  return {
    name: 'kiss-ui-jsr-self-types',
    generateBundle(_options, bundle) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type !== 'chunk' || !chunk.isEntry || !chunk.fileName.endsWith('.js')) {
          continue;
        }

        const fileName = chunk.fileName.split('/').pop();
        const declarationName = fileName?.replace(/\.js$/, '.d.ts');
        if (!declarationName) continue;

        chunk.code = `// @ts-self-types="./${declarationName}"\n${chunk.code}`;
      }
    },
  };
}

export default defineConfig({
  plugins: [
    dts({
      outDir: 'dist',
      include: ['src/**/*.ts'],
      tsconfigPath: './tsconfig.build.json',
    }),
    jsrSelfTypes(),
  ],
  build: {
    lib: {
      entry: {
        index: 'src/index.ts',
        'kiss-theme-toggle': 'src/kiss-theme-toggle.ts',
        'kiss-layout': 'src/kiss-layout.ts',
        'kiss-button': 'src/kiss-button.ts',
        'kiss-card': 'src/kiss-card.ts',
        'kiss-input': 'src/kiss-input.ts',
        'kiss-code-block': 'src/kiss-code-block.ts',
        'design-tokens': 'src/design-tokens.ts',
        'kiss-ui-plugin': 'src/kiss-ui-plugin.ts',
        'kiss-hero-ping': 'src/kiss-hero-ping.ts',
        'tokens/colors': 'src/tokens/colors.ts',
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'lit',
        'lit/',
        '@lit/reactive-element',
        'lit-html',
        'lit-element',
        'vite',
      ],
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
  },
});
