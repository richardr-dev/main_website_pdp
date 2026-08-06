import { findSolutionBySlug } from '../data/solutions'

const waBase = 'https://wa.me/6281903378000?text='

export default function SolutionDetail({ slug }: { slug: string }) {
  const found = findSolutionBySlug(slug)

  if (!found) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Solusi tidak ditemukan.</p>
          <a href="#/solutions" className="text-primary-600 font-semibold hover:underline">
            ← Kembali ke Solusi
          </a>
        </div>
      </div>
    )
  }

  const { category, item } = found

  return (
    <div className="min-h-screen">

      {/* Hero */}
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
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 animate-fade-in" style={{ animationDelay: '0.05s' }}>
            <a href="#/solutions" className="hover:text-primary-400 transition-colors">Solusi</a>
            <span>/</span>
            <span className="text-slate-400">{category.title}</span>
            <span>/</span>
            <span className="text-slate-300">{item.name}</span>
          </div>

          <div className="max-w-3xl">
            <div
              className="flex items-center gap-3 mb-5 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <span
                className="text-xs font-black text-primary-400 tracking-widest uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {category.number} — {category.title}
              </span>
            </div>
            <h1
              className="font-black text-white leading-none mb-5 animate-fade-in"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                animationDelay: '0.2s',
              }}
            >
              {item.name}
            </h1>
            <p
              className="text-lg text-primary-300 font-medium mb-4 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              {item.tagline}
            </p>
            <p
              className="text-base text-slate-400 max-w-xl leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              {item.description}
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables + For Who */}
      <section className="section bg-white border-b border-slate-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-px bg-slate-100">

            {/* Deliverables */}
            <div className="bg-white p-10 reveal">
              <p className="text-xs font-black uppercase tracking-widest text-primary-600 mb-6">Yang Anda Dapatkan</p>
              <ul className="space-y-4">
                {item.deliverables.map((d, i) => (
                  <li key={d} className="flex items-start gap-4">
                    <span
                      className="shrink-0 text-slate-200 font-black leading-none select-none"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.5rem' }}
                    >
                      0{i + 1}
                    </span>
                    <span className="text-sm text-slate-700 leading-relaxed pt-0.5">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Who */}
            <div className="bg-white p-10 reveal reveal-delay-1">
              <p className="text-xs font-black uppercase tracking-widest text-primary-600 mb-6">Untuk Siapa</p>
              <ul className="space-y-3">
                {item.forWho.map((w) => (
                  <li key={w} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="shrink-0 h-1.5 w-1.5 rounded-full bg-primary-400" />
                    {w}
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Mulai dengan konsultasi gratis</p>
                <a
                  href={waBase + encodeURIComponent(item.waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-primary-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-500 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Hubungi via WhatsApp →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Other solutions in same category */}
      <section className="section bg-slate-50 border-b border-slate-100">
        <div className="container">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 reveal">
            Solusi lain dalam {category.title}
          </p>
          <div className="space-y-0 border border-slate-200 rounded-2xl overflow-hidden reveal reveal-delay-1">
            {category.items
              .filter((i) => i.slug !== item.slug)
              .map((other, idx, arr) => (
                <a
                  key={other.slug}
                  href={`#/solutions/${other.slug}`}
                  className={`flex items-center justify-between px-8 py-5 bg-white group hover:bg-primary-50 transition-colors ${
                    idx < arr.length - 1 ? 'border-b border-slate-100' : ''
                  }`}
                >
                  <div>
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-primary-700 transition-colors">
                      {other.name}
                    </span>
                    <span className="hidden sm:inline ml-3 text-xs text-slate-400 group-hover:text-primary-400 transition-colors">
                      {other.tagline}
                    </span>
                  </div>
                  <div className="shrink-0 h-7 w-7 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 transition-all duration-200">
                    <svg className="h-3 w-3 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </a>
              ))}
          </div>

          <div className="mt-6 reveal reveal-delay-2">
            <a href="#/solutions" className="text-sm font-semibold text-primary-600 hover:underline">
              ← Lihat semua solusi
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
