import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

/** Renders a route to static HTML at build time so search engines receive full page content. */
export function render(path: string) {
  return renderToString(<StrictMode><App path={path} /></StrictMode>)
}
