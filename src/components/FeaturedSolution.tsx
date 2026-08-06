const features = [
  {
    emoji: '🖥️',
    title: 'Registri Aset IT',
    desc: 'Semua perangkat, lisensi, dan peralatan tercatat lengkap — siapa yang pegang, garansi sampai kapan, kapan diservis.',
  },
  {
    emoji: '📋',
    title: 'Library SOP',
    desc: 'Buat SOP sekali, assign ke tim, dan pantau progres. Staff baru langsung ikuti prosedur yang benar.',
  },
  {
    emoji: '⚡',
    title: 'Workflow Otomatis',
    desc: 'Approval, onboarding checklist, dan laporan rutin — otomatis berjalan tanpa perlu dikejar manual.',
  },
  {
    emoji: '📊',
    title: 'Dashboard Operasional',
    desc: 'Status IT, tiket terbuka, tugas jatuh tempo — satu layar, real-time, bisa dibuka dari mana saja.',
  },
  {
    emoji: '🎫',
    title: 'IT Helpdesk',
    desc: 'Staff ajukan tiket lewat portal. Anda lihat status dan waktu penyelesaian — tidak ada lagi chaos di WhatsApp group.',
  },
  {
    emoji: '🔔',
    title: 'Alert Kepatuhan',
    desc: 'Lisensi hampir habis, perawatan terlambat, pelanggaran kebijakan — semua terdeteksi otomatis sebelum jadi masalah.',
  },
]

export default function FeaturedSolution() {
  return (
    <section id="patuhdata-one" className="section bg-slate-50 border-y border-slate-100">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-700 mb-4">
              IT Platform
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl leading-tight" style={{fontWeight:900}}>
              PatuhData ONE —<br />platform operasional bisnis Anda.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Kebanyakan SME mengelola IT dengan spreadsheet, grup WhatsApp, dan sticky notes. PatuhData ONE memberikan satu tempat untuk aset, SOP, workflow, dan helpdesk — dirancang untuk bisnis 10–500 karyawan.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Tahu persis aset IT apa yang dimiliki dan di mana',
                'SOP dijalankan konsisten tanpa perlu dikejar',
                'Operasional kantor terlihat real-time oleh manajemen',
                'Masalah IT tercatat dan diselesaikan — tidak hilang di chat',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="shrink-0 text-primary-400 font-bold mt-0.5">—</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/6281903378000?text=Halo%20PatuhData%2C%20saya%20ingin%20minta%20demo%20PatuhData%20ONE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-primary-700 transition-colors"
              >
                Minta Demo
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
                Info Lebih Lanjut
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feat) => (
              <div key={feat.title} className="rounded-xl border border-slate-200 bg-white p-5 hover:border-primary-200 hover:shadow-card transition-all">
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
