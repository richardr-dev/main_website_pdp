import { useEffect, useState } from 'react'
import './index.css'
import './resilience.css'
import ResilienceHome from './components/ResilienceHome'
import ResilienceNav from './components/ResilienceNav'
import { resilienceServices } from './data/resilienceServices'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookiePolicy from './components/CookiePolicy'
import Contact from './components/Contact'
import CookieConsent from './components/CookieConsent'
import WhatsAppButton from './components/WhatsAppButton'
import { InsightArticle, InsightsIndex } from './components/Insights'
import { getBlogPost } from './data/blogContent'

const siteUrl = 'https://patuhdata.id'

type SeoData = { title: string; description: string; image?: string; type?: 'website' | 'article' }

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value))
}

function useSeo(path: string, servicesList: typeof servicesEn) {
  useEffect(() => {
    const service = path.startsWith('/services/')
      ? servicesList.find((item) => item.slug === path.replace('/services/', ''))
      : undefined
    const pages: Record<string, SeoData> = {
      '/': {
        title: 'UU PDP Readiness, Implementation & Remediation | PatuhData',
        description: 'Assess UU PDP readiness, establish RoPA and DPIA workflows, maintain compliance evidence, and remediate privacy technology gaps with PatuhData.',
      },
      '/contact': {
        title: 'Discuss Your UU PDP Program | PatuhData',
        description: 'Discuss UU PDP readiness, RoPA, DPIA, operational privacy, and technology remediation with the PatuhData team in Jakarta.',
      },
      '/insights': {
        title: 'Insights on Cyber Resilience & Data Governance | PatuhData',
        description: 'Practical perspectives from PatuhData on infrastructure, recovery, security, and Indonesian data governance.',
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
    const blogPost = path.startsWith('/insights/') ? getBlogPost(path.replace('/insights/', '')) : undefined
    const data: SeoData = blogPost
      ? { title: `${blogPost.title} | PatuhData`, description: blogPost.excerpt, image: blogPost.image, type: 'article' }
      : service ? {
          title: `${service.title} Indonesia | PatuhData`,
          description: `${service.intro} Consult an expert about your requirements.`,
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
    setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'PatuhData UU PDP operational privacy services in Indonesia' })
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
const servicesEn = services.map((s, i) => ({...s, ...[
  {text:'Sizing, rack installation, network configuration, and go-live at your preferred data center.',intro:'We manage the complete server deployment lifecycle—from assessment and rack installation to hardening, migration, and handover.',bullets:['Capacity and hardware sizing','Rack, power, network, and remote hands','OS, virtualization, firewall, and hardening','Low-downtime migration planning','As-built documentation and operations runbook']},
  {text:'Scheduled, encrypted, and tested backups with offsite copies and clear reporting.',intro:'We design measurable data protection based on business needs and workload criticality.',bullets:['RPO-based backup and retention policy','Local, offsite, and immutable copies','Encryption and access control','Backup job monitoring','Scheduled restore tests and reporting']},
  {text:'Rapid response for data incidents, controlled recovery, and prevention planning.',intro:'When data is lost, corrupted, or affected by ransomware, our team supports controlled triage and recovery.',bullets:['Rapid incident triage','Recovery from backup, disk, or snapshot','Validation and integrity checks','Business-impact prioritization','Post-incident review and prevention plan']},
  {text:'Monitoring, patching, capacity planning, and support for critical infrastructure.',intro:'An on-demand infrastructure team for servers, networks, endpoints, and branch locations.',bullets:['Monitoring and alert response','Patch and configuration management','Router, VPN, Wi-Fi, and network management','Capacity, health, and security reporting','Service desk and escalation ownership']},
  {text:'AWS assessment, setup, migration, and management for secure and cost-controlled workloads.',intro:'We design and operate AWS environments from landing zone to production with clear ownership.',bullets:['AWS account, organization, and landing zone','Cloud architecture and workload sizing','Compute, database, storage, network, and IAM','Migration planning and production cutover','Backup, monitoring, security, and cost optimization']},
  {"text": "Assessment and implementation support for your personal data protection program.", "intro": "Build a practical personal data protection program, from data mapping and readiness assessment to policies, processes, and implementation evidence.", "bullets": ["Readiness assessment and prioritized roadmap", "Data mapping and processing inventory", "DPIA support and privacy risk reviews", "Policies, procedures, and data subject request processes", "DPO advisory and incident response readiness"]},
  {"text": "Coming soon — practical training in data privacy, security, and IT operations for your team.", "intro": "PatuhData Academy is being developed as a training product for business and IT teams. Schedules, formats, and pricing will be announced when programs become available.", "bullets": ["Planned topic: personal data protection awareness", "Planned topic: information security practices", "Planned topic: backup and recovery readiness", "Planned format: scenario-based workshops", "Curriculum and schedules to be announced"]}
][i]})).filter(s => s.slug !== 'backup-restore').concat(resilienceServices)
function Arrow(){ return <span aria-hidden="true">↗</span> }

function ServicePage({slug, lang}:{slug:string,lang:'id'|'en'}) {
  const source = lang === 'en' ? servicesEn : services
  const service = source.find(s=>s.slug===slug) || source[0]
  if (slug === 'uu-pdp' || slug === 'uu-pdp-compliance' || slug === 'patuhdata-academy') return <ProductPage service={service} lang={lang} />
  return <main id="main-content" className="detail-page"><section className="detail-hero"><div><span className="kicker">UU PDP · OPERATIONAL PRIVACY · {service.n}</span><h1>{service.title}</h1><p>{service.intro}</p><a className="button primary" href={`/contact?service=${service.slug}`}>Discuss This Engagement <Arrow/></a></div><div className="detail-number">{service.n}</div></section><section className="detail-body"><div><span className="kicker">DEFINED SCOPE</span><h2>What the engagement can include</h2></div><ul>{service.bullets.map(x=><li key={x}><span>✓</span>{x}</li>)}</ul></section><section className="detail-flow"><span className="kicker">DELIVERY MODEL</span><div>{[['01','Discover','Review the relevant processes, systems, stakeholders, records, and existing evidence.'],['02','Prioritize','Confirm the agreed scope, key risks, required inputs, owners, and intended outputs.'],['03','Implement & hand over','Complete the scoped work, record decisions and limitations, and agree the next actions.']].map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section><section className="cta-section"><div><span className="kicker mint">A PRACTICAL NEXT STEP</span><h2>Make privacy operational.</h2></div><div><p>We confirm deliverables, responsibilities, assumptions, and exclusions before work begins.</p><a className="button mint-btn" href={`/contact?service=${service.slug}`}>Discuss This Engagement <Arrow/></a></div></section></main>
}


function ProductPage({service, lang}: {service: typeof services[number]; lang: 'id' | 'en'}) {
  const english = lang === 'en'
  const academy = service.slug === 'patuhdata-academy'
  const cta = academy ? (english ? 'Discuss training needs' : 'Diskusikan kebutuhan pelatihan') : (english ? 'Discuss your PDP program' : 'Diskusikan program PDP Anda')
  return <main id="main-content" className="detail-page">
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
  return <main id="main-content" className="article-page"><section className="article-hero"><span className="kicker">MANAGED IT · 8 MIN READ</span><h1>Why growing businesses need a Managed Service Provider</h1><p>Routers, servers, backups, endpoints, and branches should not be managed only when something breaks.</p></section><figure className="article-photo"><img src="https://images.unsplash.com/photo-1691435828932-911a7801adfb?auto=format&fit=crop&w=1800&q=85" alt="Ethernet cables connected to a network switch"/><figcaption>Photo by Albert Stoynov on <a href="https://unsplash.com/photos/dyUp7WPu5q4" target="_blank" rel="noreferrer">Unsplash</a></figcaption></figure><article className="article-content"><p className="lead">As a business adopts more systems, its operational surface grows. A misconfigured router or an untested backup can interrupt an entire branch operation.</p><h2>Managed IT is more than a help desk</h2><p>A capable MSP takes ownership of system health. The team monitors equipment, responds to alerts, manages patches, maintains documentation, and plans capacity before issues affect users.</p><h2>What you should expect</h2><ul><li>A clear equipment inventory and ownership model</li><li>Active monitoring and escalation paths</li><li>Backups with scheduled restore testing</li><li>Management of routers, VPNs, Wi-Fi, servers, and endpoints</li><li>Operational reporting and improvement recommendations</li></ul><h2>When does a business need an MSP?</h2><p>When locations multiply, downtime begins affecting revenue, or internal teams spend too much time reacting to recurring issues. An MSP provides broader infrastructure capability without hiring every specialist separately.</p><aside>PatuhData helps Indonesian businesses operate infrastructure from one office to complex multi-branch environments.</aside><a className="button primary" href="#contact">Discuss Your Managed IT Needs <Arrow/></a></article></main>
}

function UUPDPArticle() {
  return <main id="main-content" className="article-page"><section className="article-hero"><span className="kicker">DATA GOVERNANCE · 9 MIN READ</span><h1>UU PDP and Data Residency: Should Your Company Keep Data in Indonesia?</h1><p>A practical guide to cross-border transfers, local hosting, regulatory risk, and operational resilience.</p></section><figure className="article-photo"><img src="https://blog.equinix.com/wp-content/uploads/2025/05/Data-center-racks.jpg" alt="Server racks inside the Equinix JK1 data center in Jakarta"/><figcaption>Equinix JK1 data center, Jakarta · <a href="https://blog.equinix.com/blog/2025/06/11/jakartas-digital-transformation-begins-here-12-photos-from-equinix-jk1-data-center/" target="_blank" rel="noreferrer">Official facility gallery</a></figcaption></figure><article className="article-content"><p className="lead">Indonesia's Personal Data Protection Law does not create a blanket rule that every company must store all data inside Indonesia. It does, however, make organizations accountable for how personal data is protected—including when it crosses national borders.</p><h2>What UU PDP actually requires</h2><p>Article 56 of Law No. 27 of 2022 permits a controller to transfer personal data outside Indonesia. The controller must first ensure the destination provides an equal or higher level of protection. If that condition is not met, the controller must establish adequate and binding safeguards. If neither condition can be satisfied, consent from the data subject is required.</p><p>This means “we use an overseas cloud provider” is not automatically non-compliant. The important questions are where the data goes, which entities can access it, what contractual safeguards apply, how incidents are handled, and whether the organization can demonstrate accountability.</p><h2>Why local data infrastructure can still be the better decision</h2><ul><li><strong>Simpler transfer governance:</strong> fewer international data flows to map, assess, and document.</li><li><strong>Lower latency:</strong> applications serving Indonesian users can respond faster when workloads are closer.</li><li><strong>Operational resilience:</strong> local backup or disaster-recovery capability reduces dependency on one region.</li><li><strong>Audit readiness:</strong> data location, access, retention, and recovery evidence can be easier to explain.</li><li><strong>Sector alignment:</strong> financial services and other regulated industries may face additional OJK or sector-specific requirements.</li></ul><h2>Public and private electronic systems are treated differently</h2><p>Government Regulation No. 71 of 2019 distinguishes public-sector and private-sector electronic system operators. Companies should not rely on a generic “localization” statement; they need to identify their operator classification and then check any rules issued by their own regulator.</p><h2>Local hosting is not the same as compliance</h2><p>A Jakarta server does not automatically make an organization compliant. Weak access control, excessive retention, missing consent records, untested backups, and poor incident response remain serious risks regardless of location. Data residency is one architectural control within a broader privacy and security program.</p><h2>A practical decision framework</h2><ol><li>Inventory personal and sensitive data.</li><li>Map every storage, processing, backup, and support location.</li><li>Identify cross-border transfers and subprocessors.</li><li>Check UU PDP safeguards and applicable sector regulations.</li><li>Define recovery objectives and test restore procedures.</li><li>Document why each workload is hosted locally, overseas, or in a hybrid model.</li></ol><aside>This article provides general information, not legal advice. Regulatory requirements vary by industry and may change. Obtain qualified legal advice before making a compliance determination.</aside><h2>How PatuhData can help</h2><p>PatuhData can assess your current environment, map data flows, design local or hybrid infrastructure, deploy workloads on AWS, establish backup and disaster recovery, and document the operational controls required for ongoing governance.</p><p><a href="https://jdih.komdigi.go.id/produk_hukum/view/id/832/t/undangundang%2Bnomor%2B27%2Btahun%2B2022" target="_blank" rel="noreferrer">Read UU PDP No. 27/2022</a> · <a href="https://peraturan.bpk.go.id/Details/122030/pp-no-71-tahun-2019" target="_blank" rel="noreferrer">Read PP No. 71/2019</a></p><a className="button primary" href="#contact">Discuss Your Data Infrastructure <Arrow/></a></article></main>
}

// Kept temporarily as migration references for the original article markup.
void MSPArticle
void UUPDPArticle

export default function App() {
  const lang: 'en' = 'en'
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
  const insightSlug = route.startsWith('/insights/') ? route.replace('/insights/', '') : ''
  useSeo(route, servicesEn)
  return <div className="site-shell cr-site">
    <a className="cr-skip" href="#main-content">Skip to content</a>
    <ResilienceNav />
    {route === '/contact' ? <main id="main-content" className="contact-page"><Contact/></main> : route === '/privacy' ? <main id="main-content"><PrivacyPolicy/></main> : route === '/terms' ? <main id="main-content"><TermsOfService/></main> : route === '/cookies' ? <main id="main-content"><CookiePolicy/></main> : route === '/insights' ? <InsightsIndex/> : insightSlug ? <InsightArticle slug={insightSlug}/> : serviceSlug ? <ServicePage slug={serviceSlug} lang={lang}/> : <ResilienceHome />}
    <footer className="enterprise-footer"><div className="footer-main"><div className="footer-intro"><img src="/logo-white.png" alt="PatuhData"/><p>Operational UU PDP programs supported by structured evidence and practical technology remediation.</p></div><div><strong>UU PDP Program</strong>{resilienceServices.map(service => <a key={service.slug} href={`/services/${service.slug}`}>{service.title}</a>)}</div><div><strong>Company</strong><a href="/#about">About Us</a><a href="/insights">Insights</a><a href="/contact">Contact</a><a href="https://www.linkedin.com/company/patuhdata-id" target="_blank" rel="noreferrer">LinkedIn</a></div><div><strong>Contact Us</strong><a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a><a href="https://wa.me/6281903378000">+62 819 0337 8000</a><a className="footer-address" href="https://maps.google.com/?q=INFINITI+OFFICE+Jl.+Permata+Regency+Jl.+H.+Kelik+Srengseng+Jakarta+Barat+11630" target="_blank" rel="noreferrer">INFINITI OFFICE<br/>Jl. Permata Regency, Jl. H. Kelik<br/>RT.1/RW.6, Srengseng, Kembangan<br/>West Jakarta, DKI Jakarta 11630</a></div></div><div className="footer-bottom"><p>© 2026 PT PatuhData Solusi Nusantara. All rights reserved. Implementation support is not legal advice.</p><div><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a><a href="/cookies">Cookie Policy</a><button type="button" className="cr-cookie-settings" onClick={() => window.dispatchEvent(new Event('patuhdata:open-consent'))}>Cookie Settings</button><a href="#main-content">Back to top ↑</a></div></div></footer>
    <CookieConsent lang={lang} />
    <WhatsAppButton />
  </div>
}
