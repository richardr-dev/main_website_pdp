import { useEffect, useState } from 'react'
import './index.css'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookiePolicy from './components/CookiePolicy'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import FreeResources from './components/FreeResources'

const siteUrl = 'https://patuhdata.id'

const services = [
  {
    n: '01', slug: 'pdp-readiness-assessment', title: 'PDP Readiness Assessment', icon: '◎',
    text: 'Temukan gap kepatuhan, petakan risiko, dan dapatkan roadmap prioritas yang bisa langsung dijalankan.',
    intro: 'Assessment terstruktur untuk memahami posisi organisasi terhadap UU No. 27 Tahun 2022 dan menerjemahkan temuan menjadi rencana kerja yang realistis.',
    bullets: ['Inventarisasi aktivitas pemrosesan data pribadi', 'Gap assessment regulasi, proses, dan teknologi', 'Risk register dan prioritas remediasi', 'Executive report dan roadmap implementasi', 'Sesi pembahasan bersama stakeholder'],
  },
  {
    n: '02', slug: 'pdp-implementation', title: 'Implementasi Program PDP', icon: '↗',
    text: 'Kami mendampingi tim Anda membangun kebijakan, proses, kontrol, dan bukti implementasi—bukan hanya dokumen.',
    intro: 'Pendampingan end-to-end untuk mengubah hasil assessment menjadi program perlindungan data yang berfungsi dalam operasional sehari-hari.',
    bullets: ['Privacy governance dan penetapan peran', 'Kebijakan, SOP, formulir, dan template operasional', 'Data subject request dan consent management', 'Vendor privacy review dan klausul kontraktual', 'Pelatihan, simulasi, dan evidence pack'],
  },
  {
    n: '03', slug: 'dpo-as-a-service', title: 'DPO as a Service', icon: '◇',
    text: 'Akses ke fungsi DPO yang independen untuk advisory, monitoring, dan koordinasi program privasi berkelanjutan.',
    intro: 'Dukungan fungsi perlindungan data untuk organisasi yang membutuhkan keahlian spesialis tanpa membangun seluruh kapabilitas secara internal.',
    bullets: ['Advisory kepada manajemen dan pemilik proses', 'Monitoring kewajiban dan program kerja', 'Review DPIA, vendor, dan aktivitas berisiko tinggi', 'Koordinasi permintaan subjek data', 'Laporan berkala dan rekomendasi perbaikan'],
  },
  {
    n: '04', slug: 'dpia-data-mapping', title: 'DPIA & Data Mapping', icon: '⌁',
    text: 'Petakan aliran data dan nilai risiko privasi sebelum produk, proses, atau teknologi baru diluncurkan.',
    intro: 'Kami membantu tim bisnis dan teknologi memahami data yang diproses, tujuan, pihak terkait, lokasi, retensi, dan kontrol yang dibutuhkan.',
    bullets: ['Data inventory dan Record of Processing Activities', 'Data flow mapping lintas sistem dan vendor', 'DPIA untuk pemrosesan berisiko tinggi', 'Legal basis, purpose, dan retention review', 'Rekomendasi privacy by design'],
  },
  {
    n: '05', slug: 'incident-breach-response', title: 'Respons Insiden Data Pribadi', icon: '!',
    text: 'Siapkan playbook dan koordinasi respons agar insiden ditangani cepat, terdokumentasi, dan tepat sasaran.',
    intro: 'Pendampingan kesiapan maupun respons aktual untuk membantu organisasi menilai dampak, mengambil tindakan, dan menjaga bukti keputusan.',
    bullets: ['Incident response playbook dan escalation matrix', 'Breach triage dan impact assessment', 'Koordinasi legal, keamanan, komunikasi, dan manajemen', 'Draft dokumentasi serta notifikasi', 'Post-incident review dan corrective action'],
  },
]

const phases = [
  { n: '01', title: 'Temukan', text: 'Interview, review dokumen, dan petakan data serta proses yang paling berisiko.' },
  { n: '02', title: 'Prioritaskan', text: 'Ubah gap menjadi roadmap berbasis risiko, dampak bisnis, dan kapasitas tim.' },
  { n: '03', title: 'Implementasikan', text: 'Bangun kebijakan, SOP, kontrol, tools, dan kebiasaan kerja bersama process owner.' },
  { n: '04', title: 'Buktikan & Kelola', text: 'Siapkan evidence, ukur efektivitas, dan jalankan governance secara berkelanjutan.' },
]

