export type ResilienceService = {
  n: string
  slug: string
  title: string
  icon: string
  stage: string
  line: 'compliance' | 'resilience'
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
    n: '01', slug: 'managed-data-protection', title: 'Managed Data Protection', icon: '01', stage: 'Core service', line: 'compliance', core: true,
    text: 'One accountable partner that keeps your UU PDP program, systems, and evidence in order as your business changes.',
    intro: 'An ongoing managed service that keeps your UU PDP program governed, your systems compliant as they change, and your evidence ready when customers, partners, or regulators ask.',
    facts: [['Format', 'Ongoing managed service'], ['Reporting', 'Monthly, with an annual program review'], ['Best starting point', 'After an assessment or implementation, or with a baseline review during onboarding'], ['Works with', 'Your DPO, management, IT, HR, and customer service teams']],
    audience: ['Medium enterprises that have completed an initial UU PDP program and need it maintained', 'Organizations introducing new systems, vendors, or features that use personal data', 'Companies without an in-house privacy team, or with a DPO who needs hands-on support'],
    scope: [
      ['Support for your appointed DPO', 'Day-to-day help for the data protection officer or accountable person you appoint, including preparation for management, customer, and regulator questions.'],
      ['Records kept current', 'Your record of processing activities, data inventory, and vendor list are updated as systems, purposes, and suppliers change.'],
      ['Data-subject request handling', 'Support to receive, verify, track, and answer requests for access, correction, deletion, and withdrawal of consent within the required timeframes.'],
      ['Privacy review of changes', 'New systems, features, integrations, and vendors are reviewed for privacy impact before they go live, with impact assessments where the risk is high.'],
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
    n: '02', slug: 'uu-pdp-readiness-assessment', title: 'UU PDP Readiness Assessment', icon: '02', stage: 'Start here', line: 'compliance',
    text: 'Understand your current position, priority risks, and the most practical path forward.',
    intro: 'A fixed-scope assessment of how your organization handles personal data, translated into a prioritized and usable implementation roadmap.',
    facts: [['Typical duration', '2–3 weeks'], ['Format', 'Fixed scope, agreed in writing'], ['Your team’s time', 'A kick-off, short interviews with key people, and one system walkthrough'], ['Result', 'A report, a risk register, and a 90-day roadmap']],
    audience: ['Medium enterprises starting or reviewing their UU PDP program', 'Companies asked by customers, banks, auditors, or partners to demonstrate data protection', 'Teams that have policies but are unsure whether systems follow them'],
    scope: [
      ['Stakeholder interviews', 'Short, focused conversations with IT, operations, customer service, HR, marketing, and legal to understand how personal data is used day to day.'],
      ['Data flow mapping', 'How personal data enters your organization, where it is stored, who it is shared with, and when it is deleted, across applications, vendors, and cloud services.'],
      ['Technical walkthrough', 'A guided review of business applications, ERP, databases, file shares, access, logging, backups, and hosting locations with your IT team.'],
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
    n: '03', slug: 'uu-pdp-setup-sprint', title: 'UU PDP Implementation', icon: '03', stage: 'Implement', line: 'compliance',
    text: 'Establish the records, workflows, responsibilities, and evidence your privacy program needs.',
    intro: 'A structured implementation engagement that turns assessment findings into a privacy operating model your organization can sustain.',
    facts: [['Typical duration', '4–8 weeks'], ['Format', 'Fixed-scope project'], ['Best starting point', 'Findings from a readiness assessment'], ['Result', 'A working privacy operating model with clear owners']],
    audience: ['Medium enterprises that have completed a readiness assessment', 'Companies preparing for customer, bank, or partner due diligence', 'Teams that need records and procedures in place quickly and correctly'],
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
    n: '04', slug: 'privacy-technology-remediation', title: 'Privacy Engineering', icon: '04', stage: 'Engineer', line: 'compliance',
    text: 'Build UU PDP requirements into your applications, ERP, and infrastructure, not only into your policies.',
    intro: 'Our engineers implement the technical side of UU PDP in your business applications, ERP, databases, and infrastructure, working with your IT team or development vendor.',
    facts: [['Typical duration', '2–10 weeks, depending on scope'], ['Format', 'Project, delivered with your IT team or vendor'], ['Works with', 'Business applications, ERP, databases, file shares, web and mobile apps, and cloud'], ['Result', 'Working controls, verified against agreed acceptance criteria']],
    audience: ['Organizations whose business applications, ERP, or customer apps hold personal data', 'IT teams and development vendors that need UU PDP requirements turned into technical changes', 'Companies whose assessments found gaps in consent, deletion, access, or logging'],
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
      ['Privacy in your change process', 'A short privacy checklist in your change, feature, and vendor onboarding process, so new work is reviewed before release.'],
    ],
    deliverables: ['Implemented changes with acceptance evidence', 'Personal data dictionary', 'Technical documentation and handover', 'Updated gap and risk register'],
    outcomes: [['Compliance inside the product', 'Consent, data-subject requests, and retention work in your systems, not only on paper.'], ['Stronger safeguards', 'Access control, encryption, and audit trails that protect personal data and support investigations.'], ['Verified results', 'Each change is demonstrated against agreed acceptance criteria and documented for your records.']],
    obligations: ['Consent and lawful processing', 'Data subject rights in practice', 'Retention and deletion', 'Security of personal data', 'Breach detection and response', 'Data minimization'],
    flow: [['01', 'Scope', 'Turn assessment findings into a prioritized backlog with clear acceptance criteria.'], ['02', 'Build', 'Implement the changes with your developers, through your normal review and release process.'], ['03', 'Verify & hand over', 'Demonstrate each control working, record the evidence, and hand over documentation.']],
    faqs: [
      ['Do you change our production systems?', 'Only through your own change and approval process. We typically prepare changes for your IT team or vendor to review, or work side by side with them.'],
      ['Which systems do you work with?', 'Common business applications, ERP and database platforms, file servers, web and mobile apps, and cloud services. We adapt to your existing systems rather than asking you to change them.'],
      ['Can you work with our outsourced development vendor?', 'Yes. We can define the requirements and acceptance criteria, review their changes, and verify the result.'],
    ],
    related: ['uu-pdp-readiness-assessment', 'managed-data-protection'],
  },
  {
    n: '05', slug: 'backup-recovery-assessment', title: 'Backup & Recovery Assessment', icon: '05', stage: 'Start here', line: 'resilience',
    text: 'Find out whether your critical systems can really be restored, before an incident tests it for you.',
    intro: 'A fixed-scope review of backup and recovery across your sites and critical systems, including a live restore test, turned into a prioritized improvement plan for IT and management.',
    facts: [['Typical duration', '2–3 weeks'], ['Format', 'Fixed scope, agreed in writing'], ['Includes', 'A live restore test of up to three critical systems'], ['Result', 'A management report and an improvement roadmap']],
    audience: ['Medium enterprises with servers, an ERP, or file shares across one or more sites', 'IT teams that run backups but have never tested a full restore', 'Companies facing questions about backup from auditors, banks, insurers, or regulators'],
    scope: [
      ['Critical systems inventory', 'Identify the systems the business cannot run without, such as ERP, finance, file shares, and databases, with their owners and sites.'],
      ['Current backup review', 'What is backed up, how often, where copies are kept, how long they are retained, and who checks them.'],
      ['Live restore test', 'Restore up to three critical systems into an isolated environment and measure how long recovery actually takes.'],
      ['Ransomware exposure', 'Check whether backups could be deleted or encrypted by an attacker using stolen administrator credentials.'],
      ['Recovery objective gap', 'Compare how much data you could lose, and how long you could be down, with what the business can accept.'],
      ['Report and roadmap', 'A prioritized plan presented to IT and management, with clear options for improvement.'],
    ],
    deliverables: ['Critical systems and backup inventory', 'Restore test results with measured recovery times', 'Ransomware exposure findings', 'Recovery objective gap analysis', 'Management report and improvement roadmap'],
    outcomes: [['Facts, not assumptions', 'You know which systems can be restored, and how long it really takes.'], ['Clear priorities', 'The gaps that matter most to the business are fixed first.'], ['A case for budget', 'Management sees the risk and the options in business terms.']],
    obligations: ['Security of personal data, including availability and integrity', 'Breach response and recovery readiness', 'Retention of backup copies'],
    flow: [['01', 'Discover', 'Week 1: inventory critical systems and sites, and review the current backup setup and policies.'], ['02', 'Test', 'Week 2: restore critical systems in an isolated environment and measure recovery.'], ['03', 'Report', 'Week 3: present findings, gaps, and the roadmap to IT and management.']],
    faqs: [
      ['Will the restore test affect our live systems?', 'No. Restores are made into an isolated environment, never over production, at a time agreed with your IT team.'],
      ['Do you need administrator access?', 'We work with your IT team using temporary access that is agreed in writing, logged, and removed when the assessment ends.'],
      ['What happens after the assessment?', 'You can carry out the roadmap with your own team or with us. Many organizations continue with Managed Backup & Recovery or Disaster Recovery as a Service.'],
    ],
    related: ['managed-backup-recovery', 'disaster-recovery-as-a-service'],
  },
  {
    n: '06', slug: 'managed-backup-recovery', title: 'Managed Backup & Recovery', icon: '06', stage: 'Operate', line: 'resilience',
    text: 'Critical data backed up on schedule, protected from ransomware, and proven restorable through regular testing.',
    intro: 'A managed service that keeps your critical systems and personal data recoverable across every site, with backups monitored every day and restores tested on a regular schedule.',
    facts: [['Format', 'Ongoing managed service'], ['Onboarding', 'Typically 2–4 weeks'], ['Covers', 'Servers, virtual machines, databases, file shares, branches, and Microsoft 365 or Google Workspace'], ['Support', 'A named engineer with agreed response times']],
    audience: ['Medium enterprises whose operations depend on servers, an ERP, or business applications', 'Companies with branches, factories, or warehouses that need consistent protection', 'IT teams that want proven backups without adding headcount'],
    scope: [
      ['Recovery objectives', 'For each critical system, agree how much data you can afford to lose and how quickly it must be back.'],
      ['Backup design and deployment', 'Multiple copies on different storage, at least one offsite in Indonesia and at least one that attackers cannot delete or encrypt, each verified with a first restore.'],
      ['Branch and multi-site coverage', 'Branch offices, factories, and warehouses backed up to a central location, with an offsite copy kept in Indonesia.'],
      ['Microsoft 365 and Google Workspace backup', 'Mailboxes, shared drives, and sites backed up independently, so deleted or encrypted data can be restored.'],
      ['Daily monitoring', 'Every backup is checked daily, and failures are investigated and resolved the same working day.'],
      ['Scheduled restore testing', 'Restores are tested on a regular schedule in an isolated environment, and the results are recorded.'],
      ['Recovery runbooks and incident support', 'Step-by-step recovery guides for critical systems, and hands-on support when you need to recover.'],
      ['Retention aligned with UU PDP', 'Backup retention follows your personal data retention rules, so data is not kept longer than it should be.'],
    ],
    deliverables: ['Backup design and service schedule', 'Restore test records', 'Recovery runbooks for critical systems', 'Monthly backup and recovery report', 'Incident report after any real recovery'],
    outcomes: [['Recovery you can rely on', 'Restores are tested on schedule, so recovery is proven before an incident.'], ['Protection against ransomware', 'At least one copy is kept where attackers cannot delete or encrypt it.'], ['Evidence for auditors', 'Monthly reports and restore records show that backups work, not just that they run.']],
    obligations: ['Security of personal data, including availability and integrity', 'Breach response and recovery', 'Retention and deletion'],
    flow: [['01', 'Onboard', 'Identify critical systems and sites, agree recovery objectives, and run the first verified backups and restores.'], ['02', 'Operate', 'Monitor every backup, resolve failures, and keep protected copies healthy.'], ['03', 'Prove', 'Test restores on schedule and report results to management every month.']],
    faqs: [
      ['Do we need new hardware or software?', 'Not necessarily. We start from your existing environment and recommend additions only where they are needed to meet your recovery objectives.'],
      ['Can you help us recover from ransomware?', 'Yes. We restore from protected copies into a clean environment, working alongside your breach response procedure so evidence is preserved.'],
      ['Where is our backup data stored?', 'In locations agreed with you, including data centres and cloud regions in Indonesia, so your data can stay in the country.'],
    ],
    related: ['backup-recovery-assessment', 'disaster-recovery-as-a-service'],
  },
  {
    n: '07', slug: 'disaster-recovery-as-a-service', title: 'Disaster Recovery as a Service', icon: '07', stage: 'Operate', line: 'resilience',
    text: 'Keep critical systems running from a recovery site in Indonesia when your primary site fails, with rehearsals that prove it works.',
    intro: 'A managed disaster recovery service that replicates your critical systems to a recovery site in Indonesia, ready to take over during an outage, and rehearsed regularly with your team.',
    facts: [['Format', 'Ongoing managed service'], ['Recovery site', 'A data centre or cloud region in Indonesia'], ['Rehearsals', 'Twice a year, with a written report'], ['Best for', 'ERP, core databases, and other systems the business cannot run without']],
    audience: ['Medium enterprises where a few days of ERP or core system downtime would stop operations', 'Companies whose auditors, regulators, or major customers expect tested disaster recovery', 'Organizations with a single server room and no second site'],
    scope: [
      ['Business impact and priorities', 'Agree which systems must recover first, how quickly, and with how much acceptable data loss.'],
      ['Recovery site design', 'Capacity, network, and secure access at a recovery site in Indonesia, sized for your critical systems.'],
      ['Replication', 'Critical systems copied continuously or on a schedule to the recovery site, with replication health checked every day.'],
      ['Failover and failback runbooks', 'Step-by-step procedures to switch to the recovery site and return to your primary site afterwards.'],
      ['DR rehearsals', 'Planned exercises twice a year where critical systems are brought up at the recovery site and verified by your users.'],
      ['Support during a disaster', 'Hands-on help from our engineers to declare, run, and close a recovery with your IT team and management.'],
    ],
    deliverables: ['Business impact summary and recovery priorities', 'Recovery site design', 'Failover and failback runbooks', 'DR rehearsal reports, twice a year', 'Monthly replication and readiness report'],
    outcomes: [['Operations that continue', 'Critical systems can run from the recovery site while the primary site is restored.'], ['Proof for auditors', 'Rehearsal reports show your disaster recovery works, not just that it exists.'], ['A team that knows what to do', 'Runbooks and rehearsals mean nobody improvises during a real outage.']],
    obligations: ['Security of personal data, including availability and integrity', 'Breach response and recovery', 'Accountability and evidence of controls'],
    flow: [['01', 'Design', 'Agree priorities and recovery objectives, and design the recovery site.'], ['02', 'Replicate', 'Set up replication for critical systems and run the first failover test.'], ['03', 'Rehearse', 'Rehearse recovery twice a year and report the results to management.']],
    faqs: [
      ['Where is the recovery site?', 'In a data centre or cloud region in Indonesia agreed with you, so your data stays in the country.'],
      ['How quickly can we recover?', 'Recovery objectives are agreed per system during design and confirmed in rehearsals. We commit only to what the design has been tested to achieve.'],
      ['Do we still need backups?', 'Yes. Disaster recovery keeps systems running during an outage; backups protect against deletion, corruption, and ransomware over time. Most clients use both.'],
    ],
    related: ['managed-backup-recovery', 'business-continuity-planning'],
  },
  {
    n: '08', slug: 'business-continuity-planning', title: 'Business Continuity Planning', icon: '08', stage: 'Prepare', line: 'resilience',
    text: 'A practical, rehearsed plan for keeping the business running when systems, sites, or people are unavailable.',
    intro: 'A structured engagement that identifies your critical business processes, sets recovery priorities, and produces a continuity plan your management team has rehearsed.',
    facts: [['Typical duration', '4–6 weeks'], ['Format', 'Fixed-scope project, reviewed yearly'], ['Works with', 'Management, IT, operations, and finance'], ['Result', 'A tested business continuity plan']],
    audience: ['Medium enterprises with no written continuity plan, or one that has never been tested', 'Companies asked by banks, insurers, regulators, or major customers for a continuity plan', 'Organizations with multiple sites that depend on shared systems'],
    scope: [
      ['Business impact analysis', 'Identify critical processes, the systems and people they depend on, and how the impact of downtime grows over time.'],
      ['Recovery priorities', 'Agree the order of recovery and the acceptable downtime for each critical process.'],
      ['Continuity strategies', 'Practical ways to keep working, such as alternate sites, manual workarounds, and system recovery.'],
      ['Roles and communication', 'Who declares an incident, who decides, and how staff, customers, and partners are informed.'],
      ['Plan documentation', 'A clear, usable continuity plan with contact lists, checklists, and decision points.'],
      ['Tabletop exercise', 'A facilitated scenario exercise with management to test the plan and improve it.'],
    ],
    deliverables: ['Business impact analysis', 'Recovery priorities and objectives', 'Business continuity plan', 'Crisis communication guide', 'Tabletop exercise report with improvements'],
    outcomes: [['Decisions made in advance', 'Priorities and authority are agreed before a crisis, not during one.'], ['A plan people know', 'Managers have rehearsed the plan, so it works under pressure.'], ['Confidence for stakeholders', 'Banks, insurers, and customers see a tested plan, not a template.']],
    obligations: ['Breach response and recovery readiness', 'Accountability and evidence of controls'],
    flow: [['01', 'Analyze', 'Interview process owners and complete the business impact analysis.'], ['02', 'Plan', 'Agree priorities and strategies, and write the continuity plan with your team.'], ['03', 'Exercise', 'Run a tabletop exercise with management and update the plan.']],
    faqs: [
      ['How is this different from disaster recovery?', 'Disaster recovery restores IT systems. Business continuity covers the whole business: people, sites, suppliers, communication, and the order in which operations resume.'],
      ['How often should the plan be updated?', 'At least once a year, and after major changes such as a new site, system, or organizational structure.'],
      ['Do you write it for us or with us?', 'With you. A plan only works if your managers know it, so we run short working sessions and a tabletop exercise with your team.'],
    ],
    related: ['disaster-recovery-as-a-service', 'backup-recovery-assessment'],
  },
]

