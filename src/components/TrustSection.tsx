const regulators = [
  'Kominfo / Komdigi',
  'Badan PDP',
  'OJK',
  'Kemenkes · SATUSEHAT',
  'BKPM / OSS',
  'AWS Well-Architected',
  'ISO 27001',
  'UU PDP No. 27/2022',
]

const commitments = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'You Own Everything',
    description: 'All the code, the infrastructure, the credentials — it all goes into your account. When we finish, you can run it yourself. We never hold your keys hostage.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'Everything in Writing',
    description: 'Scope, timeline, SLA, pricing — all of it goes into a signed contract before we start. If it is not in the agreement, it is not a commitment.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '48-Hour Delivery SLA',
    description: 'Every deliverable has a written 48-hour turnaround in the contract. We are fast because we build on tested foundations — and accountable because it is written down.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'You Talk to the Person Doing the Work',
    description: 'Richard handles every engagement himself — the scoping call, the architecture decisions, the delivery. No account managers. No juniors in the background.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'A Proper Indonesian Company',
    description: 'PT PatuhData Solusi Nusantara is a registered PT PMDN with PSE Privat status. Full legal accountability under Indonesian law — not someone operating from a personal account.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    title: 'Built for Indonesia, Not Translated',
    description: 'UU PDP has a 72-hour DSAR window, not 30 days. SATUSEHAT has its own API. OJK Sandbox has specific technical requirements. We know all of this. Most global vendors do not.',
  },
]

export default function TrustSection() {
  return (
    <>
      <section className="bg-slate-50 py-10 border-y border-slate-200">
        <div className="container">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            We work within Indonesia's actual regulatory landscape
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {regulators.map((r) => (
              <span key={r} className="text-sm font-semibold text-slate-500">{r}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <p className="label">Why Work With Us</p>
            <h2 className="mt-3 heading-xl">We say what we mean and put it in writing.</h2>
            <p className="mt-4 text-lg text-slate-600">
              No vague promises. Every commitment on this page goes into your service agreement.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((item) => (
              <div key={item.title} className="card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-600 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
