const steps = [
  {
    number: '01',
    title: 'Konsultasi Awal Gratis',
    description:
      'Ceritakan kebutuhan IT kantor Anda — kami dengarkan, analisa, dan rekomendasikan solusi yang tepat. Tidak ada biaya, tidak ada kewajiban.',
  },
  {
    number: '02',
    title: 'Penawaran Tertulis 24 Jam',
    description:
      'Dalam 24 jam kami kirimkan penawaran lengkap — spesifikasi perangkat, merek, jumlah kabel, biaya jasa, dan garansi. Tidak ada kejutan.',
  },
  {
    number: '03',
    title: 'Tanda Tangan & Jadwal',
    description:
      'Setelah deal, kami buat SPK resmi dan jadwal instalasi. Semua lingkup pekerjaan dan tenggat waktu tercatat hitam di atas putih.',
  },
  {
    number: '04',
    title: 'Instalasi & Serah Terima',
    description:
      'Teknisi kami kerjakan instalasi rapi dan bersih. Selesai, kami demo semua sistem, training tim Anda, dan serahkan dokumentasi lengkap.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
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
      {/* Diagonal stripe overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.02) 20px, rgba(255,255,255,0.02) 21px)',
        }}
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-16 py-24">

          {/* Left — sticky label, heading, CTA */}
          <div className="lg:sticky lg:top-28 lg:self-start reveal">
            <p className="text-xs font-black uppercase tracking-widest text-primary-400 mb-5">
              Cara Kerja Kami
            </p>
            <h2
              className="font-black text-white leading-none mb-5"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              }}
            >
              Empat Langkah.<br />Transparan.<br />Bisa Dipegang.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-xs">
              Dari pertama kali hubungi kami sampai instalasi selesai — setiap tahap terdokumentasi dan tidak ada yang disembunyikan.
            </p>
            <a
              href="https://wa.me/6281903378000?text=Halo%20PatuhData%2C%20saya%20ingin%20konsultasi%20kebutuhan%20IT%20kantor%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-500 transition-all duration-200 hover:-translate-y-0.5"
            >
              Mulai Konsultasi →
            </a>
          </div>

          {/* Right — numbered steps */}
          <div className="reveal reveal-delay-1">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className={`flex items-start gap-6 py-8 ${
                  idx < steps.length - 1 ? 'border-b border-white/8' : ''
                }`}
              >
                {/* Faded large number */}
                <span
                  className="shrink-0 leading-none select-none"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
                    fontWeight: 900,
                    color: 'rgba(255,255,255,0.08)',
                    lineHeight: 1,
                    marginTop: '-0.1em',
                  }}
                >
                  {step.number}
                </span>
                <div className="pt-1">
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
