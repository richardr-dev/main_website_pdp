import { act, fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import CookieConsent from '../src/components/CookieConsent'

const STORAGE_KEY = 'patuhdata_consent_record'
const POLICY_VERSION = '2026-09-24'

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
    timestamp: new Date().toISOString(),
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

  it('keeps analytics disabled when the visitor denies it', () => {
    vi.useFakeTimers()
    render(<CookieConsent lang="en" />)
    act(() => vi.advanceTimersByTime(500))

    fireEvent.click(screen.getByRole('button', { name: 'Reject optional' }))

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
  it('never loads analytics before a choice and supports keyboard tab navigation', () => {
    vi.useFakeTimers()
    render(<CookieConsent lang="en" />)
    act(() => vi.advanceTimersByTime(500))
    expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeNull()
    fireEvent.keyDown(screen.getByRole('tab', { name: 'Consent' }), { key: 'ArrowRight' })
    expect(screen.getByRole('tab', { name: 'Details' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('checkbox', { name: 'Allow analytics cookies' })).not.toBeChecked()
    fireEvent.click(screen.getByRole('checkbox', { name: 'Allow analytics cookies' }))
    expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: /Save selection/ }))
    expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeInTheDocument()
    vi.useRealTimers()
  })

  it.each(['expired', 'malformed', 'old-policy', 'future'])('rejects %s consent', (kind) => {
    const record = JSON.parse(storedConsent(true))
    if (kind === 'expired') record.timestamp = new Date(Date.now() - 181 * 86400000).toISOString()
    if (kind === 'malformed') record.analytics = 'true'
    if (kind === 'old-policy') record.policyVersion = '2026-09-01'
    if (kind === 'future') record.timestamp = new Date(Date.now() + 86400000).toISOString()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record))
    render(<CookieConsent lang="en" />)
    expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeNull()
  })

  it('withdraws even when browser storage is blocked', () => {
    localStorage.setItem(STORAGE_KEY, storedConsent(true))
    render(<CookieConsent lang="en" />)
    act(() => window.dispatchEvent(new Event('patuhdata:open-consent')))
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('blocked') })
    fireEvent.click(screen.getByRole('button', { name: 'Reject optional' }))
    expect(screen.queryByRole('dialog')).toBeNull()
    expect((window as unknown as Record<string, unknown>)['ga-disable-G-5QYE9SJ0CX']).toBe(true)
  })

  it('honors withdrawal from another tab', () => {
    localStorage.setItem(STORAGE_KEY, storedConsent(true))
    render(<CookieConsent lang="en" />)
    localStorage.setItem(STORAGE_KEY, storedConsent(false))
    act(() => window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY })))
    expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeNull()
    expect((window as unknown as Record<string, unknown>)['ga-disable-G-5QYE9SJ0CX']).toBe(true)
  })

})
