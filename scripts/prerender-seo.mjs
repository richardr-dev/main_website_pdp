import { createServer } from 'vite'
import { renderToString } from 'react-dom/server'
import { createElement } from 'react'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = join(projectRoot, 'dist')
const template = await readFile(join(distRoot, 'index.html'), 'utf8')
const routes = JSON.parse(await readFile(join(projectRoot, 'src', 'seo-routes.json'), 'utf8'))
const siteUrl = 'https://patuhdata.id'

const escapeAttribute = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const replaceMeta = (html, selector, value) => html.replace(selector, `$1${escapeAttribute(value)}$2`)

const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' })
try {
const { default: RecoveryLanding } = await server.ssrLoadModule('/src/components/RecoveryLanding.tsx')
const { default: PdpRecoveryArticle } = await server.ssrLoadModule('/src/components/PdpRecoveryArticle.tsx')
const { pdpInsightPaths } = await server.ssrLoadModule('/src/data/pdpRecoveryInsight.ts')
for (const [route, meta] of Object.entries(routes)) {
  const canonical = `${siteUrl}${route === '/' ? '' : route}`
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttribute(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(" \/>)/, `$1${escapeAttribute(meta.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(" \/>)/, `$1${canonical}$2`)

  html = replaceMeta(html, /(<meta property="og:title" content=")[^"]*(" \/>)/, meta.title)
  html = replaceMeta(html, /(<meta property="og:description" content=")[^"]*(" \/>)/, meta.description)
  html = replaceMeta(html, /(<meta property="og:url" content=")[^"]*(" \/>)/, canonical)
  html = replaceMeta(html, /(<meta name="twitter:title" content=")[^"]*(" \/>)/, meta.title)
  html = replaceMeta(html, /(<meta name="twitter:description" content=")[^"]*(" \/>)/, meta.description)

  const landing = route === '/' || route === '/en'
  const insight = Object.values(pdpInsightPaths).includes(route)
  const language = route === '/' || route === pdpInsightPaths.id ? 'id' : 'en'
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${language}">`)
  html = html.replace(/(<meta property="og:locale" content=")[^"]*/, `$1${language === 'id' ? 'id_ID' : 'en_ID'}`)
  if (landing) {
    html = html.replace('<div id="root"></div>', `<div id="root">${renderToString(createElement(RecoveryLanding, { lang: language }))}</div>`)
    html = html.replace('</head>', `<link rel="alternate" hreflang="id" href="${siteUrl}" /><link rel="alternate" hreflang="en" href="${siteUrl}/en" /><link rel="alternate" hreflang="x-default" href="${siteUrl}" /></head>`)
  }
  if (insight) {
    html = html.replace('<div id="root"></div>', `<div id="root">${renderToString(createElement(PdpRecoveryArticle, { lang: language }))}</div>`)
    html = html.replace('</head>', `<link rel="alternate" hreflang="id" href="${siteUrl}${pdpInsightPaths.id}" /><link rel="alternate" hreflang="en" href="${siteUrl}${pdpInsightPaths.en}" /><link rel="alternate" hreflang="x-default" href="${siteUrl}${pdpInsightPaths.id}" /></head>`)
    html = html.replace(/(<meta property="og:type" content=")[^"]*/, '$1article')
  }
  const routeSchema = {
    '@context': 'https://schema.org',
    '@type': meta.type,
    name: meta.title,
    description: meta.description,
    url: canonical,
    inLanguage: language,
    ...(insight ? { headline: meta.title, datePublished: '2026-09-28', dateModified: '2026-09-28', author: { '@id': `${siteUrl}/#organization` }, publisher: { '@id': `${siteUrl}/#organization` }, mainEntityOfPage: canonical } : {}),
    ...(meta.type === 'Service' ? { provider: { '@id': `${siteUrl}/#organization` }, areaServed: { '@type': 'Country', name: 'Indonesia' } } : {}),
  }
  html = html.replace('</head>', `    <script type="application/ld+json" data-route-seo>${JSON.stringify(routeSchema).replaceAll('<', '\\u003c')}</script>\n  </head>`)

  if (route === '/') {
    await writeFile(join(distRoot, 'index.html'), html)
    continue
  }
  const cleanPath = join(distRoot, `${route.slice(1)}.html`)
  const directoryPath = join(distRoot, route.slice(1), 'index.html')
  await mkdir(dirname(cleanPath), { recursive: true })
  await mkdir(dirname(directoryPath), { recursive: true })
  await Promise.all([writeFile(cleanPath, html), writeFile(directoryPath, html)])
}

console.log(`Prerendered SEO metadata for ${Object.keys(routes).length} routes.`)

} finally { await server.close() }
