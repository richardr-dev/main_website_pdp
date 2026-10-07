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
    ['/services/uu-pdp', 'UU PDP Readiness Assessment', 'UU PDP Readiness Assessment Indonesia | PatuhData'],
    ['/services/backup-restore', 'Managed Backup & Recovery', 'Managed Backup & Recovery Indonesia | PatuhData'],
    ['/services/patuhdata-academy', 'Page not found', 'Page Not Found | PatuhData'],
    ['/insights/managed-it', 'Insight not found', 'Page Not Found | PatuhData'],
    ['/contact', 'Let’s make privacy operational.', 'Discuss Your UU PDP Program | PatuhData'],
    ['/privacy', 'Privacy Policy', 'Privacy Policy | PatuhData'],
    ['/terms', 'Terms of Service', 'Terms of Service | PatuhData'],
    ['/cookies', 'Cookie Policy', 'Cookie Policy | PatuhData'],
    ['/insights', 'Practical guidance on UU PDP.', 'UU PDP & Data Protection Insights | PatuhData'],
  ])('renders %s directly with route metadata', (path, heading, title) => {
    window.history.replaceState({}, '', path)
    render(<App />)
    expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    expect(document.title).toBe(title)
  })
})
