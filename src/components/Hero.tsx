import ParticleCanvas from './ParticleCanvas'
import { useLang } from '../contexts/LanguageContext'

const t = {
  id: {
    badge: 'IT Partner untuk SME — Jakarta & Jabodetabek',
    line1: 'Pasang.', line2: 'Lindungi.', line3: 'Kelola.',
    body: 'PT PatuhData Solusi Nusantara — satu mitra untuk semua kebutuhan IT kantor Anda. Supply hardware, instalasi jaringan, CCTV, server, dan maintenance.',
    cta1: 'Mulai Konsultasi →', cta2: 'Jelajahi Layanan',
    stats: [
      { num: '2 Tahun', label: 'Garansi Hardware' },
      { num: 'Gratis', label: 'Konsultasi Awal' },
      { num: '4 Jam', label: 'Respons Cepat' },
      { num: 'PT', label: 'Berlegalitas' },
    ],
  },
  en: {
    badge: 'IT Partner for SMEs — Jakarta & Greater Jakarta',
    line1: 'Install.', line2: 'Protect.', line3: 'Operate.',
    body: 'PT PatuhData Solusi Nusantara — one partner for all your office IT needs. Hardware supply, network installation, CCTV, servers, and maintenance.',
    cta1: 'Start Consultation →', cta2: 'Explore Services',
    stats: [
      { num: '2 Years', label: 'Hardware Warranty' },
      { num: 'Free', label: 'Initial Consultation' },
      { num: '4 Hours', label: 'Fast Response' },
      { num: 'PT', label: 'Legally Registered' },
    ],
  },
}

export default function Hero() {
  const { lang } = useLang()
  const tx = t[lang]
  return (
    <section
      className="relative pt-16 overflow-hidden"
      style={{ background: '#080d1a', minHeight: '100svh' }}
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Blue glow top-right */}
      <div
        className="absolute top-0 right-0 w-2/3 h-2/3 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 85% 20%, rgba(37,99,235,0.2) 0%, transparent 60%)',
        }}
      />

      <div className="relative container w-full pt-20 pb-12">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-10 animate-fade-in"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="h-2 w-2 rounded-full bg-blue-400 shrink-0 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {tx.badge}
          </span>
        </div>

        {/* Massive headline — full width like reference */}
        <div
          className="mb-8 animate-fade-in"
          style={{
            animationDelay: '0.15s',
            fontFamily: "'Barlow Condensed', sans-serif",
            lineHeight: 0.9,
          }}
        >
          <p className="font-black text-white" style={{ fontSize: 'clamp(4rem, 10vw, 10.5rem)' }}>
            {tx.line1}
          </p>
          <p
            className="font-black"
            style={{
              fontSize: 'clamp(4rem, 10vw, 10.5rem)',
              WebkitTextStroke: '2px rgba(255,255,255,0.45)',
              color: 'transparent',
            }}
          >
            {tx.line2}
          </p>
          <p className="font-black text-white" style={{ fontSize: 'clamp(4rem, 10vw, 10.5rem)' }}>
            {tx.line3}
            <span
              className="inline-block bg-cyan-400 ml-3 align-middle"
              style={{ width: '0.42em', height: '0.42em', marginBottom: '0.08em' }}
            />
          </p>
        </div>

        {/* Body copy */}
        <p
          className="text-base leading-relaxed max-w-lg mb-8 animate-fade-in"
          style={{ color: 'rgba(255,255,255,0.42)', animationDelay: '0.28s' }}
        >
          {tx.body}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-4 mb-10 animate-fade-in"
          style={{ animationDelay: '0.38s' }}
        >
          <a
            href="https://wa.me/6281903378000?text=Halo%20PatuhData%2C%20saya%20ingin%20konsultasi%20kebutuhan%20IT%20kantor%20saya"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary-600 px-9 py-3.5 text-sm font-bold text-white hover:bg-primary-500 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-900/60"
          >
            {tx.cta1}
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/20 px-9 py-3.5 text-sm font-semibold text-white/60 hover:border-white/40 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            {tx.cta2}
          </a>
        </div>

        {/* Particle canvas visualization — full width, like the reference */}
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <ParticleCanvas />
        </div>

        {/* Stats row below canvas */}
        <div
          className="flex flex-wrap gap-10 border-t mt-8 pt-8 animate-fade-in"
          style={{ borderColor: 'rgba(255,255,255,0.07)', animationDelay: '0.6s' }}
        >
          {tx.stats.map((s) => (
            <div key={s.label}>
              <p className="text-xl font-black text-white">{s.num}</p>
              <p className="text-xs font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
