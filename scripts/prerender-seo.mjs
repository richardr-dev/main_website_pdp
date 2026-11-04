import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = join(projectRoot, 'dist')
const siteUrl = 'https://patuhdata.id'
const buildDate = new Date().toISOString().slice(0, 10)

const template = await readFile(join(distRoot, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(join(projectRoot, 'dist-server', 'entry-server.js')).href)
const routes = JSON.parse(await readFile(join(projectRoot, 'src', 'seo-routes.json'), 'utf8'))

const parseFrontMatter = (source) => {
  const frontMatter = source.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] || ''
  return Object.fromEntries(frontMatter.split('\n').map((line) => {
    const separator = line.indexOf(':')
    const key = line.slice(0, separator).trim()
    let value = line.slice(separator + 1).trim()
    if (value.startsWith('"') && value.endsWith('"')) {
      try { value = JSON.parse(value) } catch { value = value.slice(1, -1) }
    }
    return [key, value]
  }).filter(([key]) => key))
}

const blogDirectory = join(projectRoot, 'src', 'content', 'blog')
for (const file of await readdir(blogDirectory)) {
  if (!file.endsWith('.md')) continue
  const meta = parseFrontMatter(await readFile(join(blogDirectory, file), 'utf8'))
  if (meta.published === 'false') continue
  const slug = meta.slug || file.replace(/\.md$/, '')
  routes[`/insights/${slug}`] = {
    title: `${meta.title || slug} | PatuhData`,
    headline: meta.title || slug,
    description: meta.excerpt || 'A practical insight from PatuhData.',
    type: 'Article',
    date: meta.date,
    image: meta.image,
  }
}

const escapeAttribute = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const replaceMeta = (html, selector, value) => html.replace(selector, `$1${escapeAttribute(value)}$2`)
const absolute = (url) => (url?.startsWith('http') ? url : `${siteUrl}${url || '/og-image.png'}`)
const jsonLd = (value) => JSON.stringify(value).replaceAll('<', '\\u003c')

const breadcrumbName = (route, meta) => {
  if (route === '/insights') return 'Insights'
  if (route === '/contact') return 'Contact'
  return meta.headline || meta.title.replace(/ \| PatuhData$/, '').replace(/ Indonesia$/, '')
}

const breadcrumbs = (route, meta) => {
  const items = [{ name: 'Home', url: `${siteUrl}/` }]
  if (route.startsWith('/insights/')) items.push({ name: 'Insights', url: `${siteUrl}/insights` })
  if (route.startsWith('/services/')) items.push({ name: 'Services', url: `${siteUrl}/#approach` })
  items.push({ name: breadcrumbName(route, meta), url: `${siteUrl}${route}` })
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.url })),
  }
}

const routeSchema = (route, meta, canonical) => {
  const organization = { '@id': `${siteUrl}/#organization` }
  const page = meta.type === 'Article'
    ? {
        '@type': 'Article', '@id': `${canonical}#article`, headline: meta.headline, description: meta.description,
        mainEntityOfPage: canonical, image: absolute(meta.image), datePublished: meta.date, dateModified: meta.date,
        author: organization, publisher: organization, inLanguage: 'en-ID',
      }
    : meta.type === 'Service'
      ? {
          '@type': 'Service', '@id': `${canonical}#service`, name: meta.title.replace(/ Indonesia \| PatuhData$/, ''),
          description: meta.description, url: canonical, provider: organization, serviceType: 'Personal data protection',
          areaServed: { '@type': 'Country', name: 'Indonesia' },
        }
      : {
          '@type': meta.type, '@id': `${canonical}#webpage`, url: canonical, name: meta.title, description: meta.description,
          isPartOf: { '@id': `${siteUrl}/#website` }, about: organization, inLanguage: 'en-ID',
        }
  return { '@context': 'https://schema.org', '@graph': route === '/' ? [page] : [page, breadcrumbs(route, meta)] }
}

const pageHtml = (route, meta, { noindex = false } = {}) => {
  const canonical = `${siteUrl}${route === '/' ? '' : route}`
  const image = absolute(meta.image)
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
  if (meta.type === 'Article') html = replaceMeta(html, /(<meta property="og:type" content=")[^"]*(" \/>)/, 'article')

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
    .replace('</head>', `    <script type="application/ld+json" data-route-seo data-path="${route}">${jsonLd(routeSchema(route, meta, canonical))}</script>\n  </head>`)
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

const priority = (route) => route === '/' ? '1.0' : route.startsWith('/services/') ? '0.9' : route === '/contact' ? '0.8' : route.startsWith('/insights') ? '0.7' : '0.2'
const changefreq = (route) => route === '/' ? 'weekly' : ['/privacy', '/terms', '/cookies'].includes(route) ? 'yearly' : 'monthly'
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.entries(routes).map(([route, meta]) => `  <url><loc>${siteUrl}${route === '/' ? '/' : route}</loc><lastmod>${meta.date || buildDate}</lastmod><changefreq>${changefreq(route)}</changefreq><priority>${priority(route)}</priority></url>`).join('\n')}
</urlset>
`
await writeFile(join(distRoot, 'sitemap.xml'), sitemap)

console.log(`Prerendered ${Object.keys(routes).length} routes, a 404 page, and the sitemap.`)
