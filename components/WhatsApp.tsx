import { site } from '@/data/site'
export function WhatsApp() {
  return <a className="whatsapp whatsapp-icon" href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with PatuhData on WhatsApp" title="Chat on WhatsApp">
    <svg aria-hidden="true" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M27 16a11 11 0 0 1-16.6 9.5L5 27l1.5-5.4A11 11 0 1 1 27 16Z"/><path fill="currentColor" stroke="none" d="m12 9 2 4-1.4 1.4c1 2.3 2.6 3.9 5 5l1.5-1.5 4 2c-.3 2-1.7 3.1-3.6 2.7-5.3-1.1-9.9-5.7-11-11C8.1 9.7 10 8.5 12 9Z"/></svg>
  </a>
}
