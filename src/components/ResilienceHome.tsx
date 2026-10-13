import { complianceServices, faqs, resilienceLine } from '../data/resilienceServices'
import { homepageBlogPosts } from '../data/blogContent'
import FreeResources from './FreeResources'

const Arrow = () => <span aria-hidden="true">↗</span>

const glance = [
  ['Focus', 'UU PDP compliance, and backup and recovery'],
  ['Clients', 'Medium enterprises, 100 to 1,000 employees'],
  ['Approach', 'Engineering-led, with proof at every step'],
  ['Headquarters', 'Jakarta, Indonesia'],
  ['Entity', 'PT PatuhData Solusi Nusantara'],
]

const lines = [
  { key: 'compliance', label: 'COMPLIANCE · UU PDP', title: 'Protect personal data the way the law expects', services: complianceServices },
  { key: 'resilience', label: 'RESILIENCE · BACKUP & RECOVERY', title: 'Keep critical systems recoverable', services: resilienceLine },
] as const

const method = [
  ['01', 'Map', 'Know what personal data you hold, which systems the business depends on, and where the gaps are.'],
  ['02', 'Build', 'Put the requirements into your systems: privacy controls, protected backups, and recovery you can run.'],
  ['03', 'Prove', 'Keep records, restore tests, and rehearsal results current, ready for management, auditors, and regulators.'],
]

const industries = [
  ['Manufacturing & distribution', 'Factories, warehouses, and distribution networks running ERP, production, and logistics systems across several sites.'],
  ['Hospitals & clinic groups', 'Patient records and clinical systems, where downtime and data loss directly affect care.'],
  ['Financial services', 'Multifinance companies, cooperatives, and lenders handling identity, credit, and transaction data under close oversight.'],
  ['Retail & e-commerce', 'Store networks and online channels handling customer profiles, transactions, and loyalty data.'],
  ['Education', 'Schools and universities handling student, parent, and staff records across campuses.'],
  ['Property & hospitality', 'Developers, managers, and operators handling tenant, guest, and payment information.'],
]

const principles = [
  ['Compliance and resilience in one partner', 'UU PDP compliance and the backups that protect your data are handled by one team, so obligations, safeguards, and recovery fit together.'],
  ['A named engineer, agreed response times', 'You work with people who know your systems, with response times agreed in writing.'],
  ['Proof your auditors accept', 'Monthly reports, restore test records, and rehearsal results show that controls work, not just that they exist.'],
  ['Ready for your procurement', 'A registered Indonesian company with formal quotations, written contracts, and scope, assumptions, and exclusions agreed before work begins.'],
]

