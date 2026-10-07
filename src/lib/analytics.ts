/**
 * Records a lead in Google Analytics. Events only reach Google after the visitor accepts
 * analytics: until then the analytics script is not loaded and consent mode stays denied.
 */
export function trackLead(method: 'contact_form' | 'whatsapp' | 'email' | 'resource_download', params: Record<string, string> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'generate_lead', { method, ...params })
}
