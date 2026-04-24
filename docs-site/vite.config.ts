import { kiss } from '@kissjs/core'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/kiss/',
  plugins: [
    kiss({
      routesDir: 'app/routes',
      islandsDir: 'app/islands',
      componentsDir: 'app/components',
      ui: { cdn: true },
    }),
  ],
})
