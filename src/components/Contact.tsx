import { useState } from 'react'
import { trackLead } from '../lib/analytics'
import { copy, localize, type Lang } from '../i18n'
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

export default function Contact({ lang }: { lang: Lang }) {
  const t = copy[lang].contact
  const [form, setForm] = useState<FormState>({
    name: '', company: '', email: '', phone: '', interest: '', timeline: '', message: '', website: '',
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
          subject: `PatuhData Accounting — ${form.interest}`,
          from_name: form.name,
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          interest: form.interest,
          preferred_timeline: form.timeline,
          message: form.message,
          language: lang === 'id' ? 'Bahasa Indonesia' : 'English',
        }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error('Submission failed')
      trackLead('contact_form', { service: form.interest || 'Not specified' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return <section id="contact" className="cr-contact" aria-labelledby="consultation-title">
    <div className="cr-contact-card">
      <div className="cr-contact-intro">
        <p className="cr-contact-kicker">{t.kicker}</p>
        <h1 id="consultation-title">{t.title}</h1>
        <p className="cr-contact-lead">{t.lead}</p>
        <div className="cr-contact-next">
          <h2>{t.nextTitle}</h2>
          <ol>{t.next.map((step, i) => <li key={step}><span>0{i + 1}</span>{step}</li>)}</ol>
        </div>
        <div className="cr-contact-direct">
          <p>{t.direct}</p>
          <a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a>
          <a href="https://wa.me/6281903378000">WhatsApp · +62 819 0337 8000</a>
        </div>
      </div>
      <div className="cr-contact-form-panel">
        {status === 'success' ? <div role="status" className="cr-contact-success">
          <span aria-hidden="true">✓</span><h2>{t.successTitle}</h2>
          <p>{t.successText} <a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a>.</p>
        </div> : <form onSubmit={submit} aria-label={t.formLabel}>
          <p className="cr-form-eyebrow">{t.formEyebrow}</p>
          <h2>{t.formTitle}</h2>
          <p className="cr-form-intro">{t.formIntro}</p>
          <div className="cr-form-grid">
            <label htmlFor="consult-name">{t.name} <span>*</span><input id="consult-name" name="name" type="text" autoComplete="name" placeholder={t.namePlaceholder} required maxLength={120} value={form.name} onChange={update} /></label>
            <label htmlFor="consult-email">{t.email} <span>*</span><input id="consult-email" name="email" type="email" autoComplete="email" placeholder={t.emailPlaceholder} required maxLength={180} value={form.email} onChange={update} /></label>
            <label htmlFor="consult-company">{t.company} <span>*</span><input id="consult-company" name="company" type="text" autoComplete="organization" placeholder={t.companyPlaceholder} required maxLength={180} value={form.company} onChange={update} /></label>
            <label htmlFor="consult-phone">{t.phone} <small>{t.optional}</small><input id="consult-phone" name="phone" type="tel" autoComplete="tel" placeholder="+62 812…" maxLength={40} value={form.phone} onChange={update} /></label>
            <label className="cr-form-full" htmlFor="consult-interest">{t.interest} <span>*</span><select id="consult-interest" name="interest" required value={form.interest} onChange={update}><option value="">{t.interestPlaceholder}</option>{t.interests.map(option => <option key={option} value={option}>{option}</option>)}</select></label>
            <label className="cr-form-full" htmlFor="consult-message">{t.message} <small>{t.optional}</small><textarea id="consult-message" name="message" rows={4} maxLength={2000} value={form.message} onChange={update} placeholder={t.messagePlaceholder} /></label>
            <label className="cr-form-full" htmlFor="consult-timeline">{t.timeline} <small>{t.optional}</small><select id="consult-timeline" name="timeline" value={form.timeline} onChange={update}><option value="">{t.timelinePlaceholder}</option>{t.timelines.map(option => <option key={option}>{option}</option>)}</select></label>
          </div>
          <label className="cr-form-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} /></label>
          {status === 'error' && <p role="alert" className="cr-form-error">{t.error} <a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a>.</p>}
          <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? t.sending : t.submit} <span aria-hidden="true">→</span></button>
          <p className="cr-form-privacy">{t.privacy} <a href={localize('/privacy', lang)}>{t.privacyLink}</a></p>
        </form>}
      </div>
    </div>
  </section>
}
