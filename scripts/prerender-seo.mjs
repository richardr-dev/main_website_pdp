import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = join(projectRoot, 'dist')
const template = await readFile(join(distRoot, 'index.html'), 'utf8')
const routes = JSON.parse(await readFile(join(projectRoot, 'src', 'seo-routes.json'), 'utf8'))
const blogDirectory = join(projectRoot, 'src', 'content', 'blog')
for (const file of await readdir(blogDirectory)) {
  if (!file.endsWith('.md')) continue
  const source = await readFile(join(blogDirectory, file), 'utf8')
  const frontMatter = source.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] || ''
  const meta = Object.fromEntries(frontMatter.split('\n').map((line) => {
    const separator = line.indexOf(':')
    const key = line.slice(0, separator).trim()
    let value = line.slice(separator + 1).trim()
    if (value.startsWith('"') && value.endsWith('"')) {
      try { value = JSON.parse(value) } catch { value = value.slice(1, -1) }
    }
    return [key, value]
  }).filter(([key]) => key))
  if (meta.published === 'false') continue
  const slug = meta.slug || file.replace(/\.md$/, '')
  routes[`/insights/${slug}`] = {
    title: `${meta.title || slug} | PatuhData`,
    description: meta.excerpt || 'A practical insight from PatuhData.',
    type: 'Article',
  }
}
const siteUrl = 'https://patuhdata.id'

const escapeAttribute = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const replaceMeta = (html, selector, value) => html.replace(selector, `$1${escapeAttribute(value)}$2`)

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

  const routeSchema = {
    '@context': 'https://schema.org',
    '@type': meta.type,
    name: meta.title,
    description: meta.description,
    url: canonical,
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
