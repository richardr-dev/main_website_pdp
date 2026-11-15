import { useEffect, useState } from 'react'
import './index.css'
import './site.css'
import Home from './components/Home'
import SiteNav from './components/SiteNav'
import LegalPage from './components/LegalPage'
import Contact from './components/Contact'
import CookieConsent from './components/CookieConsent'
import WhatsAppButton from './components/WhatsAppButton'
import seoRoutes from './seo-routes.json'
import { trackLead } from './lib/analytics'
import { commerceLogin } from './lib/links'
import { basePath, copy, home, langFromPath, localize, type Lang } from './i18n'

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
    const lang = langFromPath(path)
    document.documentElement.lang = lang === 'id' ? 'id-ID' : 'en-ID'
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: lang === 'id' ? 'id_ID' : 'en_ID' })
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

function NotFound({ lang }: { lang: Lang }) {
  const t = copy[lang].notFound
  return <main id="main-content" className="pd-notfound"><p className="pd-eyebrow">404</p><h1>{t.title}</h1><p>{t.text}</p><a className="pd-button" href={localize('/', lang)}>{t.back}</a></main>
}

function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang]
  return <footer className="pd-footer">
    <div className="pd-footer-main">
      <div><img src="/logo/logo-reversed.png" alt="PatuhData Accounting" width="164" height="40" /><p>{t.footer.tagline}</p></div>
      <div><strong>{t.footer.product}</strong><a href={home('features', lang)}>{t.nav.features}</a><a href={home('how-it-works', lang)}>{t.nav.how}</a><a href={home('faq', lang)}>{t.nav.faq}</a></div>
      <div><strong>{t.footer.account}</strong><a href={commerceLogin}>{t.nav.signIn}</a><a href={localize('/contact', lang)}>{t.nav.sales}</a></div>
      <div><strong>{t.footer.contact}</strong><a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a><a href="https://wa.me/6281903378000">+62 819 0337 8000</a><address>INFINITI OFFICE, Jl. Permata Regency<br />Kembangan, {lang === 'id' ? 'Jakarta Barat' : 'West Jakarta'} 11630</address></div>
    </div>
    <div className="pd-footer-bottom">
      <p>© 2026 PT PatuhData Solusi Nusantara</p>
      <div><a href={localize('/privacy', lang)}>{t.footer.privacy}</a><a href={localize('/terms', lang)}>{t.footer.terms}</a><a href={localize('/cookies', lang)}>{t.footer.cookies}</a><button type="button" onClick={() => window.dispatchEvent(new Event('patuhdata:open-consent'))}>{t.footer.cookieSettings}</button></div>
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
      if (basePath(route) === '/' && id) document.getElementById(id)?.scrollIntoView({ block: 'start' })
      else window.scrollTo({ top: 0, behavior: 'auto' })
    })
  }, [route])
  useSeo(route)
  const lang = langFromPath(route)
  const base = basePath(route)
  const page = base === '/' ? <Home lang={lang} />
    : base === '/contact' ? <main id="main-content"><Contact lang={lang} /></main>
    : base === '/privacy' || base === '/terms' || base === '/cookies' ? <LegalPage doc={base.slice(1) as 'privacy' | 'terms' | 'cookies'} lang={lang} />
    : <NotFound lang={lang} />
  return <div className="pd-site" lang={lang}>
    <a className="pd-skip" href="#main-content">{lang === 'id' ? 'Langsung ke konten' : 'Skip to content'}</a>
    <SiteNav lang={lang} page={routes[route] ? base : '/'} />
    {page}
    <Footer lang={lang} />
    <CookieConsent lang={lang} />
    <WhatsAppButton lang={lang} />
  </div>
}
