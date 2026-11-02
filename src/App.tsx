import { useEffect, useState } from 'react'
import './index.css'
import './site.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import DivisionPage from './pages/DivisionPage'
import IndustryPage from './pages/IndustryPage'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookiePolicy from './components/CookiePolicy'
import CookieConsent from './components/CookieConsent'
import WhatsAppButton from './components/WhatsAppButton'
import { rememberAttribution, trackCta, trackLead } from './lib/analytics'
import { findDivision, findIndustry, pages } from './data/site'
import type { Lang } from './data/copy'

const siteUrl = 'https://patuhdata.id'

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
    const page = pages[path]
    const data = page ?? { title: 'Page Not Found | PatuhData', description: 'The page you are looking for may have moved.' }
    const canonical = `${siteUrl}${path === '/' ? '' : path}`
    document.documentElement.lang = path === '/id' ? 'id' : 'en-ID'
    document.title = data.title
    setMeta('meta[name="description"]', { name: 'description', content: data.description })
    setMeta('meta[name="robots"]', { name: 'robots', content: page ? 'index, follow, max-image-preview:large' : 'noindex, follow' })
    setMeta('meta[property="og:title"]', { property: 'og:title', content: data.title })
    setMeta('meta[property="og:description"]', { property: 'og:description', content: data.description })
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: data.title })
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: data.description })
    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonical
  }, [path])
}

const normalizePath = (path: string) => (path.length > 1 ? path.replace(/\/+$/, '') : path) || '/'

function NotFound() {
  return <main id="main-content" className="pd-notfound"><div className="pd-container"><p className="pd-eyebrow">404</p><h1>Page not found</h1><p>This page may have moved.</p><a className="pd-btn" href="/">Go to the homepage</a></div></main>
}

function Page({ route, lang }: { route: string; lang: Lang }) {
  if (route === '/' || route === '/id') return <HomePage lang={lang} />
  if (route === '/about') return <AboutPage />
  if (route === '/contact') return <ContactPage />
  if (route === '/privacy') return <main id="main-content"><PrivacyPolicy /></main>
  if (route === '/terms') return <main id="main-content"><TermsOfService /></main>
  if (route === '/cookies') return <main id="main-content"><CookiePolicy /></main>
  const division = route.startsWith('/services/') ? findDivision(route.slice(10)) : undefined
  if (division) return <DivisionPage division={division} />
  const industry = route.startsWith('/industries/') ? findIndustry(route.slice(12)) : undefined
  if (industry) return <IndustryPage industry={industry} />
  return <NotFound />
}

export default function App({ path }: { path?: string } = {}) {
  const [route, setRoute] = useState(() => normalizePath(path ?? window.location.pathname))
  const lang: Lang = route === '/id' ? 'id' : 'en'
  useEffect(() => {
    rememberAttribution(window.location.search, window.location.pathname)
    const onRoute = () => setRoute(normalizePath(window.location.pathname))
    const onLeadClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a')
      const href = link?.getAttribute('href') || ''
      if (href.startsWith('mailto:')) trackLead('email', { page: window.location.pathname })
      else if (href.includes('wa.me/')) trackLead('whatsapp', { page: window.location.pathname })
      else if (href.startsWith('/contact')) trackCta(link?.textContent?.trim() || 'contact', { page: window.location.pathname, target: href })
    }
    window.addEventListener('popstate', onRoute)
    document.addEventListener('click', onLeadClick)
    return () => {
      window.removeEventListener('popstate', onRoute)
      document.removeEventListener('click', onLeadClick)
    }
  }, [])
  useEffect(() => {
    const id = window.location.hash.replace('#', '')
    requestAnimationFrame(() => {
      if (!id) window.scrollTo({ top: 0, behavior: 'auto' })
      else document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' })
    })
  }, [route])
  useSeo(route)
  return <div className="pd-site">
    <a className="pd-skip" href="#main-content">Skip to content</a>
    <Nav lang={lang} />
    <Page route={route} lang={lang} />
    <Footer lang={lang} />
    <CookieConsent lang={lang} />
    <WhatsAppButton lang={lang} />
  </div>
}
