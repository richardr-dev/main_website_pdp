import { readRecord } from '../components/CookieConsent'
export function trackConversion(event: 'whatsapp_click' | 'form_submit_success', language: string) {
  if (readRecord()?.analytics && typeof window.gtag === 'function') {
    window.gtag('event', event, { language, page_location: window.location.origin + window.location.pathname })
  }
}
