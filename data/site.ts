export const site = {
  name: 'PatuhData',
  legalName: 'PT PatuhData Solusi Nusantara',
  url: 'https://patuhdata.id',
  location: 'Jakarta, Indonesia',
  email: 'hello@patuhdata.id',
  phone: '0819 0337 8000',
  address: 'INFINITI OFFICE, Jl. Permata Regency Jl. H. Kelik, RT.1/RW.6, Srengseng, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11630',
  whatsapp: 'https://wa.me/6281903378000',
  dpoProfile: '[NAMED DPO PROFILE — PROVIDED BEFORE APPOINTMENT]',
}

export const nav = [
  ['Home', '/'], ['Managed DPO', '/managed-dpo'], ['Privacy Readiness', '/privacy-readiness'],
  ['Security & Resilience', '/security-resilience'], ['Managed IT', '/managed-it'], ['About', '/about'], ['Contact', '/contact'],
] as const

export const services = [
  { title: 'Managed DPO', href: '/managed-dpo', description: 'Access one named external privacy professional who advises management, monitors privacy governance, reviews risks and supports data-subject and personal-data incident matters.', icon: 'shield' },
  { title: 'Privacy Readiness', href: '/privacy-readiness', description: 'Understand how personal data moves through your organisation, identify material gaps and establish a prioritised remediation plan.', icon: 'map' },
  { title: 'Security & Resilience', href: '/security-resilience', description: 'Strengthen access controls, backup readiness, recovery procedures, security evidence and incident preparedness.', icon: 'pulse' },
  { title: 'Managed IT', href: '/managed-it', description: 'Maintain reliable infrastructure through defined monitoring, backup, patching, endpoint, network and vendor-management services.', icon: 'server' },
]

export const faqs = [
  ['Can an external professional perform the DPO function?', 'The appointment structure and suitability must be assessed against applicable requirements, processing activities, professional competence and the practitioner’s ability to perform the function.'],
  ['Does the service guarantee UU PDP compliance?', 'No. The DPO advises, monitors and escalates. Management remains accountable for decisions and implementation.'],
  ['Is DPO service the same as ISO certification?', 'No. Managed DPO and ISO certification are different engagements.'],
  ['Can PatuhData implement remediation?', 'Yes. Selected technical or operational remediation may be separately scoped. Legal advice, specialist testing and independent assurance may require separate qualified providers.'],
  ['Is the DPO a full-time employee?', 'The standard service is fractional and delivered according to an agreed scope, capacity and service window.'],
  ['Does the service include 24/7 incident response?', 'No, unless explicitly included in a separate agreement. The client should maintain an internal incident coordinator and security-response capability.'],
  ['Can we review the proposed DPO?', 'Yes. The practitioner’s professional profile, experience, availability and potential conflicts are provided before appointment.'],
] as const

export const meta = {
  home: { title: 'Privacy Governance & Resilient IT in Indonesia | PatuhData', description: 'PatuhData provides managed privacy oversight, UU PDP readiness and dependable IT operations for fintech, SaaS and growing businesses in Indonesia.' },
  dpo: { title: 'DPO as a Service Indonesia | PatuhData', description: 'Independent external DPO advice, privacy monitoring and management reporting for organisations operating in Indonesia.' },
  readiness: { title: 'Privacy Readiness & UU PDP Consulting Indonesia | PatuhData', description: 'Map personal data, assess privacy gaps and create a prioritised UU PDP readiness roadmap for your Indonesian operations.' },
  security: { title: 'Security & Business Resilience Indonesia | PatuhData', description: 'Turn privacy and governance requirements into practical access, backup, recovery and incident-readiness controls.' },
  it: { title: 'Managed IT Services Jakarta | PatuhData', description: 'Managed backup, disaster recovery, infrastructure, endpoints and operational reporting for businesses in Jakarta and Indonesia.' },
  about: { title: 'About PT PatuhData Solusi Nusantara', description: 'Learn how PatuhData connects privacy governance, security controls and dependable technology operations in Indonesia.' },
  contact: { title: 'Contact PatuhData | Schedule a Discovery Call', description: 'Discuss Managed DPO, privacy readiness, security resilience or managed IT requirements with PatuhData in Jakarta.' },
}
