/**
 * Records a lead in Google Analytics. Events only reach Google after the visitor accepts
 * analytics: until then the analytics script is not loaded and consent mode stays denied.
 */
export function trackLead(method: 'contact_form' | 'whatsapp' | 'email', params: Record<string, string> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'generate_lead', { method, ...params })
}

/** Records a click on a call to action (quotation, assessment, project) that leads to the contact form. */
export function trackCta(label: string, params: Record<string, string> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'cta_click', { label, ...params })
}

const ATTRIBUTION_KEY = 'patuhdata_attribution'
const ATTRIBUTION_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid']

/**
 * Keeps the campaign a visitor arrived from (Google Ads gclid and UTM tags) for this browser session,
 * so a lead submitted on another page can still be attributed. Stored in sessionStorage only.
 */
export function rememberAttribution(search: string, landingPage: string) {
  const params = new URLSearchParams(search)
  const found = Object.fromEntries(ATTRIBUTION_PARAMS.filter(key => params.get(key)).map(key => [key, params.get(key)!]))
  if (!Object.keys(found).length) return
  try { sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify({ ...found, landing_page: landingPage })) } catch { /* storage unavailable */ }
}

export function readAttribution(): Record<string, string> {
  try { return JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) || '{}') } catch { return {} }
}
