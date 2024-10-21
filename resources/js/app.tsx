import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import Layout from '@/components/Layout'
import Providers from '@/Providers'
import '@mantine/core/styles.css'

createInertiaApp({
  resolve: (name: string) => {
    const pages = import.meta.glob('./Pages/**/*.tsx')
    const resolvedComponent = resolvePageComponent(
      [`./Pages/${name}.tsx`, `./Pages/${name}/index.tsx`],
      pages,
    )

    resolvedComponent.then((module: any) => {
      module.default.layout = module.default.layout || ((page: any) => <Layout children={page} />)
    })

    return resolvedComponent
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <Providers>
        <App {...props} />
      </Providers>,
    )
  },
})
