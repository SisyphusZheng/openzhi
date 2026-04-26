import { kiss } from '@kissjs/core';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    kiss({
      routesDir: 'app/routes',
      islandsDir: 'app/islands',
    }),
  ],
});
