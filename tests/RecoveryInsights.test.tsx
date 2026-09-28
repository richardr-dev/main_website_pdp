import { render, screen, within } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../src/App'
import { POLICY_VERSION } from '../src/components/CookieConsent'
import { pdpInsightPaths, pdpLawSource, pdpRecoveryInsight } from '../src/data/pdpRecoveryInsight'

describe('recovery insights', () => {
  beforeEach(() => {
    document.cookie = 'patuhdata_consent_v1=; Max-Age=0; Path=/'
    localStorage.setItem('patuhdata_consent_record', JSON.stringify({ consentId: 'test', policyVersion: POLICY_VERSION, timestamp: new Date().toISOString(), method: 'reject_optional', necessary: true, analytics: false }))
    window.gtag = vi.fn()
    window.scrollTo = vi.fn()
  })
  it.each(['id', 'en'] as const)('shows existing guides and the new %s article on the homepage', lang => {
    window.history.replaceState({}, '', lang === 'id' ? '/' : '/en')
    render(<App />)
    const section = document.getElementById('resources')!
    expect(section).not.toBeNull()
    expect(within(section).getByRole('link', { name: pdpRecoveryInsight[lang].title })).toHaveAttribute('href', pdpInsightPaths[lang])
    for (const href of ['/insights/managed-it', '/insights/uu-pdp-data-residency', '/resources/can-you-restore-your-backup', '/resources/rpo-rto-business-guide']) {
      expect(section.querySelector(`a[href="${href}"]`)).not.toBeNull()
    }
  })
  it.each(['id', 'en'] as const)('renders the %s article directly with sources and language alternates', lang => {
    window.history.replaceState({}, '', pdpInsightPaths[lang])
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: pdpRecoveryInsight[lang].title })).toBeInTheDocument()
    expect(document.documentElement.lang).toBe(lang)
    expect(screen.getByRole('link', { name: pdpRecoveryInsight[lang].sourceLabel })).toHaveAttribute('href', pdpLawSource)
    expect(document.head.querySelector('link[hreflang="en"]')).toHaveAttribute('href', `https://patuhdata.id${pdpInsightPaths.en}`)
    expect(document.head.querySelector('link[hreflang="id"]')).toHaveAttribute('href', `https://patuhdata.id${pdpInsightPaths.id}`)
    expect(screen.getByRole('link', { name: /Recovery Health Check/ })).toHaveAttribute('href', `${lang === 'id' ? '/' : '/en'}#contact`)
  })
})
