import { useEffect, useState } from 'react'
import './index.css'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookiePolicy from './components/CookiePolicy'
import Contact from './components/Contact'
import CookieConsent from './components/CookieConsent'
import WhatsAppButton from './components/WhatsAppButton'

const deliverables = [
  { number: '01', title: 'DPO appointment & governance', items: ['One named external DPO', 'Appointment and reporting framework', 'Defined escalation and communication channels', 'Regular access to management and relevant teams', 'Independence and conflict-of-interest assessment'] },
  { number: '02', title: 'Product privacy oversight', items: ['Personal-data flow review', 'Controller–processor responsibility assessment', 'Processing-activity inventory support', 'DPIA screening for new or changed processing', 'Privacy review of products, vendors and data transfers', 'Prioritised privacy risk and action register'] },
  { number: '03', title: 'Operational support', items: ['Guidance for data-subject requests', 'Initial breach assessment and notification guidance', 'Review of privacy notices and procedures', 'Advisory support for routine privacy questions', 'Liaison support with customers and authorities when required'] },
  { number: '04', title: 'Management reporting', items: ['Monthly governance meeting', 'Monthly DPO activity and risk report', 'Tracking of unresolved privacy actions', 'Quarterly management briefing', 'Immediate escalation of critical privacy risks'] },
]

const stages = [
  ['1', 'Discover', 'Product, processing and stakeholder walkthrough', 'Confirmed service scope'],
  ['2', 'Establish', 'Data mapping, role assessment and baseline review', 'DPO work plan and risk register'],
  ['3', 'Advise', 'Product, vendor, DPIA and operational guidance', 'Written recommendations'],
  ['4', 'Monitor', 'Monthly reviews, action tracking and escalation', 'Monthly DPO report'],
  ['5', 'Report', 'Management briefing and risk communication', 'Governance evidence'],
]

function Arrow() { return <span aria-hidden="true">↗</span> }

function useSeo(path: string) {
  useEffect(() => {
    const service = path.startsWith('/services/')
      ? servicesList.find((item) => item.slug === path.replace('/services/', ''))
      : undefined
    const pages: Record<string, SeoData> = {
      '/': {
        title: 'Managed IT Services, Cloud & Data Protection Indonesia | PatuhData',
        description: 'PatuhData manages servers, AWS cloud, backup, recovery, networks and multi-branch IT infrastructure for Indonesian businesses.',
      },
      '/contact': {
        title: 'Request an IT Services Quotation | PatuhData Jakarta',
        description: 'Discuss managed IT, server colocation, AWS cloud, backup, recovery or multi-branch infrastructure with the PatuhData team in Jakarta.',
      },
      '/insights/managed-it': {
        title: 'Why Growing Businesses Need a Managed Service Provider | PatuhData',
        description: 'Learn when an Indonesian business should use an MSP to manage networks, servers, endpoints, backups and branch infrastructure.',
        type: 'article',
      },
      '/insights/uu-pdp-data-residency': {
        title: 'UU PDP and Data Residency in Indonesia | PatuhData',
        description: 'A practical guide for business leaders evaluating Indonesian data residency, cross-border transfers, local hosting and operational resilience.',
        type: 'article',
      },
      '/privacy': { title: 'Privacy Policy | PatuhData', description: 'How PatuhData collects, uses, protects and manages personal data.' },
      '/terms': { title: 'Terms of Service | PatuhData', description: 'Terms governing the use of the PatuhData website and services.' },
      '/cookies': { title: 'Cookie Policy | PatuhData', description: 'Information about cookies used on the PatuhData website.' },
    }
    const data: SeoData = service
      ? {
          title: `${service.title} Indonesia | PatuhData`,
          description: `${service.intro} Request a tailored quotation from our Jakarta-based managed IT team.`,
        }
      : pages[path] || pages['/']
    const canonical = `${siteUrl}${path === '/' ? '' : path}`
    const image = data.image || `${siteUrl}/patuhdata.png`

    document.documentElement.lang = 'en-ID'
    document.title = data.title
    setMeta('meta[name="description"]', { name: 'description', content: data.description })
    setMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large' })
    setMeta('meta[name="author"]', { name: 'author', content: 'PT PatuhData Solusi Nusantara' })
    setMeta('meta[property="og:title"]', { property: 'og:title', content: data.title })
    setMeta('meta[property="og:description"]', { property: 'og:description', content: data.description })
    setMeta('meta[property="og:type"]', { property: 'og:type', content: data.type || 'website' })
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    setMeta('meta[property="og:image"]', { property: 'og:image', content: image })
    setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'PatuhData managed IT services in Indonesia' })
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_ID' })
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: data.title })
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: data.description })
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonical

    const schemaId = 'patuhdata-schema'
    document.getElementById(schemaId)?.remove()
    const schema = document.createElement('script')
    schema.id = schemaId
    schema.type = 'application/ld+json'
    const pageSchema = data.type === 'article'
      ? {
          '@type': 'Article',
          '@id': `${canonical}#article`,
          headline: data.title,
          description: data.description,
          mainEntityOfPage: canonical,
          image,
          author: { '@id': `${siteUrl}/#organization` },
          publisher: { '@id': `${siteUrl}/#organization` },
          inLanguage: 'en-ID',
        }
      : service
        ? {
            '@type': 'Service',
            '@id': `${canonical}#service`,
            name: service.title,
            description: data.description,
            url: canonical,
            provider: { '@id': `${siteUrl}/#organization` },
            areaServed: { '@type': 'Country', name: 'Indonesia' },
          }
        : {
            '@type': 'WebPage',
            '@id': `${canonical}#webpage`,
            url: canonical,
            name: data.title,
            description: data.description,
            isPartOf: { '@id': `${siteUrl}/#website` },
            inLanguage: 'en-ID',
          }
    schema.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': [pageSchema] })
    document.head.appendChild(schema)
  }, [path, servicesList])
}

