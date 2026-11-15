import { commerceLogin } from '../lib/links'
import { copy, localize, type Lang } from '../i18n'

const amounts = [['46.700.000', ''], ['31.500.000', ''], ['', '22.700.000'], ['', '5.500.000'], ['', '50.000.000']]

export default function Home({ lang }: { lang: Lang }) {
  const t = copy[lang]
  const contact = localize('/contact', lang)
  return <main id="main-content" className="pd-home">
    <section className="pd-hero" aria-labelledby="hero-title">
      <div className="pd-hero-copy">
        <span className="pd-tag">{t.hero.tag}</span>
        <h1 id="hero-title">{t.hero.title}</h1>
        <p className="pd-lead">{t.hero.lead}</p>
        <div className="pd-actions"><a className="pd-button" href={contact}>{t.nav.sales}</a><a className="pd-button pd-button-outline" href={commerceLogin}>{t.nav.signIn}</a></div>
      </div>
      <figure className="pd-ledger" aria-label={`${t.ledger.caption} (${t.ledger.example})`}>
        <figcaption><strong>{t.ledger.caption}</strong><span>{t.ledger.example}</span></figcaption>
        <table>
          <thead><tr><th scope="col">{t.ledger.account}</th><th scope="col">{t.ledger.debit}</th><th scope="col">{t.ledger.credit}</th></tr></thead>
          <tbody>{t.ledger.rows.map((account, i) => <tr key={account}><th scope="row">{account}</th><td>{amounts[i][0]}</td><td>{amounts[i][1]}</td></tr>)}</tbody>
          <tfoot><tr><th scope="row">{t.ledger.total}</th><td>78.200.000</td><td>78.200.000</td></tr></tfoot>
        </table>
        <p className="pd-balanced">{t.ledger.balanced}</p>
      </figure>
    </section>

    <section className="pd-section" id="features" aria-labelledby="features-title">
      <p className="pd-eyebrow">{t.features.eyebrow}</p>
      <h2 id="features-title">{t.features.title}</h2>
      <div className="pd-cards">{t.features.items.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="pd-section pd-frost" id="sizes" aria-labelledby="sizes-title">
      <p className="pd-eyebrow">{t.sizes.eyebrow}</p>
      <h2 id="sizes-title">{t.sizes.title}</h2>
      <div className="pd-sizes">{t.sizes.items.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="pd-section" id="how-it-works" aria-labelledby="how-title">
      <p className="pd-eyebrow">{t.how.eyebrow}</p>
      <h2 id="how-title">{t.how.title}</h2>
      <ol className="pd-steps">{t.how.steps.map(([n, title, text]) => <li key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </section>

    <section className="pd-section pd-faq pd-frost" id="faq" aria-labelledby="faq-title">
      <div><p className="pd-eyebrow">{t.faq.eyebrow}</p><h2 id="faq-title">{t.faq.title}</h2></div>
      <div className="pd-faq-list">{t.faq.items.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: lang === 'id' ? 'id-ID' : 'en-ID', mainEntity: t.faq.items.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) }).replace(/</g, '\\u003c') }} />
    </section>

    <section className="pd-cta" aria-labelledby="cta-title">
      <h2 id="cta-title">{t.cta.title}</h2>
      <div className="pd-actions"><a className="pd-button pd-button-light" href={contact}>{t.nav.sales}</a><a className="pd-button pd-button-ghost" href={commerceLogin}>{t.nav.signIn}</a></div>
    </section>
  </main>
}
