/**
 * @kiss/rpc - Vite library mode build config
 * Replaces tsup with native Vite lib mode.
 * Pure ESM output, no CJS.
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
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: (id) => {
        if (id === 'hono' || id.startsWith('hono/')) return true;
        if (id === 'zod') return true;
        return false;
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
  },
});
