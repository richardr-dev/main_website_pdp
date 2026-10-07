import { useEffect, useState } from 'react'
import './index.css'
import './resilience.css'
import ResilienceHome from './components/ResilienceHome'
import ResilienceNav from './components/ResilienceNav'
import ServicePage from './components/ServicePage'
import { resilienceServices, serviceAliases } from './data/resilienceServices'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookiePolicy from './components/CookiePolicy'
import Contact from './components/Contact'
import CookieConsent from './components/CookieConsent'
import WhatsAppButton from './components/WhatsAppButton'
import { InsightArticle, InsightsIndex } from './components/Insights'
import { getBlogPost } from './data/blogContent'
import { trackLead } from './lib/analytics'

const siteUrl = 'https://patuhdata.id'

type SeoData = { title: string; description: string; image?: string; type?: 'website' | 'article' }

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value))
}

function useSeo(path: string) {
  useEffect(() => {
    const service = path.startsWith('/services/')
      ? findService(path.replace('/services/', ''))
      : undefined
    const pages: Record<string, SeoData> = {
      '/': {
        title: 'UU PDP Implementation & Privacy Engineering in Indonesia | PatuhData',
        description: 'PatuhData builds UU PDP compliance into your systems, not just your documents. Engineering-led implementation and ongoing data protection for organizations in Indonesia.',
      },
      '/contact': {
        title: 'Discuss Your UU PDP Program | PatuhData',
        description: 'Talk to PatuhData in Jakarta about UU PDP readiness, implementation, privacy engineering, and managed data protection.',
      },
      '/insights': {
        title: 'UU PDP & Data Protection Insights | PatuhData',
        description: 'Practical guidance from PatuhData on UU PDP implementation, privacy engineering, and data recovery for organizations in Indonesia.',
      },
      '/insights/uu-pdp-data-residency': {
        title: 'UU PDP and Data Residency in Indonesia | PatuhData',
        description: 'A practical guide for business leaders evaluating Indonesian data residency, cross-border transfers, local hosting and operational resilience.',
        type: 'article',
      },
      '/privacy': { title: 'Privacy Policy | PatuhData', description: 'How PatuhData collects, uses, protects and manages personal data.' },
      '/terms': { title: 'Terms of Service | PatuhData', description: 'Terms governing the use of the PatuhData website and services.' },
      '/cookies': { title: 'Cookie Policy | PatuhData', description: 'Information about cookies used on the PatuhData website.' },
    }
    const blogPost = path.startsWith('/insights/') ? getBlogPost(path.replace('/insights/', '')) : undefined
    const notFound = !pages[path] && !service && !blogPost
    const data: SeoData = notFound
      ? { title: 'Page Not Found | PatuhData', description: 'The page you are looking for may have moved.' }
      : blogPost
      ? { title: `${blogPost.title} | PatuhData`, description: blogPost.excerpt, image: blogPost.image, type: 'article' }
      : service ? {
          title: `${service.title} Indonesia | PatuhData`,
          description: `${service.intro} Consult an expert about your requirements.`,
        }
      : pages[path] || pages['/']
    const canonical = `${siteUrl}${path === '/' ? '' : path}`
    const image = data.image || `${siteUrl}/patuhdata.png`

    document.documentElement.lang = 'en-ID'
    document.title = data.title
    setMeta('meta[name="description"]', { name: 'description', content: data.description })
    setMeta('meta[name="robots"]', { name: 'robots', content: notFound ? 'noindex, follow' : 'index, follow, max-image-preview:large' })
    setMeta('meta[name="author"]', { name: 'author', content: 'PT PatuhData Solusi Nusantara' })
    setMeta('meta[property="og:title"]', { property: 'og:title', content: data.title })
    setMeta('meta[property="og:description"]', { property: 'og:description', content: data.description })
    setMeta('meta[property="og:type"]', { property: 'og:type', content: data.type || 'website' })
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    setMeta('meta[property="og:image"]', { property: 'og:image', content: image })
    setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'PatuhData managed data protection services in Indonesia' })
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_ID' })
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: data.title })
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: data.description })
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonical

    const schemaId = 'patuhdata-schema'
    document.getElementById(schemaId)?.remove()
    const prerendered = document.querySelectorAll<HTMLScriptElement>('script[data-route-seo]')
    prerendered.forEach(script => { if (script.dataset.path !== path) script.remove() })
    if (notFound || [...prerendered].some(script => script.dataset.path === path)) return
    const schema = document.createElement('script')
    schema.id = schemaId
    schema.type = 'application/ld+json'
    const pageSchema = data.type === 'article'
      ? {
          '@type': 'Article',
          '@id': `${canonical}#article`,
          headline: blogPost?.title ?? data.title,
          datePublished: blogPost?.date,
          dateModified: blogPost?.date,
          description: data.description,
          mainEntityOfPage: canonical,
          image,
          author: { '@id': `${siteUrl}/#organization` },
          publisher: { '@id': `${siteUrl}/#organization` },
          inLanguage: 'en-ID',
        }
      : service
        ? {
            '@type': 'Service',
            '@id': `${canonical}#service`,
            name: service.title,
            description: data.description,
            url: canonical,
            provider: { '@id': `${siteUrl}/#organization` },
            areaServed: { '@type': 'Country', name: 'Indonesia' },
          }
        : {
            '@type': 'WebPage',
            '@id': `${canonical}#webpage`,
            url: canonical,
            name: data.title,
            description: data.description,
            isPartOf: { '@id': `${siteUrl}/#website` },
            inLanguage: 'en-ID',
          }
    schema.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': [pageSchema] })
    document.head.appendChild(schema)
  }, [path])
}

