import { useState } from 'react'
import { architectCTA, coreSolutions, indonesiaInterest } from '../data/coreSolutions'

type FormState = {
  name: string
  company: string
  email: string
  phone: string
  role: string
  companySize: string
  locations: string
  interest: string
  timeline: string
  message: string
}

const interests = [
  ...coreSolutions.map(solution => solution.interest),
  ...coreSolutions.map(solution => solution.managed),
  indonesiaInterest,
  'Help me identify my biggest technology risk',
]

export default function Contact() {
  const requestedInterest = new URLSearchParams(window.location.search).get('interest') || ''
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: '',
    companySize: '',
    locations: '',
    interest: interests.includes(requestedInterest) ? requestedInterest : '',
    timeline: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `Solution Architecture Inquiry — ${form.interest || 'General'}`,
          from_name: form.name,
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          role: form.role,
          company_size: form.companySize,
          number_of_locations: form.locations,
          interest: form.interest,
          preferred_timeline: form.timeline,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please email us directly at hello@patuhdata.id')
      }
    } catch {
      setError('Something went wrong. Please email us directly at hello@patuhdata.id')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section bg-slate-50 relative overflow-hidden pt-28">
      {/* Diagonal stripe overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(56,139,253,0.035) 20px, rgba(56,139,253,0.035) 21px)',
        }}
      />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-card border border-slate-200">
          <div className="bg-gradient-to-br from-primary-900 to-primary-700 p-10 lg:p-14 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-300 mb-3">RECOVER · SECURE · GOVERN</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Talk to a Solution Architect
            </h2>
            <p className="mt-5 text-base text-white/70 leading-relaxed">
              Tell us about your critical systems, business requirements, and priorities. We’ll help identify the risks and discuss a practical path across recovery, cybersecurity, and compliance readiness.
            </p>

            <div className="mt-8">
              <img
                src="/logo-white.png"
                alt="PatuhData"
                className="h-12 w-auto object-contain opacity-90"
              />
            </div>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'hello@patuhdata.id',
                  href: 'mailto:hello@patuhdata.id',
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                  label: 'WhatsApp',
                  value: '+62 819 0337 8000',
                  href: 'https://wa.me/6281903378000',
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: 'Location',
                  value: 'INFINITI OFFICE — Srengseng, West Jakarta 11630',
                  href: 'https://maps.google.com/?q=INFINITI+OFFICE+Jl.+Permata+Regency+Jl.+H.+Kelik+Srengseng+Jakarta+Barat+11630',
                },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-300">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-0.5 text-sm font-medium text-white hover:text-blue-200 block">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm font-medium text-white/80">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

          </div>

          <div className="bg-white p-10 lg:p-14">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Our team will contact you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                    <input id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-700 mb-1.5">Company Name *</label>
                    <input id="contact-company"
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      className="w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="PT Maju Bersama"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-role" className="block text-xs font-semibold text-slate-700 mb-1.5">Your Role *</label>
                    <select id="contact-role" name="role" required value={form.role} onChange={handleChange} className="w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                      <option value="">Select your role...</option>
                      <option>Owner / Founder</option><option>Director / C-Level</option><option>IT Manager / Lead</option><option>Procurement</option><option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-companySize" className="block text-xs font-semibold text-slate-700 mb-1.5">Organization Size *</label>
                    <select id="contact-companySize" name="companySize" required value={form.companySize} onChange={handleChange} className="w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                      <option value="">Select size...</option><option>1–10 employees</option><option>11–50 employees</option><option>51–200 employees</option><option>201–500 employees</option><option>500+ employees</option>
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-locations" className="block text-xs font-semibold text-slate-700 mb-1.5">Number of Locations *</label>
                    <select id="contact-locations" name="locations" required value={form.locations} onChange={handleChange} className="w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                      <option value="">Select locations...</option><option>1 location</option><option>2–5 locations</option><option>6–20 locations</option><option>21+ locations</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-timeline" className="block text-xs font-semibold text-slate-700 mb-1.5">Preferred Timeline</label>
                    <select id="contact-timeline" name="timeline" value={form.timeline} onChange={handleChange} className="w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                      <option value="">Select timeline...</option><option>Urgent / Incident</option><option>Within 30 days</option><option>1–3 months</option><option>3+ months</option><option>Exploring options</option>
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">Business Email *</label>
                    <input id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">WhatsApp Number</label>
                    <input id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="+62 812..."
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-interest" className="block text-xs font-semibold text-slate-700 mb-1.5">What do you need? *</label>
                    <select id="contact-interest"
                    name="interest"
                    required
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="">Select a service area...</option>
                    {interests.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">Priority or risk you want to address</label>
                    <textarea id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none"
                    placeholder="Example: we operate 12 branches, downtime is affecting transactions, and backup ownership is unclear..."
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-600 text-center">{error}</p>
                )}
                <button type="submit" disabled={loading} className="contact-submit">
                  {loading ? 'Submitting…' : architectCTA}
                  {!loading && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </button>
                <p className="text-xs text-slate-500 text-center">
                  We use your details to respond to this inquiry. See our <a href="/privacy" className="underline">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
