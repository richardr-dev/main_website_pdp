import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const routes = JSON.parse(await readFile(join(projectRoot, 'src', 'seo-routes.json'), 'utf8'))
const sitemap = await readFile(join(projectRoot, 'dist', 'sitemap.xml'), 'utf8')
const escaped = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

for (const [route, meta] of Object.entries(routes)) {
  const output = route === '/' ? join(projectRoot, 'dist', 'index.html') : join(projectRoot, 'dist', route.slice(1), 'index.html')
  const html = await readFile(output, 'utf8')
  const canonical = `https://patuhdata.id${route === '/' ? '' : route}`
  const required = [
    `<title>${escaped(meta.type === 'Article' ? html.match(/<title>([^<]*)<\/title>/)[1] : meta.title)}</title>`,
    `rel="canonical" href="${canonical}"`,
    `property="og:url" content="${canonical}"`,
    'data-route-seo',
    '<h1',
  ]
  if (meta.type !== 'Article') required.push(`name="description" content="${escaped(meta.description)}`)
  required.forEach((value) => {
    if (!html.includes(value)) throw new Error(`Missing ${value} in ${output}`)
  })
  if (html.includes('<div id="root"></div>')) throw new Error(`Page content was not prerendered in ${output}`)
  if (!sitemap.includes(`<loc>https://patuhdata.id${route === '/' ? '/' : route}</loc>`)) throw new Error(`Missing ${route} in sitemap.xml`)
}

const notFound = await readFile(join(projectRoot, 'dist', '404.html'), 'utf8')
if (!notFound.includes('noindex') || notFound.includes('rel="canonical"')) throw new Error('404.html must be noindex without a canonical URL')

console.log(`Verified prerendered content, metadata, and sitemap entries for ${Object.keys(routes).length} routes, plus the 404 page.`)