const servicesEn = [
  {
    n: '01', slug: 'pdp-readiness-assessment', title: 'PDP Readiness Assessment', icon: '◎',
    text: 'Identify compliance gaps, map risk, and receive a prioritized roadmap your team can act on.',
    intro: 'A structured assessment of your organization against Indonesia’s Personal Data Protection Law, translating findings into a realistic action plan.',
    bullets: ['Personal data processing inventory', 'Regulatory, process, and technology gap assessment', 'Risk register and remediation priorities', 'Executive report and implementation roadmap', 'Stakeholder findings workshop'],
  },
  {
    n: '02', slug: 'pdp-implementation', title: 'PDP Program Implementation', icon: '↗',
    text: 'We help your team build policies, processes, controls, and implementation evidence—not documents alone.',
    intro: 'End-to-end support that turns assessment findings into a personal data protection program embedded in daily operations.',
    bullets: ['Privacy governance and role assignment', 'Policies, procedures, forms, and operational templates', 'Data subject requests and consent management', 'Vendor privacy reviews and contractual clauses', 'Training, simulations, and evidence pack'],
  },
  {
    n: '03', slug: 'dpo-as-a-service', title: 'DPO as a Service', icon: '◇',
    text: 'Access an independent DPO function for ongoing advice, monitoring, and privacy program coordination.',
    intro: 'Data protection support for organizations that need specialist expertise without building the entire capability in-house.',
    bullets: ['Advice to management and process owners', 'Compliance and work-program monitoring', 'Review of DPIAs, vendors, and high-risk processing', 'Data subject request coordination', 'Periodic reporting and improvement recommendations'],
  },
  {
    n: '04', slug: 'dpia-data-mapping', title: 'DPIA & Data Mapping', icon: '⌁',
    text: 'Map data flows and assess privacy risk before launching a new product, process, or technology.',
    intro: 'We help business and technology teams understand what data is processed, why, by whom, where, for how long, and under which controls.',
    bullets: ['Data inventory and Records of Processing Activities', 'Data-flow mapping across systems and vendors', 'DPIAs for high-risk processing', 'Legal basis, purpose, and retention review', 'Privacy-by-design recommendations'],
  },
  {
    n: '05', slug: 'incident-breach-response', title: 'Personal Data Breach Response', icon: '!',
    text: 'Build the playbook and coordination model needed for a fast, documented, and proportionate response.',
    intro: 'Readiness and active-incident support to assess impact, coordinate action, and preserve evidence of key decisions.',
    bullets: ['Incident response playbook and escalation matrix', 'Breach triage and impact assessment', 'Legal, security, communications, and management coordination', 'Documentation and notification drafts', 'Post-incident review and corrective actions'],
  },
]

const phasesEn = [
  { n: '01', title: 'Discover', text: 'Interview stakeholders, review documents, and map the data and processes carrying the greatest risk.' },
  { n: '02', title: 'Prioritize', text: 'Turn gaps into a roadmap based on risk, business impact, and team capacity.' },
  { n: '03', title: 'Implement', text: 'Build policies, procedures, controls, tools, and working habits with process owners.' },
  { n: '04', title: 'Evidence & Govern', text: 'Prepare evidence, measure effectiveness, and run privacy governance continuously.' },
]

type Lang = 'id' | 'en'

function Arrow() { return <span aria-hidden="true">↗</span> }

function useSeo(path: string, lang: Lang) {
  useEffect(() => {
    const serviceList = lang === 'en' ? servicesEn : services
    const service = path.startsWith('/services/') ? serviceList.find((item) => item.slug === path.split('/').pop()) : undefined
    const title = service ? `${service.title} Indonesia | PatuhData` : path === '/contact' ? (lang === 'en' ? 'Indonesia PDP Consultation | PatuhData' : 'Konsultasi UU PDP Indonesia | PatuhData') : (lang === 'en' ? 'Indonesia PDP Consulting & Implementation | PatuhData' : 'Konsultan & Implementasi UU PDP Indonesia | PatuhData')
    const description = service?.intro || (lang === 'en' ? 'PatuhData helps organizations assess, implement, and operate compliance with Indonesia’s Personal Data Protection Law.' : 'PatuhData membantu organisasi Indonesia menilai kesiapan, mengimplementasikan, dan mengelola kepatuhan UU Pelindungan Data Pribadi secara operasional.')
    document.documentElement.lang = lang === 'en' ? 'en-ID' : 'id-ID'
    document.title = title
    const setMeta = (selector: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector)
      if (!el) { el = document.createElement('meta'); document.head.appendChild(el) }
      Object.entries(attrs).forEach(([key, value]) => el!.setAttribute(key, value))
    }
    setMeta('meta[name="description"]', { name: 'description', content: description })
    setMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: lang === 'en' ? 'en_ID' : 'id_ID' })
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = `${siteUrl}${path === '/' ? '' : path}`
  }, [path, lang])
}

