const brands = [
  'Hikvision', 'Dahua', 'Ubiquiti', 'TP-Link', 'Mikrotik',
  'Cisco', 'APC', 'Synology', 'WD Purple',
  // 'Dell', 'HP ProLiant',
  'Eaton', 'ESET', 'Safetica',
]

const duplicated = [...brands, ...brands]

export default function ClientLogos() {
  return (
    <div className="bg-white border-b border-slate-100">

      {/* Section label */}
      <div className="container pt-16 pb-6 reveal">
        <p className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-3">Our Partners</p>
        <h2
          className="font-black text-slate-900 leading-none"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          }}
        >
          Brand resmi yang kami supply &amp; pasangkan
        </h2>
      </div>

      {/* Marquee brand strip — taller for better visual weight */}
      <div className="overflow-hidden py-10 pb-16">
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-14 will-change-transform">
            {duplicated.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-base font-bold text-slate-500 uppercase tracking-widest shrink-0 px-3"
                style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)', lineHeight: '2.5' }}
              >
                {name}
                <span className="ml-12 text-primary-300">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
