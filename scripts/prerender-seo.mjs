import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = join(projectRoot, 'dist')
const siteUrl = 'https://patuhdata.id'
const buildDate = new Date().toISOString().slice(0, 10)

const template = await readFile(join(distRoot, 'index.html'), 'utf8')
const { render, pages: routes } = await import(pathToFileURL(join(projectRoot, 'dist-server', 'entry-server.js')).href)

const escapeAttribute = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const replaceMeta = (html, selector, value) => html.replace(selector, `$1${escapeAttribute(value)}$2`)
const jsonLd = (value) => JSON.stringify(value).replaceAll('<', '\\u003c')

const sections = { '/services/': ['Solutions', `${siteUrl}/#solutions`], '/industries/': ['Industries', `${siteUrl}/#industries`] }

const breadcrumbs = (route, meta) => {
  const items = [['Home', `${siteUrl}/`]]
  const section = Object.entries(sections).find(([prefix]) => route.startsWith(prefix))
  if (section) items.push(section[1])
  items.push([meta.title.replace(/ \| PatuhData$/, ''), `${siteUrl}${route}`])
  return { '@type': 'BreadcrumbList', itemListElement: items.map(([name, item], index) => ({ '@type': 'ListItem', position: index + 1, name, item })) }
}

const routeSchema = (route, meta, canonical) => {
  const organization = { '@id': `${siteUrl}/#organization` }
  const page = meta.type === 'Service'
    ? {
        '@type': 'Service', '@id': `${canonical}#service`, name: meta.title.replace(/ \| PatuhData$/, ''), description: meta.description,
        url: canonical, provider: organization, areaServed: { '@type': 'City', name: 'Jakarta' },
      }
    : {
        '@type': meta.type, '@id': `${canonical}#webpage`, url: canonical, name: meta.title, description: meta.description,
        isPartOf: { '@id': `${siteUrl}/#website` }, about: organization, inLanguage: route === '/id' ? 'id' : 'en-ID',
      }
  return { '@context': 'https://schema.org', '@graph': ['/', '/id'].includes(route) ? [page] : [page, breadcrumbs(route, meta)] }
}

/** The home page exists in English and Indonesian; both point to each other for search engines. */
const alternates = (route) => ['/', '/id'].includes(route)
  ? `    <link rel="alternate" hreflang="en" href="${siteUrl}/" />\n    <link rel="alternate" hreflang="id" href="${siteUrl}/id" />\n    <link rel="alternate" hreflang="x-default" href="${siteUrl}/" />\n`
  : ''

const pageHtml = (route, meta, { noindex = false } = {}) => {
  const canonical = `${siteUrl}${route === '/' ? '' : route}`
  const image = `${siteUrl}/og-image.png`
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttribute(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(" \/>)/, `$1${escapeAttribute(meta.description)}$2`)
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)

  html = replaceMeta(html, /(<meta property="og:title" content=")[^"]*(" \/>)/, meta.title)
  html = replaceMeta(html, /(<meta property="og:description" content=")[^"]*(" \/>)/, meta.description)
  html = replaceMeta(html, /(<meta property="og:image" content=")[^"]*(" \/>)/, image)
  html = replaceMeta(html, /(<meta name="twitter:title" content=")[^"]*(" \/>)/, meta.title)
  html = replaceMeta(html, /(<meta name="twitter:description" content=")[^"]*(" \/>)/, meta.description)
  html = replaceMeta(html, /(<meta name="twitter:image" content=")[^"]*(" \/>)/, image)

  if (noindex) {
    html = html
      .replace(/<link rel="canonical" href="[^"]*" \/>\n?\s*/, '')
      .replace(/(<meta name="robots" content=")[^"]*(" \/>)/, '$1noindex, follow$2')
      .replace(/\s*<meta property="og:url" content="[^"]*" \/>/, '')
    return html
  }
  html = html
    .replace(/(<link rel="canonical" href=")[^"]*(" \/>)/, `$1${canonical}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(" \/>)/, `$1${canonical}$2`)
    .replace('</head>', `    <script type="application/ld+json" data-route-seo data-path="${route}">${jsonLd(routeSchema(route, meta, canonical))}</script>\n${alternates(route)}  </head>`)
  if (route === '/id') html = html.replace('<html lang="en-ID">', '<html lang="id">').replace('content="en_ID"', 'content="id_ID"')
  return html
}

for (const [route, meta] of Object.entries(routes)) {
  const html = pageHtml(route, meta)
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

await writeFile(join(distRoot, '404.html'), pageHtml('/404', {
  title: 'Page Not Found | PatuhData',
  description: 'The page you are looking for may have moved.',
  type: 'WebPage',
}, { noindex: true }))

const priority = (route) => ['/', '/id'].includes(route) ? '1.0' : /^\/(services|industries)\//.test(route) ? '0.9' : ['/about', '/contact'].includes(route) ? '0.8' : '0.2'
const changefreq = (route) => ['/', '/id'].includes(route) ? 'weekly' : ['/privacy', '/terms', '/cookies'].includes(route) ? 'yearly' : 'monthly'
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.entries(routes).map(([route, meta]) => `  <url><loc>${siteUrl}${route === '/' ? '/' : route}</loc><lastmod>${buildDate}</lastmod><changefreq>${changefreq(route)}</changefreq><priority>${priority(route)}</priority></url>`).join('\n')}
</urlset>
`
await writeFile(join(distRoot, 'sitemap.xml'), sitemap)

console.log(`Prerendered ${Object.keys(routes).length} routes, a 404 page, and the sitemap.`)
