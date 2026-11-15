import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../src/App'

describe('application routes', () => {
  beforeEach(() => {
    localStorage.setItem('patuhdata_consent_record', JSON.stringify({ consentId: 'test', policyVersion: '2026-09-01', timestamp: '2026-09-01T00:00:00.000Z', method: 'reject_optional', necessary: true, analytics: false }))
    window.dataLayer = []
    window.gtag = vi.fn()
    window.scrollTo = vi.fn()
  })

  it.each([
    ['/', 'Books that balance, wherever you do business.', 'PatuhData Accounting: Invoicing, Ledgers & Tax Reports in One Place'],
    ['/contact', 'Talk to our sales team.', 'Contact Sales | PatuhData Accounting'],
    ['/privacy', 'Privacy Policy', 'Privacy Policy | PatuhData'],
    ['/terms', 'Terms of Service', 'Terms of Service | PatuhData'],
    ['/cookies', 'Cookie Policy', 'Cookie Policy | PatuhData'],
    ['/services/uu-pdp', 'Page not found', 'Page Not Found | PatuhData'],
  ])('renders %s directly with route metadata', (path, heading, title) => {
    window.history.replaceState({}, '', path)
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument()
    expect(document.title).toBe(title)
  })
})
