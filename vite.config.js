import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import { watch } from 'vite-plugin-watch'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    react(), // React plugin that we installed for vite.js
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.tsx'],
      ssr: 'resources/js/ssr.tsx',
      refresh: true,
    }),
    watch({
      pattern: 'app/{Data,Enums}/**/*.php',
      command: 'php artisan typescript:transform',
    }),
    watch({
      pattern: 'routes/web.php',
      command: 'php artisan ziggy:generate',
    }),
  ],
  resolve: {
    alias: {
      'ziggy-js': resolve('vendor/tightenco/ziggy'),
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
    },
  },
})
