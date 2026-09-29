import { act, fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import CookieConsent from '../src/components/CookieConsent'

const STORAGE_KEY = 'patuhdata_consent_record'
const POLICY_VERSION = '2026-09-01'

function clearCookies() {
  document.cookie.split(';').forEach((item) => {
    const name = item.split('=')[0]?.trim()
    if (name) document.cookie = `${name}=; Max-Age=0; Path=/`
  })
}

function storedConsent(analytics: boolean) {
  return JSON.stringify({
    consentId: 'existing-consent',
    policyVersion: POLICY_VERSION,
    timestamp: '2026-09-01T00:00:00.000Z',
    method: analytics ? 'accept_all' : 'reject_optional',
    necessary: true,
    analytics,
  })
}

describe('CookieConsent', () => {
  beforeEach(() => {
    localStorage.clear()
    clearCookies()
    document.head.querySelectorAll('script[src*="googletagmanager.com"]').forEach((script) => script.remove())
    window.dataLayer = []
    window.gtag = vi.fn()
    document.body.style.overflow = ''
  })

  it('shows the first-visit popup and does not load analytics before a choice', () => {
    vi.useFakeTimers()
    render(<CookieConsent lang="en" />)
    act(() => vi.advanceTimersByTime(500))
    expect(screen.getByRole('dialog', { name: 'Cookie preferences' })).toBeInTheDocument()
    expect(document.querySelector('script[src*="googletagmanager.com"]')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Deny analytics' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    vi.useRealTimers()
  })

  it('respects a valid saved choice until settings are reopened', () => {
    localStorage.setItem(STORAGE_KEY, storedConsent(false))
    render(<CookieConsent lang="en" />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    act(() => window.dispatchEvent(new Event('patuhdata:open-consent')))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('asks again when stored consent has expired', () => {
    vi.useFakeTimers()
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...JSON.parse(storedConsent(true)), timestamp: '2020-01-01T00:00:00Z' }))
    render(<CookieConsent lang="en" />)
    act(() => vi.advanceTimersByTime(500))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(document.querySelector('script[src*="googletagmanager.com"]')).not.toBeInTheDocument()
    vi.useRealTimers()
  })

  it('supports keyboard navigation between preference tabs', () => {
    localStorage.setItem(STORAGE_KEY, storedConsent(false))
    render(<CookieConsent lang="en" />)
    act(() => window.dispatchEvent(new Event('patuhdata:open-consent')))
    fireEvent.keyDown(screen.getByRole('tab', { name: 'Details' }), { key: 'ArrowRight' })
    expect(screen.getByRole('tab', { name: 'About' })).toHaveFocus()
    expect(screen.getByRole('tab', { name: 'About' })).toHaveAttribute('aria-selected', 'true')
  })

  it('keeps analytics disabled when the visitor denies it', () => {
    vi.useFakeTimers()
    render(<CookieConsent lang="en" />)
    act(() => vi.advanceTimersByTime(500))

    fireEvent.click(screen.getByRole('button', { name: 'Deny analytics' }))

    expect(JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}').analytics).toBe(false)
    expect(document.querySelector('script[src*="googletagmanager.com"]')).not.toBeInTheDocument()
    expect(window.gtag).toHaveBeenCalledWith('consent', 'update', expect.objectContaining({ analytics_storage: 'denied' }))
    vi.useRealTimers()
  })

  it('removes the analytics script and cookies when consent is withdrawn', () => {
    localStorage.setItem(STORAGE_KEY, storedConsent(true))
    render(<CookieConsent lang="en" />)
    expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeInTheDocument()

    document.cookie = '_ga=test-value; Path=/'
    document.cookie = '_ga_5QYE9SJ0CX=test-value; Path=/'
    act(() => window.dispatchEvent(new Event('patuhdata:open-consent')))
    fireEvent.click(screen.getByRole('checkbox', { name: 'Allow analytics cookies' }))
    fireEvent.click(screen.getByRole('button', { name: /Save selection/i }))

    expect(document.cookie).not.toContain('_ga=')
    expect(document.cookie).not.toContain('_ga_5QYE9SJ0CX=')
    expect(document.querySelector('script[src*="googletagmanager.com"]')).not.toBeInTheDocument()
    expect((window as unknown as Record<string, unknown>)['ga-disable-G-5QYE9SJ0CX']).toBe(true)
  })

  it('locks background scrolling and closes reopened settings with Escape', () => {
    localStorage.setItem(STORAGE_KEY, storedConsent(false))
    const opener = document.createElement('button')
    document.body.appendChild(opener)
    opener.focus()
    render(<CookieConsent lang="en" />)

    act(() => window.dispatchEvent(new Event('patuhdata:open-consent')))
    expect(screen.getByRole('dialog', { name: 'Cookie preferences' })).toBeInTheDocument()
    expect(document.body.style.overflow).toBe('hidden')

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(document.body.style.overflow).toBe('')
    expect(opener).toHaveFocus()
    opener.remove()
  })
})
