import { divisions, type Industry } from '../data/site'
import { Arrow, ContactSection, PageHero, SectionHead } from '../components/Blocks'

export default function IndustryPage({ industry: ind }: { industry: Industry }) {
  const contact = `/contact?industry=${ind.slug}&service=assessment`
  const used = ind.divisions.map(slug => divisions.find(d => d.slug === slug)!).filter(Boolean)
  return <main id="main-content">
    <PageHero
      crumbs={[['Home', '/'], ['Industries', '/#industries'], [ind.name]]}
      eyebrow={`INDUSTRY · ${ind.name.toUpperCase()}`} title={ind.title} lead={ind.intro} image={ind.image}
      actions={<><a className="pd-btn" href={contact}>Request a Site Assessment <Arrow /></a><a className="pd-btn pd-btn-ghost" href="/contact?service=assessment">Discuss Your Requirements</a></>}
    />

    <section className="pd-section" aria-labelledby="challenges-title">
      <div className="pd-container">
        <SectionHead id="challenges-title" eyebrow="CHALLENGES WE SOLVE" title="Operational problems, practical fixes." />
        <div className="pd-problem-list">{ind.challenges.map(([problem, solution]) => <article key={problem}>
          <div><span className="pd-label">The problem</span><h3>{problem}</h3></div>
          <div><span className="pd-label">How we help</span><p>{solution}</p></div>
        </article>)}</div>
      </div>
    </section>

    <section className="pd-section pd-tint" aria-labelledby="divisions-title">
      <div className="pd-container">
        <SectionHead id="divisions-title" eyebrow="RECOMMENDED SOLUTIONS" title={`Recommended solutions for ${ind.name.toLowerCase()}.`} />
        <div className="pd-cards pd-cards-3">{used.map(d => <a key={d.slug} className="pd-card" href={`/services/${d.slug}`}><h3>{d.name}</h3><p>{d.summary}</p><span className="pd-card-link">Learn more <Arrow /></span></a>)}</div>
      </div>
    </section>

    <section className="pd-section" aria-labelledby="start-title">
      <div className="pd-container pd-split">
        <div><p className="pd-eyebrow">START WITH AN ASSESSMENT</p><h2 id="start-title">See what your sites need before you spend.</h2></div>
        <div><p className="pd-lead">We visit your site, review your network, equipment, and systems, and give you a clear list of priorities with a quotation for the work that matters most.</p><div className="pd-actions"><a className="pd-btn" href={contact}>Request a Site Assessment <Arrow /></a></div></div>
      </div>
    </section>

    <ContactSection />
  </main>
}
