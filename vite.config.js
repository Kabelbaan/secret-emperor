import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(), // React plugin that we installed for vite.js
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
        }),
    ],
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
        return pages[`./Pages/${name}.tsx`]
    },
});