export const coreService = resilienceServices.find(service => service.core)!
export const complianceServices = resilienceServices.filter(service => service.line === 'compliance')
export const resilienceLine = resilienceServices.filter(service => service.line === 'resilience')

export const faqs = [
  ['What is UU PDP?', 'UU PDP is Law No. 27 of 2022 on Personal Data Protection, Indonesia’s comprehensive personal data protection law. It applies to organizations that process personal data in Indonesia, and to processing outside Indonesia that has legal effect in Indonesia or on Indonesian citizens abroad.'],
  ['Is UU PDP already in force?', 'Yes. The law was enacted on 17 October 2022 with a two-year transition period that ended on 17 October 2024. Organizations are expected to have their processing aligned with the law now.'],
  ['What happens if an organization does not comply?', 'The law provides administrative sanctions, including written warnings, temporary suspension of processing, deletion of personal data, and fines of up to 2% of annual revenue. It also sets criminal penalties for certain unlawful acts. Loss of customer and partner trust is often the more immediate cost.'],
  ['Does my organization need a data protection officer (DPO)?', 'UU PDP requires a DPO in certain cases, such as processing for public services, core activities that involve large-scale systematic monitoring, or large-scale processing of specific personal data. We help you assess whether the requirement applies and support the person you appoint.'],
  ['Where should we start?', 'With an assessment in the area that worries you most: a UU PDP Readiness Assessment for compliance, or a Backup & Recovery Assessment with a live restore test. Each ends with a prioritized roadmap.'],
  ['How often do you test restores?', 'Managed Backup & Recovery includes scheduled restore tests in an isolated environment, with the results in your monthly report. Critical systems are fully restored at least once a quarter.'],
  ['Can you support our branches and factories?', 'Yes. Branch offices, factories, and warehouses can be backed up to a central location, with an offsite copy kept in Indonesia.'],
  ['Can you work with our IT team or development vendor?', 'Yes. We work alongside your IT team or vendor to build consent, data-subject requests, retention, access control, and audit trails into your applications, ERP, and infrastructure.'],
  ['Do you provide legal advice?', 'No. PatuhData provides implementation, engineering, and operational support. Where a formal legal interpretation is needed, we work alongside your legal counsel or a qualified law firm.'],
] as const

/** Retired service URLs that now point to their current page. */
export const serviceAliases: Record<string, string> = {
  'uu-pdp-workspace': 'managed-data-protection',
  'uu-pdp': 'uu-pdp-readiness-assessment',
  'uu-pdp-compliance': 'uu-pdp-readiness-assessment',
  'backup-restore': 'managed-backup-recovery',
  'data-recovery': 'managed-backup-recovery',
  'disaster-recovery': 'disaster-recovery-as-a-service',
  'business-continuity': 'business-continuity-planning',
}
