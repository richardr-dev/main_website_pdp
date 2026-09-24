import { useEffect, useRef, useState } from 'react'

type Lang = 'id' | 'en'
type ConsentMethod = 'accept_all' | 'reject_optional' | 'save_preferences'

type ConsentRecord = {
  consentId: string
  policyVersion: string
  timestamp: string
  method: ConsentMethod
  necessary: true
  analytics: boolean
}

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

const COOKIE_NAME = 'patuhdata_consent_v1'
const STORAGE_KEY = 'patuhdata_consent_record'
const HISTORY_KEY = 'patuhdata_consent_history'
export const POLICY_VERSION = '2026-09-24'
const MAX_AGE = 180 * 24 * 60 * 60
const GA_ID = 'G-5QYE9SJ0CX'

function readRecord(): ConsentRecord | null {
  try {
    const cookie = document.cookie.split('; ').find((item) => item.startsWith(`${COOKIE_NAME}=`))
    const value = cookie ? decodeURIComponent(cookie.split('=').slice(1).join('=')) : localStorage.getItem(STORAGE_KEY)
    if (!value) return null
    const record = JSON.parse(value) as ConsentRecord
    const age = Date.now() - Date.parse(record.timestamp)
    const valid = record.policyVersion === POLICY_VERSION && typeof record.analytics === 'boolean'
      && record.necessary === true && typeof record.consentId === 'string'
      && ['accept_all', 'reject_optional', 'save_preferences'].includes(record.method)
      && age >= 0 && age < MAX_AGE * 1000
    if (!valid) {
      document.cookie = `${COOKIE_NAME}=; Max-Age=0; Path=/; SameSite=Lax`
      try { localStorage.removeItem(STORAGE_KEY) } catch { /* Fail closed. */ }
    }
    return valid ? record : null
  } catch {
    return null
  }
}

function loadAnalytics() {
  ;(window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = false
  if (!document.querySelector(`script[src*="${GA_ID}"]`)) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)
  } else return
  window.gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' })
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, {
    allow_google_signals: false, allow_ad_personalization_signals: false,
    cookie_expires: MAX_AGE, cookie_update: false,
    page_location: window.location.origin + window.location.pathname,
    page_referrer: document.referrer.split('?')[0].split('#')[0],
  })
}