function ServicePage({ slug, lang }: { slug: string, lang: Lang }) {
  const serviceList = lang === 'en' ? servicesEn : services
  const activePhases = lang === 'en' ? phasesEn : phases
  const service = serviceList.find((item) => item.slug === slug) || serviceList[0]
  return <main className="detail-page">
    <section className="detail-hero">
      <div><span className="kicker kicker-light">{lang === 'en' ? 'SERVICE' : 'LAYANAN'} · {service.n}</span><h1>{service.title}</h1><p>{service.intro}</p><a className="button button-coral" href="/contact">{lang === 'en' ? 'Discuss Your Requirements' : 'Diskusikan Kebutuhan Anda'} <Arrow /></a></div>
      <div className="detail-symbol">{service.icon}</div>
    </section>
    <section className="detail-body"><div><span className="kicker">{lang === 'en' ? 'SCOPE OF WORK' : 'CAKUPAN PEKERJAAN'}</span><h2>{lang === 'en' ? <>From recommendation<br />to action.</> : <>Dari rekomendasi<br />menjadi tindakan.</>}</h2></div><ul>{service.bullets.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></section>
    <section className="detail-steps"><span className="kicker">{lang === 'en' ? 'HOW WE WORK' : 'CARA KAMI BEKERJA'}</span><div>{activePhases.slice(0, 3).map((phase) => <article key={phase.n}><b>{phase.n}</b><h3>{phase.title}</h3><p>{phase.text}</p></article>)}</div></section>
    <CallToAction lang={lang} />
  </main>
}

function ComplianceVisual({ lang }: { lang: Lang }) {
  return <div className="compliance-visual" aria-label={lang === 'en' ? 'PDP compliance readiness dashboard illustration' : 'Ilustrasi dashboard kesiapan kepatuhan PDP'}>
    <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
    <div className="readiness-card"><div className="card-label"><span>PROGRAM READINESS</span><b>Q3 / 2026</b></div><strong>82<span>%</span></strong><div className="progress"><i /></div><small>{lang === 'en' ? '12 controls complete · 4 in progress' : '12 kontrol selesai · 4 dalam proses'}</small></div>
    <div className="flow-card"><span>DATA FLOW</span><div><i />Collect</div><div><i />Process</div><div><i />Retain</div><div><i />Delete</div></div>
    <div className="verified-pill"><span>✓</span> Evidence verified</div>
  </div>
}

function CallToAction({ lang }: { lang: Lang }) {
  if (lang === 'en') return <section className="cta-section"><div><span className="kicker kicker-light">START FROM WHERE YOU ARE TODAY</span><h2>Ready to build a PDP program<br />that works in practice?</h2></div><div><p>Tell us about your situation, target, or audit pressure. We will help identify the most sensible first step.</p><a className="button button-white" href="/contact">Schedule a Consultation <Arrow /></a></div></section>
  return <section className="cta-section"><div><span className="kicker kicker-light">MULAI DARI KONDISI ANDA HARI INI</span><h2>Siap membuat program PDP<br />yang benar-benar berjalan?</h2></div><div><p>Ceritakan situasi, target, atau tekanan audit Anda. Kami bantu tentukan langkah pertama yang paling masuk akal.</p><a className="button button-white" href="/contact">Jadwalkan Konsultasi <Arrow /></a></div></section>
}

function Home({ lang }: { lang: Lang }) {
  if (lang === 'en') return <HomeEnglish />
  return <main id="top">
    <section className="hero">
      <div className="hero-copy"><div className="eyebrow"><i /> KONSULTASI · IMPLEMENTASI · GOVERNANCE</div><h1>Kepatuhan PDP<br />yang <em>bekerja.</em></h1><p>Kami membantu organisasi Indonesia menerjemahkan UU Pelindungan Data Pribadi menjadi kebijakan, proses, kontrol, dan bukti implementasi yang bisa dijalankan oleh tim Anda.</p><div className="hero-actions"><a className="button button-coral" href="/contact">Konsultasi Awal <Arrow /></a><a className="text-link" href="#services">Lihat layanan <span>↓</span></a></div><div className="hero-trust"><span><b>Berbasis risiko</b> Fokus pada yang material</span><span><b>Siap dijalankan</b> Bukan sekadar template</span><span><b>Lintas fungsi</b> Legal, bisnis & teknologi</span></div></div>
      <div className="hero-art"><ComplianceVisual lang="id" /></div>
    </section>

    <section className="proof-strip"><span>DIRANCANG UNTUK KONTEKS INDONESIA</span><b>UU PDP No. 27/2022</b><i /><b>Privacy by Design</b><i /><b>Risk-based Implementation</b><i /><b>Audit-ready Evidence</b></section>

    <section className="section intro-section"><div><span className="kicker">DARI KEWAJIBAN MENJADI KAPABILITAS</span><h2>Dokumen saja<br /><em>tidak cukup.</em></h2></div><div className="intro-copy"><p>Program PDP yang matang harus hidup di dalam proses bisnis—dari marketing dan HR sampai procurement, teknologi, dan respons insiden.</p><p>PatuhData menggabungkan perspektif governance, proses, dan teknologi agar kontrol yang dirancang tidak berhenti di atas kertas.</p></div></section>

    <section className="section services" id="services"><div className="section-head"><div><span className="kicker">LAYANAN KAMI</span><h2>Satu mitra dari assessment<br />hingga <em>implementasi.</em></h2></div><p>Pilih engagement yang sesuai posisi organisasi Anda—mulai dari pemetaan awal, proyek remediasi, hingga fungsi DPO berkelanjutan.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.n}><div className="service-top"><span>{service.n}</span><b>{service.icon}</b></div><h3>{service.title}</h3><p>{service.text}</p><a href={`/services/${service.slug}`}>Lihat cakupan <Arrow /></a></article>)}</div></section>

    <section className="dark-section" id="why-us"><div className="dark-copy"><span className="kicker kicker-light">MENGAPA PATUHDATA</span><h2>Strategis untuk manajemen.<br /><em>Praktis untuk tim.</em></h2><p>Kami menjembatani bahasa regulasi dengan realitas operasional. Setiap rekomendasi memiliki owner, prioritas, deliverable, dan cara pembuktian yang jelas.</p><a className="button button-white" href="/contact">Bahas Gap Anda <Arrow /></a></div><div className="outcomes"><div><strong>01</strong><h3>Konteks lokal, standar kuat</h3><p>Berangkat dari kewajiban UU PDP dan diselaraskan dengan praktik privasi yang diakui.</p></div><div><strong>02</strong><h3>Kolaboratif, bukan menggurui</h3><p>Kami bekerja bersama legal, IT, security, HR, marketing, dan process owner.</p></div><div><strong>03</strong><h3>Hasil yang dapat dibuktikan</h3><p>Dokumentasi, workflow, register, dan evidence pack yang siap ditinjau.</p></div></div></section>

    <section className="section process" id="process"><div className="section-head"><div><span className="kicker">METODOLOGI</span><h2>Jalur yang jelas menuju<br /><em>operational readiness.</em></h2></div><p>Mulai dari kondisi nyata organisasi Anda. Kami membangun fondasi yang proporsional, lalu meningkatkan kematangan secara bertahap.</p></div><div className="phase-grid">{phases.map((phase) => <article key={phase.n}><b>{phase.n}</b><div><h3>{phase.title}</h3><p>{phase.text}</p></div></article>)}</div></section>

    <section className="deliverables"><div className="deliverable-copy"><span className="kicker kicker-light">YANG ANDA DAPATKAN</span><h2>Output yang bisa<br />langsung dipakai.</h2><p>Struktur deliverable disesuaikan dengan scope, tingkat risiko, dan kematangan organisasi.</p></div><div className="deliverable-list">{['Data inventory & ROPA', 'PDP gap and risk register', 'Privacy policies & SOP', 'DPIA & vendor assessment', 'Incident response playbook', 'Training & evidence pack'].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong><b>↗</b></div>)}</div></section>

    <FreeResources lang="id" />

    <CallToAction lang="id" />
  </main>
}

