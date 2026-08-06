const plans = [
  {
    name: 'Start Here',
    tagline: 'Free Diagnostic Call',
    description:
      'A 45-minute call with Richard. We look at your setup, find the gaps, and tell you honestly what we think you should do — whether that involves us or not.',
    highlight: true,
    features: [
      'Direct call with Richard Rusli',
      'We identify your top 3 gaps',
      'Honest assessment, no sales pressure',
      'Written summary within 48 hours',
      'Zero obligation to proceed',
    ],
  },
  {
    name: 'Automation Module',
    tagline: 'One Tool, Done Right',
    description:
      'Pick one thing you want automated — AI CRM, inventory alerts, WhatsApp agents. We build it into your existing stack. Monthly subscription, cancel anytime.',
    highlight: false,
    features: [
      'One automation built to your workflow',
      'Runs in your own environment',
      'You own the code from day one',
      '48-hour delivery SLA in writing',
      'Monthly review and improvements',
    ],
  },
  {
    name: 'Fractional Retainer',
    tagline: 'Your Tech Team, On Call',
    description:
      'Cloud infrastructure, AI tools, and UU PDP compliance — all covered. Like having a senior tech lead on retainer, without the full-time salary.',
    highlight: false,
    features: [
      'Cloud infrastructure fully managed',
      'UU PDP compliance kept up to date',
      'Unlimited revisions on deliverables',
      'Priority 48-hour SLA',
      'Monthly architecture review call',
    ],
  },
  {
    name: 'FinOps',
    tagline: 'Pay from What We Save',
    description:
      'We find what you are wasting on cloud. You pay us 20–35% of what we save. No savings, no fee. Simple as that.',
    highlight: false,
    features: [
      'No upfront cost, ever',
      'Full cloud spend audit',
      'Idle and oversized resource cleanup',
      'Reserved instance & savings plan strategy',
      'Fee charged only on confirmed savings',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-slate-50">
      <div className="container">
        <div className="mt-0 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border flex flex-col ${
                plan.highlight
                  ? 'border-primary-600 bg-primary-600 text-white shadow-lg'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="p-7 flex-1">
                {plan.highlight && (
                  <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white mb-4">
                    Start Here
                  </span>
                )}
                <p className={`text-sm font-bold uppercase tracking-widest ${plan.highlight ? 'text-primary-200' : 'text-slate-500'}`}>
                  {plan.name}
                </p>
                <p className={`mt-2 text-xl font-bold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {plan.tagline}
                </p>
                <p className={`mt-4 text-sm leading-relaxed ${plan.highlight ? 'text-white/80' : 'text-slate-600'}`}>
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg
                        className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlight ? 'text-white' : 'text-primary-500'}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className={`text-sm ${plan.highlight ? 'text-white/90' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-7 pb-7">
                <a
                  href="#contact"
                  className={`mt-6 block w-full rounded py-3 text-center text-sm font-semibold transition-all duration-200 ${
                    plan.highlight
                      ? 'bg-white text-primary-700 hover:bg-primary-50'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  Consult Now
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