export default function ResilienceHome() {
  return <main id="main-content" className="cr-home">
    <section className="cr-hero" aria-labelledby="hero-title">
      <div className="cr-hero-copy">
        <h1 id="hero-title"><small className="cr-eyebrow">UU PDP compliance &amp; backup recovery</small>Map.<br /><span>Build.</span><br />Prove.</h1>
        <p className="cr-lead">Data protection for medium enterprises in Indonesia: UU PDP compliance built into your systems, and backups proven to restore. One accountable partner for organizations with multiple sites and a lean IT team.</p>
        <div className="cr-actions"><a className="cr-button" href="/contact">Talk to Our Team <Arrow /></a><a className="cr-link" href="#services">Our services <span aria-hidden="true">↓</span></a></div>
      </div>
      <dl className="cr-glance" aria-label="PatuhData at a glance">
        {glance.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
      </dl>
    </section>

    <nav className="cr-section-nav" aria-label="On this page"><span>PatuhData at a glance</span><a href="#about">About Us</a><a href="#services">Services</a><a href="#approach">How We Work</a><a href="#industries">Industries</a><a href="#why">Why PatuhData</a><a href="#faq">FAQ</a><a href="#resources">Free Resources</a></nav>

    <section className="cr-section cr-intro" id="about">
      <div><p className="cr-eyebrow">WHO WE ARE</p><h2>Data protection that<br />works in your systems.</h2></div>
      <div>
        <p>PT PatuhData Solusi Nusantara is a Jakarta-based company focused on one thing: protecting the data medium enterprises depend on. We keep personal data compliant with UU PDP, and critical systems recoverable when something goes wrong.</p>
        <p>Indonesia’s Personal Data Protection Law (UU PDP) asks every organization to show how personal data is governed, secured, and handled when something goes wrong. Most organizations do not need another policy document. They need someone who can turn requirements into working controls and backups that are proven to restore, and keep them working.</p>
        <p>Our team comes from software engineering and IT operations, so we approach both the way engineers do: by changing how systems actually work, and testing that they do.</p>
        <div className="cr-mission">
          <div><strong>Our mission</strong><p>To make data protection practical, accountable, and provable for medium enterprises in Indonesia.</p></div>
          <div><strong>Our vision</strong><p>Organizations in Indonesia that customers can trust with their data, and that stay resilient when disruption happens.</p></div>
        </div>
      </div>
    </section>

    <section className="cr-section cr-core" id="services" aria-labelledby="services-title">
      <div className="cr-heading"><div><p className="cr-eyebrow">OUR SERVICES</p><h2 id="services-title">Two service lines.<br />One accountable partner.</h2></div><p>Start with an assessment in either line. Most clients combine both, because personal data that cannot be recovered is not truly protected.</p></div>
      <div className="sl-grid">{lines.map(line => <article key={line.key} className="sl-line" aria-labelledby={`line-${line.key}`}>
        <p className="cr-eyebrow">{line.label}</p>
        <h3 id={`line-${line.key}`}>{line.title}</h3>
        <ul>{line.services.map(service => <li key={service.slug}><a href={`/services/${service.slug}`} aria-label={`Explore ${service.title}`}><span className="sl-stage">{service.stage}</span><strong>{service.title}</strong><span className="sl-text">{service.text}</span></a></li>)}</ul>
      </article>)}</div>
    </section>

    <section className="cr-section cr-approach" id="approach">
      <div className="cr-heading"><div><p className="cr-eyebrow">HOW WE WORK</p><h2>One method<br />for both lines.</h2></div><p>Every engagement has a defined scope and written deliverables. Most clients begin with an assessment, fix the priorities, then move to a managed service.</p></div>
      <ol className="cr-steps sl-method">
        {method.map(([n, title, text]) => <li key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></li>)}
      </ol>
    </section>

    <section className="cr-section cr-industries" id="industries" aria-labelledby="industries-title">
      <div className="cr-heading"><div><p className="cr-eyebrow">INDUSTRIES WE SERVE</p><h2 id="industries-title">Built for medium enterprises<br />that hold sensitive data.</h2></div><p>We work with organizations of about 100 to 1,000 employees, often with several sites and a lean IT team, where personal data and system availability are central to daily operations.</p></div>
      <div className="cr-industry-grid">
        {industries.map(([title, description], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{description}</p></article>)}
      </div>
    </section>

    <section className="cr-section cr-evidence" id="why">
      <div><p className="cr-eyebrow">WHY PATUHDATA</p><h2>How we earn<br />your trust.</h2><p>We are deliberately focused. Personal data protection and recovery are not side services for us. They are the whole company.</p><a className="cr-link" href="/contact">Speak with our team <Arrow /></a></div>
      <div className="cr-deliverables">{principles.map(([title, description], i) => <article key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
    </section>

    <section className="cr-section cr-faq" id="faq" aria-labelledby="faq-title">
      <div><p className="cr-eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2 id="faq-title">Your questions,<br />answered plainly.</h2><p>Common questions about UU PDP, backup, and recovery from medium enterprises in Indonesia.</p></div>
      <div className="cr-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }).replace(/</g, '\\u003c') }} />
    </section>

    <FreeResources />

    <section className="cr-section cr-home-insights" aria-labelledby="home-insights-title"><div className="cr-heading"><div><p className="cr-eyebrow">LATEST INSIGHTS</p><h2 id="home-insights-title">Recommended reading<br />for practical teams.</h2></div><div><p>Clear guidance on UU PDP compliance, backup, and disaster recovery.</p><a className="cr-link" href="/insights">View all insights <Arrow /></a></div></div><div className="cr-insights">{homepageBlogPosts.map(post => <a key={post.slug} href={`/insights/${post.slug}`}>
      {post.image ? <img className="cr-insight-image" src={post.image} alt={post.imageAlt || ''} loading="lazy" /> : <div className="cr-insight-image cr-insight-image-placeholder" aria-hidden="true"><span>PatuhData Insights</span></div>}
      <div className="cr-insight-copy"><div className="cr-insight-labels"><span className="cr-eyebrow">{post.category}</span>{post.pinned && <span className="cr-pin-label">Recommended</span>}</div><h3>{post.title}</h3><p>{post.excerpt}</p><span className="cr-link">Read the insight <Arrow /></span></div>
    </a>)}</div></section>

    <section className="cr-section cr-consult" id="contact"><div><p className="cr-eyebrow">LET’S TALK</p><h2>Put your data protection<br />in steady hands.</h2></div><div><p>Tell us about your systems, sites, and what you have already prepared. We will recommend the most useful place to start.</p><div className="cr-actions"><a className="cr-button" href="/contact">Talk to Our Team <Arrow /></a><a className="cr-link" href="/contact?service=uu-pdp-readiness-assessment">UU PDP assessment <Arrow /></a><a className="cr-link" href="/contact?service=backup-recovery-assessment">Backup assessment <Arrow /></a></div></div></section>
  </main>
}
