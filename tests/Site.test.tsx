import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../src/App'

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

  it('sends sign in to the commerce app and account requests to sales', () => {
    render(<App />)
    const signIns = screen.getAllByRole('link', { name: 'Sign in' })
    const sales = screen.getAllByRole('link', { name: 'Contact sales' })
    expect(signIns.length).toBeGreaterThan(0)
    expect(sales.length).toBeGreaterThan(0)
    for (const link of signIns) expect(link).toHaveAttribute('href', login)
    for (const link of sales) expect(link).toHaveAttribute('href', '/contact')
    expect(document.body).not.toHaveTextContent(/Create (an )?account|register|start free/i)
    expect(document.querySelector('a[href*="register"]')).toBeNull()
  })

  it('keeps the homepage about accounting, with working section links and no pricing', () => {
    render(<App />)
    for (const name of ['Invoicing', 'Ledgers', 'Tax reports']) expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    for (const link of within(nav).getAllByRole('link')) {
      const hash = link.getAttribute('href')!.split('#')[1]
      if (hash) expect(document.getElementById(hash)).not.toBeNull()
    }
    expect(document.body).not.toHaveTextContent(/UU PDP|backup|disaster recovery|Rp ?\d|per month/i)
  })

  it('records WhatsApp clicks as leads', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('link', { name: 'Chat on WhatsApp' }))
    expect(window.gtag).toHaveBeenCalledWith('event', 'generate_lead', expect.objectContaining({ method: 'whatsapp' }))
  })

  it('reopens cookie preferences from the footer', () => {
    render(<App />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Cookie Settings' }))
    expect(screen.getByRole('dialog', { name: 'Cookie preferences' })).toBeInTheDocument()
  })

  it('submits a sales inquiry with useful context', async () => {
    window.history.replaceState({}, '', '/contact')
    vi.stubEnv('VITE_WEB3FORMS_ACCESS_KEY', 'test-key')
    const send = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) })
    vi.stubGlobal('fetch', send)
    render(<App />)
    const interest = screen.getByLabelText(/How can we help/)
    expect(within(interest).getByRole('option', { name: 'Set up an account for my company' })).toBeInTheDocument()
    fireEvent.change(screen.getByLabelText(/Full name/), { target: { value: 'Test Person' } })
    fireEvent.change(screen.getByLabelText(/Work email/), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText(/Company/), { target: { value: 'Test Company' } })
    fireEvent.change(interest, { target: { value: 'Set up an account for my company' } })
    fireEvent.click(screen.getByRole('button', { name: 'Send my inquiry' }))
    expect(await screen.findByRole('status')).toHaveTextContent('Your inquiry was sent')
    expect(JSON.parse(send.mock.calls[0][1].body)).toMatchObject({ interest: 'Set up an account for my company', company: 'Test Company' })
  })
})
