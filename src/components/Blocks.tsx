import type { ReactNode } from 'react'
import { company, whatsappLink } from '../data/company'
import { copy, type Lang } from '../data/copy'
import { divisions, industries, technologies, type Division, type Industry } from '../data/site'
import LeadForm from './LeadForm'

export const Arrow = () => <span aria-hidden="true">→</span>

export function PageHero({ eyebrow, title, lead, actions, crumbs, image }: { eyebrow: string; title: string; lead: string; actions?: ReactNode; crumbs?: [string, string?][]; image?: string }) {
  return <section className={`pd-page-hero ${image ? 'has-image' : ''}`} style={image ? { backgroundImage: `linear-gradient(90deg, rgba(9,24,39,.94) 0%, rgba(9,24,39,.82) 55%, rgba(9,24,39,.55) 100%), url(${image})` } : undefined}>
    <div className="pd-container">
      {crumbs && <nav className="pd-crumbs" aria-label="Breadcrumb">{crumbs.map(([label, href], i) => <span key={label}>{i > 0 && <span aria-hidden="true">/</span>}{href ? <a href={href}>{label}</a> : <span aria-current="page">{label}</span>}</span>)}</nav>}
      <p className="pd-eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="pd-lead">{lead}</p>
      {actions && <div className="pd-actions">{actions}</div>}
    </div>
  </section>
}

export function SectionHead({ eyebrow, title, intro, id }: { eyebrow: string; title: string; intro?: string; id: string }) {
  return <div className="pd-section-head"><div><p className="pd-eyebrow">{eyebrow}</p><h2 id={id}>{title}</h2></div>{intro && <p>{intro}</p>}</div>
}

export function DivisionCards({ lang = 'en', exclude }: { lang?: Lang; exclude?: string }) {
  const t = copy[lang].home
  const list = divisions.filter(d => d.slug !== exclude)
  return <div className={`pd-cards ${list.length === 3 ? 'pd-cards-3' : ''}`}>{list.map((d: Division) => <a key={d.slug} className="pd-card" href={`/services/${d.slug}`}>
    <span className="pd-num">{String(divisions.indexOf(d) + 1).padStart(2, '0')}</span>
    <h3>{lang === 'id' ? d.id.name : d.name}</h3>
    <p>{lang === 'id' ? d.id.summary : d.summary}</p>
    <span className="pd-card-link">{t.learnMore} <Arrow /></span>
  </a>)}</div>
}

export function IndustryCards({ lang = 'en' }: { lang?: Lang }) {
  const t = copy[lang].home
  return <div className="pd-industries">{industries.map((ind: Industry) => {
    const [problem, fix] = lang === 'id' ? ind.id.example : ind.challenges[0]
    return <a key={ind.slug} href={`/industries/${ind.slug}`}>
    <h3>{lang === 'id' ? ind.id.name : ind.name}</h3>
    <p>{lang === 'id' ? ind.id.summary : ind.summary}</p>
    <dl className="pd-example"><dt>{t.problemLabel}</dt><dd>{problem}</dd><dt>{t.fixLabel}</dt><dd>{fix}</dd></dl>
    <span className="pd-card-link">{t.industryLink} <Arrow /></span>
  </a>
  })}</div>
}

/** Conversion row placed under major sections: quotation, site assessment, project, and WhatsApp. */
export function CtaRow({ lang = 'en', show = ['quote', 'assessment', 'whatsapp'], dark }: { lang?: Lang; show?: ('quote' | 'assessment' | 'project' | 'whatsapp')[]; dark?: boolean }) {
  const t = copy[lang].home
  const links = {
    quote: <a key="quote" className="pd-btn" href="/contact">{t.ctaQuote} <Arrow /></a>,
    assessment: <a key="assessment" className={`pd-btn ${dark ? 'pd-btn-light' : 'pd-btn-outline'}`} href="/contact?service=assessment">{t.ctaAssessment}</a>,
    project: <a key="project" className="pd-btn" href="/contact">{t.ctaProject} <Arrow /></a>,
    whatsapp: <a key="whatsapp" className={`pd-text-link ${dark ? 'is-light' : ''}`} href={whatsappLink(copy[lang].whatsapp)} target="_blank" rel="noopener noreferrer">{t.ctaWhatsapp} <Arrow /></a>,
  }
  return <div className="pd-cta-row">{show.map(key => links[key])}</div>
}

export function TechStrip({ lang = 'en' }: { lang?: Lang }) {
  return <section className="pd-tech" aria-labelledby="tech-title">
    <div className="pd-container">
      <h2 id="tech-title">{copy[lang].home.techTitle}</h2>
      <ul>{technologies.map(({ name, logo, scale }) => <li key={name}><img src={logo} alt={name} loading="lazy" style={scale ? { transform: `scale(${scale})` } : undefined} /></li>)}</ul>
    </div>
  </section>
}

export function Steps({ items, dark }: { items: [string, string, string][]; dark?: boolean }) {
  return <ol className={`pd-steps ${dark ? 'is-dark' : ''}`} style={{ ['--cols' as string]: items.length }}>{items.map(([n, title, text]) => <li key={n}><span className="pd-num">{n}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
}

/** The closing conversion block on every page: headline, direct contact options, and the requirements form. */
export function ContactSection({ lang = 'en', headingLevel = 2 }: { lang?: Lang; headingLevel?: 1 | 2 }) {
  const t = copy[lang].cta
  const f = copy[lang].form
  const Heading = headingLevel === 1 ? 'h1' : 'h2'
  return <section className="pd-contact" id="contact" aria-labelledby="contact-title">
    <div className="pd-container pd-contact-grid">
      <div className="pd-contact-intro">
        <p className="pd-eyebrow">{t.eyebrow}</p>
        <Heading id="contact-title">{t.title}</Heading>
        <p className="pd-lead">{t.text}</p>
        <div className="pd-contact-options">
          <a className="pd-btn pd-btn-whatsapp" href={whatsappLink(copy[lang].whatsapp)} target="_blank" rel="noopener noreferrer">{t.whatsapp} · {company.phone}</a>
          <a className="pd-contact-line" href={`mailto:${company.email}`}>{company.email}</a>
          <p className="pd-contact-line">{f.hours}</p>
        </div>
        <address>
          <strong>{f.address}</strong>
          INFINITI OFFICE, Jl. Permata Regency, Jl. H. Kelik<br />RT.1/RW.6, Srengseng, Kembangan<br />West Jakarta, DKI Jakarta 11630
        </address>
      </div>
      <LeadForm lang={lang} />
    </div>
  </section>
}
