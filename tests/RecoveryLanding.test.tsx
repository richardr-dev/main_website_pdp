import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest'
import RecoveryLanding from '../src/components/RecoveryLanding'
import { recoveryCopy } from '../src/data/recoveryCopy'
import { POLICY_VERSION } from '../src/components/CookieConsent'

function consent(analytics: boolean) {
  document.cookie = 'patuhdata_consent_v1=; Max-Age=0; Path=/'
  localStorage.setItem('patuhdata_consent_record', JSON.stringify({ consentId: 'test', policyVersion: POLICY_VERSION, timestamp: new Date().toISOString(), method: 'save_preferences', necessary: true, analytics }))
}
function fillForm() {
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test Person' } })
  fireEvent.change(screen.getByLabelText('Company'), { target: { value: 'Test Company' } })
  fireEvent.change(screen.getByLabelText('Work email'), { target: { value: 'test@example.com' } })
  fireEvent.change(screen.getByLabelText('Staff count'), { target: { value: '30–50' } })
  fireEvent.change(screen.getByLabelText('Role'), { target: { value: 'IT Manager' } })
  fireEvent.change(screen.getByLabelText('WhatsApp / Phone'), { target: { value: '+628123456789' } })
  fireEvent.change(screen.getByLabelText('Need'), { target: { value: 'Recovery Health Check' } })
  fireEvent.change(screen.getByLabelText('Critical system / requirement'), { target: { value: 'Test our ERP recovery' } })
  fireEvent.change(screen.getByLabelText('Deadline (optional)'), { target: { value: '2026-12-01' } })
  fireEvent.change(screen.getByLabelText('Current environment (optional)'), { target: { value: 'Hybrid' } })
}
describe('recovery inquiry and consent', () => {
  beforeEach(() => { consent(false); window.gtag = vi.fn(); vi.stubEnv('VITE_WEB3FORMS_ACCESS_KEY', 'test-key') })
  afterEach(() => { vi.unstubAllGlobals(); vi.unstubAllEnvs() })
  it('selects Managed Resilience from its CTA', () => {
    render(<RecoveryLanding lang="en" />)
    fireEvent.click(screen.getAllByRole('link', { name: /Discuss Managed Resilience/ })[0])
    expect(screen.getByLabelText('Need')).toHaveValue('Managed Resilience')
  })
  it.each(['id', 'en'] as const)('routes primary and secondary CTAs to the correct %s inquiry', lang => {
    render(<RecoveryLanding lang={lang} />)
    const c = recoveryCopy[lang]
    fireEvent.click(screen.getAllByRole('link', { name: new RegExp(c.cta) })[0])
    expect(screen.getByLabelText(c.labels[4])).toHaveValue('Recovery Health Check')
    fireEvent.click(screen.getByRole('link', { name: new RegExp(c.vendorCta) }))
    expect(screen.getByLabelText(c.labels[4])).toHaveValue('Financial Vendor Readiness')
  })
  it('prioritizes the recovery booking and qualifies the starter price', () => {
    render(<RecoveryLanding lang="en" />)
    const hero = document.querySelector('.rl-hero')! as HTMLElement
    expect(within(hero).getByRole('link', { name: 'Book Recovery Health Check' })).toHaveAttribute('href', '#contact')
    expect(within(hero).getByRole('link', { name: /Selling to a bank/ })).toHaveAttribute('href', '#vendor-readiness')
    const starter = document.getElementById('assessments')!
    expect(starter).toHaveTextContent('Rp5,000,000')
    expect(starter).toHaveTextContent('Starting price for a limited agreed scope')
    expect(starter).toHaveTextContent('where technically feasible')
    expect(starter).not.toHaveTextContent('PatuhData Financial Vendor Readiness')
    expect(screen.getByRole('heading', { name: 'Security Baseline Hardening' })).toBeInTheDocument()
  })
  it('includes all lead choices, optional context, and labelled illustrative results', () => {
    render(<RecoveryLanding lang="en" />)
    const choices = within(screen.getByLabelText('Need')).getAllByRole('option')
    expect(choices.map(option => option.textContent)).toEqual(['Select', ...recoveryCopy.en.needOptions])
    expect(screen.getByLabelText('Deadline (optional)')).not.toBeRequired()
    expect(screen.getByLabelText('Current environment (optional)')).not.toBeRequired()
    const report = document.getElementById('proof')!
    expect(report).toHaveTextContent('ILLUSTRATIVE SAMPLE — NOT CLIENT DATA')
    expect(report).toHaveTextContent('2h 37m')
    expect(report).toHaveTextContent('3h 12m')
    expect(report).toHaveTextContent('PENDING PROCESS OWNER')
    expect(report).toHaveTextContent('Isolated test environment')
  })
  it.each([false, true])('tracks WhatsApp only when consent is %s', analytics => {
    consent(analytics)
    render(<RecoveryLanding lang="en" />)
    const link = screen.getByRole('link', { name: 'WhatsApp' })
    link.addEventListener('click', event => event.preventDefault())
    fireEvent.click(link)
    const calls = vi.mocked(window.gtag).mock.calls.filter(call => call[0] === 'event')
    expect(calls).toHaveLength(analytics ? 1 : 0)
    if (analytics) expect(calls[0]).toEqual(['event', 'whatsapp_click', expect.objectContaining({ language: 'en' })])
  })
  it('records conversion only after a successful submission without sending form fields to analytics', async () => {
    consent(true)
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) })
    vi.stubGlobal('fetch', fetchMock)
    render(<RecoveryLanding lang="en" />)
    fillForm()
    fireEvent.submit(screen.getByRole('form'))
    await screen.findByText('Inquiry sent. Thank you; we will be in touch.')
    expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toMatchObject({ staff_count: '30–50', need: 'Recovery Health Check', message: 'Test our ERP recovery', role: 'IT Manager', phone: '+628123456789', deadline: '2026-12-01', environment: 'Hybrid' })
    expect(window.gtag).toHaveBeenCalledWith('event', 'form_submit_success', expect.objectContaining({ language: 'en' }))
    for (const privateValue of ['test@example.com', '+628123456789', 'Test our ERP recovery']) expect(JSON.stringify(vi.mocked(window.gtag).mock.calls)).not.toContain(privateValue)
  })
  it('keeps the inquiry available to retry after failure and emits no conversion', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Offline')))
    render(<RecoveryLanding lang="en" />)
    fillForm()
    fireEvent.submit(screen.getByRole('form'))
    await screen.findByText('Your inquiry was not sent. Try again or contact hello@patuhdata.id.')
    expect(screen.getByLabelText('Need')).toHaveValue('Recovery Health Check')
    await waitFor(() => expect(screen.getByRole('button', { name: 'Send inquiry ↗' })).toBeEnabled())
    expect(vi.mocked(window.gtag).mock.calls.filter(call => call[0] === 'event')).toHaveLength(0)
  })
})

describe('landing footer', () => {
  it.each(['id', 'en'] as const)('opens cookie settings from the %s footer', lang => {
    consent(false)
    render(<RecoveryLanding lang={lang} />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent('PT PatuhData Solusi Nusantara')
    expect(footer).toHaveTextContent('hello@patuhdata.id')
    expect(footer).toHaveTextContent('Jakarta Barat')
    fireEvent.click(screen.getByRole('button', { name: lang === 'id' ? 'Pengaturan Cookie' : 'Cookie Settings' }))
    expect(screen.getByRole('dialog', { name: lang === 'id' ? 'Preferensi cookie' : 'Cookie preferences' })).toBeInTheDocument()
  })
})
