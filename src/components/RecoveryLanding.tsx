import WhatsAppButton from './WhatsAppButton'
import TechnologyBrands from './TechnologyBrands'
import RecoveryInsights from './RecoveryInsights'
import { useEffect, useState } from 'react'
import { recoveryCopy, Language } from '../data/recoveryCopy'
import CookieConsent from './CookieConsent'
import { trackConversion } from '../lib/conversion'

export default function RecoveryLanding({ lang }: { lang: Language }) {
  const c = recoveryCopy[lang]
  const [ready, setReady] = useState(false)
  useEffect(() => setReady(true), [])
  const [menu, setMenu] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [need, setNeed] = useState('')
  const [message, setMessage] = useState('')
  const needs = ['Recovery Health Check', 'Financial Vendor Readiness', 'BCP / DR Test', 'Managed Resilience', 'Not sure / discuss first']
  const wa = `https://wa.me/6281903378000?text=${encodeURIComponent(c.waMessage)}`
  const ids = ['approach', 'offers', 'proof', 'faq', 'resources']
  const book = (offer: string) => {
    const selected = offer.includes('Recovery Health Check') ? needs[0] : offer.includes('Vendor Readiness') ? needs[1] : offer.includes('BCP') ? needs[2] : offer.includes('Managed Resilience') ? needs[3] : needs[4]
    setNeed(selected)
    if (selected === needs[4]) setMessage(current => current || offer)
  }
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'sending') return
    const data = new FormData(event.currentTarget)
    if (data.get('website')) return
    setStatus('sending')
    try {
      if (!import.meta.env.VITE_WEB3FORMS_ACCESS_KEY) throw new Error('Missing configuration')
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, subject: 'Recovery & vendor readiness inquiry', from_name: 'PatuhData website', name: data.get('name'), company: data.get('company'), email: data.get('email'), staff_count: data.get('staff'), need: data.get('need'), message: data.get('message'), role: data.get('role'), phone: data.get('phone'), deadline: data.get('deadline') || '', environment: data.get('environment') || '', language: lang }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error('Submission failed')
      setStatus('success')
      trackConversion('form_submit_success', lang)
    } catch { setStatus('error') }
  }
  const whatsapp = (label = c.secondary) => <a className="rl-text-link" href={wa} onClick={() => trackConversion('whatsapp_click', lang)}>{label} <span aria-hidden="true">↗</span></a>
  return <div className="rl-site">
    <a className="rl-skip" href="#main">{lang === 'id' ? 'Ke konten utama' : 'Skip to content'}</a>
    <div className="rl-utility"><div className="rl-wrap"><span>PT PatuhData Solusi Nusantara</span><div><span>Jakarta, Indonesia</span><a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a></div></div></div>
    <header className="rl-header">
      <a href={lang === 'id' ? '/' : '/en'} aria-label="PatuhData"><img src="/logo.png" alt="PatuhData" width="160" height="48" /></a>
      <button className="rl-menu" aria-expanded={menu} aria-controls="recovery-nav" aria-label={lang === 'id' ? 'Menu navigasi' : 'Navigation menu'} onClick={() => setMenu(!menu)}>☰</button>
      <nav id="recovery-nav" className={menu ? 'is-open' : ''} aria-label={lang === 'id' ? 'Navigasi utama' : 'Main navigation'} onKeyDown={event => { if (event.key === 'Escape') setMenu(false) }}>{c.nav.map((name, i) => <a key={name} href={`#${ids[i]}`} onClick={() => setMenu(false)}>{name}</a>)}</nav>
      <div className="rl-language" aria-label="Language"><a href="/" lang="id" hrefLang="id" aria-current={lang === 'id' ? 'page' : undefined}>ID</a><span>/</span><a href="/en" lang="en" hrefLang="en" aria-current={lang === 'en' ? 'page' : undefined}>EN</a></div>
      <span className="rl-header-wa">{whatsapp('WhatsApp')}</span><a className="rl-button rl-header-cta" href="#contact" onClick={() => book(needs[0])}>{c.cta} <span aria-hidden="true">↗</span></a>
    </header>
    <main id="main">
      <div className="rl-hero-band"><section className="rl-hero rl-wrap">
        <div><p className="rl-eyebrow">{c.eyebrow}</p><h1>{c.headline}</h1><p className="rl-lead">{c.intro}</p><p className="rl-hero-evidence">{c.heroEvidence}</p><div className="rl-actions"><a className="rl-button" href="#contact" onClick={() => book(needs[0])}>{c.cta} <span aria-hidden="true">↗</span></a><a className="rl-vendor-hero-link" href="#vendor-readiness">{c.vendorLink}</a>{whatsapp()}</div><p className="rl-audience">{c.audience}</p></div>
        <aside className="rl-hero-card" aria-label={lang === 'id' ? 'Kerangka layanan PatuhData' : 'PatuhData service framework'}>
          <div className="rl-card-top"><span>PATUHDATA</span><span>{lang === 'id' ? 'KERANGKA LAYANAN' : 'SERVICE FRAMEWORK'}</span></div>
          <div className="rl-framework-core"><span className="rl-framework-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><rect x="5" y="7" width="26" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><rect x="5" y="25" width="26" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M10 13h4m-4 18h4M36 13h3a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-3m3-4-4 4 4 4" stroke="currentColor" strokeWidth="1.5"/></svg></span><h2>{lang === 'id' ? 'Kesiapan bisnis. Bukti yang jelas.' : 'Business readiness. Clear evidence.'}</h2><p>{lang === 'id' ? 'Sistem • Kontrol • Dokumentasi' : 'Systems • Controls • Documentation'}</p></div>
          <div className="rl-recovery-framework"><strong>Recovery Health Check</strong><span>{lang === 'id' ? 'Uji → Temuan → Bukti → Prioritas' : 'Test → Findings → Evidence → Priorities'}</span></div>
          <div className="rl-framework-cycle">{(lang === 'id' ? ['ASESMEN', 'PERBAIKI', 'KELOLA'] : ['ASSESS', 'FIX', 'MANAGE']).map((step, i) => <span key={step}>{step}{i < 2 && <i aria-hidden="true">→</i>}</span>)}</div>
          <p className="rl-framework-note">{lang === 'id' ? 'Lingkup terukur. Tanggung jawab jelas.' : 'Defined scope. Clear responsibilities.'}</p>
        </aside>
      </section></div>
      <div className="rl-capabilities"><div className="rl-wrap"><p>{lang === 'id' ? 'FOKUS LAYANAN' : 'OUR FOCUS'}</p><span>{lang === 'id' ? 'Pemulihan & kontinuitas' : 'Recovery & continuity'}</span><span>{lang === 'id' ? 'Kesiapan vendor sektor keuangan' : 'Financial vendor readiness'}</span><span>{lang === 'id' ? 'Keamanan & bukti operasional' : 'Security & operational evidence'}</span></div></div>
      <section id="assessments" className="rl-section rl-tint" aria-labelledby="assessments-heading"><div className="rl-wrap"><p className="rl-eyebrow">{lang === 'id' ? 'MULAI DI SINI' : 'START HERE'}</p><h2 id="assessments-heading">{c.entryTitle}</h2><p className="rl-section-intro">{c.entryIntro}</p><article className="rl-starter"><div className="rl-starter-summary"><span className="rl-tag">RECOVERY ASSURANCE</span><h3>{c.starterTitle}</h3><p className="rl-starting-price"><span>{c.pricePrefix}</span><strong>{lang === 'id' ? 'Rp5.000.000' : 'Rp5,000,000'}</strong></p><p className="rl-price-qualifier">{c.priceQualifier}</p><p>{c.priceNote}</p><a className="rl-button" href="#contact" onClick={() => book(needs[0])}>{c.cta} ↗</a></div><div className="rl-starter-scope"><h4>{c.included}</h4><ul>{c.starterItems.map(item => <li key={item}>{item}</li>)}</ul><details><summary>{c.excludes}</summary><p>{c.starterExcludes}</p></details></div><p className="rl-test-terms">{c.testTerms}</p></article></div></section>
      <section className="rl-section rl-tint"><div className="rl-wrap"><p className="rl-eyebrow">{lang === 'id' ? 'KENALI KEBUTUHANNYA' : 'RECOGNIZE THE NEED'}</p><h2>{c.problemsTitle}</h2><p className="rl-section-intro">{c.problemIntro}</p><div className="rl-grid rl-four">{c.problems.map(([title, text], i) => <article key={title}><span className="rl-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="rl-section rl-wrap rl-impact"><p className="rl-eyebrow">{lang === 'id' ? 'DAMPAK BISNIS' : 'BUSINESS IMPACT'}</p><h2>{c.impactTitle}</h2><div className="rl-grid rl-four">{c.impact.map(([title, question]) => <article key={title}><h3>{title}</h3><p>{question}</p></article>)}</div><p className="rl-impact-note">{c.rto}</p></section>
      <section id="approach" className="rl-section rl-wrap"><p className="rl-eyebrow">{c.nav[0]}</p><h2>{c.approachTitle}</h2><p className="rl-section-intro">{c.approachIntro}</p><div className="rl-grid rl-three">{c.steps.map(([title, text, proof], i) => <article className="rl-step" key={title}><span className="rl-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p><p className="rl-proof-line">{proof}</p></article>)}</div><ol className="rl-lifecycle" aria-label={lang === 'id' ? 'Siklus kesiapan' : 'Readiness lifecycle'}>{c.lifecycle.map(item => <li key={item}>{item}</li>)}</ol><p className="rl-validation-note">{c.validationNote}</p><a className="rl-text-link" href="#contact" onClick={() => book(needs[3])}>{c.managedCta} ↗</a></section>
      <section id="vendor-readiness" className="rl-section rl-vendor-section"><div className="rl-wrap rl-vendor-layout"><div><p className="rl-eyebrow">{c.vendorEyebrow}</p><h2>{c.vendorTitle}</h2><h3>PatuhData Financial Vendor Readiness</h3><p>{c.vendorIntro}</p><a className="rl-button rl-button-outline" href="#contact" onClick={() => book(needs[1])}>{c.vendorCta} ↗</a></div><div><ul>{c.vendorItems.map(item => <li key={item}>{item}</li>)}</ul><p className="rl-vendor-disclaimer">{c.vendorDisclaimer}</p></div></div></section>
      <section id="offers" className="rl-section rl-tint"><div className="rl-wrap"><p className="rl-eyebrow">{c.nav[1]}</p><h2>{c.offersTitle}</h2><p className="rl-section-intro">{c.offersIntro}</p><div className="rl-start-links"><span>{lang === 'id' ? 'Mulai di sini:' : 'Start here:'}</span><a href="#assessments">Recovery Health Check</a><a href="#vendor-readiness">Financial Vendor Readiness</a></div><div className="rl-grid rl-two rl-follow-on">{c.offers.map(([name, text, timing, excluded, tag]) => <article className="rl-offer" key={name}><span className="rl-tag">{tag}</span><h3>{name}</h3><p>{text}</p><dl><dt>{c.timeline}</dt><dd>{timing}</dd><dt>{c.excludes}</dt><dd>{excluded}</dd></dl><p className="rl-price">{c.quote}</p><a className="rl-text-link" href="#contact" onClick={() => book(name === 'Managed Resilience' ? needs[3] : needs[0])}>{name === 'Managed Resilience' ? c.managedCta : c.cta}<span aria-hidden="true"> ↗</span></a></article>)}</div></div></section>
      <section id="proof" className="rl-section rl-wrap"><p className="rl-eyebrow">{c.nav[2]}</p><h2>{c.proofTitle}</h2><p className="rl-section-intro">{c.proofIntro}</p><div className="rl-report"><p className="rl-sample-label">{c.sample}</p><div className="rl-report-heading"><h3>{c.reportTitle}</h3><span>PATUHDATA / 01</span></div><p>{c.reportScope}</p><dl className="rl-report-meta">{c.reportMeta.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><div className="rl-table-scroll" role="region" aria-label={c.reportTitle} tabIndex={0}><table><caption className="rl-sr-only">{c.sample}</caption><thead><tr>{c.reportHeaders.map(h => <th scope="col" key={h}>{h}</th>)}</tr></thead><tbody>{c.rows.map(row => <tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td><td>{row[2]}</td></tr>)}</tbody></table></div><h3 className="rl-vendor-proof-title">{lang === 'id' ? 'Contoh register bukti untuk asesmen vendor' : 'Example evidence register for a vendor assessment'}</h3><p>{lang === 'id' ? 'Ilustrasi terpisah: klien meminta diagram alur data, bukti kontrol akses, dan hasil uji pemulihan.' : 'Separate illustration: a customer requests a data-flow diagram, access-control evidence, and recovery test results.'}</p><div className="rl-table-scroll" role="region" aria-label={lang === 'id' ? 'Contoh bukti vendor' : 'Sample vendor evidence'} tabIndex={0}><table><caption className="rl-sr-only">{c.sample}</caption><thead><tr>{(lang === 'id' ? ['Persyaratan klien', 'Bukti / kesenjangan', 'Pemilik & tindakan'] : ['Customer requirement', 'Evidence / gap', 'Owner & action']).map(h => <th key={h} scope="col">{h}</th>)}</tr></thead><tbody>{(lang === 'id' ? [['Alur data', 'Diagram belum mencakup penyedia eksternal', 'Pemilik aplikasi: lengkapi dan validasi diagram'], ['Akses admin', 'Bukti MFA belum tersedia', 'Pemilik IT: verifikasi konfigurasi; catat celah'], ['Uji pemulihan', 'Laporan belum divalidasi pemilik proses', 'Operasional: validasi hasil dan catat batasan']] : [['Data flow', 'Diagram does not yet include external providers', 'Application owner: complete and validate diagram'], ['Administrator access', 'MFA evidence unavailable', 'IT owner: verify configuration and record gaps'], ['Recovery testing', 'Report not yet validated by the process owner', 'Operations: validate results and record limitations']]).map(row => <tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td><td>{row[2]}</td></tr>)}</tbody></table></div><p className="rl-report-note">{c.reportNote}</p></div></section>
      <section className="rl-section rl-dark"><div className="rl-wrap rl-grid rl-two"><div><p className="rl-eyebrow">{lang === 'id' ? 'UNTUK SIAPA' : 'WHO IT IS FOR'}</p><h2>{c.industriesTitle}</h2><p>{c.industriesIntro}</p><ul className="rl-industry-list">{c.industries.map(industry => <li key={industry}>{industry}</li>)}</ul><p>{c.vendorAudience}</p></div><div className="rl-company"><h3>{c.companyTitle}</h3><p>{c.companyText}</p><p>PT PatuhData Solusi Nusantara<br />Jakarta, Indonesia</p></div></div></section>
      <TechnologyBrands lang={lang} />
      <RecoveryInsights lang={lang} />
      <section id="faq" className="rl-section rl-wrap rl-faq"><p className="rl-eyebrow">FAQ</p><h2>{c.faqTitle}</h2>{c.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
      <section id="contact" className="rl-section rl-tint"><div className="rl-wrap rl-grid rl-two"><div><p className="rl-eyebrow">{lang === 'id' ? 'LANGKAH PERTAMA' : 'THE FIRST STEP'}</p><h2>{c.contactTitle}</h2><p>{c.contactIntro}</p><a className="rl-button rl-bottom-book" href="#inquiry" onClick={() => book(needs[0])}>{c.cta} ↗</a><div className="rl-contact-links">{whatsapp()}<a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a><a href={wa} onClick={() => trackConversion('whatsapp_click', lang)}>+62 819 0337 8000</a></div><address>INFINITI OFFICE<br />Jl. Permata Regency, Jl. H. Kelik<br />RT.1/RW.6, Srengseng, Kembangan<br />Jakarta Barat, DKI Jakarta 11630</address></div>
      <form id="inquiry" className="rl-form" onSubmit={submit} aria-label={c.formTitle}><h3>{c.formTitle}</h3><label className="rl-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label><div className="rl-form-grid">{[
        { name: 'name', label: c.labels[0], type: 'text', autoComplete: 'name' },
        { name: 'company', label: c.labels[1], type: 'text', autoComplete: 'organization' },
        { name: 'role', label: c.roleLabel, type: 'text', autoComplete: 'organization-title' },
        { name: 'email', label: c.labels[2], type: 'email', autoComplete: 'email' },
        { name: 'phone', label: c.phoneLabel, type: 'tel', autoComplete: 'tel' },
      ].map(field => <label key={field.name} htmlFor={`rl-${field.name}`}>{field.label}<input id={`rl-${field.name}`} name={field.name} type={field.type} autoComplete={field.autoComplete} required maxLength={180} /></label>)}<label htmlFor="rl-staff">{c.labels[3]}<select name="staff" id="rl-staff" required defaultValue=""><option value="" disabled>{c.choose}</option>{['1–29', '30–50', '51–200', '201–500', '500+'].map(size => <option key={size}>{size}</option>)}</select></label></div><label htmlFor="rl-need">{c.labels[4]}<select id="rl-need" name="need" required value={need} onChange={event => setNeed(event.target.value)}><option value="" disabled>{c.choose}</option>{needs.map((value, i) => <option key={value} value={value}>{c.needOptions[i]}</option>)}</select></label><label htmlFor="rl-message">{c.systemLabel}<textarea id="rl-message" name="message" required maxLength={3000} rows={4} value={message} onChange={event => setMessage(event.target.value)} placeholder={c.need} /></label><div className="rl-form-grid"><label htmlFor="rl-deadline">{c.deadlineLabel}<input id="rl-deadline" name="deadline" type="date" /></label><label htmlFor="rl-environment">{c.environmentLabel}<select id="rl-environment" name="environment" defaultValue=""><option value="">{c.choose}</option>{['On-premise', 'Cloud', 'Hybrid', 'Not sure'].map((value, i) => <option key={value} value={value}>{c.environmentOptions[i]}</option>)}</select></label></div><p className="rl-form-note">{c.privacy} <a href="/privacy">{c.privacyLink}</a>.</p><button className="rl-button" disabled={!ready || status === 'sending' || status === 'success'} type="submit">{status === 'sending' ? c.sending : c.submit} ↗</button><div role="status" aria-live="polite">{status === 'success' ? c.success : status === 'error' ? c.error : ''}</div><noscript><p>{lang === 'id' ? 'Untuk mengirim tanpa JavaScript, hubungi kami melalui email atau WhatsApp.' : 'To inquire without JavaScript, use email or WhatsApp.'}</p></noscript></form></div></section>
    </main>
    <footer className="rl-footer">
      <div className="rl-wrap">
        <div className="rl-footer-main">
          <div className="rl-footer-brand"><a href={lang === 'id' ? '/' : '/en'} aria-label="PatuhData"><img src="/logo-white.png" alt="PatuhData" width="160" height="48" /></a><p>{lang === 'id' ? 'Siap pulih. Siap menjawab persyaratan klien. Dengan bukti yang jelas.' : 'Ready to recover. Ready to answer customers. With clear evidence.'}</p><strong>PT PatuhData Solusi Nusantara</strong></div>
          <nav className="rl-footer-links" aria-label={lang === 'id' ? 'Navigasi footer' : 'Footer navigation'}><h2>{lang === 'id' ? 'Jelajahi' : 'Explore'}</h2>{c.nav.map((name, i) => <a key={name} href={`#${ids[i]}`}>{name}</a>)}<a href="#contact" onClick={() => book(needs[0])}>Recovery Health Check</a><a href="#vendor-readiness">Financial Vendor Readiness</a></nav>
          <div className="rl-footer-contact"><h2>{lang === 'id' ? 'Hubungi kami' : 'Contact us'}</h2><a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a><a href={wa} onClick={() => trackConversion('whatsapp_click', lang)}>WhatsApp: +62 819 0337 8000</a><address>INFINITI OFFICE<br />Jl. Permata Regency, Jl. H. Kelik<br />RT.1/RW.6, Srengseng, Kembangan<br />Jakarta Barat, DKI Jakarta 11630</address></div>
        </div>
        <div className="rl-footer-bottom"><p>© 2026 PT PatuhData Solusi Nusantara</p><div className="rl-footer-legal"><a href="/privacy">{c.privacyLink}</a><a href="/terms">{lang === 'id' ? 'Ketentuan (English)' : 'Terms'}</a><a href="/cookies">{lang === 'id' ? 'Kebijakan Cookie (English)' : 'Cookie Policy'}</a><button type="button" onClick={() => window.dispatchEvent(new Event('patuhdata:open-consent'))}>{c.cookies}</button></div></div>
      </div>
    </footer>
    <CookieConsent lang={lang} /><WhatsAppButton lang={lang} />
  </div>
}
