import { Ziggy as ziggy } from '@/ziggy'
import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import ReactDOMServer from 'react-dom/server'
import { route, type RouteName } from 'ziggy-js'
import Layout from './components/Layout'
import React from 'react'
import Providers from '@/Providers'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'
createServer((page) =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => (title ? `${title} / ${appName}` : appName),
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
    setup: ({ App, props }) => {
      // @ts-expect-error
      global.route<RouteName> = (name, params, absolute) =>
        // @ts-expect-error
        route(name, params as any, absolute, {
          ...ziggy,
          // @ts-expect-error
          location: new URL(page.props.ziggy.location),
        })

      return (
        <Providers>
          <App {...props} />
        </Providers>
      )
    },
  }),
)
