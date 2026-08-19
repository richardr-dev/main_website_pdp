const assessments = [
  {
    pillar: 'BUILD',
    pillarColor: 'text-blue-600 bg-blue-50',
    title: 'IT Infrastructure Assessment',
    description:
      'We audit your current network, hardware, power protection, and connectivity. You get a written report showing what is under-spec, what is at risk, and what to upgrade first — with estimated costs.',
  },
  {
    pillar: 'PROTECT',
    pillarColor: 'text-emerald-600 bg-emerald-50',
    title: 'Security & Vulnerability Assessment',
    description:
      'We scan your network and endpoints for open vulnerabilities, weak configurations, and missing controls. You get a risk-scored list so you fix the critical gaps first — not the cosmetic ones.',
  },
  {
    pillar: 'OPERATE',
    pillarColor: 'text-violet-600 bg-violet-50',
    title: 'Operational Readiness Assessment',
    description:
      'We review how your team handles backup status, recovery drills, and incident response today. You get a clear view of what is untested, what is manual that should not be, and where PatuhData ONE — our upcoming dashboard for backup & recovery visibility — will have the most impact.',
  },
  {
    pillar: 'ALL',
    pillarColor: 'text-primary-600 bg-primary-50',
    title: 'Full IT Partner Review',
    description:
      'A combined assessment across Build, Protect, and Operate — best for businesses starting the IT partner conversation from scratch. You walk away with a prioritised roadmap and a proposal that fits your budget.',
  },
]

export default function Expertise() {
  return (
    <section id="assessments" className="section bg-slate-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="label">How We Start</p>
            <h2 className="mt-3 heading-xl">
              Every engagement starts with an assessment.
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              We do not guess at what you need. Before we recommend anything, we look at what you actually have — then give you a written, honest picture of where the gaps are and what to fix first.
            </p>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              No jargon. No pressure. Just a clear starting point for becoming a better-run business.
            </p>
            <div className="mt-8">
              <a href="#contact" className="btn-primary">
                Book a Free Assessment
              </a>
            </div>
          </div>

          <div className="space-y-5">
            {assessments.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-primary-200 hover:shadow-card"
              >
                <div className="flex items-start gap-5">
                  <span className={`shrink-0 rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-widest ${item.pillarColor}`}>
                    {item.pillar}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
