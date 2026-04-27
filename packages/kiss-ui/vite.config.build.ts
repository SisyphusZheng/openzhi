/**
 * @kiss/ui - Vite library mode build config
 * Pure ESM output, no CJS. Multi-entry for per-component imports.
 *
 * v0.3.0: Changed from single entry (index) to multi-entry so consumers
 * can import individual components (e.g. @kissjs/ui/kiss-theme-toggle).
 */
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      outDir: 'dist',
      include: ['src/**/*.ts'],
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
  build: {
    lib: {
      entry: {
        index: 'src/index.ts',
        'kiss-button': 'src/kiss-button.ts',
        'kiss-card': 'src/kiss-card.ts',
        'kiss-input': 'src/kiss-input.ts',
        'kiss-code-block': 'src/kiss-code-block.ts',
        'kiss-layout': 'src/kiss-layout.ts',
        'kiss-theme-toggle': 'src/kiss-theme-toggle.ts',
        'design-tokens': 'src/design-tokens.ts',
        'kiss-ui-plugin': 'src/kiss-ui-plugin.ts',
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: (id) => {
        if (id === 'vite') return true;
        return false;
      },
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
