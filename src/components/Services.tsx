const services = [
  {
    title: 'Business Continuity & Disaster Recovery',
    desc: 'Backup Veeam terenkripsi & immutable, DRaaS dengan failover ke cloud, DR plan, dan BCP. Data Anda selalu bisa dipulihkan.',
    badge: 'CONTINUITY & DR',
    badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  },
  {
    title: 'Cybersecurity',
    desc: 'Sophos firewall & network security — perlindungan jaringan kantor dari gerbang utamanya.',
    badge: 'SECURITY',
    badgeColor: 'text-rose-700 bg-rose-50 border-rose-200',
  },
  {
    title: 'Cloud & Google Workspace',
    desc: 'Migrasi dan setup infrastruktur cloud di AWS, GCP, dan Azure, plus Google Workspace sebagai reseller resmi.',
    badge: 'CLOUD',
    badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
  },
  {
    title: 'Managed IT Services',
    desc: 'Monitoring proaktif 24/7, patch management, dan perawatan rutin. Tim IT on-demand tanpa rekrut karyawan.',
    badge: 'MANAGED IT',
    badgeColor: 'text-violet-700 bg-violet-50 border-violet-200',
  },
]

const tickerItems = [
  { text: 'BUSINESS CONTINUITY', outline: false },
  { text: 'VEEAM BACKUP', outline: true },
  { text: 'DISASTER RECOVERY · DRAAS', outline: false },
  { text: 'SOPHOS FIREWALL', outline: true },
  { text: 'DATA RESILIENCE', outline: false },
  { text: 'MANAGED IT', outline: true },
  { text: 'CLOUD MIGRATION', outline: false },
  { text: 'GOOGLE WORKSPACE', outline: true },
]
const tickerDuplicated = [...tickerItems, ...tickerItems]

export default function Services() {
  return (
    <>
      {/* Blue marquee ticker strip — alternating solid / outline text */}
      <div className="bg-primary-600 overflow-hidden py-5">
        <div className="flex animate-marquee-fast whitespace-nowrap items-center">
          {tickerDuplicated.map((item, i) => (
            <span
              key={`${item.text}-${i}`}
              className="font-black uppercase shrink-0 px-2 flex items-center gap-5"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                letterSpacing: '0.08em',
                ...(item.outline
                  ? {
                      WebkitTextStroke: '1.5px rgba(255,255,255,0.9)',
                      color: 'transparent',
                    }
                  : { color: '#ffffff' }),
              }}
            >
              {item.text}
              <span
                className="shrink-0 text-primary-300 ml-2"
                style={{ fontSize: '0.7em', WebkitTextStroke: 0, color: 'rgba(255,255,255,0.5)' }}
              >
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      <section id="services" className="section bg-white border-b border-slate-100 relative overflow-hidden">
        {/* Diagonal stripe overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(56,139,253,0.035) 20px, rgba(56,139,253,0.035) 21px)',
          }}
        />
        <div className="container relative">
          <div className="mb-14 reveal">
            <p className="label mb-3">Layanan Kami</p>
            <h2
              className="font-black text-slate-900 leading-none"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
              }}
            >
              Bisnis Anda tetap jalan,<br />apa pun yang terjadi.
            </h2>
            <p className="mt-5 text-base text-slate-500 max-w-xl">
              Backup & disaster recovery, cybersecurity, cloud, dan managed IT services — semua dari satu partner lokal yang Anda bisa hubungi langsung.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 reveal reveal-delay-2">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group bg-white p-7 hover:bg-primary-600 transition-all duration-300 flex flex-col cursor-default"
              >
                <span
                  className={`inline-block self-start rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest border mb-4 transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white group-hover:border-white/20 ${svc.badgeColor}`}
                >
                  {svc.badge}
                </span>
                <h3 className="text-sm font-bold text-slate-900 leading-snug mb-2 group-hover:text-white transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
