import { useState } from 'react'
import { trackLead } from '../lib/analytics'

const resources = [
  { title: 'UU PDP Readiness Checklist', detail: '15 questions across 8 areas to check how ready your operations are. PDF, Bahasa Indonesia.', href: '/downloads/patuhdata-pdp-readiness-checklist.pdf' },
  { title: 'Record of Processing Activities Template', detail: 'A starter spreadsheet for your record of processing activities, with worked examples. Excel, Bahasa Indonesia.', href: '/downloads/patuhdata-ropa-starter.xlsx' },
]

type Status = 'idle' | 'sending' | 'ready' | 'fallback'

export default function FreeResources() {
  const [form, setForm] = useState({ name: '', email: '', company: '', website: '' })
  const [status, setStatus] = useState<Status>('idle')
  const update = (event: React.ChangeEvent<HTMLInputElement>) => setForm(current => ({ ...current, [event.target.name]: event.target.value }))

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'sending' || form.website) return
    setStatus('sending')
    try {
      if (!import.meta.env.VITE_WEB3FORMS_ACCESS_KEY) throw new Error('Form unavailable')
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: 'PatuhData Free Resource Request',
          from_name: form.name,
          name: form.name,
          email: form.email,
          company: form.company,
          interest: 'Free resources: readiness checklist and RoPA template',
        }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error('Submission failed')
      trackLead('resource_download', { resource: 'checklist_and_ropa_template' })
      setStatus('ready')
    } catch {
      setStatus('fallback')
    }
  }

  const unlocked = status === 'ready' || status === 'fallback'

  return <section className="cr-section rs-section" id="resources" aria-labelledby="resources-title">
    <div>
      <p className="cr-eyebrow">FREE RESOURCES</p>
      <h2 id="resources-title">Start your UU PDP<br />program today.</h2>
      <p>Practical templates your team can use straight away, from the same approach we use with our clients.</p>
      <ul className="rs-list">{resources.map(item => <li key={item.href}><strong>{item.title}</strong><span>{item.detail}</span></li>)}</ul>
    </div>
    <div className="rs-panel">
      {unlocked ? <div role="status">
        <p className="cr-eyebrow">{status === 'ready' ? 'THANK YOU' : 'YOUR DOWNLOADS'}</p>
        <h3>Your resources are ready.</h3>
        {status === 'fallback' && <p className="rs-note">We could not record your request, but you can still download the files below.</p>}
        <div className="rs-downloads">{resources.map(item => <a key={item.href} className="cr-button" href={item.href} download>{item.title} <span aria-hidden="true">↓</span></a>)}</div>
        <p className="rs-note">Want help putting them to work? <a href="/contact?service=uu-pdp-readiness-assessment">Talk to our team</a>.</p>
      </div> : <form onSubmit={submit} aria-label="Free resources request">
        <h3>Get both resources</h3>
        <label htmlFor="resource-name">Full name<input id="resource-name" name="name" type="text" autoComplete="name" required maxLength={120} value={form.name} onChange={update} /></label>
        <label htmlFor="resource-email">Work email<input id="resource-email" name="email" type="email" autoComplete="email" required maxLength={180} value={form.email} onChange={update} /></label>
        <label htmlFor="resource-company">Company<input id="resource-company" name="company" type="text" autoComplete="organization" required maxLength={180} value={form.company} onChange={update} /></label>
        <label className="cr-form-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} /></label>
        <button type="submit" className="cr-button" disabled={status === 'sending'}>{status === 'sending' ? 'Preparing…' : 'Get the resources'} <span aria-hidden="true">→</span></button>
        <p className="rs-note">We use these details to send the resources and may follow up about your request. <a href="/privacy">Privacy Policy</a></p>
      </form>}
    </div>
  </section>
}
