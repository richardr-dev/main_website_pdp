import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../src/App'
import seoRoutes from '../src/seo-routes.json'

describe('application routes', () => {
  beforeEach(() => {
    localStorage.setItem('patuhdata_consent_record', JSON.stringify({ consentId: 'test', policyVersion: '2026-09-01', timestamp: '2026-09-01T00:00:00.000Z', method: 'reject_optional', necessary: true, analytics: false }))
    window.dataLayer = []
    window.gtag = vi.fn()
    window.scrollTo = vi.fn()
  })

  it.each([
    ['/', 'Pembukuan yang selalu seimbang, di mana pun Anda berjualan.', 'id-ID'],
    ['/contact', 'Bicara dengan tim sales kami.', 'id-ID'],
    ['/privacy', 'Kebijakan Privasi', 'id-ID'],
    ['/terms', 'Syarat & Ketentuan', 'id-ID'],
    ['/cookies', 'Kebijakan Cookie', 'id-ID'],
    ['/en', 'Books that balance, wherever you sell.', 'en-ID'],
    ['/en/contact', 'Talk to our sales team.', 'en-ID'],
    ['/en/privacy', 'Privacy Policy', 'en-ID'],
    ['/en/terms', 'Terms of Service', 'en-ID'],
    ['/en/cookies', 'Cookie Policy', 'en-ID'],
  ])('renders %s in its language with route metadata', (path, heading, htmlLang) => {
    window.history.replaceState({}, '', path)
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument()
    expect(document.title).toBe((seoRoutes as Record<string, { title: string }>)[path].title)
    expect(document.documentElement.lang).toBe(htmlLang)
  })

  it.each([['/services/uu-pdp', 'Halaman tidak ditemukan'], ['/en/insights', 'Page not found']])('shows a 404 for %s', (path, heading) => {
    window.history.replaceState({}, '', path)
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument()
    expect(document.title).toBe('Page Not Found | PatuhData')
  })
})