const services = [
  { n:'01', slug:'colocation-server', title:'Colocation & Server Deployment', text:'Dari sizing, instalasi rack, konfigurasi jaringan, hingga go-live di data center pilihan Anda.', icon:'⌁', intro:'Kami menangani seluruh siklus deployment server fisik—assessment, rack installation, cabling, hardening, migrasi, dan handover.', bullets:['Capacity dan hardware sizing','Rack, power, network, dan remote hands','OS, virtualization, firewall, dan hardening','Migration planning dengan downtime minimal','Dokumentasi as-built dan operational runbook'] },
  { n:'02', slug:'backup-restore', title:'Backup & Restore', text:'Backup terjadwal, terenkripsi, dan teruji dengan salinan offsite serta laporan keberhasilan yang jelas.', icon:'↻', intro:'Kami membangun perlindungan data yang terukur berdasarkan kebutuhan bisnis dan tingkat kritikal workload.', bullets:['Kebijakan backup berbasis RPO dan retensi','Local, offsite, dan immutable copy','Encryption dan access control','Monitoring keberhasilan setiap job','Restore test dan laporan berkala'] },
  { n:'03', slug:'data-recovery', title:'Data Recovery', text:'Respons cepat untuk insiden data. Kami bantu diagnosis, recovery, dan langkah pencegahan agar tidak terulang.', icon:'✦', intro:'Ketika data hilang, rusak, atau terkena ransomware, tim kami membantu triage dan pemulihan terkontrol.', bullets:['Rapid incident triage','Recovery dari backup, disk, atau snapshot','Validation dan integrity checking','Prioritas berdasarkan dampak bisnis','Post-incident review dan prevention plan'] },
  { n:'04', slug:'managed-infrastructure', title:'Managed Infrastructure', text:'Monitoring, patching, capacity planning, dan dukungan teknis untuk server, cabang, dan workload kritikal.', icon:'◎', intro:'Tim infrastructure on-demand untuk menjaga server, network, endpoint, dan lokasi cabang tanpa membangun seluruh fungsi IT sendiri.', bullets:['24/7 monitoring dan alert response','Patch dan configuration management','Network, router, VPN, dan Wi-Fi management','Capacity, health, dan security reporting','Service desk dan escalation ownership'] },
  { n:'05', slug:'cloud-aws', title:'Cloud Infrastructure & AWS', text:'Assessment, setup, migrasi, dan pengelolaan AWS untuk workload yang aman, resilient, dan terkendali biayanya.', icon:'☁', intro:'Kami membantu bisnis merancang dan mengoperasikan cloud AWS dari landing zone hingga production—dengan arsitektur yang aman, biaya yang terlihat, dan ownership operasional yang jelas.', bullets:['AWS account, organization, dan landing-zone setup','Cloud architecture dan workload sizing','Server, database, storage, network, dan IAM','Migration planning dan production cutover','Backup, monitoring, security, dan cost optimization'] },
  {"n": "06", "slug": "uu-pdp", "title": "UU PDP", "text": "Assessment dan pendampingan implementasi program pelindungan data pribadi untuk organisasi Anda.", "icon": "◇", "intro": "Bangun program pelindungan data pribadi yang dapat dijalankan sehari-hari, dari pemetaan data dan assessment kesiapan hingga kebijakan, proses, dan bukti implementasi.", "bullets": ["Assessment kesiapan dan roadmap prioritas", "Data mapping dan inventaris aktivitas pemrosesan", "Pendampingan DPIA dan review risiko privasi", "Kebijakan, SOP, dan proses permintaan subjek data", "Advisory DPO dan kesiapan respons insiden"]},
  {"n": "07", "slug": "patuhdata-academy", "title": "PatuhData Academy", "text": "Segera hadir — pelatihan praktis untuk membangun kemampuan tim dalam privasi data, keamanan, dan operasional IT.", "icon": "↗", "intro": "PatuhData Academy sedang disiapkan sebagai produk pelatihan untuk tim bisnis dan IT. Jadwal, format, dan biaya akan diumumkan saat program tersedia.", "bullets": ["Rencana topik: awareness pelindungan data pribadi", "Rencana topik: praktik keamanan informasi", "Rencana topik: backup dan kesiapan recovery", "Rencana format: workshop berbasis skenario", "Kurikulum dan jadwal akan diumumkan"]},
]
const plans = [
  { name:'Starter', note:'Dukungan dasar untuk kantor atau bisnis kecil', features:['Remote technical support','Web & email ticketing','8×5 pada hari kerja','Respons awal Next Business Day','Pencatatan incident & request'], cta:'Mulai dari Starter' },
  { name:'Bronze', note:'Support rutin dengan maintenance dasar', features:['Semua fitur Starter','Basic infrastructure inventory','Remote preventive maintenance','Dokumentasi & configuration record','Quarterly infrastructure health check'], cta:'Pilih Bronze' },
  { name:'Gold', note:'Perlindungan lebih untuk sistem penting', featured:true, features:['Semua fitur Bronze','Priority ticket handling','Backup job monitoring','Quarterly restore test','Scheduled onsite support','Monthly service summary'], cta:'Pilih Gold' },
  { name:'Enterprise', note:'Dukungan khusus dari tim kami setelah assessment', features:['Semua fitur Gold','Custom server, user & location scope','Custom backup, RPO & RTO plan','Vendor & incident coordination','Onsite Next Business Day option','Custom SLA sesuai kebutuhan & kapasitas tim'], cta:'Diskusikan Enterprise' },
]
const servicesEn = services.map((s, i) => ({...s, ...[
  {text:'Sizing, rack installation, network configuration, and go-live at your preferred data center.',intro:'We manage the complete server deployment lifecycle—from assessment and rack installation to hardening, migration, and handover.',bullets:['Capacity and hardware sizing','Rack, power, network, and remote hands','OS, virtualization, firewall, and hardening','Low-downtime migration planning','As-built documentation and operations runbook']},
  {text:'Scheduled, encrypted, and tested backups with offsite copies and clear reporting.',intro:'We design measurable data protection based on business needs and workload criticality.',bullets:['RPO-based backup and retention policy','Local, offsite, and immutable copies','Encryption and access control','Backup job monitoring','Scheduled restore tests and reporting']},
  {text:'Rapid response for data incidents, controlled recovery, and prevention planning.',intro:'When data is lost, corrupted, or affected by ransomware, our team supports controlled triage and recovery.',bullets:['Rapid incident triage','Recovery from backup, disk, or snapshot','Validation and integrity checks','Business-impact prioritization','Post-incident review and prevention plan']},
  {text:'Monitoring, patching, capacity planning, and support for critical infrastructure.',intro:'An on-demand infrastructure team for servers, networks, endpoints, and branch locations.',bullets:['Monitoring and alert response','Patch and configuration management','Router, VPN, Wi-Fi, and network management','Capacity, health, and security reporting','Service desk and escalation ownership']},
  {text:'AWS assessment, setup, migration, and management for secure and cost-controlled workloads.',intro:'We design and operate AWS environments from landing zone to production with clear ownership.',bullets:['AWS account, organization, and landing zone','Cloud architecture and workload sizing','Compute, database, storage, network, and IAM','Migration planning and production cutover','Backup, monitoring, security, and cost optimization']},
  {"text": "Assessment and implementation support for your personal data protection program.", "intro": "Build a practical personal data protection program, from data mapping and readiness assessment to policies, processes, and implementation evidence.", "bullets": ["Readiness assessment and prioritized roadmap", "Data mapping and processing inventory", "DPIA support and privacy risk reviews", "Policies, procedures, and data subject request processes", "DPO advisory and incident response readiness"]},
  {"text": "Coming soon — practical training in data privacy, security, and IT operations for your team.", "intro": "PatuhData Academy is being developed as a training product for business and IT teams. Schedules, formats, and pricing will be announced when programs become available.", "bullets": ["Planned topic: personal data protection awareness", "Planned topic: information security practices", "Planned topic: backup and recovery readiness", "Planned format: scenario-based workshops", "Curriculum and schedules to be announced"]}
][i]}))
const plansEn = [
  { name:'Starter', note:'Essential support for a small business or office', features:['Remote technical support','Web and email ticketing','8×5 on business days','Next Business Day initial response','Incident and request tracking'], cta:'Request a Quotation' },
  { name:'Managed Support', note:'Routine support with preventive maintenance', features:['Everything in Starter','Basic infrastructure inventory','Remote preventive maintenance','Documentation and configuration records','Quarterly infrastructure health check'], cta:'Request a Quotation' },
  { name:'Business Critical', note:'Stronger protection for revenue-impacting systems', featured:true, features:['Everything in Managed Support','Priority ticket handling','Backup job monitoring','Quarterly restore test','Scheduled onsite support','Monthly service summary'], cta:'Request a Quotation' },
  { name:'Enterprise', note:'Custom support following an assessment', features:['Everything in Business Critical','Custom server, user, and location scope','Custom backup, RPO, and RTO plan','Vendor and incident coordination','Next Business Day onsite option','SLA aligned with requirements and capacity'], cta:'Request a Quotation' },
]
function Arrow(){ return <span aria-hidden="true">↗</span> }

