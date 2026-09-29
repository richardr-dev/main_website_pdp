import { useState } from 'react'
import { resilienceServices } from '../data/resilienceServices'
import './contact.css'

type FormState = {
  name: string
  company: string
  email: string
  phone: string
  interest: string
  timeline: string
  message: string
  website: string
}

const serviceOptions = [
  ...resilienceServices.map(({ title }) => title),
  'Supporting Infrastructure & Cloud',
  'Not sure yet — help me decide',
]

const serviceFromUrl = () => {
  const slug = new URLSearchParams(window.location.search).get('service')
  return resilienceServices.find(service => service.slug === slug)?.title ??
    (slug === 'managed-infrastructure' || slug === 'cloud-aws' ? 'Supporting Infrastructure & Cloud' : '')
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', company: '', email: '', phone: '', interest: serviceFromUrl(), timeline: '', message: '', website: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(current => ({ ...current, [event.target.name]: event.target.value }))
    if (status === 'error') setStatus('idle')
  }

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
          subject: `Cyber Resilience Inquiry — ${form.interest}`,
          from_name: form.name,
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          interest: form.interest,
          preferred_timeline: form.timeline,
          message: form.message,
        }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return <section id="contact" className="cr-contact" aria-labelledby="consultation-title">
    <div className="cr-contact-card">
      <div className="cr-contact-intro">
        <p className="cr-contact-kicker">START A CONVERSATION</p>
        <h1 id="consultation-title">Let’s prepare for what happens next.</h1>
        <p className="cr-contact-lead">Tell us what your business depends on and where you need confidence in recovery. We’ll discuss your priorities and agree a practical first step.</p>
        <div className="cr-contact-next">
          <h2>What happens next</h2>
          <ol>
            <li><span>01</span>We review your systems and priorities.</li>
            <li><span>02</span>We discuss the recovery or continuity gap.</li>
            <li><span>03</span>We agree a scope before any work begins.</li>
          </ol>
        </div>
        <div className="cr-contact-direct">
          <p>Prefer to reach us directly?</p>
          <a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a>
          <a href="https://wa.me/6281903378000">WhatsApp · +62 819 0337 8000</a>
        </div>
      </div>
      <div className="cr-contact-form-panel">
        {status === 'success' ? <div role="status" className="cr-contact-success">
          <span aria-hidden="true">✓</span><h2>Thank you. Your inquiry was sent.</h2>
          <p>Our team will review your requirements and contact you. You can also reach us at <a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a>.</p>
        </div> : <form onSubmit={submit} aria-label="Recovery consultation inquiry">
          <p className="cr-form-eyebrow">YOUR RECOVERY PRIORITIES</p>
          <h2>Tell us where to start.</h2>
          <p className="cr-form-intro">A few details help us bring the right people into the conversation.</p>
          <div className="cr-form-grid">
            <label htmlFor="consult-name">Full name <span>*</span><input id="consult-name" name="name" type="text" autoComplete="name" placeholder="Your name" required maxLength={120} value={form.name} onChange={update} /></label>
            <label htmlFor="consult-email">Work email <span>*</span><input id="consult-email" name="email" type="email" autoComplete="email" placeholder="name@company.com" required maxLength={180} value={form.email} onChange={update} /></label>
            <label htmlFor="consult-company">Company <span>*</span><input id="consult-company" name="company" type="text" autoComplete="organization" placeholder="Company name" required maxLength={180} value={form.company} onChange={update} /></label>
            <label htmlFor="consult-phone">Phone / WhatsApp <small>Optional</small><input id="consult-phone" name="phone" type="tel" autoComplete="tel" placeholder="+62 812…" maxLength={40} value={form.phone} onChange={update} /></label>
            <label className="cr-form-full" htmlFor="consult-interest">How can we help? <span>*</span><select id="consult-interest" name="interest" required value={form.interest} onChange={update}><option value="">Select a service or challenge</option>{serviceOptions.map(option => <option key={option} value={option}>{option}</option>)}</select></label>
            <label className="cr-form-full" htmlFor="consult-message">Which systems or operations matter most? <small>Optional</small><textarea id="consult-message" name="message" rows={4} maxLength={2000} value={form.message} onChange={update} placeholder="For example: our ERP and order system need tested backups; we also need a plan for an outage." /></label>
            <label className="cr-form-full" htmlFor="consult-timeline">When do you need to address this? <small>Optional</small><select id="consult-timeline" name="timeline" value={form.timeline} onChange={update}><option value="">Select a timeframe</option><option>There is an active disruption</option><option>Within 30 days</option><option>In the next 1–3 months</option><option>Exploring options</option></select></label>
          </div>
          <label className="cr-form-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} /></label>
          {status === 'error' && <p role="alert" className="cr-form-error">Your inquiry could not be sent. Please try again or email <a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a>.</p>}
          <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send my inquiry'} <span aria-hidden="true">→</span></button>
          <p className="cr-form-privacy">We’ll use these details to respond to your inquiry. Please don’t include passwords or sensitive data. <a href="/privacy">Privacy Policy</a></p>
        </form>}
      </div>
    </div>
  </section>
}
