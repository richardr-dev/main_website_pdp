import { copy, type Lang } from '../data/copy'
import { Arrow, ContactSection, CtaRow, DivisionCards, IndustryCards, SectionHead, Steps, TechStrip } from '../components/Blocks'

export default function HomePage({ lang = 'en' }: { lang?: Lang }) {
  const t = copy[lang].home
  return <main id="main-content" lang={lang === 'id' ? 'id' : undefined}>
    <section className="pd-hero" aria-labelledby="hero-title">
      <div className="pd-container pd-hero-grid">
        <div>
          <p className="pd-eyebrow">{t.eyebrow}</p>
          <h1 id="hero-title">{t.title}</h1>
          <p className="pd-lead">{t.lead}</p>
          <div className="pd-actions"><a className="pd-btn" href="/contact">{t.primary} <Arrow /></a><a className="pd-btn pd-btn-ghost" href="#solutions">{t.secondary}</a></div>
        </div>
        <dl className="pd-hero-facts">{t.facts.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl>
      </div>
    </section>

    <section className="pd-section" id="solutions" aria-labelledby="what-title">
      <div className="pd-container">
        <SectionHead id="what-title" eyebrow={t.whatEyebrow} title={t.whatTitle} intro={t.whatIntro} />
        <DivisionCards lang={lang} />
        <CtaRow lang={lang} show={['quote', 'assessment', 'whatsapp']} />
      </div>
    </section>

    <TechStrip lang={lang} />

    <section className="pd-section pd-tint" id="industries" aria-labelledby="industry-title">
      <div className="pd-container">
        <SectionHead id="industry-title" eyebrow={t.industryEyebrow} title={t.industryTitle} intro={t.industryIntro} />
        <IndustryCards lang={lang} />
        <CtaRow lang={lang} show={['assessment', 'whatsapp']} />
      </div>
    </section>

    <section className="pd-section" id="why" aria-labelledby="why-title">
      <div className="pd-container pd-split">
        <div><p className="pd-eyebrow">{t.whyEyebrow}</p><h2 id="why-title">{t.whyTitle}</h2><CtaRow lang={lang} show={['project', 'whatsapp']} /></div>
        <ul className="pd-points">{t.why.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ul>
      </div>
    </section>

    <section className="pd-section pd-tint" id="how" aria-labelledby="how-title">
      <div className="pd-container">
        <SectionHead id="how-title" eyebrow={t.howEyebrow} title={t.howTitle} />
        <Steps items={t.how as [string, string, string][]} />
        <CtaRow lang={lang} show={['assessment', 'whatsapp']} />
      </div>
    </section>

    <ContactSection lang={lang} />
  </main>
}
