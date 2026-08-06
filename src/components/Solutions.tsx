import { solutionCategories } from '../data/solutions'

export default function Solutions() {
  return (
    <div className="min-h-screen">

      {/* Page Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #080d1a 0%, #0d1b3e 60%, #080d1a 100%)' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(56,139,253,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,139,253,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="container relative">
          <div className="max-w-3xl">
            <p
              className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-400 mb-6 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
              Solusi Teknologi Bisnis
            </p>
            <h1
              className="font-black text-white leading-none mb-6 animate-fade-in"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                animationDelay: '0.2s',
              }}
            >
              Dari Infrastruktur<br />
              <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)', color: 'transparent' }}>
                ke Kecerdasan Buatan.
              </span>
            </h1>
            <p
              className="text-base text-slate-400 max-w-xl leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.35s' }}
            >
              Lima kategori solusi. Satu mitra. Semua kebutuhan teknologi bisnis Anda dari pasang jaringan hingga deploy AI agent.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="section bg-white">
        <div className="container">
          <div className="space-y-6">
            {solutionCategories.map((cat) => (
              <div
                key={cat.slug}
                className="rounded-2xl border border-slate-200 overflow-hidden hover:border-primary-200 transition-colors duration-300 reveal"
              >
                {/* Card header */}
                <div className="px-8 pt-8 pb-6 border-b border-slate-100">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span
                      className="text-sm font-black text-primary-600"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.05em' }}
                    >
                      {cat.number}
                    </span>
                    <div className="h-9 w-9 rounded-xl bg-primary-600 flex items-center justify-center shrink-0">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                  <h2
                    className="font-black text-slate-900 leading-none mb-2"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                    }}
                  >
                    {cat.title}
                  </h2>
                  <p className="text-sm text-slate-500 max-w-xl">{cat.subtitle}</p>
                </div>

                {/* Sub-service rows */}
                <div>
                  {cat.items.map((item, idx) => (
                    <a
                      key={item.slug}
                      href={`#/solutions/${item.slug}`}
                      className={`flex items-center justify-between px-8 py-5 group hover:bg-primary-50 transition-colors duration-200 ${
                        idx < cat.items.length - 1 ? 'border-b border-slate-100' : ''
                      }`}
                    >
                      <div>
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-primary-700 transition-colors">
                          {item.name}
                        </span>
                        <span className="hidden sm:inline ml-3 text-xs text-slate-400 group-hover:text-primary-400 transition-colors">
                          {item.tagline}
                        </span>
                      </div>
                      <div className="shrink-0 h-7 w-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-primary-400 group-hover:text-primary-600 group-hover:bg-primary-600 group-hover:border-primary-600 transition-all duration-200">
                        <svg className="h-3 w-3 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#080d1a' }}>
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(56,139,253,0.15) 0%, transparent 70%)' }}
        />
        <div className="container relative text-center">
          <h2
            className="font-black text-white leading-none mb-4 reveal"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
          >
            Tidak tahu harus mulai dari mana?
          </h2>
          <p className="text-base text-slate-400 max-w-md mx-auto mb-8 reveal reveal-delay-1">
            Konsultasi gratis 30 menit. Kami assessment kebutuhan dan rekomendasikan solusi yang tepat.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 reveal reveal-delay-2">
            <a
              href="https://wa.me/6281903378000?text=Halo%20PatuhData%2C%20saya%20ingin%20konsultasi%20gratis%20solusi%20IT."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary-600 px-9 py-4 text-sm font-bold text-white hover:bg-primary-500 transition-all duration-200 hover:-translate-y-0.5"
            >
              Konsultasi Gratis →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/15 px-9 py-4 text-sm font-bold text-white/70 hover:bg-white/5 transition-all duration-200"
            >
              Kirim Pesan
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
