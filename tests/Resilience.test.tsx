import { fireEvent, render, screen, within } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../src/App'
import { resilienceServices } from '../src/data/resilienceServices'

describe('cyber resilience experience', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/')
    window.scrollTo = vi.fn()
    window.gtag = vi.fn()
    window.dataLayer = []
    localStorage.setItem('patuhdata_consent_record', JSON.stringify({ consentId: 'test', policyVersion: '2026-09-01', timestamp: new Date().toISOString(), method: 'reject_optional', necessary: true, analytics: false }))
  })
  it('connects each core service to its page and every consultation to the form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Keep your business running.Be ready to recover.')
    for (const service of resilienceServices) {
      expect(screen.getByRole('link', { name: `Explore ${service.title}` })).toHaveAttribute('href', `/services/${service.slug}`)
    }
    for (const cta of screen.getAllByRole('link', { name: /Consult an Expert/ })) expect(cta).toHaveAttribute('href', '/contact')
    expect(document.body).not.toHaveTextContent(/Rp5|Request a Quotation|RECOMMENDED|sub-15/)
    const sectionNav = screen.getByRole('navigation', { name: 'On this page' })
    for (const link of within(sectionNav).getAllByRole('link')) expect(document.querySelector(link.getAttribute('href')!)).not.toBeNull()
  })
  it('supports menu toggling, service disclosure, and Escape focus restoration', () => {
    render(<App />)
    const menu = screen.getByRole('button', { name: 'Open navigation' })
    fireEvent.click(menu)
    expect(menu).toHaveAttribute('aria-expanded', 'true')
    const services = screen.getByRole('button', { name: 'Services' })
    fireEvent.click(services)
    expect(services).toHaveAttribute('aria-expanded', 'true')
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(nav).getByRole('link', { name: 'Business Continuity' })).toBeVisible()
    fireEvent.keyDown(services, { key: 'Escape' })
    expect(services).toHaveFocus()
    expect(services).toHaveAttribute('aria-expanded', 'false')
    fireEvent.keyDown(services, { key: 'Escape' })
    expect(menu).toHaveFocus()
    expect(menu).toHaveAttribute('aria-expanded', 'false')
  })
  it.each(resilienceServices)('renders $title directly with matching metadata', service => {
    window.history.replaceState({}, '', `/services/${service.slug}`)
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: service.title })).toBeInTheDocument()
    expect(document.title).toBe(`${service.title} Indonesia | PatuhData`)
    for (const bullet of service.bullets) expect(screen.getByText(bullet)).toBeInTheDocument()
  })
  it('reopens cookie preferences from the footer', () => {
    render(<App />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Cookie Settings' }))
    expect(screen.getByRole('dialog', { name: 'Cookie preferences' })).toBeInTheDocument()
  })
  it('offers the four resilience services in the accessible consultation form', () => {
    window.history.replaceState({}, '', '/contact')
    render(<App />)
    const field = screen.getByLabelText('What do you need? *')
    for (const service of resilienceServices) expect(within(field).getByRole('option', { name: service.title })).toBeInTheDocument()
    expect(screen.getByLabelText('Business Email *')).toBeRequired()
    expect(screen.getByRole('button', { name: 'Request a Consultation' })).toBeInTheDocument()
  })
})