function removeAnalytics() {
  ;(window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true
  document.querySelectorAll<HTMLScriptElement>(`script[src*="${GA_ID}"]`).forEach((script) => script.remove())

  const host = window.location.hostname
  const domains = host && host !== 'localhost' ? Array.from(new Set([host, `.${host}`, 'patuhdata.id', '.patuhdata.id'])) : []
  document.cookie.split(';').forEach((item) => {
    const name = item.split('=')[0]?.trim()
    if (!name?.startsWith('_ga')) return
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${domain}; SameSite=Lax`
    })
  })
}

function applyConsent(record: ConsentRecord) {
  if (!record.analytics) removeAnalytics()
  window.gtag('consent', 'update', {
    analytics_storage: record.analytics ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
  if (record.analytics) loadAnalytics()
}

function persistRecord(record: ConsentRecord) {
  const serialized = JSON.stringify(record)
  try {
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(serialized)}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`
  } catch { /* Consent still applies in memory if storage is unavailable. */ }
  try {
    localStorage.setItem(STORAGE_KEY, serialized)
    localStorage.removeItem(HISTORY_KEY)
  } catch { /* Blocked browser storage must never prevent withdrawal. */ }
  applyConsent(record)
}

export default function CookieConsent({ lang }: { lang: Lang }) {
  const en = lang === 'en'
  const [banner, setBanner] = useState(false)
  const [preferences, setPreferences] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [expanded, setExpanded] = useState<string | null>('necessary')
  const [lastRecord, setLastRecord] = useState<ConsentRecord | null>(null)
  const [tab, setTab] = useState<'consent' | 'details' | 'about'>('consent')
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.gtag = window.gtag || function (...args: unknown[]) { window.dataLayer.push(args) }
    try { localStorage.removeItem(HISTORY_KEY) } catch { /* Storage may be blocked. */ }
    const record = readRecord()
    if (record) {
      setAnalytics(record.analytics)
      setLastRecord(record)
      applyConsent(record)
    } else {
      removeAnalytics()
      const timer = window.setTimeout(() => setBanner(true), 500)
      return () => window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const open = () => {
      const record = readRecord()
      setAnalytics(record?.analytics ?? false)
      setLastRecord(record)
      setBanner(false)
      setPreferences(true)
      setTab('details')
    }
    window.addEventListener('patuhdata:open-consent', open)
    return () => window.removeEventListener('patuhdata:open-consent', open)
  }, [])

  useEffect(() => {
    const sync = () => {
      const record = readRecord()
      if (record) applyConsent(record)
      else removeAnalytics()
      setAnalytics(record?.analytics ?? false)
      setLastRecord(record)
      if (!record) setBanner(true)
    }
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY || event.key === null) sync()
    }
    const onVisible = () => { if (document.visibilityState === 'visible') sync() }
    window.addEventListener('storage', onStorage)
    document.addEventListener('visibilitychange', onVisible)
    const timer = window.setInterval(sync, 60_000)
    return () => {
      window.removeEventListener('storage', onStorage)
      document.removeEventListener('visibilitychange', onVisible)
      window.clearInterval(timer)
    }
  }, [])


  const isOpen = banner || preferences
  useEffect(() => {
    if (!isOpen) return
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const dialog = dialogRef.current
    const focusables = () => Array.from(dialog?.querySelectorAll<HTMLElement>('button:not([tabindex="-1"]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])') || []).filter((element) => !element.hasAttribute('disabled'))
    const focusTimer = window.setTimeout(() => focusables()[0]?.focus(), 0)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        const record = readRecord()
        setAnalytics(record?.analytics ?? false)
        setPreferences(false)
        setBanner(false)
        return
      }
      if (event.key !== 'Tab') return
      const elements = focusables()
      if (!elements.length) return
      const first = elements[0]
      const last = elements[elements.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [isOpen])

  const closePreferences = () => {
    const record = readRecord()
    setAnalytics(record?.analytics ?? false)
    setPreferences(false)
    setBanner(false)
  }

  const save = (method: ConsentMethod, nextAnalytics: boolean) => {
    const record: ConsentRecord = {
      consentId: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      policyVersion: POLICY_VERSION,
      timestamp: new Date().toISOString(),
      method,
      necessary: true,
      analytics: nextAnalytics,
    }
    setAnalytics(nextAnalytics)
    setLastRecord(record)
    persistRecord(record)
    setBanner(false)
    setPreferences(false)
  }

  const categories = [
    {
      key: 'necessary',
      title: en ? 'Strictly Necessary Cookies' : 'Cookie yang Sangat Diperlukan',
      description: en ? 'Required for consent records, remembering your cookie choices. These cannot be disabled.' : 'Diperlukan untuk catatan persetujuan, mengingat pilihan cookie Anda. Kategori ini tidak dapat dinonaktifkan.',
      cookies: [`${COOKIE_NAME} · 180 days`, 'patuhdata_consent_record · local storage · 180 days'],
    },
    {
      key: 'analytics',
      title: en ? 'Analytics Cookies' : 'Cookie Analitik',
      description: en ? 'Google Analytics helps us understand visits, navigation, and conversions. It loads only after consent.' : 'Google Analytics membantu kami memahami kunjungan, navigasi, dan konversi. Analitik hanya dimuat setelah persetujuan.',
      cookies: ['_ga · 180 days', `_ga_${GA_ID.replace('G-', '')} · 180 days`],
    },
  ]

  if (!banner && !preferences) return null

  return <div className="consent-backdrop consent-suite-wrap" role="dialog" aria-modal="true" aria-label={en ? 'Cookie preferences' : 'Preferensi cookie'} ref={dialogRef}>
    <div className="consent-suite">
      {<button className="consent-suite-close" aria-label={en ? 'Close cookie settings' : 'Tutup pengaturan cookie'} onClick={closePreferences}>×</button>}
      <div className="consent-suite-tabs" role="tablist" aria-label={en ? 'Privacy information' : 'Informasi privasi'} onKeyDown={(event) => {
        const tabs = ['consent', 'details', 'about'] as const
        const index = tabs.indexOf(tab)
        const next = event.key === 'ArrowRight' ? (index + 1) % 3 : event.key === 'ArrowLeft' ? (index + 2) % 3 : event.key === 'Home' ? 0 : event.key === 'End' ? 2 : -1
        if (next >= 0) { event.preventDefault(); setTab(tabs[next]); document.getElementById(tabs[next] + '-tab')?.focus() }
      }}>
        <button id="consent-tab" role="tab" aria-selected={tab === 'consent'} aria-controls="consent-panel" tabIndex={tab === 'consent' ? 0 : -1} className={tab === 'consent' ? 'active' : ''} onClick={() => setTab('consent')}>{en ? 'Consent' : 'Persetujuan'}</button>
        <button id="details-tab" role="tab" aria-selected={tab === 'details'} aria-controls="details-panel" tabIndex={tab === 'details' ? 0 : -1} className={tab === 'details' ? 'active' : ''} onClick={() => setTab('details')}>{en ? 'Details' : 'Detail'}</button>
        <button id="about-tab" role="tab" aria-selected={tab === 'about'} aria-controls="about-panel" tabIndex={tab === 'about' ? 0 : -1} className={tab === 'about' ? 'active' : ''} onClick={() => setTab('about')}>{en ? 'About' : 'Tentang'}</button>
      </div>

      <div className="consent-suite-content">
        {tab === 'consent' && <div id="consent-panel" role="tabpanel" aria-labelledby="consent-tab" className="consent-tab-copy"><h2 id="consent-dialog-title">{en ? 'This website uses cookies' : 'Situs ini menggunakan cookie'}</h2><p>{en ? 'We use necessary storage to operate the website. With your permission, Google Analytics helps us understand how visitors use the site and which services are most useful. Analytics stays disabled until you allow it.' : 'Kami menggunakan penyimpanan yang diperlukan agar situs dapat berfungsi. Dengan izin Anda, Google Analytics membantu kami memahami penggunaan situs dan layanan yang paling berguna. Analitik tetap nonaktif sampai Anda mengizinkannya.'}</p><p>{en ? 'You may deny analytics, review its details, or allow it. Your choice does not affect access to the website.' : 'Anda dapat menolak analitik, melihat detailnya, atau mengizinkannya. Pilihan Anda tidak memengaruhi akses ke situs.'}</p></div>}

        {tab === 'details' && <div id="details-panel" role="tabpanel" aria-labelledby="details-tab" className="consent-categories consent-suite-categories">{categories.map((category) => <article key={category.key}>
          <div className="consent-category-head"><button className="category-expand" aria-expanded={expanded === category.key} aria-controls={`category-${category.key}`} onClick={() => setExpanded(expanded === category.key ? null : category.key)}><span aria-hidden="true">{expanded === category.key ? '⌄' : '›'}</span><strong>{category.title}</strong><em>{category.cookies.length}</em></button>{category.key === 'necessary' ? <b className="always-active">{en ? 'Always active' : 'Selalu aktif'}</b> : <label className="consent-toggle" aria-label={en ? 'Allow analytics cookies' : 'Izinkan cookie analitik'}><input type="checkbox" aria-label={en ? 'Allow analytics cookies' : 'Izinkan cookie analitik'} checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} /><i /></label>}</div>
          {expanded === category.key && <div id={`category-${category.key}`} className="consent-category-detail"><p>{category.description}</p><strong>{en ? 'Cookies and storage' : 'Cookie dan penyimpanan'}</strong><ul>{category.cookies.map((cookie) => <li key={cookie}>{cookie}</li>)}</ul></div>}
        </article>)}</div>}

        {tab === 'about' && <div id="about-panel" role="tabpanel" aria-labelledby="about-tab" className="consent-tab-copy"><h2>{en ? 'About your consent' : 'Tentang persetujuan Anda'}</h2><p>{en ? 'Necessary storage may be used without an analytics choice because it supports your cookie choices. Google Analytics requires your permission.' : 'Penyimpanan yang diperlukan dapat digunakan tanpa pilihan analitik karena mendukung pilihan cookie Anda. Google Analytics memerlukan izin Anda.'}</p><p>{en ? 'You can change or withdraw your choice at any time through Cookie Settings in the footer. Withdrawing analytics deletes accessible Google Analytics cookies from this site and prevents further analytics collection.' : 'Anda dapat mengubah atau menarik pilihan kapan saja melalui Pengaturan Cookie di footer. Penarikan izin analitik menghapus cookie Google Analytics yang dapat diakses dari situs ini dan mencegah pengumpulan analitik berikutnya.'}</p><div className="consent-policy-links"><a href="/cookies">{en ? 'Cookie Policy' : 'Kebijakan Cookie'}</a><a href="/privacy">{en ? 'Privacy Policy' : 'Kebijakan Privasi'}</a></div>{lastRecord && <small className="consent-record-box">{en ? 'Consent ID' : 'ID Persetujuan'}: <b>{lastRecord.consentId}</b><br />{new Date(lastRecord.timestamp).toLocaleString(en ? 'en-ID' : 'id-ID')} · v{lastRecord.policyVersion}</small>}</div>}
      </div>

      <div className="consent-suite-actions">
        <button onClick={() => save('reject_optional', false)}>{en ? 'Reject optional' : 'Tolak opsional'}</button>
        <button onClick={() => tab === 'details' ? save('save_preferences', analytics) : setTab('details')}>{tab === 'details' ? (en ? 'Save selection' : 'Simpan pilihan') : (en ? 'Review details' : 'Lihat detail')} <span>›</span></button>
        <button onClick={() => save('accept_all', true)}>{en ? 'Accept all' : 'Terima semua'}</button>
      </div>
      <div className="consent-policy-links"><a href="/cookies">{en ? 'Cookie Policy' : 'Kebijakan Cookie'}</a><a href="/privacy">{en ? 'Privacy Policy' : 'Kebijakan Privasi'}</a></div>
      <div className="consent-suite-logo"><img src="/logobluee.png" alt="PatuhData" /></div>
    </div>
  </div>
}