function ServicePage({slug, lang}:{slug:string,lang:'id'|'en'}) {
  const source = lang === 'en' ? servicesEn : services
  const service = source.find(s=>s.slug===slug) || source[0]
  if (slug === 'uu-pdp' || slug === 'patuhdata-academy') return <ProductPage service={service} lang={lang} />
  return <main className="detail-page"><section className="detail-hero"><div><span className="kicker">MANAGED IT SERVICE · {service.n}</span><h1>{service.title}</h1><p>{service.intro}</p><a className="button primary" href="#contact">Discuss Your Requirements <Arrow/></a></div><div className="detail-number">{service.n}</div></section><section className="detail-body"><div><span className="kicker">SERVICE COVERAGE</span><h2>What we manage</h2></div><ul>{service.bullets.map(x=><li key={x}><span>✓</span>{x}</li>)}</ul></section><section className="detail-flow"><span className="kicker">DELIVERY MODEL</span><div>{[['01','Assess','We inventory systems, dependencies, risks, and service objectives.'],['02','Implement','Planned deployment with testing and a documented rollback path.'],['03','Operate','Monitoring, support, documentation, and continuous improvement.']].map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section><section className="cta-section"><div><span className="kicker mint">TALK TO AN ENGINEER</span><h2>Build more reliable IT operations.</h2></div><div><p>Start with a focused assessment by our team.</p><a className="button mint-btn" href="#contact">Contact PatuhData <Arrow/></a></div></section></main>
}


function ProductPage({service, lang}: {service: typeof services[number]; lang: 'id' | 'en'}) {
  const english = lang === 'en'
  const academy = service.slug === 'patuhdata-academy'
  const cta = academy ? (english ? 'Discuss training needs' : 'Diskusikan kebutuhan pelatihan') : (english ? 'Discuss your PDP program' : 'Diskusikan program PDP Anda')
  return <main className="detail-page">
    <section className="detail-hero"><div>
      <span className="kicker">{academy ? (english ? 'TRAINING · COMING SOON' : 'PELATIHAN · SEGERA HADIR') : (english ? 'PERSONAL DATA PROTECTION' : 'PELINDUNGAN DATA PRIBADI')}</span>
      <h1>{service.title}</h1><p>{service.intro}</p>
      <a className="button primary" href="/contact">{cta} <Arrow/></a>
    </div><div className="detail-number">{service.n}</div></section>
    <section className="detail-body"><div><span className="kicker">{academy ? (english ? 'PLANNED PROGRAM' : 'RENCANA PROGRAM') : (english ? 'PROGRAM COVERAGE' : 'CAKUPAN PROGRAM')}</span><h2>{academy ? (english ? 'What to expect' : 'Yang sedang disiapkan') : (english ? 'From assessment to implementation' : 'Dari assessment hingga implementasi')}</h2></div>
      <ul>{service.bullets.map(item=><li key={item}><span aria-hidden="true">{academy ? '○' : '✓'}</span>{item}</li>)}</ul>
    </section>
    <section className="cta-section"><div><span className="kicker mint">{academy ? 'PATUHDATA ACADEMY' : 'UU PDP'}</span><h2>{academy ? (english ? 'Prepare your team for what comes next.' : 'Siapkan tim Anda untuk langkah berikutnya.') : (english ? 'Build your privacy program.' : 'Bangun program privasi Anda.')}</h2></div><div><p>{academy ? (english ? 'Training is not open for enrollment yet. Tell us which topics your team needs.' : 'Pendaftaran pelatihan belum dibuka. Ceritakan topik yang dibutuhkan tim Anda.') : (english ? 'Discuss your current processes and priorities with our team.' : 'Diskusikan proses dan prioritas organisasi Anda bersama tim kami.')}</p><a className="button mint-btn" href="/contact">{cta} <Arrow/></a></div></section>
  </main>
}

function MSPArticle() {
  return <main className="article-page"><section className="article-hero"><span className="kicker">MANAGED IT · 8 MIN READ</span><h1>Why growing businesses need a Managed Service Provider</h1><p>Routers, servers, backups, endpoints, and branches should not be managed only when something breaks.</p></section><figure className="article-photo"><img src="https://images.unsplash.com/photo-1691435828932-911a7801adfb?auto=format&fit=crop&w=1800&q=85" alt="Ethernet cables connected to a network switch"/><figcaption>Photo by Albert Stoynov on <a href="https://unsplash.com/photos/dyUp7WPu5q4" target="_blank" rel="noreferrer">Unsplash</a></figcaption></figure><article className="article-content"><p className="lead">As a business adopts more systems, its operational surface grows. A misconfigured router or an untested backup can interrupt an entire branch operation.</p><h2>Managed IT is more than a help desk</h2><p>A capable MSP takes ownership of system health. The team monitors equipment, responds to alerts, manages patches, maintains documentation, and plans capacity before issues affect users.</p><h2>What you should expect</h2><ul><li>A clear equipment inventory and ownership model</li><li>Active monitoring and escalation paths</li><li>Backups with scheduled restore testing</li><li>Management of routers, VPNs, Wi-Fi, servers, and endpoints</li><li>Operational reporting and improvement recommendations</li></ul><h2>When does a business need an MSP?</h2><p>When locations multiply, downtime begins affecting revenue, or internal teams spend too much time reacting to recurring issues. An MSP provides broader infrastructure capability without hiring every specialist separately.</p><aside>PatuhData helps Indonesian businesses operate infrastructure from one office to complex multi-branch environments.</aside><a className="button primary" href="#contact">Discuss Your Managed IT Needs <Arrow/></a></article></main>
}

    <section className="product-example" id="example"><div><span className="dpo-kicker light-kicker">PRODUCT-LEVEL OVERSIGHT</span><h2>Example: privacy oversight for a collection platform</h2><p>For a collection-management product such as YuCOS, our DPO can review the complete processing environment—not only the privacy notice.</p></div><div className="example-list">{['Borrower and loan data processed by the platform', 'Collection notes, call recordings and communication history', 'User roles, access permissions and bulk-data exports', 'Automated case prioritisation or profiling', 'Retention and deletion of closed collection cases', 'Collection agencies, cloud providers and other subprocessors', 'Overseas access to Indonesian personal data', 'Borrower requests and personal-data incident procedures'].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></div>)}</div><div className="example-output"><strong>Documented output</strong><p>Processing record · DPIA screening · Privacy-risk register · Prioritised recommendations</p><small>The client’s product, legal, security and operational teams remain responsible for implementation.</small></div></section>

    <section className="dpo-section dpo-process" id="process"><div className="dpo-section-head"><div><span className="dpo-kicker">HOW THE SERVICE WORKS</span><h2>From discovery to governance evidence.</h2></div><p>Every stage produces a concrete output, so privacy oversight remains visible and actionable.</p></div><div className="stage-table"><div className="stage-row stage-header"><span>Stage</span><span>Activity</span><span>Output</span></div>{stages.map(s=><div className="stage-row" key={s[0]}><span><b>{s[0]}</b> {s[1]}</span><span>{s[2]}</span><span>{s[3]}</span></div>)}</div></section>

    <section className="responsibility" id="responsibility"><div><span className="dpo-kicker light-kicker">RESPONSIBILITY STATEMENT</span><h2>Independent oversight does not transfer legal accountability.</h2></div><p>Our DPO provides independent advice, monitoring, review and escalation. <strong>Management remains responsible</strong> for decisions, lawful processing, risk acceptance and implementation of the recommended controls.</p></section>

    <section className="dpo-section faq" id="faq"><div className="dpo-section-head"><div><span className="dpo-kicker">IMPORTANT LIMITATIONS</span><h2>Clear boundaries from day one.</h2></div></div><details open><summary>What is not included in DPO as a Service?</summary><p>DPO as a Service is an advisory and monitoring service. It is not ISO certification, a legal opinion, cybersecurity operations, forensic investigation, software implementation or a guarantee of regulatory compliance. Additional remediation, full DPIAs, extensive documentation and technical implementation may be separately scoped.</p></details></section>

    <section className="dpo-cta"><div><span className="dpo-kicker light-kicker">START WITH DISCOVERY</span><h2>Give privacy risk a clear owner and reporting line.</h2></div><div><p>Discuss your processing activities, current governance and priorities with our team.</p><div className="dpo-actions"><a className="dpo-button dpo-primary" href="/contact?request=discovery">Schedule a Privacy Discovery Call <Arrow /></a><a className="profile-link" href="mailto:hello@patuhdata.id?subject=Request%20a%20DPO%20Profile">Request a DPO Profile →</a></div></div></section>
  </main>
}

