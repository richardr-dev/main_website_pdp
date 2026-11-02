import { lakuin, serviceArea } from '../data/site'
import { copy } from '../data/copy'
import { Arrow, ContactSection, DivisionCards, PageHero, SectionHead, Steps } from '../components/Blocks'

const values = [
  ['Accountability', 'One team owns the outcome, from quotation to long-term support.'],
  ['Practicality', 'We recommend what your operation needs and can maintain.'],
  ['Transparency', 'Scope, schedules, prices, and service levels are agreed in writing.'],
  ['Continuity', 'We plan for maintenance, backups, and upgrades, not just installation day.'],
]

export default function AboutPage() {
  const t = copy.en.home
  return <main id="main-content">
    <PageHero crumbs={[['Home', '/'], ['About']]} eyebrow="ABOUT PATUHDATA" title="Your trusted technology and infrastructure partner." lead="PatuhData helps Indonesian businesses acquire, implement, integrate, and maintain technology infrastructure through one accountable partner." image="/images/office-interior.jpg" actions={<a className="pd-btn" href="/contact">Discuss Your Requirements <Arrow /></a>} />

    <section className="pd-section" aria-labelledby="who-title">
      <div className="pd-container pd-split">
        <div><p className="pd-eyebrow">WHO WE ARE</p><h2 id="who-title">Technology. Infrastructure. Business Continuity.</h2></div>
        <div className="pd-prose">
          <p>PT PatuhData Solusi Nusantara is a Jakarta-based technology solutions company. We supply business technology, implement IT infrastructure and business systems, and support them for the long term.</p>
          <p>Most businesses buy hardware from one vendor, hire another to install it, and call a third when something breaks. We bring those responsibilities together, so there is one partner accountable for whether your technology actually keeps the business running.</p>
          <p>We work with trading and distribution companies, warehousing and fulfillment operators, manufacturers, multi-branch businesses, and professional offices across {serviceArea}.</p>
        </div>
      </div>
    </section>

    <section className="pd-section pd-tint" aria-labelledby="divisions-title">
      <div className="pd-container">
        <SectionHead id="divisions-title" eyebrow="WHAT WE DO" title={t.whatTitle} intro={t.whatIntro} />
        <DivisionCards />
      </div>
    </section>

    <section className="pd-section" aria-labelledby="values-title">
      <div className="pd-container">
        <SectionHead id="values-title" eyebrow="HOW WE OPERATE" title="Principles behind every engagement." />
        <div className="pd-grid-4">{values.map(([title, text]) => <article key={title} className="pd-tile pd-tile-line"><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section className="pd-section pd-dark" aria-labelledby="how-title">
      <div className="pd-container">
        <SectionHead id="how-title" eyebrow={t.howEyebrow} title={t.howTitle} />
        <Steps items={t.how as [string, string, string][]} dark />
      </div>
    </section>

    <section className="pd-section" aria-labelledby="platform-title">
      <div className="pd-container pd-split">
        <div><p className="pd-eyebrow">OUR OWN PLATFORM</p><h2 id="platform-title">We build and run systems ourselves.</h2></div>
        <div className="pd-proof">
          <p>{lakuin.name} is an online store platform for Indonesian sellers that we designed, built, and operate, with payments, shipping, multi-warehouse inventory, marketplace synchronization, and accounting. Running our own platform every day shapes how we implement and support systems for clients.</p>
          <a className="pd-text-link" href={lakuin.url} target="_blank" rel="noreferrer">Visit lakuin.store <Arrow /></a>
        </div>
      </div>
    </section>

    <section className="pd-section pd-tint" aria-labelledby="company-title">
      <div className="pd-container">
        <SectionHead id="company-title" eyebrow="COMPANY DETAILS" title="Working with PatuhData." />
        <dl className="pd-details">
          <div><dt>Legal entity</dt><dd>PT PatuhData Solusi Nusantara</dd></div>
          <div><dt>Office</dt><dd>INFINITI OFFICE, Jl. Permata Regency, Jl. H. Kelik, Kembangan, West Jakarta 11630</dd></div>
          <div><dt>Service area</dt><dd>{serviceArea}</dd></div>
          <div><dt>Commercial terms</dt><dd>Formal quotations, purchase orders, invoices, and tax invoices</dd></div>
        </dl>
      </div>
    </section>

    <ContactSection />
  </main>
}
