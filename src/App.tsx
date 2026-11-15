import { useEffect, useState } from 'react'
import './index.css'
import './site.css'
import Home from './components/Home'
import SiteNav from './components/SiteNav'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookiePolicy from './components/CookiePolicy'
import Contact from './components/Contact'
import CookieConsent from './components/CookieConsent'
import WhatsAppButton from './components/WhatsAppButton'
import seoRoutes from './seo-routes.json'
import { trackLead } from './lib/analytics'
import { commerceLogin } from './lib/links'

const siteUrl = 'https://patuhdata.id'
const routes = seoRoutes as Record<string, { title: string; description: string }>
const notFoundMeta = { title: 'Page Not Found | PatuhData', description: 'The page you are looking for may have moved.' }

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
    const notFound = !routes[path]
    const data = routes[path] ?? notFoundMeta
    const canonical = `${siteUrl}${path === '/' ? '' : path}`
    document.documentElement.lang = 'en-ID'
    document.title = data.title
    setMeta('meta[name="description"]', { name: 'description', content: data.description })
    setMeta('meta[name="robots"]', { name: 'robots', content: notFound ? 'noindex, follow' : 'index, follow, max-image-preview:large' })
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
    document.querySelectorAll<HTMLScriptElement>('script[data-route-seo]').forEach(script => { if (script.dataset.path !== path) script.remove() })
  }, [path])
}

const normalizePath = (path: string) => (path.length > 1 ? path.replace(/\/+$/, '') : path) || '/'

function NotFound() {
  return <main id="main-content" className="pd-notfound"><p className="pd-eyebrow">404</p><h1>Page not found</h1><p>This page may have moved.</p><a className="pd-button" href="/">Go to the homepage</a></main>
}

function Footer() {
  return <footer className="pd-footer">
    <div className="pd-footer-main">
      <div><img src="/logo/logo-reversed.png" alt="PatuhData Accounting" width="164" height="40" /><p>Invoicing, ledgers and tax reports in one place, for businesses in Indonesia.</p></div>
      <div><strong>Product</strong><a href="/#features">Features</a><a href="/#how-it-works">How it works</a><a href="/#faq">FAQ</a></div>
      <div><strong>Account</strong><a href={commerceLogin}>Sign in</a><a href="/contact">Contact sales</a></div>
      <div><strong>Contact</strong><a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a><a href="https://wa.me/6281903378000">+62 819 0337 8000</a><address>INFINITI OFFICE, Jl. Permata Regency<br />Kembangan, West Jakarta 11630</address></div>
    </div>
    <div className="pd-footer-bottom">
      <p>© 2026 PT PatuhData Solusi Nusantara</p>
      <div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/cookies">Cookies</a><button type="button" onClick={() => window.dispatchEvent(new Event('patuhdata:open-consent'))}>Cookie Settings</button></div>
    </div>
  </footer>
}

export default function App({ path }: { path?: string } = {}) {
  const [route, setRoute] = useState(() => normalizePath(path ?? window.location.pathname))
  useEffect(() => {
    const onRoute = () => setRoute(normalizePath(window.location.pathname))
    const onLeadClick = (event: MouseEvent) => {
      const href = (event.target as Element | null)?.closest?.('a')?.getAttribute('href') || ''
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
    const id = window.location.hash.replace('#', '')
    requestAnimationFrame(() => {
      if (route === '/' && id) document.getElementById(id)?.scrollIntoView({ block: 'start' })
      else window.scrollTo({ top: 0, behavior: 'auto' })
    })
  }, [route])
  useSeo(route)
  const page = route === '/' ? <Home />
    : route === '/contact' ? <main id="main-content"><Contact /></main>
    : route === '/privacy' ? <main id="main-content"><PrivacyPolicy /></main>
    : route === '/terms' ? <main id="main-content"><TermsOfService /></main>
    : route === '/cookies' ? <main id="main-content"><CookiePolicy /></main>
    : <NotFound />
  return <div className="pd-site">
    <a className="pd-skip" href="#main-content">Skip to content</a>
    <SiteNav />
    {page}
    <Footer />
    <CookieConsent lang="en" />
    <WhatsAppButton />
  </div>
}
