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
  'Not sure yet — help me decide',
]

const serviceFromUrl = () => {
  const slug = new URLSearchParams(window.location.search).get('service')
  return resilienceServices.find(service => service.slug === slug)?.title ??
    ''
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
          subject: `UU PDP Inquiry — ${form.interest}`,
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
        <h1 id="consultation-title">Let’s make privacy operational.</h1>
        <p className="cr-contact-lead">Tell us how your organization uses personal data, what has already been prepared, and where you need clarity. We’ll define a practical first step.</p>
        <div className="cr-contact-next">
          <h2>What happens next</h2>
          <ol>
            <li><span>01</span>We review your current practices and priorities.</li>
            <li><span>02</span>We identify the most useful starting engagement.</li>
            <li><span>03</span>We confirm deliverables and boundaries in writing.</li>
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
        </div> : <form onSubmit={submit} aria-label="UU PDP consultation inquiry">
          <p className="cr-form-eyebrow">YOUR PRIVACY PROGRAM</p>
          <h2>Tell us where you are today.</h2>
          <p className="cr-form-intro">A few details help us recommend the right assessment, implementation, workspace, or remediation scope.</p>
          <div className="cr-form-grid">
            <label htmlFor="consult-name">Full name <span>*</span><input id="consult-name" name="name" type="text" autoComplete="name" placeholder="Your name" required maxLength={120} value={form.name} onChange={update} /></label>
            <label htmlFor="consult-email">Work email <span>*</span><input id="consult-email" name="email" type="email" autoComplete="email" placeholder="name@company.com" required maxLength={180} value={form.email} onChange={update} /></label>
            <label htmlFor="consult-company">Company <span>*</span><input id="consult-company" name="company" type="text" autoComplete="organization" placeholder="Company name" required maxLength={180} value={form.company} onChange={update} /></label>
            <label htmlFor="consult-phone">Phone / WhatsApp <small>Optional</small><input id="consult-phone" name="phone" type="tel" autoComplete="tel" placeholder="+62 812…" maxLength={40} value={form.phone} onChange={update} /></label>
            <label className="cr-form-full" htmlFor="consult-interest">How can we help? <span>*</span><select id="consult-interest" name="interest" required value={form.interest} onChange={update}><option value="">Select a service or challenge</option>{serviceOptions.map(option => <option key={option} value={option}>{option}</option>)}</select></label>
            <label className="cr-form-full" htmlFor="consult-message">What would you like to improve? <small>Optional</small><textarea id="consult-message" name="message" rows={4} maxLength={2000} value={form.message} onChange={update} placeholder="For example: we need an initial RoPA, a DPIA process, or help addressing access and backup gaps found during an assessment." /></label>
            <label className="cr-form-full" htmlFor="consult-timeline">When would you like to start? <small>Optional</small><select id="consult-timeline" name="timeline" value={form.timeline} onChange={update}><option value="">Select a timeframe</option><option>As soon as possible</option><option>Within 30 days</option><option>In the next 1–3 months</option><option>Exploring options</option></select></label>
          </div>
          <label className="cr-form-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} /></label>
          {status === 'error' && <p role="alert" className="cr-form-error">Your inquiry could not be sent. Please try again or email <a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a>.</p>}
          <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send my inquiry'} <span aria-hidden="true">→</span></button>
          <p className="cr-form-privacy">We’ll use these details to respond to your inquiry. Please do not include passwords, identity documents, or confidential records in this form. <a href="/privacy">Privacy Policy</a></p>
        </form>}
      </div>
    </div>
  </section>
}
