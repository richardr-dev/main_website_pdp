export type ResilienceService = {
  n: string
  slug: string
  title: string
  icon: string
  stage: string
  core?: boolean
  text: string
  intro: string
  facts: [string, string][]
  audience: string[]
  scope: [string, string][]
  deliverables: string[]
  outcomes: [string, string][]
  obligations: string[]
  flow: [string, string, string][]
  faqs: [string, string][]
  related: string[]
}

export const resilienceServices: ResilienceService[] = [
  {
    n: '01', slug: 'managed-data-protection', title: 'Managed Data Protection', icon: '01', stage: 'Core service', core: true,
    text: 'One accountable partner that keeps your UU PDP program, systems, and evidence in order as your business changes.',
    intro: 'An ongoing managed service that keeps your UU PDP program governed, your systems compliant as they change, and your evidence ready when customers, partners, or regulators ask.',
    facts: [['Format', 'Ongoing managed service'], ['Reporting', 'Monthly, with an annual program review'], ['Best starting point', 'After an assessment or implementation, or with a baseline review during onboarding'], ['Works with', 'Your DPO, management, product, engineering, and customer service teams']],
    audience: ['Organizations that have completed an initial UU PDP program and need it maintained', 'Product and engineering teams releasing new features that use personal data', 'Companies without an in-house privacy team, or with a DPO who needs hands-on support'],
    scope: [
      ['Support for your appointed DPO', 'Day-to-day help for the data protection officer or accountable person you appoint, including preparation for management, customer, and regulator questions.'],
      ['Records kept current', 'Your record of processing activities, data inventory, and vendor list are updated as systems, purposes, and suppliers change.'],
      ['Data-subject request handling', 'Support to receive, verify, track, and answer requests for access, correction, deletion, and withdrawal of consent within the required timeframes.'],
      ['Privacy review of changes', 'New features, integrations, and vendors are reviewed for privacy impact before they go live, with impact assessments where the risk is high.'],
      ['Incident and breach readiness', 'Breach procedures are kept current, your team is supported during incidents, and the response is rehearsed every year.'],
      ['Controls monitoring', 'Agreed safeguards such as access reviews, retention rules, and logging are checked regularly to confirm they still operate.'],
    ],
    deliverables: ['Monthly data protection report for management', 'Updated record of processing activities and evidence register', 'Data-subject request log with response tracking', 'Privacy review records for releases and new vendors', 'Annual breach-response exercise and summary', 'Annual program review with an updated roadmap'],
    outcomes: [['A program that stays current', 'Records, procedures, and evidence are updated as your systems, vendors, and purposes change.'], ['Changes reviewed before release', 'New features and vendors are checked for privacy impact before they reach your customers.'], ['Clear reporting', 'Management sees the status of requests, incidents, risks, and open actions every month.']],
    obligations: ['Records of processing activities', 'Data subject rights and response timeframes', 'Impact assessments for high-risk processing', 'Security of personal data', 'Breach notification readiness', 'Accountability and evidence of compliance'],
    flow: [['01', 'Onboard', 'In the first weeks, confirm scope, owners, and priorities, and establish a baseline of your program and systems.'], ['02', 'Operate', 'Run the agreed governance, review, and monitoring activities every month as an extension of your team.'], ['03', 'Report & improve', 'Report status to management monthly and agree improvements in an annual program review.']],
    faqs: [
      ['Does PatuhData act as our DPO?', 'We support the data protection officer you appoint with day-to-day work and expertise. Appointing a DPO remains your organization’s decision. Where you need an external appointee, we can introduce qualified partners.'],
      ['Do we need an assessment first?', 'It is recommended but not required. If you have no recent assessment, onboarding includes a baseline review so we know where your program stands.'],
      ['How do you work with our team?', 'You get a named contact, a regular check-in, and a shared tracker for requests, reviews, and actions. We only access the systems and data the agreed scope requires.'],
    ],
    related: ['privacy-technology-remediation', 'managed-backup-recovery'],
  },
  {
    n: '02', slug: 'uu-pdp-readiness-assessment', title: 'UU PDP Readiness Assessment', icon: '02', stage: 'Start here',
    text: 'Understand your current position, priority risks, and the most practical path forward.',
    intro: 'A fixed-scope assessment of how your organization handles personal data, translated into a prioritized and usable implementation roadmap.',
    facts: [['Typical duration', '2–3 weeks'], ['Format', 'Fixed scope, agreed in writing'], ['Your team’s time', 'A kick-off, short interviews with key people, and one system walkthrough'], ['Result', 'A report, a risk register, and a 90-day roadmap']],
    audience: ['Organizations starting their UU PDP program', 'Companies asked by customers, investors, or partners to demonstrate data protection', 'Teams that have policies but are unsure whether systems follow them'],
    scope: [
      ['Stakeholder interviews', 'Short, focused conversations with product, engineering, customer service, HR, marketing, and legal to understand how personal data is used day to day.'],
      ['Data flow mapping', 'How personal data enters your organization, where it is stored, who it is shared with, and when it is deleted, across applications, vendors, and cloud services.'],
      ['Technical walkthrough', 'A guided review of databases, production access, logging, backups, third-party SDKs, and hosting locations with your engineers.'],
      ['Control review', 'Your practices are reviewed across governance, lawful basis and consent, transparency, data subject rights, specific personal data, impact assessments, security, vendors, cross-border transfers, retention, breach response, backup, and training.'],
      ['Gap and risk rating', 'Each gap is rated by likelihood and impact so you can see what matters most.'],
      ['Roadmap and presentation', 'A prioritized 90-day plan, presented to management with clear options for next steps.'],
    ],
    deliverables: ['Readiness report with maturity by area', 'Data flow map of in-scope systems', 'Gap and risk register', 'Prioritized 90-day roadmap', 'Management presentation'],
    outcomes: [['A clear current state', 'How personal data actually moves through your applications, vendors, and cloud services.'], ['Prioritized gaps', 'A risk-rated register so you know what to fix first, and why.'], ['A 90-day roadmap', 'Concrete next steps with owners, ready to present to management.']],
    obligations: ['Establishes your baseline across the main UU PDP obligations', 'Records of processing activities', 'Lawful basis and consent', 'Data subject rights', 'Security of personal data', 'Breach notification readiness'],
    flow: [['01', 'Discover', 'Week 1: kick-off, interviews, evidence review, and a technical walkthrough of your systems.'], ['02', 'Analyze', 'Week 2: map data flows, score each area, and rate gaps by risk.'], ['03', 'Report', 'Week 3: deliver the report and roadmap, and present the findings to management.']],
    faqs: [
      ['Is this an audit or a certification?', 'No. It is a readiness review that shows where you stand and what to do next. It does not certify compliance.'],
      ['Will you need access to our customer data?', 'We review how systems handle personal data together with your team. We avoid copying personal data and work in your environment wherever possible.'],
      ['What happens after the assessment?', 'You can carry out the roadmap with your own team or with us. Most organizations continue with UU PDP Implementation, Privacy Engineering, or both.'],
    ],
    related: ['uu-pdp-setup-sprint', 'privacy-technology-remediation'],
  },
  {
    n: '03', slug: 'uu-pdp-setup-sprint', title: 'UU PDP Implementation', icon: '03', stage: 'Implement',
    text: 'Establish the records, workflows, responsibilities, and evidence your privacy program needs.',
    intro: 'A structured implementation engagement that turns assessment findings into a privacy operating model your organization can sustain.',
    facts: [['Typical duration', '4–8 weeks'], ['Format', 'Fixed-scope project'], ['Best starting point', 'Findings from a readiness assessment'], ['Result', 'A working privacy operating model with clear owners']],
    audience: ['Organizations that have completed a readiness assessment', 'Companies preparing for customer or partner due diligence', 'Teams that need records and procedures in place quickly and correctly'],
    scope: [
      ['Record of processing activities', 'A complete record of what personal data you process, why, on what basis, who receives it, and how long it is kept.'],
      ['Impact assessment workflow', 'A practical method for identifying high-risk processing and completing impact assessments, with the first priority assessments done together.'],
      ['Data-subject request procedure', 'Clear steps, owners, and timeframes for receiving, verifying, and answering requests, with a log to track each one.'],
      ['Breach response procedure', 'An hour-by-hour response plan covering containment, assessment, decisions, and notification within the required timeframe.'],
      ['Roles and responsibilities', 'Who is accountable for what across business, IT, and legal, including a recorded decision on whether a DPO is required.'],
      ['Evidence structure and awareness', 'An organized evidence library, and an awareness session so staff know their part.'],
    ],
    deliverables: ['Record of processing activities', 'Impact assessment template and completed priority assessments', 'Data-subject request procedure and request log', 'Breach response procedure and breach register', 'Roles and responsibilities matrix', 'Evidence library structure', 'Staff awareness session'],
    outcomes: [['Records you can stand behind', 'A record of processing activities that reflects how your organization really works.'], ['Workflows that run', 'Procedures for impact assessments, data-subject requests, and breaches, with clear owners and deadlines.'], ['Evidence, organized', 'A structure that makes it simple to show what you have done when asked.']],
    obligations: ['Records of processing activities', 'Impact assessments for high-risk processing', 'Data subject rights and response timeframes', 'Breach notification', 'Accountability and evidence of compliance'],
    flow: [['01', 'Plan', 'Confirm scope, owners, and priorities based on the assessment findings.'], ['02', 'Build', 'Create the records, procedures, and assessments with your team in short working sessions.'], ['03', 'Hand over', 'Walk your team through every deliverable, run the awareness session, and agree how the program will be maintained.']],
    faqs: [
      ['Will you write our privacy notice?', 'Privacy notices and contracts are legal documents, so we prepare them with your legal counsel or a partner law firm. We provide the accurate technical and processing details they need.'],
      ['Can our team maintain the program afterwards?', 'Yes. Everything is designed to be maintained by your team. If you prefer ongoing support, Managed Data Protection keeps it current for you.'],
      ['What if our systems need to change?', 'Technical changes such as consent records, deletion, or access control are delivered through Privacy Engineering, alongside or after implementation.'],
    ],
    related: ['privacy-technology-remediation', 'managed-data-protection'],
  },
  {
    n: '04', slug: 'privacy-technology-remediation', title: 'Privacy Engineering', icon: '04', stage: 'Engineer',
    text: 'Build UU PDP requirements into your applications, data, and infrastructure, not only into your policies.',
    intro: 'Our engineers implement the technical side of UU PDP inside your applications and systems, working alongside your development team.',
    facts: [['Typical duration', '2–10 weeks, depending on scope'], ['Format', 'Project, delivered with your developers'], ['Works with', 'Web and mobile apps, APIs, databases, and cloud infrastructure'], ['Result', 'Working controls, verified against agreed acceptance criteria']],
    audience: ['Digital businesses with web or mobile applications that hold personal data', 'Engineering teams that need to turn UU PDP requirements into technical changes', 'Companies whose assessments found gaps in consent, deletion, access, or logging'],
    scope: [
      ['Personal data discovery', 'A data dictionary built from your actual schemas and storage, flagging personal and specific personal data and linking it to your records.'],
      ['Consent capture and records', 'Clear, specific consent options, a record of what each person agreed to and when, and withdrawal that takes effect across your systems.'],
      ['Data-subject requests in your systems', 'Tools to find, export, correct, and delete one person’s data across databases, storage, and vendors, with every action logged.'],
      ['Retention and deletion', 'Retention rules turned into scheduled deletion or anonymization, including logs and backups.'],
      ['Access control and audit trails', 'Role-based access to production data and tamper-resistant logs of who accessed or exported personal data.'],
      ['Encryption and secrets', 'Encryption in transit and at rest, stronger protection for the most sensitive fields, and credentials removed from source code.'],
      ['Safe non-production data', 'Masked or synthetic data for development and testing, so real personal data stays in production.'],
      ['Third-party SDK and data-sharing review', 'An inventory of what each SDK and integration collects, and changes to stop unnecessary sharing.'],
      ['Detection and breach readiness', 'Alerts for unusual access or export activity and searchable logs to support investigations.'],
      ['Privacy in your development process', 'A short privacy checklist in your feature and pull-request templates, so new work is reviewed before release.'],
    ],
    deliverables: ['Implemented changes with acceptance evidence', 'Personal data dictionary', 'Technical documentation and handover', 'Updated gap and risk register'],
    outcomes: [['Compliance inside the product', 'Consent, data-subject requests, and retention work in your systems, not only on paper.'], ['Stronger safeguards', 'Access control, encryption, and audit trails that protect personal data and support investigations.'], ['Verified results', 'Each change is demonstrated against agreed acceptance criteria and documented for your records.']],
    obligations: ['Consent and lawful processing', 'Data subject rights in practice', 'Retention and deletion', 'Security of personal data', 'Breach detection and response', 'Data minimization'],
    flow: [['01', 'Scope', 'Turn assessment findings into a prioritized backlog with clear acceptance criteria.'], ['02', 'Build', 'Implement the changes with your developers, through your normal review and release process.'], ['03', 'Verify & hand over', 'Demonstrate each control working, record the evidence, and hand over documentation.']],
    faqs: [
      ['Do you change our production systems?', 'Only through your own review and approval process. We typically contribute changes for your team to review, or work side by side with your developers.'],
      ['Which technologies do you work with?', 'Common web, mobile, API, database, and cloud technologies. We adapt to your existing stack rather than asking you to change it.'],
      ['Can you work with our outsourced development vendor?', 'Yes. We can define the requirements and acceptance criteria, review their changes, and verify the result.'],
    ],
    related: ['uu-pdp-readiness-assessment', 'managed-data-protection'],
  },
  {
    n: '05', slug: 'managed-backup-recovery', title: 'Managed Backup & Recovery', icon: '05', stage: 'Operate',
    text: 'Critical data backed up on schedule, protected from ransomware, and proven restorable through regular testing.',
    intro: 'A managed service that keeps your critical systems and personal data recoverable, with backups monitored every day and restores tested on a regular schedule.',
    facts: [['Format', 'Ongoing managed service'], ['Onboarding', 'Typically 2–4 weeks'], ['Covers', 'Servers, virtual machines, databases, file shares, and cloud and SaaS data'], ['Reporting', 'Monthly, including restore test results']],
    audience: ['Organizations whose operations depend on servers, databases, or business applications', 'Companies concerned about ransomware and accidental data loss', 'Teams that run backups but have never tested a full restore'],
    scope: [
      ['Recovery objectives', 'For each critical system, agree how much data you can afford to lose and how quickly it must be back.'],
      ['Backup design', 'Multiple copies on different storage, at least one offsite, and at least one that attackers cannot delete or encrypt.'],
      ['Deployment and first verified restore', 'Backups set up for every agreed system, each followed by a test restore before the service goes live.'],
      ['Daily monitoring', 'Every backup is checked daily, and failures are investigated and resolved the same working day.'],
      ['Scheduled restore testing', 'Restores are tested on a regular schedule in an isolated environment, and the results are recorded.'],
      ['Recovery runbooks and incident support', 'Step-by-step recovery guides for critical systems, and hands-on support when you need to recover.'],
      ['Retention aligned with UU PDP', 'Backup retention follows your personal data retention rules, so data is not kept longer than it should be.'],
    ],
    deliverables: ['Backup design and service schedule', 'Restore test records', 'Recovery runbooks for critical systems', 'Monthly backup and recovery report', 'Incident report after any real recovery'],
    outcomes: [['Recovery you can rely on', 'Restores are tested on schedule, so recovery is proven before an incident.'], ['Protection against ransomware', 'At least one copy is kept where attackers cannot delete or encrypt it.'], ['Visibility for management', 'Monthly reporting on backup health, test results, and recommended actions.']],
    obligations: ['Security of personal data, including availability and integrity', 'Breach response and recovery', 'Retention and deletion'],
    flow: [['01', 'Onboard', 'Identify critical systems, agree recovery objectives, and run the first verified backups and restores.'], ['02', 'Operate', 'Monitor every backup, resolve failures, and keep protected copies healthy.'], ['03', 'Prove', 'Test restores on schedule and report results to management every month.']],
    faqs: [
      ['Do we need new hardware or software?', 'Not necessarily. We start from your existing environment and recommend additions only where they are needed to meet your recovery objectives.'],
      ['Can you help us recover from ransomware?', 'Yes. We restore from protected copies into a clean environment, working alongside your breach response procedure so evidence is preserved.'],
      ['Where is our backup data stored?', 'In locations agreed with you, including locations in Indonesia where your requirements call for it.'],
    ],
    related: ['managed-data-protection', 'privacy-technology-remediation'],
  },
]

