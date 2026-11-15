import { Fragment, type ReactNode } from 'react'
import { legal, type LegalKey } from '../content/legal'
import { localize, type Lang } from '../i18n'

/** Renders [text](href) as a link and **text** as bold; site paths follow the page language. */
function rich(text: string, lang: Lang): ReactNode {
  return text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/).map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) return <a key={i} href={link[2].startsWith('/') ? localize(link[2], lang) : link[2]}>{link[1]}</a>
    const bold = part.match(/^\*\*([^*]+)\*\*$/)
    if (bold) return <strong key={i}>{bold[1]}</strong>
    return <Fragment key={i}>{part}</Fragment>
  })
}

export default function LegalPage({ doc, lang }: { doc: LegalKey; lang: Lang }) {
  const page = legal[doc][lang]
  return <main id="main-content">
    <section className="pd-legal-hero"><p className="pd-eyebrow">{page.kicker}</p><h1>{page.title}</h1><p>{page.updated}</p></section>
    <article className="pd-legal">
      {page.sections.map(section => <section key={section.h}>
        <h2>{section.h}</h2>
        {section.p?.map((text, i) => <p key={i}>{rich(text, lang)}</p>)}
        {section.list && <ul>{section.list.map((text, i) => <li key={i}>{rich(text, lang)}</li>)}</ul>}
        {section.after?.map((text, i) => <p key={i}>{rich(text, lang)}</p>)}
      </section>)}
    </article>
  </main>
}
