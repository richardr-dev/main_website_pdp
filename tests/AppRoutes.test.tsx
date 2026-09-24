import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../src/App'

describe('application routes', () => {
  beforeEach(() => {
    localStorage.setItem('patuhdata-language', 'id')
    localStorage.setItem('patuhdata_consent_record', JSON.stringify({ consentId: 'test', policyVersion: '2026-09-24', timestamp: new Date().toISOString(), method: 'reject_optional', necessary: true, analytics: false }))
    window.dataLayer = []
    window.gtag = vi.fn()
    window.scrollTo = vi.fn()
  })

  it.each([
    ['/', 'Critical IT Shouldn’t Become a Business Risk.', 'Recover, Secure & Govern | PatuhData'],
    ['/solutions/recover', 'PatuhData Recover', 'PatuhData Recover | Business Continuity & Disaster Recovery'],
    ['/solutions/secure', 'PatuhData Secure', 'PatuhData Secure | Managed Cybersecurity'],
    ['/solutions/govern', 'PatuhData Govern', 'PatuhData Govern | Technology Governance & Compliance'],
    ['/resources/can-you-restore-your-backup', 'Your backup completed successfully. Can you actually restore it?', 'Your backup completed successfully. Can you actually restore it? | PatuhData'],
    ['/resources/rpo-rto-business-guide', 'What RPO and RTO actually mean for a business', 'What RPO and RTO actually mean for a business | PatuhData'],
    ['/services/uu-pdp', 'UU PDP', 'UU PDP Indonesia | PatuhData'],
    ['/services/patuhdata-academy', 'PatuhData Academy', 'PatuhData Academy Indonesia | PatuhData'],
    ['/contact', 'Talk to a Solution Architect', 'Talk to a Solution Architect | PatuhData'],
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
