const brands = [
  'Hikvision', 'Dahua', 'Ubiquiti', 'TP-Link', 'Mikrotik',
  'Cisco', 'APC', 'Synology', 'WD Purple', 'Dell', 'HP ProLiant', 'Eaton',
  'ESET', 'Safetica',
]

const stats = [
  { value: '50+', label: 'Proyek Selesai' },
  { value: '2 Thn', label: 'Garansi Hardware' },
  { value: 'Gratis', label: 'Konsultasi Awal' },
  { value: 'Jakarta', label: 'Tim Lokal' },
]

const duplicated = [...brands, ...brands]

export default function ClientLogos() {
  return (
    <div className="bg-white border-b border-slate-100">

      {/* Marquee brand strip */}
      <div className="border-y border-slate-100 overflow-hidden py-5 bg-slate-50">
        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
          Brand resmi yang kami supply & pasangkan
        </p>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-10 will-change-transform">
            {duplicated.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-sm font-semibold text-slate-500 uppercase tracking-widest shrink-0 px-2"
              >
                {name}
                <span className="ml-10 text-primary-300">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="container py-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100">
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-6 py-8 text-center group hover:bg-slate-50 transition-colors"
            >
              <p
                className="text-3xl font-black text-slate-900 group-hover:text-primary-600 transition-colors"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {s.value}
              </p>
              <p className="mt-1.5 text-xs text-slate-500 font-medium uppercase tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
