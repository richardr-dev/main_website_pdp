import { fireEvent, render, screen, within } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../src/App'
import { coreSolutions, indonesiaInterest, inquiryHref } from '../src/data/coreSolutions'
import { POLICY_VERSION } from '../src/components/CookieConsent'
import seoRoutes from '../src/seo-routes.json'

describe('solution architecture positioning', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/')
    localStorage.setItem('patuhdata_consent_record', JSON.stringify({ consentId: 'test', policyVersion: POLICY_VERSION, timestamp: new Date().toISOString(), method: 'reject_optional', necessary: true, analytics: false }))
    window.gtag = vi.fn()
    window.scrollTo = vi.fn()
  })

  it('connects homepage links to registered pages or existing sections', () => {
    render(<App />)
    document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
      const url = new URL(link.href)
      if (url.origin !== window.location.origin) return
      expect(Object.keys(seoRoutes)).toContain(url.pathname)
      if (url.pathname === '/' && url.hash) expect(document.getElementById(url.hash.slice(1))).not.toBeNull()
    })
  })

  it('keeps navigation focused on the three solutions', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const toggle = within(nav).getByRole('button', { name: /Solutions/ })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    coreSolutions.forEach(solution => expect(within(nav).getByRole('link', { name: new RegExp(solution.label) })).toHaveAttribute('href', '/solutions/' + solution.slug))
    fireEvent.keyDown(toggle, { key: 'Escape' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it.each([...coreSolutions.map(s => s.interest), ...coreSolutions.map(s => s.managed), indonesiaInterest])('preserves inquiry context: %s', interest => {
    window.history.replaceState({}, '', inquiryHref(interest))
    render(<App />)
    expect(screen.getByRole('combobox', { name: /What do you need/ })).toHaveValue(interest)
  })

  it('does not accept an unknown inquiry selection', () => {
    window.history.replaceState({}, '', '/contact?interest=unknown')
    render(<App />)
    expect(screen.getByRole('combobox', { name: /What do you need/ })).toHaveValue('')
  })
})
