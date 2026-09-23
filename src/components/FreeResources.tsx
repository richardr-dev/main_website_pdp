import { useState } from 'react'
import { WEB3FORMS_ACCESS_KEY } from '../config/web3forms'

type Lang = 'id' | 'en'
type ResourceKey = 'checklist' | 'ropa'

const resources = {
  checklist: {
    file: '/downloads/patuhdata-pdp-readiness-checklist.pdf',
    id: 'Checklist Kesiapan UU PDP',
    en: 'PDP Readiness Checklist',
    format: 'PDF',
  },
  ropa: {
    file: '/downloads/patuhdata-ropa-starter.xlsx',
    id: 'ROPA Starter Template',
    en: 'ROPA Starter Template',
    format: 'XLSX',
  },
}

export default function FreeResources({ lang }: { lang: Lang }) {
  const en = lang === 'en'
  const [selected, setSelected] = useState<ResourceKey>('checklist')
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', role: '' })
  const [loading, setLoading] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState('')

  const download = (key: ResourceKey) => {
    const link = document.createElement('a')
    link.href = resources[key].file
    link.download = ''
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  const submit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Free PDP Resource Download — ${resources[selected].en}`,
          from_name: form.name,
          name: form.name,
          company: form.company,
          business_email: form.email,
          whatsapp: form.phone,
          role: form.role,
          requested_resource: resources[selected].en,
          source: 'PatuhData website resource gate',
        }),
      })
      const data = await response.json()
      if (!data.success) throw new Error('Submission failed')
      setUnlocked(true)
      download(selected)
    } catch {
      setError(en ? 'We could not process your request. Please try again or email hello@patuhdata.id.' : 'Permintaan belum berhasil diproses. Silakan coba lagi atau email hello@patuhdata.id.')
    } finally {
      setLoading(false)
    }
  }

  return <section className="section resource-section" id="resources">
    <div className="resource-shell">
      <div className="resource-copy">
        <span className="kicker">{en ? 'FREE PDP TOOLKIT' : 'TOOLKIT PDP GRATIS'}</span>
        <h2>{en ? <>Practical templates<br />to get you started.</> : <>Template praktis<br />untuk mulai bergerak.</>}</h2>
        <p>{en ? 'Choose a resource, enter your business details, and receive immediate access after submission.' : 'Pilih resource, lengkapi data bisnis Anda, dan dapatkan akses langsung setelah formulir dikirim.'}</p>
        <div className="resource-options">
          {(Object.keys(resources) as ResourceKey[]).map((key) => {
            const item = resources[key]
            return <button type="button" className={selected === key ? 'selected' : ''} onClick={() => setSelected(key)} key={key}>
              <span>{item.format}</span><strong>{item[lang]}</strong><i>{selected === key ? '●' : '○'}</i>
            </button>
          })}
        </div>
      </div>

      <div className="resource-form-wrap">
        {unlocked ? <div className="resource-success">
          <span>✓</span>
          <h3>{en ? 'Your templates are ready.' : 'Template Anda siap.'}</h3>
          <p>{en ? 'Your selected file should download automatically. You can also download either resource below.' : 'File pilihan Anda akan terunduh otomatis. Anda juga dapat mengunduh kedua resource di bawah ini.'}</p>
          {(Object.keys(resources) as ResourceKey[]).map((key) => <button key={key} type="button" onClick={() => download(key)}>{resources[key][lang]} <b>↓</b></button>)}
        </div> : <form onSubmit={submit} className="resource-form">
          <div className="form-heading"><small>{en ? 'STEP 2 OF 2' : 'LANGKAH 2 DARI 2'}</small><h3>{en ? 'Where should we send access?' : 'Lengkapi data Anda'}</h3></div>
          <div className="resource-fields">
            <label>{en ? 'Full name' : 'Nama lengkap'} *<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={en ? 'Your name' : 'Nama Anda'} /></label>
            <label>{en ? 'Company' : 'Perusahaan'} *<input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="PT / Organization" /></label>
            <label>{en ? 'Business email' : 'Email bisnis'} *<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="name@company.com" /></label>
            <label>{en ? 'WhatsApp number' : 'Nomor WhatsApp'}<input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+62 812..." /></label>
            <label className="field-wide">{en ? 'Role' : 'Jabatan'} *<select required value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}><option value="">{en ? 'Select your role...' : 'Pilih jabatan...'}</option><option>Owner / Founder</option><option>Director / C-Level</option><option>Legal / Compliance</option><option>Data Protection / DPO</option><option>IT / Security</option><option>HR / Operations</option><option>Other</option></select></label>
          </div>
          <label className="resource-consent"><input type="checkbox" required /><span>{en ? 'I agree that PatuhData may use these details to provide the requested resource and contact me about relevant PDP services. I can opt out at any time.' : 'Saya setuju PatuhData menggunakan data ini untuk memberikan resource yang diminta dan menghubungi saya terkait layanan PDP yang relevan. Saya dapat berhenti kapan saja.'}</span></label>
          {error && <p className="resource-error">{error}</p>}
          <button className="resource-submit" type="submit" disabled={loading}>{loading ? (en ? 'Processing…' : 'Memproses…') : (en ? 'Get Free Template' : 'Dapatkan Template Gratis')} <span>↓</span></button>
          <small className="privacy-note">{en ? 'Your information is handled according to our Privacy Policy.' : 'Data Anda diproses sesuai dengan Privacy Policy kami.'}</small>
        </form>}
      </div>
    </div>
  </section>
}
