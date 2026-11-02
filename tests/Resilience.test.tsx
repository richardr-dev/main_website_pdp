import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../src/App'
import { divisions, industries, pages, technologies } from '../src/data/site'

const consent = JSON.stringify({ consentId: 'test', policyVersion: '2026-09-01', timestamp: new Date().toISOString(), method: 'reject_optional', necessary: true, analytics: false })

describe('PatuhData website', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/')
    window.scrollTo = vi.fn()
    window.gtag = vi.fn()
    window.dataLayer = []
    localStorage.setItem('patuhdata_consent_record', consent)
  })
  afterEach(() => { vi.unstubAllGlobals(); vi.unstubAllEnvs() })

  it('presents the homepage sections from the brief', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Technology Infrastructure That Keeps Your Business Moving.' })).toBeInTheDocument()
    expect(screen.getByText('Technology. Infrastructure. Business Continuity.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explore Our Solutions/ })).toHaveAttribute('href', '#solutions')
    for (const d of divisions) expect(within(document.getElementById('solutions')!).getByRole('link', { name: new RegExp(d.name) })).toHaveAttribute('href', `/services/${d.slug}`)
    for (const i of industries) expect(within(document.getElementById('industries')!).getByRole('link', { name: new RegExp(i.name) })).toHaveAttribute('href', `/industries/${i.slug}`)
    for (const { name } of technologies) expect(screen.getByRole('img', { name })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Let’s Build a More Reliable Technology Operation.' })).toBeInTheDocument()
    expect(within(document.getElementById('how')!).getAllByRole('listitem')).toHaveLength(5)
  })

  it('guides every major homepage section toward a quotation, assessment, project, or WhatsApp', () => {
    render(<App />)
    for (const id of ['solutions', 'industries', 'why', 'how', 'contact']) {
      const links = within(document.getElementById(id)!).getAllByRole('link').map(link => link.getAttribute('href') || '')
      expect(links.some(href => href.startsWith('/contact') || href.includes('wa.me/'))).toBe(true)
    }
    expect(screen.getAllByRole('link', { name: /Request a Site Assessment/ })[0]).toHaveAttribute('href', '/contact?service=assessment')
    const warehouse = within(document.getElementById('industries')!).getByRole('link', { name: /Warehousing & Logistics/ })
    expect(warehouse).toHaveTextContent('Common problem')
    expect(warehouse).toHaveTextContent('Wi-Fi dead zones between racks')
  })

  it('tracks call-to-action clicks and attaches the ad campaign to the lead', async () => {
    window.history.replaceState({}, '', '/?utm_source=google&utm_campaign=warehouse-wifi&gclid=abc123')
    sessionStorage.clear()
    vi.stubEnv('VITE_WEB3FORMS_ACCESS_KEY', 'test-key')
    const send = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) })
    vi.stubGlobal('fetch', send)
    render(<App />)
    const assessment = screen.getAllByRole('link', { name: /Request a Site Assessment/ })[0]
    assessment.addEventListener('click', event => event.preventDefault())
    fireEvent.click(assessment)
    expect(window.gtag).toHaveBeenCalledWith('event', 'cta_click', expect.objectContaining({ label: 'Request a Site Assessment', target: '/contact?service=assessment' }))
    const form = screen.getByRole('form', { name: 'Requirements form' })
    fireEvent.change(within(form).getByLabelText(/Company name/), { target: { value: 'Test Company' } })
    fireEvent.change(within(form).getByLabelText(/Contact person/), { target: { value: 'Test Person' } })
    fireEvent.change(within(form).getByLabelText(/Business email/), { target: { value: 'test@example.com' } })
    fireEvent.change(within(form).getByLabelText(/Phone/), { target: { value: '+62 812 0000 0000' } })
    fireEvent.change(within(form).getByLabelText(/^Industry/), { target: { value: 'Manufacturing' } })
    fireEvent.change(within(form).getByLabelText(/Required solution/), { target: { value: 'Site assessment' } })
    fireEvent.change(within(form).getByLabelText(/Project description/), { target: { value: 'Plant Wi-Fi' } })
    fireEvent.click(within(form).getByRole('button', { name: 'Send requirements' }))
    await screen.findByRole('status')
    expect(JSON.parse(send.mock.calls[0][1].body)).toMatchObject({ utm_source: 'google', utm_campaign: 'warehouse-wifi', gclid: 'abc123', landing_page: '/' })
  })

  it('makes no claims the business cannot back up', () => {
    for (const path of ['/', '/about', ...divisions.map(d => `/services/${d.slug}`), ...industries.map(i => `/industries/${i.slug}`)]) {
      window.history.replaceState({}, '', path)
      const { unmount } = render(<App />)
      expect(document.body).not.toHaveTextContent(/authorized distributor|certified partner|24\/7 support available|UU PDP|Wazuh|testimonial|trusted by \d|\d+\+ clients/i)
      unmount()
    }
  })

  it.each(divisions)('renders the $name division page with a quotation path', d => {
    window.history.replaceState({}, '', `/services/${d.slug}`)
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: d.title })).toBeInTheDocument()
    expect(document.title).toBe(d.seo.title)
    for (const [title] of d.scope) expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    for (const cta of screen.getAllByRole('link', { name: new RegExp(d.cta) })) expect(cta).toHaveAttribute('href', `/contact?service=${d.slug}`)
    expect(screen.getByRole('form', { name: 'Requirements form' })).toBeInTheDocument()
  })

  it.each(industries)('renders the $name industry page with problems and solutions', ind => {
    window.history.replaceState({}, '', `/industries/${ind.slug}`)
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: ind.title })).toBeInTheDocument()
    expect(document.title).toBe(ind.seo.title)
    for (const [problem] of ind.challenges) expect(screen.getByRole('heading', { level: 3, name: problem })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Request a Site Assessment/ })[0]).toHaveAttribute('href', `/contact?industry=${ind.slug}&service=assessment`)
  })

  it('shows the managed IT service levels without promising 24/7 coverage', () => {
    window.history.replaceState({}, '', '/services/managed-it-business-continuity')
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Response targets by priority' })).toBeInTheDocument()
    expect(screen.getByText(/We only commit to coverage we can deliver/)).toBeInTheDocument()
  })

  it('renders the about page with company details and the Lakuin platform', () => {
    window.history.replaceState({}, '', '/about')
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Your trusted technology and infrastructure partner.' })).toBeInTheDocument()
    expect(screen.getByText('PT PatuhData Solusi Nusantara', { selector: 'dd' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Visit lakuin.store/ })).toHaveAttribute('href', 'https://lakuin.store')
  })

  it('preselects the solution and industry from a link and submits a qualified lead', async () => {
    window.history.replaceState({}, '', '/contact?industry=warehousing-logistics&service=hardware-procurement')
    vi.stubEnv('VITE_WEB3FORMS_ACCESS_KEY', 'test-key')
    const send = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) })
    vi.stubGlobal('fetch', send)
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Let’s Build a More Reliable Technology Operation.' })).toBeInTheDocument()
    expect(screen.getByLabelText(/Required solution/)).toHaveValue('Hardware & Procurement')
    expect(screen.getByLabelText(/^Industry/)).toHaveValue('Warehousing & fulfillment')
    fireEvent.change(screen.getByLabelText(/Company name/), { target: { value: 'Test Company' } })
    fireEvent.change(screen.getByLabelText(/Contact person/), { target: { value: 'Test Person' } })
    fireEvent.change(screen.getByLabelText(/Business email/), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText(/Phone/), { target: { value: '+62 812 0000 0000' } })
    fireEvent.change(screen.getByLabelText(/Project description/), { target: { value: '20 barcode scanners for a new warehouse' } })
    fireEvent.change(screen.getByLabelText(/Estimated budget/), { target: { value: 'Rp 50–250 million' } })
    fireEvent.click(screen.getByRole('button', { name: 'Send requirements' }))
    expect(await screen.findByRole('status')).toHaveTextContent('We received your requirements')
    const body = JSON.parse(send.mock.calls[0][1].body)
    expect(body).toMatchObject({ company: 'Test Company', name: 'Test Person', industry: 'Warehousing & fulfillment', solution: 'Hardware & Procurement', budget: 'Rp 50–250 million', message: '20 barcode scanners for a new warehouse' })
    expect(window.gtag).toHaveBeenCalledWith('event', 'generate_lead', expect.objectContaining({ method: 'contact_form' }))
  })

  it('keeps the budget optional and flags urgent requests', async () => {
    window.history.replaceState({}, '', '/contact?service=urgent')
    vi.stubEnv('VITE_WEB3FORMS_ACCESS_KEY', 'test-key')
    const send = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) })
    vi.stubGlobal('fetch', send)
    render(<App />)
    expect(screen.getByLabelText(/Estimated budget/)).not.toBeRequired()
    expect(screen.getByText(/please also message us on WhatsApp/)).toBeInTheDocument()
    fireEvent.change(screen.getByLabelText(/Company name/), { target: { value: 'Test Company' } })
    fireEvent.change(screen.getByLabelText(/Contact person/), { target: { value: 'Test Person' } })
    fireEvent.change(screen.getByLabelText(/Business email/), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText(/Phone/), { target: { value: '+62 812 0000 0000' } })
    fireEvent.change(screen.getByLabelText(/^Industry/), { target: { value: 'Manufacturing' } })
    fireEvent.change(screen.getByLabelText(/Project description/), { target: { value: 'Server is down' } })
    fireEvent.click(screen.getByRole('button', { name: 'Send requirements' }))
    await screen.findByRole('status')
    expect(JSON.parse(send.mock.calls[0][1].body).subject).toMatch(/^URGENT/)
  })

  it('opens the solutions menu and closes it with Escape', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /Solutions/ })
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(nav).getByRole('link', { name: 'Hardware & Procurement' })).toHaveAttribute('href', '/services/hardware-procurement')
    fireEvent.keyDown(button, { key: 'Escape' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders the Indonesian homepage at /id with a translated form', () => {
    window.history.replaceState({}, '', '/id')
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Infrastruktur Teknologi yang Menjaga Bisnis Anda Tetap Bergerak.' })).toBeInTheDocument()
    expect(document.title).toBe(pages['/id'].title)
    expect(document.documentElement.lang).toBe('id')
    expect(screen.getByRole('form', { name: 'Formulir kebutuhan' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('href', '/')
  })

  it('records WhatsApp clicks as leads and reopens cookie settings', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('link', { name: 'Chat on WhatsApp' }))
    expect(window.gtag).toHaveBeenCalledWith('event', 'generate_lead', expect.objectContaining({ method: 'whatsapp' }))
    fireEvent.click(screen.getByRole('button', { name: 'Cookie Settings' }))
    expect(screen.getByRole('dialog', { name: 'Cookie preferences' })).toBeInTheDocument()
  })
})
