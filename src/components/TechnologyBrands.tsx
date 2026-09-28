import { technologyLogos } from '../data/technologyBrands'
import type { Language } from '../data/recoveryCopy'

export default function TechnologyBrands({ lang }: { lang: Language }) {
  const id = lang === 'id'
  return <section className="rl-section rl-wrap rl-technology" aria-labelledby="technology-heading">
    <p className="rl-eyebrow">{id ? 'EKOSISTEM TEKNOLOGI' : 'TECHNOLOGY ECOSYSTEM'}</p>
    <h2 id="technology-heading">{id ? 'Teknologi mengikuti kebutuhan pemulihan.' : 'Technology follows the recovery requirement.'}</h2>
    <p className="rl-section-intro">{id ? 'Target waktu pulih dan kehilangan data (RTO/RPO), arsitektur sistem, risiko, lingkungan yang sudah digunakan, dan anggaran menentukan pilihan teknologi.' : 'Recovery-time and data-loss targets (RTO/RPO), system architecture, risk, existing environment, and budget determine technology selection.'}</p>
    <ul className="rl-technology-logos" aria-label={id ? 'Merek teknologi' : 'Technology brands'}>
      {technologyLogos.map(({ name, src }) => <li key={name}><img src={src} alt={name} width="144" height="56" loading="lazy" decoding="async" /><span aria-hidden="true">{name}</span></li>)}
    </ul>
  </section>
}
