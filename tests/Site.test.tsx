import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../src/App'
import { copy } from '../src/i18n'

const login = 'https://commerce.patuhdata.id/login/'

describe('accounting site', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/')
    window.scrollTo = vi.fn()
    window.gtag = vi.fn()
    window.dataLayer = []
    localStorage.setItem('patuhdata_consent_record', JSON.stringify({ consentId: 'test', policyVersion: '2026-09-01', timestamp: new Date().toISOString(), method: 'reject_optional', necessary: true, analytics: false }))
  })
  afterEach(() => { vi.unstubAllGlobals(); vi.unstubAllEnvs() })

  it('has the same structure in both languages', () => {
    const shape = (value: unknown): unknown => Array.isArray(value) ? value.map(shape) : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([k, v]) => [k, shape(v)])) : typeof value
    expect(shape(copy.en)).toEqual(shape(copy.id))
  })

  it.each([['/', 'Hubungi sales', 'Masuk', '/contact'], ['/en', 'Contact sales', 'Sign in', '/en/contact']])(
    'on %s sends sign in to the commerce app and accounts to sales, with no self sign-up', (path, sales, signIn, contact) => {
      window.history.replaceState({}, '', path)
      render(<App />)
      for (const link of screen.getAllByRole('link', { name: signIn })) expect(link).toHaveAttribute('href', login)
      for (const link of screen.getAllByRole('link', { name: sales })) expect(link).toHaveAttribute('href', contact)
      expect(document.body).not.toHaveTextContent(/Create (an )?account|start free|daftar sendiri|e-Faktur sync/i)
      expect(document.querySelector('a[href*="register"]')).toBeNull()
    })

  it('switches language on the same page', () => {
    window.history.replaceState({}, '', '/contact')
    render(<App />)
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('href', '/en/contact')
  })

  it('keeps the homepage about accounting for every business size, with no pricing', () => {
    render(<App />)
    for (const [name] of copy.id.features.items) expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    expect(screen.getByText(copy.id.hero.tag)).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    for (const link of within(nav).getAllByRole('link')) expect(document.getElementById(link.getAttribute('href')!.split('#')[1])).not.toBeNull()
    expect(document.body).not.toHaveTextContent(/UU PDP Readiness|backup|disaster recovery|Rp ?\d|per bulan|per month/i)
    expect(document.body).not.toHaveTextContent(/UMKM/)
    expect(document.body).toHaveTextContent(/enterprise/)
  })

  it('records WhatsApp clicks as leads with a message in the page language', () => {
    render(<App />)
    const button = screen.getByRole('link', { name: 'Chat lewat WhatsApp' })
    expect(button.getAttribute('href')).toContain(encodeURIComponent(copy.id.whatsapp))
    fireEvent.click(button)
    expect(window.gtag).toHaveBeenCalledWith('event', 'generate_lead', expect.objectContaining({ method: 'whatsapp' }))
  })

  it('reopens cookie preferences from the footer', () => {
    window.history.replaceState({}, '', '/en')
    render(<App />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Cookie Settings' }))
    expect(screen.getByRole('dialog', { name: 'Cookie preferences' })).toBeInTheDocument()
  })

  it.each([['/contact', 'id'], ['/en/contact', 'en']] as const)('submits a sales inquiry from %s', async (path, lang) => {
    const t = copy[lang].contact
    window.history.replaceState({}, '', path)
    vi.stubEnv('VITE_WEB3FORMS_ACCESS_KEY', 'test-key')
    const send = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) })
    vi.stubGlobal('fetch', send)
    render(<App />)
    fireEvent.change(screen.getByLabelText(new RegExp(t.name)), { target: { value: 'Test Person' } })
    fireEvent.change(screen.getByLabelText(new RegExp(`^${t.email}`)), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText(new RegExp(t.company)), { target: { value: 'Toko Maju' } })
    fireEvent.change(screen.getByLabelText(new RegExp(t.interest.replace('?', '\\?'))), { target: { value: t.interests[0] } })
    fireEvent.click(screen.getByRole('button', { name: t.submit }))
    expect(await screen.findByRole('status')).toHaveTextContent(t.successTitle)
    expect(JSON.parse(send.mock.calls[0][1].body)).toMatchObject({ interest: t.interests[0], company: 'Toko Maju' })
  })
})
