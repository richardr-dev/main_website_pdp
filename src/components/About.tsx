export default function About() {
  return (
    <div className="pt-16">

      {/* Hero — dark, 2-column with office photo */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#080d1a' }}
      >
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(56,139,253,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56,139,253,0.05) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Diagonal stripe */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.015) 20px, rgba(255,255,255,0.015) 21px)',
          }}
        />

        <div className="container relative py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left — text */}
            <div className="animate-fade-in">
              <p className="text-xs font-black uppercase tracking-widest text-primary-400 mb-5">
                Tentang PatuhData
              </p>
              <h1
                className="font-black text-white leading-none mb-6"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                }}
              >
                Mitra IT yang bisa<br />
                <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.6)', color: 'transparent' }}>
                  dipercaya.
                </span>
              </h1>
              <p className="text-base text-slate-300 leading-relaxed max-w-lg">
                PT PatuhData Solusi Nusantara hadir untuk menjadi mitra IT terpercaya bagi bisnis di Jakarta dan Jabodetabek. Visi kami sederhana: setiap SME berhak mendapat infrastruktur IT yang solid, keamanan siber yang nyata, dan operasional yang berjalan tanpa hambatan — dengan mitra yang transparan dalam harga, rapi dalam eksekusi, dan bisa dipegang dalam garansi.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/6281903378000?text=Halo%20PatuhData%2C%20saya%20ingin%20konsultasi%20kebutuhan%20IT%20kantor%20saya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-primary-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-500 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Mulai Konsultasi →
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/70 hover:border-white/40 hover:text-white transition-all duration-200"
                >
                  Kirim Pesan
                </a>
              </div>
            </div>

            {/* Right — office photo */}
            <div
              className="relative rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: '0.2s', minHeight: '420px' }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                alt="Kantor PatuhData"
                className="w-full h-full object-cover"
                style={{ minHeight: '420px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              {/* Stat overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex gap-8">
                {[
                  { n: '50+', l: 'Proyek Selesai' },
                  { n: 'PT', l: 'Berlegalitas' },
                  { n: 'Jakarta', l: 'Tim Lokal' },
                ].map((s) => (
                  <div key={s.l}>
                    <p
                      className="font-black text-white leading-none"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
                    >
                      {s.n}
                    </p>
                    <p className="text-xs text-white/60 mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values — 4 pillars */}
      <section className="section bg-white border-b border-slate-100 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(56,139,253,0.035) 20px, rgba(56,139,253,0.035) 21px)',
          }}
        />
        <div className="container relative">
          <div className="mb-12 reveal">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-3">Cara Kami Bekerja</p>
            <h2
              className="font-black text-slate-900 leading-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              Empat hal yang tidak<br />kami kompromikan.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 reveal reveal-delay-1">
            {[
              { n: '01', title: 'Spesifikasi Transparan', desc: 'Merek dan part number lengkap di setiap penawaran. Tidak ada istilah samar — Anda tahu persis apa yang dipasang.' },
              { n: '02', title: 'Instalasi Rapi', desc: 'Kabel kami rapikan, beri label, dan dokumentasi foto. Anda terima laporan serah terima lengkap dengan denah dan konfigurasi.' },
              { n: '03', title: 'Garansi Nyata', desc: 'Garansi hardware 2 tahun. Respons keluhan dalam 4 jam. Perbaikan on-site tanpa biaya tambahan selama masa garansi.' },
              { n: '04', title: 'PT Berlegalitas', desc: 'Transaksi bisa pakai faktur pajak, kontrak SPK, dan rekening perusahaan. Aman untuk procurement bisnis manapun.' },
            ].map((p) => (
              <div key={p.n} className="bg-white p-8 flex flex-col">
                <span
                  className="block font-black text-slate-100 leading-none mb-4 select-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '3.5rem' }}
                >
                  {p.n}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="section bg-slate-50 border-b border-slate-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center reveal">

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-3">Lokasi Kantor</p>
              <h2
                className="font-black text-slate-900 leading-none mb-6"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                INFINITI OFFICE
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Jl. Permata Regency, Jl. H. Kelik RT.1/RW.6<br />
                Srengseng, Kec. Kembangan<br />
                Kota Jakarta Barat, DKI Jakarta 11630
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/6281903378000?text=Halo%20PatuhData%2C%20saya%20ingin%20mengunjungi%20kantor%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-primary-600 px-6 py-3 text-sm font-bold text-white hover:bg-primary-500 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Hubungi Kami →
                </a>
                <a
                  href="https://maps.google.com/?q=Jl.+Permata+Regency+Jl.+H.+Kelik,+Srengseng,+Kec.+Kembangan,+Kota+Jakarta+Barat,+DKI+Jakarta+11630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Lihat di Maps
                </a>
              </div>
            </div>

            <div
              className="rounded-2xl p-10 flex flex-col justify-between border border-slate-200 bg-white shadow-sm"
              style={{ minHeight: '280px' }}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0">
                    <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Alamat Lengkap</p>
                </div>
                <div className="space-y-1 text-slate-700 text-sm leading-relaxed">
                  <p className="font-semibold text-slate-900">INFINITI OFFICE</p>
                  <p>Jl. Permata Regency, Jl. H. Kelik</p>
                  <p>RT.1/RW.6, Srengseng</p>
                  <p>Kec. Kembangan, Kota Jakarta Barat</p>
                  <p>DKI Jakarta 11630</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-500">
                <svg className="h-4 w-4 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Senin – Jumat, 09.00 – 17.00 WIB
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white border-t border-slate-100">
        <div className="container text-center max-w-xl mx-auto">
          <h2
            className="font-black text-slate-900 leading-none mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Siap mulai?
          </h2>
          <p className="text-base text-slate-500 mb-8">
            Konsultasi gratis. Penawaran tertulis dalam 24 jam. Tanpa kewajiban.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/6281903378000?text=Halo%20PatuhData%2C%20saya%20ingin%20konsultasi%20kebutuhan%20IT%20kantor%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-primary-500 transition-all duration-200 hover:-translate-y-0.5"
            >
              Mulai Konsultasi →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Kirim Pesan
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
