export const architectCTA = 'Talk to a Solution Architect'
export const positioning = 'PatuhData keeps critical business systems secure, recoverable, and ready for compliance.'

export const coreSolutions = [
  {
    slug: 'recover', name: 'PatuhData Recover', label: 'Recover', number: '01',
    title: 'Business Continuity & Disaster Recovery',
    description: 'Make sure critical systems and data can actually be recovered when something goes wrong.',
    services: ['Backup architecture', 'Immutable/off-site backup', 'Cloud/server backup', 'Disaster recovery planning', 'Recovery testing', 'RPO/RTO design', 'Backup monitoring'],
    cta: 'Build a Recovery Plan',
    interest: 'PatuhData Recover — Business Continuity & Disaster Recovery',
    outcome: 'A recovery plan your business can put to the test.',
    deliverables: ['A map of critical systems, dependencies, and recovery priorities.', 'Agreed recovery objectives and a backup architecture matched to your environment.', 'Recovery runbooks, scheduled restore tests, and evidence of what worked.', 'An operating model for monitoring, escalation, and regular reporting.'],
    managed: 'Managed Recovery', tasks: ['Backup health', 'Restore verification', 'Capacity monitoring', 'Recovery reporting'],
  },
  {
    slug: 'secure', name: 'PatuhData Secure', label: 'Secure', number: '02',
    title: 'Managed Cybersecurity',
    description: 'Reduce technology risk across endpoints, networks, cloud systems, and users.',
    services: ['Endpoint protection', 'Vulnerability & patch management', 'Firewall/network security', 'Cloud security', 'Security monitoring', 'Incident coordination', 'Security architecture'],
    cta: 'Strengthen Your Security',
    interest: 'PatuhData Secure — Managed Cybersecurity',
    outcome: 'Security controls with clear priorities and operational ownership.',
    deliverables: ['An assessment of exposure across endpoints, networks, cloud, and access controls.', 'A prioritized security architecture and remediation plan.', 'Implemented controls with configuration records and escalation procedures.', 'An operating model for monitoring, patching, and incident coordination.'],
    managed: 'Managed Security', tasks: ['Endpoint/security monitoring', 'Vulnerability management', 'Patching', 'Incident coordination'],
  },
  {
    slug: 'govern', name: 'PatuhData Govern', label: 'Govern', number: '03',
    title: 'Technology Governance & Compliance',
    description: 'Turn security and privacy requirements into an operational system your business can maintain.',
    services: ['UU PDP readiness', 'DPO support', 'ISO 27001 / 27701 readiness', 'Vendor/customer security questionnaires', 'Third-party risk', 'Evidence management', 'Audit readiness'],
    cta: 'Prepare for Compliance',
    interest: 'PatuhData Govern — Technology Governance & Compliance',
    outcome: 'A practical readiness program built around your existing controls.',
    deliverables: ['A requirements and gap assessment tied to your business and customer expectations.', 'A roadmap with named owners, evidence requirements, and remediation priorities.', 'Working registers, policies, and workflows for privacy and technology governance.', 'A review cadence for evidence, questionnaires, and audit preparation.'],
    managed: 'Managed Governance', tasks: ['Compliance calendar', 'Evidence tracking', 'Vendor questionnaires', 'Risk remediation tracking'],
  },
]
export type CoreSolution = typeof coreSolutions[number]
export const inquiryHref = (interest: string) => `/contact?interest=${encodeURIComponent(interest)}`
export const indonesiaInterest = 'Indonesia Technology Readiness'
export const deliverySteps = [
  ['Understand', 'We identify the business risk and technical requirements.'],
  ['Design', 'PatuhData creates the target architecture and remediation plan.'],
  ['Implement', 'We deploy the required technology and controls.'],
  ['Operate', 'PatuhData monitors and maintains critical systems on an ongoing basis within the agreed service scope.'],
  ['Improve', 'Regular reviews keep the environment aligned with business and compliance requirements.'],
]
export const industries = [
  ['Financial Technology & SaaS', 'Companies selling technology into banks and regulated enterprises.'],
  ['Financial Services', 'Businesses requiring stronger technology governance, resilience, and security.'],
  ['Healthcare', 'Clinics, labs, and healthcare providers handling sensitive information.'],
  ['Distribution & Professional Businesses', 'Established businesses dependent on operational systems and critical data.'],
]
export const differentiators = [
  ['Business-first architecture', 'Technology decisions start with business risk and operational requirements.'],
  ['Regulated-industry understanding', 'We understand the intersection between technology, security, privacy, and enterprise requirements.'],
  ['Vendor-independent thinking', 'Solutions are selected around your requirements rather than a single technology stack.'],
  ['Implementation + ongoing operations', 'PatuhData can remain responsible after the project is completed.'],
]