export const coreService = resilienceServices.find(service => service.core)!

export const faqs = [
  ['What is UU PDP?', 'UU PDP is Law No. 27 of 2022 on Personal Data Protection, Indonesia’s comprehensive personal data protection law. It applies to organizations that process personal data in Indonesia, and to processing outside Indonesia that has legal effect in Indonesia or on Indonesian citizens abroad.'],
  ['Is UU PDP already in force?', 'Yes. The law was enacted on 17 October 2022 with a two-year transition period that ended on 17 October 2024. Organizations are expected to have their processing aligned with the law now.'],
  ['What happens if an organization does not comply?', 'The law provides administrative sanctions, including written warnings, temporary suspension of processing, deletion of personal data, and fines of up to 2% of annual revenue. It also sets criminal penalties for certain unlawful acts. Loss of customer and partner trust is often the more immediate cost.'],
  ['Does my organization need a data protection officer (DPO)?', 'UU PDP requires a DPO in certain cases, such as processing for public services, core activities that involve large-scale systematic monitoring, or large-scale processing of specific personal data. We help you assess whether the requirement applies and support the person you appoint.'],
  ['Where should we start?', 'Most organizations start with a UU PDP Readiness Assessment. It shows how personal data moves through your systems, where the gaps are, and what to prioritize in the next 90 days.'],
  ['Can you work directly with our developers?', 'Yes. Privacy engineering is central to what we do. We work with your engineering and product teams to build consent, data-subject requests, retention, access control, and audit trails into your applications and systems.'],
  ['Do you provide legal advice?', 'No. PatuhData provides implementation, engineering, and operational support. Where a formal legal interpretation is needed, we work alongside your legal counsel or a qualified law firm.'],
] as const

/** Retired service URLs that now point to their current page. */
export const serviceAliases: Record<string, string> = {
  'uu-pdp-workspace': 'managed-data-protection',
  'uu-pdp': 'uu-pdp-readiness-assessment',
  'uu-pdp-compliance': 'uu-pdp-readiness-assessment',
  'backup-restore': 'managed-backup-recovery',
  'data-recovery': 'managed-backup-recovery',
}
