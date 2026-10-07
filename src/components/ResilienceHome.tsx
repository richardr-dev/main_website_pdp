import { coreService, faqs, resilienceServices } from '../data/resilienceServices'
import { homepageBlogPosts } from '../data/blogContent'
import FreeResources from './FreeResources'

const Arrow = () => <span aria-hidden="true">↗</span>

const glance = [
  ['Focus', 'UU PDP implementation for apps and digital platforms'],
  ['Approach', 'Engineering-led, from data flows to evidence'],
  ['Headquarters', 'Jakarta, Indonesia'],
  ['Clients', 'Organizations operating in Indonesia'],
  ['Entity', 'PT PatuhData Solusi Nusantara'],
]

const pillars = [
  ['01', 'Map', 'Know what personal data you hold, where it flows across your applications, vendors, and cloud, and who is responsible for it.'],
  ['02', 'Build', 'Put the requirements into your systems: consent, data-subject requests, retention, access control, encryption, and audit trails.'],
  ['03', 'Prove', 'Keep records, decisions, and evidence current so you can demonstrate compliance whenever customers, partners, or regulators ask.'],
]

const industries = [
  ['Healthtech & healthcare', 'Patient apps, portals, and clinical systems handling health records, the most sensitive category of personal data.'],
  ['Fintech & financial services', 'Lending, payment, multifinance, and cooperative platforms handling identity, credit, and transaction data.'],
  ['E-commerce & marketplaces', 'Platforms handling customer profiles, transactions, tracking, and marketing consent at scale.'],
  ['Software & SaaS companies', 'Product teams that must answer enterprise and government privacy requirements before they can close deals.'],
  ['Education platforms', 'Schools, universities, and learning platforms handling student, parent, and staff information.'],
  ['HR & workforce platforms', 'Employers and HR systems handling large volumes of employee and candidate data.'],
]

const principles = [
  ['Compliance built into systems', 'Obligations on paper are matched by working controls in your applications and data, so compliance holds up in practice.'],
  ['Engineers who speak your team’s language', 'We work directly with your developers and product owners, translating legal requirements into concrete technical changes.'],
  ['One accountable partner', 'A single team that owns agreed outcomes, instead of separate advisers and vendors that hand problems to each other.'],
  ['Clear boundaries', 'We support implementation and operations. Where formal legal interpretation is needed, we work alongside qualified legal counsel.'],
]

