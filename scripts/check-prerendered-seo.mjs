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

for (const [path, lang, heading] of [['index.html', 'id', 'Backup Anda berhasil. Tapi apakah bisnis Anda benar-benar bisa pulih?'], ['en/index.html', 'en', 'Your backup says SUCCESS. Can your business actually recover?']]) {
  const html = await readFile(join(projectRoot, 'dist', path), 'utf8')
  for (const marker of [`<html lang="${lang}">`, heading, 'PatuhData Recovery Health Check', '2h 37m', '3h 12m', 'id="vendor-readiness"', 'PatuhData Financial Vendor Readiness', 'Security Baseline Hardening', 'Managed Resilience', 'id="assessments"', '<table>', 'id="offers"', 'id="contact"', 'hreflang="id"', 'hreflang="en"', 'hreflang="x-default"']) {
    if (!html.includes(marker)) throw new Error(`Missing landing content ${marker} in ${path}`)
  }
}
console.log('Verified full landing-page HTML and language alternates for ID and EN.')

for (const [path, language] of [['insights/uu-pdp-backup-recovery/index.html', 'id'], ['en/insights/uu-pdp-backup-recovery/index.html', 'en']]) {
  const html = await readFile(join(projectRoot, 'dist', path), 'utf8')
  for (const marker of [`<html lang="${language}">`, '<article>', '3 × 24', 'jdih.komdigi.go.id', 'hreflang="id"', 'hreflang="en"', 'Recovery Health Check']) {
    if (!html.includes(marker)) throw new Error(`Missing article content ${marker} in ${path}`)
  }
}
console.log('Verified bilingual UU PDP recovery article HTML and sources.')
