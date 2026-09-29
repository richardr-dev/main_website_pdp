import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../src/App'

describe('application routes', () => {
  beforeEach(() => {
    localStorage.setItem('patuhdata-language', 'id')
    localStorage.setItem('patuhdata_consent_record', JSON.stringify({ consentId: 'test', policyVersion: '2026-09-01', timestamp: '2026-09-01T00:00:00.000Z', method: 'reject_optional', necessary: true, analytics: false }))
    window.dataLayer = []
    window.gtag = vi.fn()
    window.scrollTo = vi.fn()
  })

  it.each([
    ['/services/uu-pdp', 'UU PDP', 'UU PDP Indonesia | PatuhData'],
    ['/services/patuhdata-academy', 'PatuhData Academy', 'PatuhData Academy Indonesia | PatuhData'],
    ['/contact', 'Let’s talk about your recovery readiness', 'Consult a Cyber Resilience Expert | PatuhData'],
    ['/privacy', 'Privacy Policy', 'Privacy Policy | PatuhData'],
    ['/terms', 'Terms of Service', 'Terms of Service | PatuhData'],
    ['/cookies', 'Cookie Policy', 'Cookie Policy | PatuhData'],
    ['/services/managed-infrastructure', 'Managed Infrastructure', 'Managed Infrastructure Indonesia | PatuhData'],
  ])('renders %s directly with route metadata', (path, heading, title) => {
    window.history.replaceState({}, '', path)
    render(<App />)
    expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    expect(document.title).toBe(title)
  })
})