export default function ResilienceHome() {
  const engagements = [
    ['Assess', resilienceServices.find(s => s.slug === 'uu-pdp-readiness-assessment')!],
    ['Implement', resilienceServices.find(s => s.slug === 'uu-pdp-setup-sprint')!],
    ['Engineer', resilienceServices.find(s => s.slug === 'privacy-technology-remediation')!],
    ['Operate', coreService],
  ] as const
  const backupService = resilienceServices.find(s => s.slug === 'managed-backup-recovery')!

  return <main id="main-content" className="cr-home">
    <section className="cr-hero" aria-labelledby="hero-title">
      <div className="cr-hero-copy">
        <h1 id="hero-title"><small className="cr-eyebrow">UU PDP implementation &amp; privacy engineering</small>Map.<br /><span>Build.</span><br />Prove.</h1>
        <p className="cr-lead">We build UU PDP compliance into your systems, not just your documents. PatuhData is an engineering-led partner that helps organizations in Indonesia implement and maintain personal data protection.</p>
        <div className="cr-actions"><a className="cr-button" href={`/contact?service=${coreService.slug}`}>Talk to Our Team <Arrow /></a><a className="cr-link" href="#core-service">Our core service <span aria-hidden="true">↓</span></a></div>
      </div>
      <dl className="cr-glance" aria-label="PatuhData at a glance">
        {glance.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
      </dl>
    </section>

    <nav className="cr-section-nav" aria-label="On this page"><span>PatuhData at a glance</span><a href="#about">About Us</a><a href="#core-service">Core Service</a><a href="#approach">How We Engage</a><a href="#industries">Industries</a><a href="#why">Why PatuhData</a><a href="#faq">FAQ</a><a href="#resources">Free Resources</a></nav>

    <section className="cr-section cr-intro" id="about">
      <div><p className="cr-eyebrow">WHO WE ARE</p><h2>Compliance that works<br />in your systems.</h2></div>
      <div>
        <p>PT PatuhData Solusi Nusantara is a Jakarta-based company focused on one thing: helping organizations protect the personal data they are trusted with. Our team comes from software engineering and building applications, so we approach UU PDP the way engineers do: by changing how systems actually work.</p>
        <p>Indonesia’s Personal Data Protection Law (UU PDP) asks every organization to show how personal data is governed, secured, and handled when something goes wrong. Most organizations do not need another policy document. They need someone who can turn legal requirements into working consent flows, request handling, retention rules, and access controls, and keep them working.</p>
        <div className="cr-mission">
          <div><strong>Our mission</strong><p>To make personal data protection practical, accountable, and sustainable for organizations of every size.</p></div>
          <div><strong>Our vision</strong><p>Organizations in Indonesia that customers can trust with their data, and that stay resilient when disruption happens.</p></div>
        </div>
      </div>
    </section>

    <section className="cr-section cr-core" id="core-service" aria-labelledby="core-title">
      <div className="cr-heading">
        <div><p className="cr-eyebrow">OUR CORE SERVICE</p><h2 id="core-title">{coreService.title}</h2></div>
        <div><p>{coreService.intro}</p><a className="cr-link" href={`/services/${coreService.slug}`} aria-label={`Explore ${coreService.title}`}>Explore the service <Arrow /></a></div>
      </div>
      <ol className="cr-pillars">
        {pillars.map(([n, title, description]) => <li key={n}><span>{n}</span><h3>{title}</h3><p>{description}</p></li>)}
      </ol>
      <p className="cr-core-also"><strong>Also available as a managed service:</strong> {backupService.text} <a className="cr-link" href={`/services/${backupService.slug}`} aria-label={`Explore ${backupService.title}`}>{backupService.title} <Arrow /></a></p>
    </section>

    <section className="cr-section cr-approach" id="approach">
      <div className="cr-heading"><div><p className="cr-eyebrow">HOW WE ENGAGE</p><h2>Start where you are.<br />Grow into a managed program.</h2></div><p>Every engagement has a defined scope and written deliverables. Most clients begin with an assessment, then implement and engineer the priorities before moving to ongoing management.</p></div>
      <ol className="cr-steps">
        {engagements.map(([label, service], i) => <li key={service.slug}><span>0{i + 1} · {label.toUpperCase()}</span><h3>{service.title}</h3><p>{service.text}</p><a className="cr-step-link" href={`/services/${service.slug}`} aria-label={`Explore ${service.title}`}>Learn more <Arrow /></a></li>)}
      </ol>
    </section>

    <section className="cr-section cr-industries" id="industries" aria-labelledby="industries-title">
      <div className="cr-heading"><div><p className="cr-eyebrow">INDUSTRIES WE SERVE</p><h2 id="industries-title">Built for organizations<br />that hold sensitive data.</h2></div><p>We focus on sectors where personal data is central to daily operations and where trust directly affects the business.</p></div>
      <div className="cr-industry-grid">
        {industries.map(([title, description], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{description}</p></article>)}
      </div>
    </section>

    <section className="cr-section cr-evidence" id="why">
      <div><p className="cr-eyebrow">WHY PATUHDATA</p><h2>How we earn<br />your trust.</h2><p>We are deliberately focused. Implementing personal data protection is not a side service for us. It is the whole company.</p><a className="cr-link" href="/contact">Speak with our team <Arrow /></a></div>
      <div className="cr-deliverables">{principles.map(([title, description], i) => <article key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
    </section>

    <section className="cr-section cr-faq" id="faq" aria-labelledby="faq-title">
      <div><p className="cr-eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2 id="faq-title">UU PDP, answered<br />plainly.</h2><p>Common questions from organizations preparing for Indonesia’s Personal Data Protection Law.</p></div>
      <div className="cr-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }).replace(/</g, '\\u003c') }} />
    </section>

    <FreeResources />

    <section className="cr-section cr-home-insights" aria-labelledby="home-insights-title"><div className="cr-heading"><div><p className="cr-eyebrow">LATEST INSIGHTS</p><h2 id="home-insights-title">Recommended reading<br />for practical teams.</h2></div><div><p>Clear guidance on UU PDP implementation, privacy engineering, and data recovery.</p><a className="cr-link" href="/insights">View all insights <Arrow /></a></div></div><div className="cr-insights">{homepageBlogPosts.map(post => <a key={post.slug} href={`/insights/${post.slug}`}>
      {post.image ? <img className="cr-insight-image" src={post.image} alt={post.imageAlt || ''} loading="lazy" /> : <div className="cr-insight-image cr-insight-image-placeholder" aria-hidden="true"><span>PatuhData Insights</span></div>}
      <div className="cr-insight-copy"><div className="cr-insight-labels"><span className="cr-eyebrow">{post.category}</span>{post.pinned && <span className="cr-pin-label">Recommended</span>}</div><h3>{post.title}</h3><p>{post.excerpt}</p><span className="cr-link">Read the insight <Arrow /></span></div>
    </a>)}</div></section>

    <section className="cr-section cr-consult" id="contact"><div><p className="cr-eyebrow">LET’S TALK</p><h2>Put your data protection<br />in steady hands.</h2></div><div><p>Tell us how your organization uses personal data and what you have already prepared. We will recommend the most useful place to start.</p><div className="cr-actions"><a className="cr-button" href={`/contact?service=${coreService.slug}`}>Talk to Our Team <Arrow /></a><a className="cr-link" href="/contact?service=uu-pdp-readiness-assessment">Start With an Assessment <Arrow /></a></div></div></section>
  </main>
}
