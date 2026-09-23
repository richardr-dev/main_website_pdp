import Link from 'next/link'
import { site } from '@/data/site'
import { policyUpdated } from '@/data/policies'

export function PolicyPage({ title, intro, sections }: { title: string; intro: string; sections: {title: string; text: string}[] }) {
  return <main id="main">
    <section className="page-hero"><div className="shell"><span className="eyebrow">PATUHDATA · WEBSITE POLICIES</span><h1>{title}</h1><p className="lead">{intro}</p><p>Last updated: {policyUpdated}</p></div></section>
    <div className="shell section policy-layout">
      <nav className="policy-contents" aria-label="Policy contents"><strong>On this page</strong>{sections.map((section, i) => <a href={`#section-${i + 1}`} key={section.title}>{i + 1}. {section.title}</a>)}<a href="#policy-contact">Contact us</a></nav>
      <article className="policy-copy">
        {sections.map((section, i) => <section id={`section-${i + 1}`} key={section.title}><h2>{i + 1}. {section.title}</h2><p>{section.text}</p></section>)}
        <section id="policy-contact"><h2>Contact us</h2><p>{site.legalName}</p><address>{site.address}<br/><a href={`mailto:${site.email}`}>{site.email}</a><br/><a href="tel:+6281903378000">{site.phone}</a></address></section>
        <p className="policy-related"><Link href="/privacy">Privacy Policy</Link> · <Link href="/cookies">Cookies Policy</Link></p>
      </article>
    </div>
  </main>
}
