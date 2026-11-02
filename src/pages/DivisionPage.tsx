import { industries, lakuin, type Division } from '../data/site'
import { copy } from '../data/copy'
import { whatsappLink } from '../data/company'
import { Arrow, ContactSection, DivisionCards, PageHero, SectionHead, Steps } from '../components/Blocks'

export default function DivisionPage({ division: d }: { division: Division }) {
  const contact = `/contact?service=${d.slug}`
  const related = industries.filter(industry => industry.divisions.includes(d.slug))
  return <main id="main-content">
    <PageHero
      crumbs={[['Home', '/'], ['Solutions', '/#solutions'], [d.title]]}
      eyebrow="SOLUTIONS" title={d.title} lead={d.intro}
      actions={<><a className="pd-btn" href={contact}>{d.cta} <Arrow /></a><a className="pd-btn pd-btn-ghost" href="#scope">What we deliver</a></>}
    />

    <section className="pd-section" aria-labelledby="problems-title">
      <div className="pd-container pd-split">
        <div><p className="pd-eyebrow">SOUND FAMILIAR?</p><h2 id="problems-title">Problems we solve.</h2></div>
        <ul className="pd-checklist">{d.problems.map(problem => <li key={problem}>{problem}</li>)}</ul>
      </div>
    </section>

    <section className="pd-section pd-tint" id="scope" aria-labelledby="scope-title">
      <div className="pd-container">
        <SectionHead id="scope-title" eyebrow="WHAT WE DELIVER" title="Scope of work." intro="The exact scope, schedule, and price are confirmed in a written quotation." />
        <div className="pd-grid-3">{d.scope.map(([title, text]) => <article key={title} className="pd-tile"><h3>{title}</h3><p>{text}</p></article>)}</div>
        {d.note && <p className="pd-note">{d.note}</p>}
        <div className="pd-cta-row"><a className="pd-btn" href={contact}>{d.cta} <Arrow /></a><a className="pd-text-link" href={whatsappLink(`${copy.en.whatsapp} (${d.title})`)} target="_blank" rel="noopener noreferrer">Ask on WhatsApp <Arrow /></a></div>
      </div>
    </section>

    {d.serviceLevels && <section className="pd-section" aria-labelledby="sla-title">
      <div className="pd-container">
        <SectionHead id="sla-title" eyebrow="SERVICE LEVELS" title="Clear commitments, in writing." intro="Every support contract states exactly what is covered and how quickly we respond." />
        <div className="pd-grid-4">{d.serviceLevels.map(([title, text]) => <article key={title} className="pd-tile pd-tile-line"><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>}

    <section className="pd-section" aria-labelledby="deliverables-title">
      <div className="pd-container pd-split">
        <div><p className="pd-eyebrow">WHAT YOU RECEIVE</p><h2 id="deliverables-title">Deliverables.</h2><a className="pd-btn" href={contact}>{d.cta} <Arrow /></a></div>
        <ul className="pd-checklist">{d.deliverables.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>

    {d.showcase && <section className="pd-section pd-tint" aria-labelledby="proof-title">
      <div className="pd-container pd-split">
        <div><p className="pd-eyebrow">OUR OWN PLATFORM</p><h2 id="proof-title">Systems we build and operate ourselves.</h2></div>
        <div className="pd-proof">
          <p>We built and operate <strong>{lakuin.name}</strong>, an online store platform for Indonesian sellers with multi-warehouse inventory, marketplace synchronization, shipping, and accounting. The same team implements and integrates systems for our clients.</p>
          <a className="pd-text-link" href={lakuin.url} target="_blank" rel="noreferrer">Visit lakuin.store <Arrow /></a>
        </div>
      </div>
    </section>}

    <section className="pd-section pd-dark" aria-labelledby="steps-title">
      <div className="pd-container">
        <SectionHead id="steps-title" eyebrow="HOW AN ENGAGEMENT WORKS" title="From first conversation to handover." />
        <Steps items={d.steps} dark />
      </div>
    </section>

    <section className="pd-section" aria-labelledby="faq-title">
      <div className="pd-container pd-split">
        <div><p className="pd-eyebrow">QUESTIONS</p><h2 id="faq-title">Common questions.</h2>{related.length > 0 && <p className="pd-muted">Used in: {related.map((industry, i) => <span key={industry.slug}>{i > 0 && ', '}<a className="pd-text-link" href={`/industries/${industry.slug}`}>{industry.name}</a></span>)}</p>}</div>
        <div className="pd-faq">{d.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: d.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }).replace(/</g, '\\u003c') }} />
    </section>

    <section className="pd-section pd-tint" aria-labelledby="other-title">
      <div className="pd-container">
        <SectionHead id="other-title" eyebrow="ALSO FROM PATUHDATA" title="Other solutions." />
        <DivisionCards exclude={d.slug} />
      </div>
    </section>

    <ContactSection />
  </main>
}