function Arrow(){ return <span aria-hidden="true">↗</span> }

const normalizePath = (path: string) => (path.length > 1 ? path.replace(/\/+$/, '') : path) || '/'

function findService(slug: string) {
  return resilienceServices.find(s => s.slug === (serviceAliases[slug] || slug))
}

function NotFound() {
  return <main id="main-content" className="article-page"><section className="article-hero"><span className="kicker">404</span><h1>Page not found</h1><p>This page may have moved. Explore our services or get in touch with our team.</p><a className="button primary" href="/">Go to the homepage <Arrow/></a></section></main>
}

function ServiceRoute({slug}:{slug:string}) {
  const service = findService(slug)
  return service ? <ServicePage service={service} /> : <NotFound />
}

export default function App({ path }: { path?: string } = {}) {
  const lang: 'en' = 'en'
  const [route, setRoute] = useState(() => normalizePath(path ?? window.location.pathname))
  useEffect(() => {
    const legacyRoute = window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : ''
    if (legacyRoute) window.location.replace(legacyRoute)
    const onRoute = () => setRoute(normalizePath(window.location.pathname))
    const onLeadClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a')
      const href = link?.getAttribute('href') || ''
      if (href.startsWith('mailto:')) trackLead('email', { page: window.location.pathname })
      else if (href.includes('wa.me/')) trackLead('whatsapp', { page: window.location.pathname })
    }
    window.addEventListener('popstate', onRoute)
    document.addEventListener('click', onLeadClick)
    return () => {
      window.removeEventListener('popstate', onRoute)
      document.removeEventListener('click', onLeadClick)
    }
  }, [])
  useEffect(() => {
    if (route !== '/') {
      window.scrollTo({ top: 0, behavior: 'instant' })
      requestAnimationFrame(() => {
        document.querySelectorAll<HTMLAnchorElement>('a[href="#contact"]').forEach((link) => {
          link.href = '/contact'
        })
      })
      return
    }
    const id = window.location.hash.replace('#', '')
    requestAnimationFrame(() => {
      if (!id) window.scrollTo({ top: 0, behavior: 'auto' })
      else document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' })
    })
  }, [route])
  const serviceSlug = route.startsWith('/services/') ? route.replace('/services/', '') : ''
  const insightSlug = route.startsWith('/insights/') ? route.replace('/insights/', '') : ''
  useSeo(route)
  return <div className="site-shell cr-site">
    <a className="cr-skip" href="#main-content">Skip to content</a>
    <ResilienceNav />
    {route === '/contact' ? <main id="main-content" className="contact-page"><Contact/></main> : route === '/privacy' ? <main id="main-content"><PrivacyPolicy/></main> : route === '/terms' ? <main id="main-content"><TermsOfService/></main> : route === '/cookies' ? <main id="main-content"><CookiePolicy/></main> : route === '/insights' ? <InsightsIndex/> : insightSlug ? <InsightArticle slug={insightSlug}/> : serviceSlug ? <ServiceRoute slug={serviceSlug}/> : route === '/' ? <ResilienceHome /> : <NotFound />}
    <footer className="enterprise-footer"><div className="footer-main"><div className="footer-intro"><img src="/logo-white.png" alt="PatuhData"/><p>Engineering-led UU PDP implementation and ongoing data protection for organizations in Indonesia.</p></div><div><strong>Services</strong>{resilienceServices.map(service => <a key={service.slug} href={`/services/${service.slug}`}>{service.title}</a>)}</div><div><strong>Company</strong><a href="/#about">About Us</a><a href="/#industries">Industries</a><a href="/insights">Insights</a><a href="/contact">Contact</a><a href="https://www.linkedin.com/company/patuhdata-id" target="_blank" rel="noreferrer">LinkedIn</a></div><div><strong>Contact Us</strong><a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a><a href="https://wa.me/6281903378000">+62 819 0337 8000</a><a className="footer-address" href="https://maps.google.com/?q=INFINITI+OFFICE+Jl.+Permata+Regency+Jl.+H.+Kelik+Srengseng+Jakarta+Barat+11630" target="_blank" rel="noreferrer">INFINITI OFFICE<br/>Jl. Permata Regency, Jl. H. Kelik<br/>RT.1/RW.6, Srengseng, Kembangan<br/>West Jakarta, DKI Jakarta 11630</a></div></div><div className="footer-bottom"><p>© 2026 PT PatuhData Solusi Nusantara. All rights reserved. Our services do not constitute legal advice.</p><div><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a><a href="/cookies">Cookie Policy</a><button type="button" className="cr-cookie-settings" onClick={() => window.dispatchEvent(new Event('patuhdata:open-consent'))}>Cookie Settings</button><a href="#main-content">Back to top ↑</a></div></div></footer>
    <CookieConsent lang={lang} />
    <WhatsAppButton />
  </div>
}
