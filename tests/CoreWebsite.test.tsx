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

  it('keeps the recovery navigation accessible on mobile', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Navigasi utama' })
    expect(within(nav).getAllByRole('link')).toHaveLength(5)
    const toggle = screen.getByRole('button', { name: 'Menu navigasi' })
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    fireEvent.keyDown(nav, { key: 'Escape' })
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
