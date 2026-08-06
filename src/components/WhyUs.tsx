import type { ReactNode } from 'react'

const reasons = [
  {
    title: 'Teknisi Berpengalaman',
    body: 'Tim in-house terlatih — bukan outsourcing atau freelancer. Setiap insiden ditangani oleh teknisi yang sama, bukan orang baru setiap kali.',
    icon: (
      <svg className="h-9 w-9 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
      </svg>
    ),
  },
  {
    title: 'Respons Cepat',
    body: 'Ada masalah setelah instalasi? Kami merespons dalam 4 jam kerja dan hadir on-site jika diperlukan — bukan esok hari.',
    icon: (
      <svg className="h-9 w-9 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Harga Transparan',
    body: 'Penawaran tertulis lengkap dengan spesifikasi perangkat, merek, dan harga — sebelum Anda memutuskan. Tidak ada biaya tersembunyi.',
    icon: (
      <svg className="h-9 w-9 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'PT Berlegalitas',
    body: 'Bisa menerbitkan faktur pajak, SPK, dan kontrak kerja resmi. Aman untuk proses procurement dan audit internal perusahaan Anda.',
    icon: (
      <svg className="h-9 w-9 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    title: 'Satu Mitra, Semua IT',
    body: 'Supply hardware, instalasi jaringan, CCTV, server, keamanan siber, dan maintenance — semuanya dari satu mitra yang bertanggung jawab.',
    icon: (
      <svg className="h-9 w-9 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="section bg-white border-b border-slate-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left — title column */}
          <div className="reveal flex flex-col justify-center lg:pr-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-4">
              Mengapa Memilih Kami
            </p>
            <h2
              className="font-black text-slate-900 leading-none mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(2.4rem, 4vw, 4rem)',
              }}
            >
              Bukan sekadar vendor.<br />Mitra IT Anda.
            </h2>
            <div className="w-14 h-0.5 bg-primary-600 mb-6" />
            <p className="text-sm text-slate-500 leading-relaxed">
              Kami menggabungkan teknisi berpengalaman, hardware resmi, dan pendekatan konsultatif untuk memberikan solusi IT yang benar-benar bekerja untuk bisnis Anda.
            </p>
          </div>

          {/* Right — 2×3 card grid (5 cards: top row 2, bottom row 3) */}
          <div className="lg:col-span-2 reveal reveal-delay-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {reasons.slice(0, 2).map(r => (
                <Card key={r.title} {...r} />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {reasons.slice(2).map(r => (
                <Card key={r.title} {...r} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function Card({ title, body, icon }: { title: string; body: string; icon: ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-200">
      <div className="mb-5">{icon}</div>
      <h3
        className="font-black text-slate-900 mb-3"
        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.15rem', letterSpacing: '-0.01em' }}
      >
        {title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
    </div>
  )
}
