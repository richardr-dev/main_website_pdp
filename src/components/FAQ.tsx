import { useState } from 'react'

const faqs = [
  {
    question: 'What exactly is UU PDP and why does it matter for my business?',
    answer:
      'UU PDP (Undang-Undang Perlindungan Data Pribadi No. 27/2022) is Indonesia\'s national personal data protection law, which came into full effect in 2024. It applies to any organisation — domestic or foreign — that processes personal data of Indonesian citizens. Non-compliance can result in administrative sanctions, fines up to 2% of annual revenue, and criminal liability for responsible executives. If you collect customer data, employee records, or any personally identifiable information, you are subject to UU PDP.',
  },
  {
    question: 'What is the 72-hour DSAR window under UU PDP?',
    answer:
      'Under UU PDP, individuals have the right to request access to, correction of, or deletion of their personal data. Organisations must respond to these Data Subject Access Requests (DSARs) within 72 hours — significantly shorter than GDPR\'s 30-day window. Manual processes almost always fail this deadline at scale. PatuhData\'s PrivacyOps Orchestration automates DSAR detection, routing, and fulfillment to ensure you never miss this window.',
  },
  {
    question: 'Do I need to migrate all my systems to work with PatuhData?',
    answer:
      'No. Every PatuhData service is designed to work on top of what you already use — Google Sheets, Excel, WhatsApp, existing ERP or CRM systems. The AI Inventory Guardrails, CRM automation, and PrivacyOps modules all operate as intelligence layers over your current stack. The only systems that change are the ones where change creates measurable value.',
  },
  {
    question: 'What does "no vendor lock-in" mean in practice?',
    answer:
      'All infrastructure PatuhData deploys is written as Terraform code (Infrastructure as Code) and delivered directly into your own AWS or GCP account. You own the code, the credentials, and the infrastructure from day one. If you choose to end the engagement, you retain everything. We don\'t hold any keys, manage any critical access on your behalf long-term, or require proprietary tooling that only we can maintain.',
  },
  {
    question: 'What is your 48-hour SLA and what happens if you miss it?',
    answer:
      'All deliverables are scoped and committed to in writing before work begins. The 48-hour SLA means that any agreed deliverable will be delivered within 48 business hours of the agreed start date. If we miss the deadline without prior notification and agreement, the affected deliverable is discounted from the invoice. This is written into your service agreement — not a verbal promise.',
  },
  {
    question: 'How is PatuhData different from a regular IT consultant or agency?',
    answer:
      'Three things: First, every engagement is handled directly by the lead architect — Richard Rusli — not delegated to junior staff. Second, our services are productised and Indonesia-specific, not adapted from generic global templates. Third, we operate on outcome-based and fixed-scope pricing where possible, not open-ended hourly billing. You know what you\'re getting, what it costs, and who is accountable.',
  },
  {
    question: 'What is SATUSEHAT and do I need to integrate with it?',
    answer:
      'SATUSEHAT is Indonesia\'s national health data exchange platform mandated by the Ministry of Health (Kemenkes). Healthcare providers — clinics, hospitals, pharmacies — are required to synchronise patient records with SATUSEHAT. PatuhData\'s SATUSEHAT Compliance Vault automates this synchronisation from your existing patient record systems (including Excel-based records), handling the API integration, data validation, and mandatory UU PDP consent management.',
  },
  {
    question: 'What does Outcome-Based FinOps pricing mean?',
    answer:
      'For cloud cost optimisation engagements, PatuhData charges only a performance fee of 20–35% of confirmed monthly savings — after the savings appear on your cloud bill. There is no upfront fee and no retainer. The engagement is self-funding: we only earn when you save. This applies to AWS and GCP environments and covers idle resource elimination, right-sizing, reserved instance strategy, and savings plan optimisation.',
  },
  {
    question: 'Is PatuhData a registered Indonesian company?',
    answer:
      'Yes. PatuhData operates as PT PatuhData Solusi Nusantara, a registered PT PMDN (Penanaman Modal Dalam Negeri) entity in Indonesia. We also hold PSE Privat registration with Kominfo/Komdigi as required for technology service providers handling personal data. Contractual liability is governed by Indonesian law, and all service agreements are enforceable under Indonesian jurisdiction.',
  },
  {
    question: 'How do I get started?',
    answer:
      'The first step is a free 45-minute diagnostic call directly with the lead architect. No pre-qualification, no sales team, no obligation. We map your current situation, identify your highest-risk gaps, and give you an honest picture of what an engagement would look like. If it\'s not the right fit, we\'ll say so.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="label">Frequently Asked Questions</p>
          <h2 className="mt-3 heading-xl">Clear Answers to Common Questions</h2>
          <p className="mt-4 text-lg text-slate-600">
            If you don't find your answer here, ask us directly — we respond to every inquiry personally.
          </p>
        </div>

        <div className="mt-14 max-w-3xl mx-auto divide-y divide-slate-100 border-y border-slate-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                <span className={`mt-0.5 shrink-0 text-primary-600 transition-transform duration-200 ${openIndex === i ? 'rotate-45' : ''}`}>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="pb-6">
                  <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500 mb-4">Still have questions?</p>
          <a href="#contact" className="btn-primary">
            Ask Us Directly
          </a>
        </div>
      </div>
    </section>
  )
}
