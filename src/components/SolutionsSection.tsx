import { solutionCategories } from '../data/solutions'

function CategoryCard({ cat, large = false }: { cat: typeof solutionCategories[0]; large?: boolean }) {
  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden hover:border-primary-200 transition-colors duration-300 flex flex-col h-full">
      {/* Card header */}
      <div className={`px-7 border-b border-slate-100 ${large ? 'pt-8 pb-6' : 'pt-6 pb-5'}`}>
        <div className="flex items-start justify-between gap-4 mb-3">
          <span
            className="text-sm font-black text-primary-600"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.05em' }}
          >
            {cat.number}
          </span>
          <div className="h-8 w-8 rounded-xl bg-primary-600 flex items-center justify-center shrink-0">
            <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
        <h3
          className="font-black text-slate-900 leading-tight mb-1"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: large ? 'clamp(1.5rem, 2.5vw, 2.2rem)' : 'clamp(1.2rem, 2vw, 1.7rem)',
          }}
        >
          {cat.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed">{cat.subtitle}</p>
      </div>

      {/* Sub-service rows */}
      <div className="flex-1">
        {cat.items.map((item, idx) => (
          <a
            key={item.slug}
            href={`#/solutions/${item.slug}`}
            className={`flex items-center justify-between px-7 py-5 group hover:bg-primary-50 transition-colors duration-200 ${
              idx < cat.items.length - 1 ? 'border-b border-slate-100' : ''
            }`}
          >
            <div className="min-w-0">
              <span className="block text-sm font-semibold text-slate-800 group-hover:text-primary-700 transition-colors">
                {item.name}
              </span>
              <span className="hidden lg:block mt-1 text-xs text-slate-400 group-hover:text-primary-400 transition-colors">
                {item.tagline}
              </span>
            </div>
            <div className="shrink-0 ml-3 h-7 w-7 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 transition-all duration-200">
              <svg className="h-3 w-3 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function SolutionsSection() {
  const [cat01, cat02, cat03, cat04, cat05] = solutionCategories

  return (
    <section id="solutions" className="section bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Diagonal stripe overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(56,139,253,0.035) 20px, rgba(56,139,253,0.035) 21px)',
        }}
      />
      <div className="container relative">

        {/* Heading */}
        <div className="mb-12 reveal">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-3">Solusi</p>
          <h2
            className="font-black text-slate-900 leading-none"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
            }}
          >
            Business continuity, security,<br />dan managed IT. Satu mitra.
          </h2>
          <p className="mt-4 text-base text-slate-500 max-w-xl">
            Lima area fokus — backup & disaster recovery, cybersecurity, cloud services, managed IT, dan Google Workspace. Pilih yang relevan, atau konsultasi untuk paket custom.
          </p>
        </div>

        {/* Row 1: large left card + two stacked right cards */}
        <div className="grid lg:grid-cols-2 gap-4 mb-4 reveal reveal-delay-1">
          {/* Col left — Category 01, large */}
          <div className="h-full">
            <CategoryCard cat={cat01} large />
          </div>

          {/* Col right — Category 02 + 03 stacked */}
          <div className="flex flex-col gap-4 h-full">
            <div className="flex-1">
              <CategoryCard cat={cat02} />
            </div>
            <div className="flex-1">
              <CategoryCard cat={cat03} />
            </div>
          </div>
        </div>

        {/* Row 2: Categories 04 + 05 side by side */}
        <div className="grid lg:grid-cols-2 gap-4 reveal reveal-delay-2">
          <CategoryCard cat={cat04} />
          <CategoryCard cat={cat05} />
        </div>

      </div>
    </section>
  )
}