export default function App() {
  const [route, setRoute] = useState(window.location.pathname)
  useEffect(() => {
    const legacyRoute = window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : ''
    if (legacyRoute) window.location.replace(legacyRoute)
    const onRoute = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', onRoute)
    return () => window.removeEventListener('popstate', onRoute)
  }, [])
  useEffect(() => {
    if (route !== '/') {
      window.scrollTo({ top: 0, behavior: 'instant' })
      requestAnimationFrame(() => {
        document.querySelectorAll<HTMLAnchorElement>('a[href="#contact"]').forEach((link) => {
          link.href = '/contact'
        })
      })
      return
    }
    const id = window.location.hash.replace('#', '')
    requestAnimationFrame(() => {
      if (!id) window.scrollTo({ top: 0, behavior: 'auto' })
      else document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' })
    })
  }, [route])
  const serviceSlug = route.startsWith('/services/') ? route.replace('/services/', '') : ''
  const activeServices = lang === 'en' ? servicesEn : services
  const activePlans = lang === 'en' ? plansEn : plans
  useSeo(route, servicesEn)
  return <div className="site-shell">
    <header className="nav-wrap">
      <a className="brand real-brand" href="/"><img src="/logo.png" alt="PatuhData"/></a>
      <nav className={menu ? 'nav-links open' : 'nav-links'}><div className="nav-dropdown"><button>{lang==='en'?'Products & Services':'Produk & Layanan'} <span>⌄</span></button><div className="dropdown-menu">{activeServices.map(s=><a key={s.slug} href={'/services/'+s.slug} onClick={()=>setMenu(false)}><small>{s.n}</small><span>{s.title}{s.slug === 'patuhdata-academy' && <small className="coming-soon">{lang === 'en' ? 'Coming soon' : 'Segera hadir'}</small>}</span></a>)}</div></div><a href="/#about" onClick={()=>setMenu(false)}>{lang==='en'?'Why Us':'Mengapa Kami'}</a><a href="/#plans" onClick={()=>setMenu(false)}>{lang==='en'?'Service Levels':'Paket Layanan'}</a><a href="/insights/managed-it" onClick={()=>setMenu(false)}>Insight</a></nav>
      <div className="nav-actions"><a className="nav-cta" href="/contact">Request a Quotation <Arrow/></a><button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Open menu">{menu?'×':'☰'}</button></div>
    </header>
    {route === '/contact' ? <main className="contact-page"><Contact/></main> : route === '/privacy' ? <main><PrivacyPolicy/></main> : route === '/terms' ? <main><TermsOfService/></main> : route === '/cookies' ? <main><CookiePolicy/></main> : route === '/insights/managed-it' ? <MSPArticle/> : route === '/insights/uu-pdp-data-residency' ? <UUPDPArticle/> : serviceSlug ? <ServicePage slug={serviceSlug} lang={lang}/> : <main id="top">
      <section className="hero"><div className="hero-grid"/><div className="hero-copy"><div className="solution-signal"><i/><i/><i/><span>END-TO-END TECHNOLOGY PARTNER</span></div><h1>Your IT partner for<br/><em className="type-line">complete solutions.</em></h1><p>PatuhData brings infrastructure, cloud, data protection, recovery, and managed support together through one accountable technology partner—so your leadership team can focus on the business.</p><div className="hero-actions"><a className="button primary" href="#contact">Request a Quotation <Arrow/></a><a className="text-link" href="#solutions">Explore solutions <span>↓</span></a></div><div className="hero-trust"><span><b>Business continuity</b> Minimize disruption</span><span><b>One accountable team</b> Clear ownership</span><span><b>End-to-end solutions</b> Built for growth</span></div></div>
        <div className="hero-visual"><img src="https://blog.equinix.com/wp-content/uploads/2025/05/Data-center-racks.jpg" alt="Server racks inside the Equinix JK1 data center in Jakarta, Indonesia"/><div className="visual-shade"/><div className="status-card"><span className="pulse"/><div><small>MANAGED BY PATUHDATA</small><strong>Operational ownership, end to end</strong></div></div><a className="photo-credit" href="https://blog.equinix.com/blog/2025/06/11/jakartas-digital-transformation-begins-here-12-photos-from-equinix-jk1-data-center/" target="_blank" rel="noreferrer">Equinix JK1 · Jakarta, Indonesia</a></div>
      </section>
      <section className="partner-bar"><p>TECHNOLOGY ECOSYSTEM</p><div>{[
        ['/Veeam_logo.png','Veeam'],['/VMware-Logo.png','VMware'],['/Sophos_logo.png','Sophos'],['/MikroTik_Logo_(2022).svg','MikroTik'],['/Synology--Streamline-Simple-Icons.svg','Synology'],['/Amazon_Web_Services_Logo.svg','AWS'],['/Google-Cloud-Logo.png','Google Cloud']
      ].map(([src,alt])=><img key={alt} src={src} alt={alt}/>)}</div></section>
      <section className="section services" id="solutions"><div className="section-head"><div><span className="kicker">PRODUCTS & SERVICES</span><h2>{lang==='en'?<>One partner for<br/><em>always-ready infrastructure.</em></>:<>Satu partner untuk<br/>infrastruktur yang <em>selalu siap.</em></>}</h2></div><p>{lang==='en'?'We do not install and disappear. Every service is designed around availability, recoverability, and sustainable growth.':'Kami tidak hanya menginstal lalu pergi. Setiap layanan dirancang untuk menjaga availability, recoverability, dan pertumbuhan sistem Anda.'}</p></div><div className="service-grid">{activeServices.map(s=><article className="service-card" key={s.n}><div className="service-top"><span>{s.n}</span><b>{s.icon}</b></div><h3>{s.title}</h3><p>{s.text}</p><a href={'/services/'+s.slug}>{lang==='en'?'Learn more':'Pelajari lebih lanjut'} <Arrow/></a></article>)}</div></section>
      <section className="dark-section" id="about"><div className="dark-copy"><span className="kicker mint">WHY PATUHDATA</span><h2>{lang==='en'?'Infrastructure is not just equipment. It is your business foundation.':'Infrastruktur bukan sekadar perangkat. Ini fondasi bisnis Anda.'}</h2><p>{lang==='en'?'From fintech transactions and factory production to hundreds of retail outlets—downtime has a real cost. We bring people, process, and technology together to keep operations moving.':'Dari transaksi fintech dan produksi pabrik hingga POS ratusan outlet—downtime punya biaya nyata. Kami menyatukan people, process, dan technology untuk menjaga semuanya tetap berjalan.'}</p><a className="button light" href="#contact">{lang==='en'?'Assess Your Infrastructure':'Audit Infrastruktur Anda'} <Arrow/></a></div><div className="outcomes"><div><strong>01</strong><h3>Design for failure</h3><p>{lang==='en'?'Redundancy and recovery are planned from day one.':'Redundansi dan recovery direncanakan sejak awal.'}</p></div><div><strong>02</strong><h3>Visible operations</h3><p>{lang==='en'?'Understand system health, capacity, and risk.':'Status, kapasitas, dan risiko dapat dipantau.'}</p></div><div><strong>03</strong><h3>Local, accountable team</h3><p>{lang==='en'?'One team that understands your systems and business.':'Satu tim yang mengenal sistem dan bisnis Anda.'}</p></div></div></section>
      <section className="section plans" id="plans"><div className="section-head plan-head"><div><span className="kicker">SERVICE LEVEL OPTIONS</span><h2>{lang==='en'?<>Start simple.<br/><em>Add services as you grow.</em></>:<>Mulai sederhana.<br/><em>Tambah layanan saat dibutuhkan.</em></>}</h2></div><p>{lang==='en'?'Every plan includes ticketing so requests are recorded, owned, and followed through by our team.':'Semua paket menggunakan ticketing agar setiap permintaan tercatat, memiliki ownership, dan dapat ditindaklanjuti oleh tim kami.'}</p></div><div className="plan-grid">{activePlans.map(p=><article className={p.featured?'plan featured':'plan'} key={p.name}>{p.featured&&<span className="popular">RECOMMENDED</span>}<h3>{p.name}</h3><p>{p.note}</p><hr/><ul>{p.features.map(f=><li key={f}><span>✓</span>{f}</li>)}</ul><a href="#contact">{p.cta} <Arrow/></a></article>)}</div><p className="sla-note">{lang==='en'?'Support is provided during agreed business hours. Response time means acknowledgement and work commencing, not guaranteed resolution. Onsite, after-hours support, and replacement equipment follow the agreed scope.':'Support diberikan pada hari dan jam kerja kecuali disepakati lain. Waktu respons adalah waktu konfirmasi dan dimulainya penanganan, bukan jaminan penyelesaian. Onsite, after-hours support, dan perangkat pengganti mengikuti scope dan kesepakatan layanan.'}</p></section>
      <section className="process section"><span className="kicker">HOW WE WORK</span><div className="process-grid"><h2>{lang==='en'?<>From assessment<br/>to <em>always-on.</em></>:<>Dari assessment<br/>hingga <em>always-on.</em></>}</h2><ol><li><b>01</b><div><strong>Discovery & Assessment</strong><p>{lang==='en'?'We map workloads, risks, capacity requirements, RPO, and RTO.':'Kami petakan workload, risiko, kebutuhan kapasitas, RPO, dan RTO.'}</p></div></li><li><b>02</b><div><strong>Architecture & Deployment</strong><p>{lang==='en'?'Implementation, installation, migration, and testing with minimal downtime.':'Rencana implementasi, instalasi, migrasi, dan testing dengan downtime minimal.'}</p></div></li><li><b>03</b><div><strong>Operate & Improve</strong><p>{lang==='en'?'Monitoring, support, reporting, and continuous improvement.':'Monitoring, support, pelaporan, serta improvement berkelanjutan.'}</p></div></li></ol></div></section>
      <section className="section insights"><div className="section-head"><div><span className="kicker">LEADERSHIP INSIGHTS</span><h2>Infrastructure decisions,<br/><em>explained clearly.</em></h2></div><p>Practical guidance for leaders responsible for operational resilience, data governance, and technology risk.</p></div><div className="insights-list"><a className="featured-article" href="/insights/managed-it"><img src="https://images.unsplash.com/photo-1691435828932-911a7801adfb?auto=format&fit=crop&w=1400&q=85" alt="Ethernet cables connected to a network switch"/><div><span className="kicker">MANAGED IT · 8 MIN READ</span><h3>Why growing businesses need a Managed Service Provider</h3><p>Routers, servers, backups, endpoints, and branches should not be managed only when something breaks.</p><b>Read the insight <Arrow/></b></div></a><a className="featured-article reverse" href="/insights/uu-pdp-data-residency"><img src="https://blog.equinix.com/wp-content/uploads/2025/05/Data-center-racks.jpg" alt="Server racks inside Equinix JK1 in Jakarta"/><div><span className="kicker">DATA GOVERNANCE · 9 MIN READ</span><h3>UU PDP and Data Residency: Should Your Company Keep Data in Indonesia?</h3><p>What the law actually says—and why local or hybrid infrastructure may still be the safer business decision.</p><b>Read the insight <Arrow/></b></div></a></div></section>
      <section className="cta-section" id="contact"><div><span className="kicker mint">LET'S BUILD RELIABILITY</span><h2>Is your infrastructure ready<br/>for your busiest day?</h2></div><div><p>Tell us where things stand. Our team will help map the risks and identify practical next steps—without the hard sell.</p><a className="button mint-btn" href="/contact">Request a Quotation <Arrow/></a></div></section>
    </main>}
    <footer className="enterprise-footer"><div className="footer-main"><div className="footer-intro"><img src="/logo-white.png" alt="PatuhData"/><p>Reliable IT infrastructure for Indonesian businesses—from server colocation and AWS cloud to backup, recovery, and day-to-day operations.</p></div><div><strong>Products & Services</strong><a href="/services/colocation-server">Server & Colocation</a><a href="/services/cloud-aws">Cloud Infrastructure & AWS</a><a href="/services/backup-restore">Backup & Restore</a><a href="/services/data-recovery">Data Recovery</a><a href="/services/managed-infrastructure">Managed Infrastructure</a><a href="/services/uu-pdp">UU PDP</a><a href="/services/patuhdata-academy">PatuhData Academy · Coming soon</a></div><div><strong>Company</strong><a href="/#about">About Us</a><a href="/insights/managed-it">Insight</a><a href="/contact">Contact</a><a href="https://www.linkedin.com/company/patuhdata-id" target="_blank" rel="noreferrer">LinkedIn</a></div><div><strong>Contact Us</strong><a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a><a href="https://wa.me/6281903378000">+62 819 0337 8000</a><a className="footer-address" href="https://maps.google.com/?q=INFINITI+OFFICE+Jl.+Permata+Regency+Jl.+H.+Kelik+Srengseng+Jakarta+Barat+11630" target="_blank" rel="noreferrer">INFINITI OFFICE<br/>Jl. Permata Regency, Jl. H. Kelik<br/>RT.1/RW.6, Srengseng, Kembangan<br/>West Jakarta, DKI Jakarta 11630</a></div></div><div className="footer-bottom"><p>© 2026 PT PatuhData Solusi Nusantara. All rights reserved.</p><div><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a><a href="/cookies">Cookie Policy</a><a href="/#top">Back to top ↑</a></div></div></footer>
    <CookieConsent lang={lang} />
    <WhatsAppButton />
  </div>
}
