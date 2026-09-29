type Language = 'id' | 'en'

const examples = [
  {
    name: 'Veeam Instant Recovery',
    image: '/examples/veeam-instant-recovery.png', width: 720, height: 648,
    source: 'https://helpcenter.veeam.com/docs/vbr/userguide/instant_recovery_launch_vm.html?ver=13',
    credit: 'Veeam',
    id: 'Pilihan pemulihan ke VMware, Hyper-V, atau Microsoft Azure.',
    en: 'Recovery options for VMware, Hyper-V, or Microsoft Azure.',
  },
  {
    name: 'Synology Active Backup',
    image: '/examples/synology-abb-instant-restore.jpg', width: 760, height: 476,
    source: 'https://www.synology.com/en-uk/dsm/feature/active-backup-business/virtual-machine',
    credit: 'Synology Inc.',
    id: 'Pemilihan platform tujuan untuk memulihkan mesin virtual.',
    en: 'Select a destination platform to restore a virtual machine.',
  },
]

export default function RecoveryExample({ lang }: { lang: Language }) {
  const id = lang === 'id'
  return <section className="rl-section rl-restore-example" aria-labelledby="recovery-examples-title"><div className="rl-wrap">
    <p className="rl-eyebrow">{id ? 'BACKUP & PEMULIHAN' : 'BACKUP & RECOVERY'}</p>
    <h2 id="recovery-examples-title">{id ? 'Berbagai teknologi. Satu tujuan: pulih.' : 'Different technologies. One goal: recovery.'}</h2>
    <div className="rl-recovery-gallery">{examples.map(example => <article key={example.name}>
      <a href={example.source} target="_blank" rel="noopener noreferrer" aria-label={`${example.name} — ${id ? 'dokumentasi resmi' : 'official documentation'}`}><img src={example.image} width={example.width} height={example.height} loading="lazy" decoding="async" alt={`${example.name}: ${example[lang]}`} /></a>
      <div><h3>{example.name}</h3><p>{example[lang]}</p><a className="rl-text-link" href={example.source} target="_blank" rel="noopener noreferrer">{id ? 'Lihat panduan resmi' : 'View official guide'}</a><small>© {example.credit} · {id ? 'Contoh antarmuka vendor' : 'Vendor interface example'}</small></div>
    </article>)}</div>
    <details className="rl-case-details"><summary>{id ? 'Studi kasus Synology: Toyota Motor Vietnam' : 'Synology case study: Toyota Motor Vietnam'}</summary><div className="rl-simple-case">
      <div><p>{id ? 'Backup sistem kritis, perlindungan mesin virtual, dan salinan di lokasi lain dalam satu arsitektur pemulihan.' : 'Critical-system backups, virtual-machine protection, and offsite copies in one recovery architecture.'}</p><a className="rl-text-link" href="https://www.synology.com/en-global/company/case_study/Toyota" target="_blank" rel="noopener noreferrer">{id ? 'Baca studi kasus di Synology' : 'Read the case study at Synology'}</a><p className="rl-example-note">{id ? 'Studi kasus pelanggan Synology, bukan proyek PatuhData.' : 'A Synology customer case study, not a PatuhData project.'}</p></div>
      <figure><img src="/examples/synology-toyota-backup-topology.jpg" width="900" height="729" loading="lazy" decoding="async" alt={id ? 'Arsitektur backup Toyota Motor Vietnam dari Synology' : 'Toyota Motor Vietnam backup architecture published by Synology'} /><figcaption>© Synology Inc.</figcaption></figure>
    </div></details>
  </div></section>
}
