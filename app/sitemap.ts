import type { MetadataRoute } from 'next'
import { site } from '@/data/site'
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/managed-dpo', '/privacy-readiness', '/security-resilience', '/managed-it', '/about', '/contact', '/privacy', '/cookies']
  return routes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date(), changeFrequency: route === '' ? 'weekly' : 'monthly', priority: route === '' ? 1 : route === '/contact' ? .8 : .7 }))
}
