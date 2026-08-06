export default function WhyUs() {
  return (
    <section id="why-us" className="section bg-slate-50 border-b border-slate-100">
      <div className="container">

        {/* Section label */}
        <div className="mb-10 reveal">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-3">Mengapa Memilih Kami</p>
          <h2
            className="font-black text-slate-900 leading-none"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
            }}
          >
            Bukan sekadar vendor.<br />Mitra IT Anda.
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 reveal reveal-delay-1">

          {/* A — large dark hero card, spans 2 cols */}
          <div
            className="lg:col-span-2 rounded-2xl relative overflow-hidden min-h-[320px] flex flex-col justify-between p-10"
            style={{ background: 'linear-gradient(135deg, #080d1a 0%, #0d1b3e 100%)' }}
          >
            {/* Grid overlay */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(56,139,253,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,139,253,0.06) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            {/* Blue glow */}
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(56,139,253,0.25) 0%, transparent 70%)' }}
            />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-3">Dipercaya bisnis di Jakarta & Jabodetabek</p>
              <span
                className="block font-black text-white leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(4rem, 8vw, 7rem)' }}
              >
                50+
              </span>
              <p className="text-lg font-bold text-white/80 mt-1">Proyek IT selesai. Klien aktif terus bertambah.</p>
            </div>
            <div className="relative mt-8 grid grid-cols-3 gap-4">
              {[
                { n: '98%', l: 'Klien Puas' },
                { n: '<24 Jam', l: 'Penawaran Tertulis' },
                { n: 'PT', l: 'Berlegalitas' },
              ].map((s) => (
                <div key={s.n}>
                  <p
                    className="font-black text-white leading-none"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
                  >
                    {s.n}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* B — photo card: IT professional */}
          <div
            className="rounded-2xl relative overflow-hidden min-h-[320px]"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-300 mb-1">Tim Kami</p>
              <p className="text-lg font-black text-white leading-tight">Teknisi berpengalaman. Bukan freelancer dadakan.</p>
            </div>
          </div>

          {/* C — photo card: network/server */}
          <div
            className="rounded-2xl relative overflow-hidden min-h-[260px]"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-300 mb-1">Infrastruktur</p>
              <p className="text-base font-black text-white leading-tight">Hardware bergaransi resmi 2 tahun.</p>
            </div>
          </div>

          {/* D — blue stat card */}
          <div
            className="rounded-2xl p-8 flex flex-col justify-between min-h-[260px]"
            style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)' }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-blue-200">Respons Cepat</p>
            <div>
              <span
                className="block font-black text-white leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(3.5rem, 7vw, 5.5rem)' }}
              >
                4 Jam
              </span>
              <p className="text-sm text-blue-100 mt-2 leading-relaxed">
                Ada masalah setelah instalasi? Kami merespons dalam 4 jam kerja dan on-site jika diperlukan.
              </p>
            </div>
          </div>

          {/* E — dark card: transparent pricing */}
          <div
            className="rounded-2xl p-8 flex flex-col justify-between min-h-[260px]"
            style={{ background: '#0f172a' }}
          >
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(56,139,253,0.15)', border: '1px solid rgba(56,139,253,0.25)' }}
            >
              <svg className="h-5 w-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.75 12a11.955 11.955 0 003.348 8.3A11.959 11.959 0 0012 21.75a11.96 11.96 0 008.652-3.45A11.955 11.955 0 0023.25 12a11.955 11.955 0 00-2.598-5.938A11.96 11.96 0 0012 2.714z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Harga & Spesifikasi</p>
              <p
                className="font-black text-white leading-none mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
              >
                Transparan.<br />Tidak ada biaya tersembunyi.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Penawaran tertulis lengkap dengan spesifikasi perangkat, merek, dan harga sebelum Anda putuskan.
              </p>
            </div>
          </div>

          {/* F — photo card: team/office */}
          <div
            className="lg:col-span-2 rounded-2xl relative overflow-hidden min-h-[260px]"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-300 mb-2">Konsultasi</p>
              <p
                className="font-black text-white leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                Konsultasi gratis.<br />Tanpa komitmen.
              </p>
              <a
                href="https://wa.me/6281903378000?text=Halo%20PatuhData%2C%20saya%20ingin%20konsultasi%20kebutuhan%20IT%20kantor%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 self-start inline-flex items-center rounded-full bg-primary-600 px-6 py-3 text-sm font-bold text-white hover:bg-primary-500 transition-all duration-200 hover:-translate-y-0.5"
              >
                Mulai Konsultasi →
              </a>
            </div>
          </div>

          {/* G — dark stat card */}
          <div
            className="rounded-2xl p-8 flex flex-col justify-center min-h-[220px]"
            style={{ background: '#0f172a' }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Legalitas</p>
            <p
              className="font-black text-white leading-none mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
            >
              PT Berlegalitas
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bisa keluarkan faktur pajak, kontrak kerja, dan SPK resmi. Aman untuk procurement perusahaan.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
