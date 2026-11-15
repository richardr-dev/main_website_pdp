import { commerceLogin } from '../lib/links'

const features = [
  ['Invoicing', 'Issue invoices, track what is paid and what is due, and keep every document in one record.'],
  ['Ledgers', 'Journals, general ledger, and balances that stay in step with every transaction you post.'],
  ['Tax reports', 'Prepare tax reports from the same books, with e-Faktur sync built in.'],
]

const steps = [
  ['01', 'Talk to sales', 'Tell us about your company. We show you the product and set up your account.'],
  ['02', 'Set up your books', 'Add your chart of accounts, customers, and opening balances. Our team can help you move over.'],
  ['03', 'Invoice, post, report', 'Run daily bookkeeping in one place and close each period with reports ready for tax.'],
]

export const faqs = [
  ['Who is PatuhData Accounting for?', 'Businesses in Indonesia that want invoicing, bookkeeping, and tax reporting in one system instead of scattered spreadsheets.'],
  ['Does it work with e-Faktur?', 'Yes. e-Faktur sync is built in, so tax invoices and tax reports come from the same books as everything else.'],
  ['How do I get started?', 'Contact our sales team. We set up your account and help you add your company and opening balances.'],
  ['Who is behind PatuhData?', 'PT PatuhData Solusi Nusantara, a software company based in Jakarta, Indonesia.'],
]

const ledger = [
  ['Cash & bank', '46.700.000', ''],
  ['Accounts receivable', '31.500.000', ''],
  ['Accounts payable', '', '22.700.000'],
  ['VAT output', '', '5.500.000'],
  ['Revenue', '', '50.000.000'],
]

export default function Home() {
  return <main id="main-content" className="pd-home">
    <section className="pd-hero" aria-labelledby="hero-title">
      <div className="pd-hero-copy">
        <span className="pd-tag">New · e-Faktur sync</span>
        <h1 id="hero-title">Books that balance, wherever you do business.</h1>
        <p className="pd-lead">Invoicing, ledgers and tax reports in one place.</p>
        <div className="pd-actions"><a className="pd-button" href="/contact">Contact sales</a><a className="pd-button pd-button-outline" href={commerceLogin}>Sign in</a></div>
      </div>
      <figure className="pd-ledger" aria-label="Example trial balance">
        <figcaption><strong>Trial balance</strong><span>Example</span></figcaption>
        <table>
          <thead><tr><th scope="col">Account</th><th scope="col">Debit</th><th scope="col">Credit</th></tr></thead>
          <tbody>{ledger.map(([account, debit, credit]) => <tr key={account}><th scope="row">{account}</th><td>{debit}</td><td>{credit}</td></tr>)}</tbody>
          <tfoot><tr><th scope="row">Total</th><td>78.200.000</td><td>78.200.000</td></tr></tfoot>
        </table>
        <p className="pd-balanced">Balanced</p>
      </figure>
    </section>

    <section className="pd-section" id="features" aria-labelledby="features-title">
      <p className="pd-eyebrow">Features</p>
      <h2 id="features-title">Everything your books need, in one place.</h2>
      <div className="pd-cards">{features.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="pd-section pd-frost" id="how-it-works" aria-labelledby="how-title">
      <p className="pd-eyebrow">How it works</p>
      <h2 id="how-title">From first call to your first report.</h2>
      <ol className="pd-steps">{steps.map(([n, title, text]) => <li key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </section>

    <section className="pd-section pd-faq" id="faq" aria-labelledby="faq-title">
      <div><p className="pd-eyebrow">FAQ</p><h2 id="faq-title">Questions, answered.</h2></div>
      <div className="pd-faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) }).replace(/</g, '\\u003c') }} />
    </section>

    <section className="pd-cta" aria-labelledby="cta-title">
      <h2 id="cta-title">Start keeping books that balance.</h2>
      <div className="pd-actions"><a className="pd-button pd-button-light" href="/contact">Contact sales</a><a className="pd-button pd-button-ghost" href={commerceLogin}>Sign in</a></div>
    </section>
  </main>
}
