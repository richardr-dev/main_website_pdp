import { useLang } from '../contexts/LanguageContext'

const t = {
  id: {
    badge1: 'Business Control Platform',
    badge2: 'Segera Hadir',
    headline: (
      <>PatuhData ONE —<br />satu tempat untuk tahu bisnis Anda bisa pulih.</>
    ),
    body: 'PatuhData ONE sedang kami kembangkan sebagai control center berbasis software untuk manajemen — status backup, waktu backup sukses terakhir, hasil uji restore, sistem yang terlindungi, kepatuhan RPO/RTO, insiden, dokumentasi pemulihan, dan pemilik aset, semua dalam satu dashboard.',
    points: [
      'Tahu kapan backup terakhir berhasil, tanpa harus tanya tim IT',
      'Lihat status uji restore & kepatuhan RPO/RTO per sistem',
      'Insiden dan dokumentasi pemulihan tercatat rapi, bukan di chat',
      'Satu tampilan untuk manajemen, bukan tersebar di banyak konsol',
    ],
    cta1: 'Daftar untuk Diinformasikan',
    cta2: 'Info Lebih Lanjut',
    features: [
      { num: '01', title: 'Status Backup', desc: 'Kapan backup terakhir berhasil, untuk setiap sistem yang dilindungi — tanpa harus tanya tim IT.' },
      { num: '02', title: 'Status Uji Restore', desc: 'Hasil restore test tercatat dan terlihat — data Anda terbukti bisa dipulihkan, bukan asumsi.' },
      { num: '03', title: 'Kepatuhan RPO/RTO', desc: 'Target pemulihan tercapai atau tidak, terlihat jelas per sistem, siap dipakai untuk audit.' },
      { num: '04', title: 'Log Insiden', desc: 'Insiden backup & recovery tercatat lengkap dengan histori — tidak hilang di grup WhatsApp.' },
      { num: '05', title: 'Dokumentasi Pemulihan', desc: 'Runbook dan prosedur recovery tersimpan rapi, siap diakses saat benar-benar dibutuhkan.' },
      { num: '06', title: 'Pemilik Aset', desc: 'Setiap sistem yang dilindungi punya penanggung jawab yang jelas — bukan tanggung jawab siapa-siapa.' },
    ],
  },
  en: {
    badge1: 'Business Control Platform',
    badge2: 'Coming Soon',
    headline: (
      <>PatuhData ONE —<br />one place to know if your business can recover.</>
    ),
    body: 'PatuhData ONE is currently in development as a software-based control center for management — backup status, last successful backup time, restore-test results, protected systems, RPO/RTO compliance, incidents, recovery documentation, and asset owners, all in one dashboard.',
    points: [
      'Know when the last backup succeeded, without asking IT',
      'See restore-test status & RPO/RTO compliance per system',
      'Incidents and recovery documentation logged properly, not lost in chat',
      'One view for management, instead of scattered across consoles',
    ],
    cta1: 'Register to Be Notified',
    cta2: 'Learn More',
    features: [
      { num: '01', title: 'Backup Status', desc: 'When the last backup succeeded, for every protected system — without having to ask IT.' },
      { num: '02', title: 'Restore-Test Status', desc: 'Restore test results are logged and visible — proof your data can be recovered, not an assumption.' },
      { num: '03', title: 'RPO/RTO Compliance', desc: 'Whether recovery targets are met is clear per system, ready for audit.' },
      { num: '04', title: 'Incident Log', desc: 'Backup & recovery incidents logged in full with history — not lost in a WhatsApp group.' },
      { num: '05', title: 'Recovery Documentation', desc: 'Runbooks and recovery procedures stored properly, ready to access when it actually matters.' },
      { num: '06', title: 'Asset Owners', desc: "Every protected system has a clear owner — not everyone's responsibility and no one's." },
    ],
  },
}

export default function FeaturedSolution() {
  const { lang } = useLang()
  const tx = t[lang]
  return (
    <section id="patuhdata-one" className="section bg-slate-50 border-y border-slate-100">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-700">
                {tx.badge1}
              </span>
              <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-700">
                {tx.badge2}
              </span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl leading-tight" style={{fontWeight:900}}>
              {tx.headline}
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              {tx.body}
            </p>
            <ul className="mt-6 space-y-3">
              {tx.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="shrink-0 text-primary-400 font-bold mt-0.5">—</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/6281903378000?text=Halo%20PatuhData%2C%20saya%20ingin%20didaftarkan%20untuk%20info%20Patuhdata%20ONE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-primary-700 transition-colors"
              >
                {tx.cta1}
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
                {tx.cta2}
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {tx.features.map((feat) => (
              <div key={feat.title} className="rounded-xl border border-slate-200 bg-white p-5 hover:border-primary-200 hover:shadow-card transition-all">
                <p className="text-xs font-black text-primary-600 mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.05em' }}>{feat.num}</p>
                <p className="text-sm font-bold text-slate-900 mb-1">{feat.title}</p>
                <p className="text-xs leading-relaxed text-slate-500">{feat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