function HomeEnglish() {
  return <main id="top">
    <section className="hero">
      <div className="hero-copy"><div className="eyebrow"><i /> CONSULTING · IMPLEMENTATION · GOVERNANCE</div><h1>PDP compliance<br />that <em>works.</em></h1><p>We help organizations in Indonesia translate the Personal Data Protection Law into policies, processes, controls, and implementation evidence their teams can operate.</p><div className="hero-actions"><a className="button button-coral" href="/contact">Initial Consultation <Arrow /></a><a className="text-link" href="#services">Explore services <span>↓</span></a></div><div className="hero-trust"><span><b>Risk-based</b> Focused on material issues</span><span><b>Operational</b> More than templates</span><span><b>Cross-functional</b> Legal, business & technology</span></div></div>
      <div className="hero-art"><ComplianceVisual lang="en" /></div>
    </section>

    <section className="proof-strip"><span>BUILT FOR THE INDONESIAN CONTEXT</span><b>PDP Law No. 27/2022</b><i /><b>Privacy by Design</b><i /><b>Risk-based Implementation</b><i /><b>Audit-ready Evidence</b></section>

    <section className="section intro-section"><div><span className="kicker">FROM OBLIGATION TO CAPABILITY</span><h2>Documents alone<br /><em>are not enough.</em></h2></div><div className="intro-copy"><p>A mature PDP program must live inside business processes—from marketing and HR to procurement, technology, and incident response.</p><p>PatuhData combines governance, process, and technology perspectives so every control can work beyond the page.</p></div></section>

    <section className="section services" id="services"><div className="section-head"><div><span className="kicker">OUR SERVICES</span><h2>One partner from assessment<br />through <em>implementation.</em></h2></div><p>Choose an engagement that matches your organization’s position—from initial mapping and remediation projects to an ongoing DPO function.</p></div><div className="service-grid">{servicesEn.map((service) => <article className="service-card" key={service.n}><div className="service-top"><span>{service.n}</span><b>{service.icon}</b></div><h3>{service.title}</h3><p>{service.text}</p><a href={`/services/${service.slug}`}>View scope <Arrow /></a></article>)}</div></section>

    <section className="dark-section" id="why-us"><div className="dark-copy"><span className="kicker kicker-light">WHY PATUHDATA</span><h2>Strategic for management.<br /><em>Practical for teams.</em></h2><p>We bridge regulatory language and operational reality. Every recommendation has a clear owner, priority, deliverable, and method of evidence.</p><a className="button button-white" href="/contact">Discuss Your Gaps <Arrow /></a></div><div className="outcomes"><div><strong>01</strong><h3>Local context, strong standards</h3><p>Grounded in Indonesia’s PDP Law and aligned with recognized privacy practices.</p></div><div><strong>02</strong><h3>Collaborative by design</h3><p>We work alongside legal, IT, security, HR, marketing, and process owners.</p></div><div><strong>03</strong><h3>Evidence-based outcomes</h3><p>Documentation, workflows, registers, and evidence packs ready for review.</p></div></div></section>

    <section className="section process" id="process"><div className="section-head"><div><span className="kicker">METHODOLOGY</span><h2>A clear path toward<br /><em>operational readiness.</em></h2></div><p>We start with your organization’s actual position, build a proportionate foundation, and improve maturity in practical stages.</p></div><div className="phase-grid">{phasesEn.map((phase) => <article key={phase.n}><b>{phase.n}</b><div><h3>{phase.title}</h3><p>{phase.text}</p></div></article>)}</div></section>

    <section className="deliverables"><div className="deliverable-copy"><span className="kicker kicker-light">WHAT YOU RECEIVE</span><h2>Outputs your team<br />can use immediately.</h2><p>Deliverables are tailored to the scope, risk profile, and maturity of your organization.</p></div><div className="deliverable-list">{['Data inventory & ROPA', 'PDP gap and risk register', 'Privacy policies & procedures', 'DPIA & vendor assessment', 'Incident response playbook', 'Training & evidence pack'].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong><b>↗</b></div>)}</div></section>

    <FreeResources lang="en" />

    <CallToAction lang="en" />
  </main>
}

