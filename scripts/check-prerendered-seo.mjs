import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const routes = JSON.parse(await readFile(join(projectRoot, 'src', 'seo-routes.json'), 'utf8'))
const escaped = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

for (const [route, meta] of Object.entries(routes)) {
  const output = route === '/' ? join(projectRoot, 'dist', 'index.html') : join(projectRoot, 'dist', route.slice(1), 'index.html')
  const html = await readFile(output, 'utf8')
  const canonical = `https://patuhdata.id${route === '/' ? '' : route}`
  const required = [
    `<title>${escaped(meta.title)}</title>`,
    `name="description" content="${escaped(meta.description)}`,
    `rel="canonical" href="${canonical}"`,
    `property="og:url" content="${canonical}"`,
    'data-route-seo',
  ]
  required.forEach((value) => {
    if (!html.includes(value)) throw new Error(`Missing ${value} in ${output}`)
  })
}

console.log(`Verified prerendered metadata for ${Object.keys(routes).length} routes.`)
