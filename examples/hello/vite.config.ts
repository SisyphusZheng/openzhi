import { kiss } from '@kissjs/core';
import { kissUI } from '@kissjs/ui';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    kiss({
      routesDir: 'app/routes',
      islandsDir: 'app/islands',
      html: {
        title: 'KISS Hello',
      },
    }),
    kissUI(),
  ],
});
