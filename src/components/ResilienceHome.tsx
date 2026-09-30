import { resilienceServices } from '../data/resilienceServices'
import { blogPosts } from '../data/blogContent'

const Arrow = () => <span aria-hidden="true">↗</span>
export default function ResilienceHome() {
  return <main id="main-content" className="cr-home">
    <section className="cr-hero" aria-labelledby="hero-title">
      <div className="cr-hero-copy"><p className="cr-eyebrow">CYBER RESILIENCE · INDONESIA</p>
        <h1 id="hero-title">Keep your business running.<br /><span>Be ready to recover.</span></h1>
        <p className="cr-lead">Protect critical data, test recovery readiness, and strengthen business continuity—with one accountable technology partner.</p>
        <div className="cr-actions"><a className="cr-button" href="/contact">Discuss Your Recovery Needs <Arrow /></a><a className="cr-link" href="#services">Explore Our Services <span aria-hidden="true">↓</span></a></div>
        <p className="cr-hero-note">BACKUP & RESTORE <span> / </span> DISASTER RECOVERY <span> / </span> BUSINESS CONTINUITY</p>
      </div>
      <figure className="cr-photo"><img src="/images/cyber-resilience-hero.jpg" alt="Illustrative scene of an IT engineer reviewing a laptop beside server racks" width="1536" height="1024" loading="eager" /><figcaption>Prepared systems. Connected teams. A business ready for what comes next.</figcaption></figure>
    </section>
    <nav className="cr-section-nav" aria-label="On this page"><span>Explore cyber resilience</span><a href="#services">Our services</a><a href="#approach">Our approach</a><a href="#evidence">What you receive</a><a href="#insights">Insights</a></nav>
    <section className="cr-section cr-intro" id="about"><div><p className="cr-eyebrow">WHY PATUHDATA</p><h2>A backup is a starting point.<br />Recovery is the goal.</h2></div><div><p>A successful backup job does not tell you whether your applications, people, and processes can recover together.</p><p>PatuhData connects data protection with recovery testing and continuity planning. We help you understand what matters, prepare for disruption, and turn test findings into practical improvements.</p><a className="cr-link" href="/contact">Talk about your recovery priorities <Arrow /></a></div></section>
    <section className="cr-section cr-services" id="services"><div className="cr-heading"><div><p className="cr-eyebrow">OUR SERVICES</p><h2>Protection today.<br />Readiness for tomorrow.</h2></div><p>Four connected services, shaped around your critical systems and the way your business operates.</p></div>
      <div className="cr-service-grid">{resilienceServices.map(s => <article key={s.slug}><div className="cr-service-top"><span>{s.n}</span><span aria-hidden="true">{s.icon}</span></div><h3>{s.title}</h3><p>{s.text}</p><ul>{s.bullets.slice(0, 3).map(b => <li key={b}>{b}</li>)}</ul><a className="cr-link" href={`/services/${s.slug}`} aria-label={`Explore ${s.title}`}>Explore service <Arrow /></a></article>)}</div>
      <div className="cr-supporting"><p><strong>The infrastructure behind resilience.</strong> Cloud, managed infrastructure, and security controls support your recovery strategy.</p><a href="/services/managed-infrastructure">Managed infrastructure <Arrow /></a><a href="/services/cloud-aws">Cloud & AWS <Arrow /></a></div>
    </section>
    <section className="cr-section cr-approach" id="approach"><div className="cr-heading"><div><p className="cr-eyebrow">OUR APPROACH</p><h2>Build readiness.<br />Then keep improving it.</h2></div><p>Agree what needs to recover, protect it, test the plan, and address what you learn.</p></div><ol className="cr-steps">{[
      ['Assess', 'Map critical systems, business dependencies, existing backups, and recovery priorities.'],
      ['Protect', 'Design backup policies, protected copies, access controls, and recovery procedures.'],
      ['Test', 'Exercise the agreed recovery scope. Record timings, validate results, and identify gaps.'],
      ['Improve', 'Prioritize fixes, maintain the runbooks, and review readiness through ongoing service.'],
    ].map(([title, description], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol></section>
    <section className="cr-section cr-evidence" id="evidence"><div><p className="cr-eyebrow">WHAT YOU RECEIVE</p><h2>Clarity your team<br />can act on.</h2><p>Recovery planning should leave your team with useful documentation and clear ownership.</p><p>Deliverables depend on the agreed service and test scope. Recovery targets are established with you and validated through testing.</p><a className="cr-link" href="/contact">Discuss your requirements <Arrow /></a></div><div className="cr-deliverables">{[
      ['Recovery priorities', 'Critical workloads, dependencies, and agreed recovery-time and data-loss objectives.'],
      ['Documented procedures', 'Runbooks, access requirements, escalation contacts, and named responsibilities.'],
      ['Test findings', 'Recorded observations, recovery timings, validation results, and test limitations.'],
      ['Improvement plan', 'A prioritized list of gaps, accountable owners, and recommended next steps.'],
    ].map(([title, description], i) => <article key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>
    <section className="cr-ecosystem" aria-labelledby="ecosystem-title"><div><p className="cr-eyebrow">OUR PARTNERS</p><h2 id="ecosystem-title">Connected expertise.<br />Stronger resilience.</h2><p>We work across a broad technology partner ecosystem to design, implement, and manage secure environments that support recovery and business continuity.</p></div><div className="cr-logos">{[['/Veeam_logo.png','Veeam'],['/Synology--Streamline-Simple-Icons.svg','Synology'],['/VMware-Logo.png','VMware'],['/Amazon_Web_Services_Logo.svg','AWS']].map(([src, name]) => <img key={name} src={src} alt={name} loading="lazy" />)}</div></section>
    <section className="cr-section" id="insights"><div className="cr-heading"><div><p className="cr-eyebrow">INSIGHTS</p><h2>Better questions.<br />Better preparation.</h2></div><p>Practical perspectives on the infrastructure and governance behind business resilience.</p></div><div className="cr-insights">{blogPosts.slice(0, 2).map(post => <a key={post.slug} href={`/insights/${post.slug}`}><span className="cr-eyebrow">{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><span className="cr-link">Read the insight <Arrow /></span></a>)}</div><a className="cr-link cr-all-insights" href="/insights">View all insights <Arrow /></a></section>
    <section className="cr-section cr-consult" id="contact"><div><p className="cr-eyebrow">LET’S TALK ABOUT READINESS</p><h2>When disruption happens,<br />what happens next?</h2></div><div><p>Tell us about your systems, backup environment, and business priorities. We’ll help identify a practical place to start.</p><a className="cr-button" href="/contact">Discuss Your Recovery Needs <Arrow /></a></div></section>
  </main>
}
