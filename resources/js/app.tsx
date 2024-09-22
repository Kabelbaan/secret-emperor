import React from 'react'
import {createRoot} from 'react-dom/client'
import {createInertiaApp} from '@inertiajs/react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import {MantineProvider} from "@mantine/core";
import {Providers} from "@/providers";

createInertiaApp({
    // Below you can see that we are going to get all React components from resources/js/Pages folder
    resolve: (name: string) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({el, App, props}) {
        createRoot(el).render(
            <Providers>
                <App {...props} />
            </Providers>
        )
    },
})
