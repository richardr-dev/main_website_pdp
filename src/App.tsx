import { useEffect, useState } from 'react'
import './index.css'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookiePolicy from './components/CookiePolicy'
import Contact from './components/Contact'
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
    document.title = path === '/' ? 'Managed DPO as a Service Indonesia | PatuhData' : `${path.slice(1)} | PatuhData`
    const description = 'Independent external Data Protection Officer oversight for technology and financial-services businesses operating under Indonesia’s UU PDP.'
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = description
  }, [path])
}

function DpoHome() {
  return <main id="top" className="dpo-site">
    <section className="dpo-hero">
      <div className="dpo-hero-copy">
        <span className="dpo-kicker"><i /> MANAGED PRIVACY GOVERNANCE · INDONESIA</span>
        <h1>Managed DPO<br/><em>as a Service.</em></h1>
        <p className="dpo-lead">Independent privacy oversight for businesses operating in Indonesia.</p>
        <p>PatuhData provides an experienced external Data Protection Officer to help technology and financial-services companies establish and maintain privacy governance under Indonesia’s Personal Data Protection Law (UU PDP).</p>
        <div className="dpo-actions"><a className="dpo-button dpo-primary" href="/contact?request=discovery">Schedule a Privacy Discovery Call <Arrow /></a><a className="dpo-button dpo-secondary" href="mailto:hello@patuhdata.id?subject=Request%20a%20DPO%20Profile">Request a DPO Profile</a></div>
      </div>
      <aside className="dpo-hero-panel"><span className="panel-label">YOUR EXTERNAL DPO</span><div className="panel-mark">PD</div><h2>Independent. Embedded. Accountable.</h2><p>Advice, monitoring, review and escalation—with a documented line to management.</p><dl><div><dt>Primary mandate</dt><dd>Privacy oversight</dd></div><div><dt>Reporting rhythm</dt><dd>Monthly</dd></div><div><dt>Critical risks</dt><dd>Immediate escalation</dd></div></dl></aside>
    </section>

    <section className="dpo-intro"><span className="dpo-kicker">THE MANDATE</span><p>Our DPO advises management, monitors personal-data processing, reviews privacy risks, supports data-subject and breach matters, and provides documented recommendations for management action.</p></section>

    <section className="dpo-section" id="scope"><div className="dpo-section-head"><div><span className="dpo-kicker">WHAT THE CLIENT RECEIVES</span><h2>A working privacy governance function—not a shelf document.</h2></div><p>Structured oversight that connects management, product, legal, security and operations through one clear governance rhythm.</p></div><div className="deliverable-grid">{deliverables.map(d => <article key={d.number}><div className="card-number">{d.number}</div><h3>{d.title}</h3><ul>{d.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

    <section className="product-example" id="example"><div><span className="dpo-kicker light-kicker">PRODUCT-LEVEL OVERSIGHT</span><h2>Example: privacy oversight for a collection platform</h2><p>For a collection-management product such as YuCOS, our DPO can review the complete processing environment—not only the privacy notice.</p></div><div className="example-list">{['Borrower and loan data processed by the platform', 'Collection notes, call recordings and communication history', 'User roles, access permissions and bulk-data exports', 'Automated case prioritisation or profiling', 'Retention and deletion of closed collection cases', 'Collection agencies, cloud providers and other subprocessors', 'Overseas access to Indonesian personal data', 'Borrower requests and personal-data incident procedures'].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></div>)}</div><div className="example-output"><strong>Documented output</strong><p>Processing record · DPIA screening · Privacy-risk register · Prioritised recommendations</p><small>The client’s product, legal, security and operational teams remain responsible for implementation.</small></div></section>

    <section className="dpo-section dpo-process" id="process"><div className="dpo-section-head"><div><span className="dpo-kicker">HOW THE SERVICE WORKS</span><h2>From discovery to governance evidence.</h2></div><p>Every stage produces a concrete output, so privacy oversight remains visible and actionable.</p></div><div className="stage-table"><div className="stage-row stage-header"><span>Stage</span><span>Activity</span><span>Output</span></div>{stages.map(s=><div className="stage-row" key={s[0]}><span><b>{s[0]}</b> {s[1]}</span><span>{s[2]}</span><span>{s[3]}</span></div>)}</div></section>

    <section className="responsibility" id="responsibility"><div><span className="dpo-kicker light-kicker">RESPONSIBILITY STATEMENT</span><h2>Independent oversight does not transfer legal accountability.</h2></div><p>Our DPO provides independent advice, monitoring, review and escalation. <strong>Management remains responsible</strong> for decisions, lawful processing, risk acceptance and implementation of the recommended controls.</p></section>

    <section className="dpo-section faq" id="faq"><div className="dpo-section-head"><div><span className="dpo-kicker">IMPORTANT LIMITATIONS</span><h2>Clear boundaries from day one.</h2></div></div><details open><summary>What is not included in DPO as a Service?</summary><p>DPO as a Service is an advisory and monitoring service. It is not ISO certification, a legal opinion, cybersecurity operations, forensic investigation, software implementation or a guarantee of regulatory compliance. Additional remediation, full DPIAs, extensive documentation and technical implementation may be separately scoped.</p></details></section>

    <section className="dpo-cta"><div><span className="dpo-kicker light-kicker">START WITH DISCOVERY</span><h2>Give privacy risk a clear owner and reporting line.</h2></div><div><p>Discuss your processing activities, current governance and priorities with our team.</p><div className="dpo-actions"><a className="dpo-button dpo-primary" href="/contact?request=discovery">Schedule a Privacy Discovery Call <Arrow /></a><a className="profile-link" href="mailto:hello@patuhdata.id?subject=Request%20a%20DPO%20Profile">Request a DPO Profile →</a></div></div></section>
  </main>
}

export default function App() {
  const [route, setRoute] = useState(window.location.pathname)
  const [menu, setMenu] = useState(false)
  useEffect(() => { const fn = () => setRoute(window.location.pathname); window.addEventListener('popstate', fn); return () => window.removeEventListener('popstate', fn) }, [])
  useSeo(route)
  return <div className="site-shell"><header className="dpo-nav"><a href="/" className="dpo-logo"><img src="/logo.png" alt="PatuhData" /></a><nav className={menu ? 'open' : ''}><a href="/#scope">Service scope</a><a href="/#example">Product oversight</a><a href="/#process">How it works</a><a href="/#faq">FAQ</a></nav><a className="nav-discovery" href="/contact?request=discovery">Schedule a call <Arrow /></a><button className="dpo-menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?'×':'☰'}</button></header>{route === '/contact' ? <main className="contact-page"><Contact /></main> : route === '/privacy' ? <main><PrivacyPolicy /></main> : route === '/terms' ? <main><TermsOfService /></main> : route === '/cookies' ? <main><CookiePolicy /></main> : <DpoHome />}<footer className="dpo-footer"><div><img src="/logo-white.png" alt="PatuhData"/><p>Independent privacy oversight for businesses operating in Indonesia.</p></div><div><a href="mailto:hello@patuhdata.id">hello@patuhdata.id</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/cookies">Cookies</a></div><p>© 2026 PT PatuhData Solusi Nusantara</p></footer><WhatsAppButton /></div>
}
