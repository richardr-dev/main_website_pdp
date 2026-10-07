import { resilienceServices, type ResilienceService } from '../data/resilienceServices'

const Arrow = () => <span aria-hidden="true">↗</span>

export default function ServicePage({ service }: { service: ResilienceService }) {
  const related = service.related.map(slug => resilienceServices.find(s => s.slug === slug)!).filter(Boolean)
  const contact = `/contact?service=${service.slug}`

  return <main id="main-content" className="cr-home sv-page">
    <section className="cr-hero sv-hero" aria-labelledby="service-title">
      <div>
        <nav className="sv-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/#approach">Services</a><span aria-hidden="true">/</span><span aria-current="page">{service.title}</span></nav>
        <p className="cr-eyebrow">{service.stage.toUpperCase()} · PATUHDATA</p>
        <h1 id="service-title">{service.title}</h1>
        <p className="cr-lead">{service.intro}</p>
        <div className="cr-actions"><a className="cr-button" href={contact}>Discuss This Service <Arrow /></a><a className="cr-link" href="#included">What’s included <span aria-hidden="true">↓</span></a></div>
      </div>
      <dl className="cr-glance" aria-label="Service at a glance">
        {service.facts.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
      </dl>
    </section>

    <section className="cr-section cr-intro" aria-labelledby="audience-title">
      <div><p className="cr-eyebrow">WHO IT IS FOR</p><h2 id="audience-title">Built for teams<br />like yours.</h2></div>
      <ul className="sv-list">{service.audience.map(item => <li key={item}>{item}</li>)}</ul>
    </section>

    <section className="cr-section cr-core" id="included" aria-labelledby="included-title">
      <div className="cr-heading"><div><p className="cr-eyebrow">WHAT’S INCLUDED</p><h2 id="included-title">{service.core ? 'What the service covers' : 'What the engagement covers'}</h2></div><p>The exact scope is confirmed in writing before work begins, based on your systems, priorities, and existing work.</p></div>
      <div className="cr-industry-grid sv-scope">{service.scope.map(([title, detail], i) => <article key={title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
    </section>

    <section className="cr-section cr-evidence" aria-labelledby="deliverables-title">
      <div><p className="cr-eyebrow">WHAT YOU RECEIVE</p><h2 id="deliverables-title">Deliverables your<br />team can use.</h2><ul className="sv-list sv-deliverables">{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div className="cr-deliverables">{service.outcomes.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </section>

    <section className="cr-section cr-approach sv-obligations" aria-labelledby="obligations-title">
      <div className="cr-heading"><div><p className="cr-eyebrow">UU PDP</p><h2 id="obligations-title">Obligations this<br />service supports.</h2></div><p>How this service helps you meet the requirements of Law No. 27 of 2022 on Personal Data Protection.</p></div>
      <ul className="sv-tags">{service.obligations.map(item => <li key={item}>{item}</li>)}</ul>
    </section>

    <section className="cr-section" aria-labelledby="process-title">
      <div className="cr-heading"><div><p className="cr-eyebrow">HOW IT WORKS</p><h2 id="process-title">A clear path<br />from start to finish.</h2></div><p>Every stage has a defined objective, named owners, and documented outputs.</p></div>
      <ol className="cr-pillars">{service.flow.map(([n, title, text]) => <li key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </section>

    <section className="cr-section cr-faq" aria-labelledby="service-faq-title">
      <div><p className="cr-eyebrow">QUESTIONS</p><h2 id="service-faq-title">Common questions<br />about this service.</h2><p>Something else on your mind? <a className="cr-link" href={contact}>Ask our team <Arrow /></a></p></div>
      <div className="cr-faq-list">{service.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: service.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }).replace(/</g, '\\u003c') }} />
    </section>

    <section className="cr-section sv-related" aria-labelledby="related-title">
      <div className="cr-heading"><div><p className="cr-eyebrow">RELATED SERVICES</p><h2 id="related-title">Often combined with.</h2></div></div>
      <div className="cr-service-grid">{related.map(item => <article key={item.slug}><div className="cr-service-top"><span>{item.stage.toUpperCase()}</span></div><h3>{item.title}</h3><p>{item.text}</p><a className="cr-link" href={`/services/${item.slug}`} aria-label={`Explore ${item.title}`}>Learn more <Arrow /></a></article>)}</div>
    </section>

    <section className="cr-section cr-consult"><div><p className="cr-eyebrow">NEXT STEP</p><h2>Discuss {service.title}<br />with our team.</h2></div><div><p>Tell us about your organization and systems. We will confirm scope, responsibilities, assumptions, and exclusions in writing before work begins.</p><a className="cr-button" href={contact}>Discuss This Service <Arrow /></a></div></section>
  </main>
}
