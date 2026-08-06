export default function BottomCTA() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: '#080d1a' }}
    >
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.18) 0%, transparent 60%)',
        }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative container text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-5">
          Siap Mulai?
        </p>
        <h2
          className="font-black text-white leading-none mb-6"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(2.8rem, 6vw, 6rem)',
          }}
        >
          Konsultasikan Kebutuhan IT<br />Kantor Anda Sekarang.
        </h2>
        <p className="text-base max-w-md mx-auto mb-12" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Konsultasi gratis, penawaran tertulis dalam 24 jam. Solusi IT untuk bisnis Jakarta dan Jabodetabek.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/6281903378000?text=Halo%20PatuhData%2C%20saya%20ingin%20konsultasi%20kebutuhan%20IT%20kantor%20saya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary-600 px-9 py-4 text-sm font-bold text-white hover:bg-primary-500 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-900/50"
          >
            Chat via WhatsApp →
          </a>
          <a
            href="tel:+6281903378000"
            className="inline-flex items-center rounded-full border border-white/20 px-9 py-4 text-sm font-semibold text-white/70 hover:border-white/40 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            +62 819 0337 8000
          </a>
        </div>
      </div>
    </section>
  )
}
