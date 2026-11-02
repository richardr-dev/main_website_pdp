import { useEffect, useState } from 'react'
import { readAttribution, trackLead } from '../lib/analytics'
import { company, urgentWhatsapp } from '../data/company'
import { copy, type Lang } from '../data/copy'
import { divisions, findDivision } from '../data/site'

type FormState = { company: string; person: string; email: string; phone: string; industry: string; solution: string; description: string; budget: string; website: string }

/** Industry pages link with ?industry=<slug>; map those to the form's industry choices (by index). */
const industryOption: Record<string, number> = { 'trading-distribution': 0, 'warehousing-logistics': 1, manufacturing: 2, 'corporate-offices': 4 }

export default function LeadForm({ lang = 'en' }: { lang?: Lang }) {
  const t = copy[lang].form
  const divisionName = (slug: string) => { const d = findDivision(slug); return d ? (lang === 'id' ? d.id.name : d.name) : '' }
  const solutions = [t.assessment, ...divisions.map(d => divisionName(d.slug)), t.urgent, t.notSure]
  const [form, setForm] = useState<FormState>({ company: '', person: '', email: '', phone: '', industry: '', solution: '', description: '', budget: '', website: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const urgent = form.solution === t.urgent

  // Calls to action link to /contact?service=<division slug | assessment | urgent>&industry=<slug>.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const service = params.get('service') || ''
    const solution = service === 'assessment' ? t.assessment : service === 'urgent' ? t.urgent : divisionName(service)
    const industry = t.industries[industryOption[params.get('industry') || ''] ?? -1] || ''
    if (solution || industry) setForm(current => ({ ...current, solution: solution || current.solution, industry: industry || current.industry }))
  }, [lang])

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
          subject: `${urgent ? 'URGENT — ' : ''}PatuhData Inquiry — ${form.solution} — ${form.company}`,
          from_name: form.person,
          name: form.person,
          company: form.company,
          email: form.email,
          phone: form.phone,
          industry: form.industry,
          solution: form.solution,
          message: form.description,
          budget: form.budget || 'Not given',
          language: lang,
          page: window.location.pathname,
          ...readAttribution(),
        }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error('Submission failed')
      trackLead('contact_form', { service: form.solution, industry: form.industry })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return <div role="status" className="pd-form pd-form-success">
    <h3>{t.successTitle}</h3>
    <p>{t.successText} {urgent && <a href={urgentWhatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>}</p>
  </div>

  return <form className="pd-form" onSubmit={submit} aria-label={t.label}>
    <h3>{t.title}</h3>
    <p className="pd-form-intro">{t.intro}</p>
    <div className="pd-form-grid">
      <label htmlFor="lead-company">{t.company} <span>*</span><input id="lead-company" name="company" autoComplete="organization" required maxLength={180} value={form.company} onChange={update} /></label>
      <label htmlFor="lead-person">{t.person} <span>*</span><input id="lead-person" name="person" autoComplete="name" required maxLength={120} value={form.person} onChange={update} /></label>
      <label htmlFor="lead-email">{t.email} <span>*</span><input id="lead-email" name="email" type="email" autoComplete="email" placeholder="name@company.com" required maxLength={180} value={form.email} onChange={update} /></label>
      <label htmlFor="lead-phone">{t.phone} <span>*</span><input id="lead-phone" name="phone" type="tel" autoComplete="tel" placeholder="+62 812…" required maxLength={40} value={form.phone} onChange={update} /></label>
      <label htmlFor="lead-industry">{t.industry} <span>*</span><select id="lead-industry" name="industry" required value={form.industry} onChange={update}><option value="">{t.choose}</option>{t.industries.map(option => <option key={option}>{option}</option>)}</select></label>
      <label htmlFor="lead-solution">{t.solution} <span>*</span><select id="lead-solution" name="solution" required value={form.solution} onChange={update}><option value="">{t.choose}</option>{solutions.map(option => <option key={option}>{option}</option>)}</select></label>
      <label className="pd-full" htmlFor="lead-description">{t.description} <span>*</span><textarea id="lead-description" name="description" rows={4} required maxLength={3000} placeholder={t.placeholder} value={form.description} onChange={update} /></label>
      <label className="pd-full" htmlFor="lead-budget">{t.budget} <small>{t.optional}</small><select id="lead-budget" name="budget" value={form.budget} onChange={update}><option value="">{t.choose}</option>{t.budgets.map(option => <option key={option}>{option}</option>)}</select></label>
    </div>
    <label className="pd-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} /></label>
    {urgent && <p className="pd-form-note">{t.urgentNote} <a href={urgentWhatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>}
    {status === 'error' && <p role="alert" className="pd-form-error">{t.error} <a href={`mailto:${company.email}`}>{company.email}</a>.</p>}
    <button type="submit" className="pd-btn" disabled={status === 'sending'}>{status === 'sending' ? t.sending : t.send}</button>
    <p className="pd-form-privacy">{t.privacy} <a href="/privacy">{t.privacyLink}</a></p>
  </form>
}
