import type { Language } from '../data/recoveryCopy'
import { pdpInsightPaths, pdpRecoveryInsight } from '../data/pdpRecoveryInsight'

export default function RecoveryInsights({ lang }: { lang: Language }) {
  const id = lang === 'id'
  const featured = pdpRecoveryInsight[lang]
  const articles = [
    ['/resources/can-you-restore-your-backup', id ? 'Backup berhasil. Sudah pernah diuji pemulihannya?' : 'Your backup succeeded. Can you actually restore it?', id ? 'Cara menguji pemulihan hingga alur kerja bisnis dapat digunakan kembali.' : 'How to test recovery until a business workflow can run again.'],
    ['/resources/rpo-rto-business-guide', id ? 'RPO dan RTO dalam bahasa bisnis' : 'RPO and RTO in business terms', id ? 'Pahami target kehilangan data dan waktu berhenti yang dapat diterima.' : 'Understand acceptable data loss and downtime targets.'],
    ['/insights/uu-pdp-data-residency', id ? 'UU PDP dan lokasi penyimpanan data' : 'UU PDP and data residency', id ? 'Pertimbangan lokasi data, transfer lintas negara, dan kesiapan operasional.' : 'Consider data location, cross-border transfers, and operational readiness.'],
    ['/insights/managed-it', id ? 'Kapan bisnis membutuhkan layanan IT terkelola?' : 'When does a business need managed IT?', id ? 'Memahami tanggung jawab, dukungan, dan kebutuhan operasional rutin.' : 'Understand responsibility, support, and ongoing operational needs.'],
  ]
  return <section id="resources" className="rl-section rl-wrap rl-insights" aria-labelledby="insights-heading"><p className="rl-eyebrow">INSIGHTS & BLOG</p><h2 id="insights-heading">{id ? 'Pahami risikonya. Siapkan langkahnya.' : 'Understand the risk. Prepare your next step.'}</h2><p className="rl-section-intro">{id ? 'Panduan praktis tentang pemulihan, pelindungan data, dan kesiapan bisnis.' : 'Practical guides to recovery, data protection, and business readiness.'}</p><article className="rl-insight-feature"><div><span className="rl-tag">{id ? 'ARTIKEL BARU · UU PDP' : 'NEW ARTICLE · UU PDP'}</span><h3><a href={pdpInsightPaths[lang]}>{featured.title}</a></h3><p>{featured.summary}</p></div><a className="rl-button" href={pdpInsightPaths[lang]}>{id ? 'Baca artikel' : 'Read article'} <span aria-hidden="true">↗</span></a></article><div className="rl-grid rl-two rl-insight-grid">{articles.map(([href, title, summary]) => <article className="rl-insight-card" key={href}><span className="rl-eyebrow">{id ? 'PANDUAN · BAHASA INGGRIS' : 'PRACTICAL GUIDE'}</span><h3><a href={href} hrefLang="en">{title}</a></h3><p>{summary}</p><a className="rl-text-link" href={href} hrefLang="en">{id ? 'Baca dalam bahasa Inggris' : 'Read the guide'} <span aria-hidden="true">↗</span></a></article>)}</div></section>
}