export default function App() {
  const [menu, setMenu] = useState(false)
  const [lang, setLang] = useState<Lang>(() => localStorage.getItem('patuhdata-language') === 'en' ? 'en' : 'id')
  const [route, setRoute] = useState(window.location.pathname)
  useEffect(() => { const sync = () => setRoute(window.location.pathname); window.addEventListener('popstate', sync); return () => window.removeEventListener('popstate', sync) }, [])
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }) }, [route])
  useEffect(() => { localStorage.setItem('patuhdata-language', lang) }, [lang])
  useSeo(route, lang)
  const serviceSlug = route.startsWith('/services/') ? route.split('/').pop() || '' : ''
  const activeServices = lang === 'en' ? servicesEn : services
  return <div className="site-shell">
    <header className="nav-wrap"><a className="brand" href="/"><img src="/logo.png" alt="PatuhData" /></a><nav className={menu ? 'nav-links open' : 'nav-links'}><a href="/#services" onClick={() => setMenu(false)}>{lang === 'en' ? 'Services' : 'Layanan'}</a><a href="/#process" onClick={() => setMenu(false)}>{lang === 'en' ? 'How We Work' : 'Cara Kerja'}</a><a href="/#why-us" onClick={() => setMenu(false)}>{lang === 'en' ? 'Why Us' : 'Mengapa Kami'}</a><a href="/#resources" onClick={() => setMenu(false)}>Resources</a></nav><div className="nav-actions"><div className="lang-switch" aria-label="Language"><button className={lang === 'id' ? 'active' : ''} onClick={() => setLang('id')} aria-label="Bahasa Indonesia">ID</button><button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')} aria-label="English">EN</button></div><a className="nav-cta" href="/contact">{lang === 'en' ? 'PDP Consultation' : 'Konsultasi PDP'} <Arrow /></a><button className="menu-btn" onClick={() => setMenu(!menu)} aria-label={lang === 'en' ? 'Open menu' : 'Buka menu'} aria-expanded={menu}>{menu ? '×' : '☰'}</button></div></header>
    {route === '/contact' ? <main className="contact-page"><Contact lang={lang} /></main> : route === '/privacy' ? <main><PrivacyPolicy /></main> : route === '/terms' ? <main><TermsOfService /></main> : route === '/cookies' ? <main><CookiePolicy /></main> : serviceSlug ? <ServicePage slug={serviceSlug} lang={lang} /> : <Home lang={lang} />}
    <footer className="enterprise-footer"><div className="footer-main"><div className="footer-intro"><img src="/logo-white.png" alt="PatuhData" /><p>{lang === 'en' ? 'Personal data protection consulting and implementation for organizations in Indonesia.' : 'Konsultasi dan implementasi pelindungan data pribadi untuk organisasi Indonesia.'}</p></div><div><strong>{lang === 'en' ? 'Services' : 'Layanan'}</strong>{activeServices.slice(0, 4).map((service) => <a key={service.slug} href={`/services/${service.slug}`}>{service.title}</a>)}</div><div><strong>{lang === 'en' ? 'Company' : 'Perusahaan'}</strong><a href="/#why-us">{lang === 'en' ? 'Why Us' : 'Mengapa Kami'}</a><a href="/contact">{lang === 'en' ? 'Contact' : 'Kontak'}</a><a href="https://www.linkedin.com/company/patuhdata-id" target="_blank" rel="noreferrer">LinkedIn</a></div><div><strong>{lang === 'en' ? 'Contact Us' : 'Hubungi Kami'}</strong><a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a><a href="https://wa.me/6281903378000">+62 819 0337 8000</a><p>{lang === 'en' ? <>West Jakarta, DKI Jakarta<br />Serving organizations across Indonesia</> : <>Jakarta Barat, DKI Jakarta<br />Melayani organisasi di seluruh Indonesia</>}</p></div></div><div className="footer-bottom"><p>© 2026 PT PatuhData Solusi Nusantara.</p><div><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a><a href="/cookies">Cookie Policy</a><a href="/#top">{lang === 'en' ? 'Back to top' : 'Kembali ke atas'} ↑</a></div></div></footer>
    <WhatsAppButton />
  </div>
}
