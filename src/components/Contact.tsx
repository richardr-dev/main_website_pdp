import { useState } from 'react'

type FormState = {
  name: string
  company: string
  email: string
  phone: string
  interest: string
  message: string
}

const interests = [
  'Infrastruktur — Instalasi Wi-Fi & Jaringan',
  'Infrastruktur — CCTV & IP Camera',
  'Infrastruktur — UPS & Proteksi Daya',
  'Infrastruktur — Server & Storage',
  'Cloud — Google Workspace / Microsoft 365',
  'Cloud — AWS & Cloud Migration',
  'Keamanan — Endpoint Security & Antivirus',
  'Keamanan — Backup & Disaster Recovery',
  'Keamanan — Security Assessment',
  'Managed IT — IT Support & Helpdesk',
  'Managed IT — Network Monitoring',
  'Platform — PatuhData ONE Demo',
  'Platform — Asset & SOP Management',
  'Full IT Partner Review',
  'General Consultation',
]

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
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
          access_key: 'b1454cc6-bdd9-48f4-b161-45d5fdbc19e1',
          subject: `New IT Partner Inquiry — ${form.interest || 'General'}`,
          from_name: form.name,
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          interest: form.interest,
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
    <section id="contact" className="section bg-white relative overflow-hidden">
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
            <p className="text-xs font-bold uppercase tracking-widest text-primary-300 mb-3">Hubungi Kami</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ceritakan kebutuhan IT kantor Anda
            </h2>
            <p className="mt-5 text-base text-white/70 leading-relaxed">
              Kami rekomendasikan solusi yang tepat dan kirimkan penawaran tertulis dalam 24 jam. Tanpa biaya, tanpa kewajiban.
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
                  label: 'Lokasi',
                  value: 'Jakarta, Indonesia',
                  href: undefined,
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
                <h3 className="text-xl font-bold text-slate-900">Pesan Terkirim!</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Kami akan menghubungi Anda dalam 1 hari kerja.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Nama Lengkap *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="Andi Wijaya"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Nama Perusahaan *</label>
                    <input
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Alamat Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="budi@perusahaan.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Nomor WhatsApp</label>
                    <input
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
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Kebutuhan Anda *</label>
                  <select
                    name="interest"
                    required
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="">Pilih area layanan...</option>
                    {interests.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Ceritakan Situasi Anda</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none"
                    placeholder="Ceritakan jenis bisnis, jumlah karyawan, dan tantangan IT yang ingin Anda selesaikan..."
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-600 text-center">{error}</p>
                )}
                <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? 'Mengirim…' : 'Kirim Pesan'}
                  {!loading && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </button>
                <p className="text-xs text-slate-500 text-center">
                  Kami respons dalam 1 hari kerja. Tidak ada spam, tidak ada telepon yang tidak diundang.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
