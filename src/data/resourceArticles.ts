export const resourceArticles = [
  {
    slug: 'can-you-restore-your-backup', category: 'RECOVER · BUSINESS CONTINUITY',
    title: 'Your backup completed successfully. Can you actually restore it?',
    summary: 'A successful backup job is a starting point. A recovery test tells you whether the business can resume work.',
    sections: [
      { title: 'Start with the business workflow', text: 'Choose a critical workflow, such as processing an order, accessing a patient record, or completing a customer transaction. List the applications, databases, identities, network services, and external dependencies it needs. Restoring one server is not enough if the workflow still cannot operate.' },
      { title: 'Test in an isolated environment', text: 'Plan a controlled restore with an agreed owner, access permissions, and a safe destination. Avoid overwriting production data or reconnecting a suspected compromised system to the live network. Check that recovery credentials, encryption keys, documentation, and backup copies remain available when the primary environment is unavailable.' },
      { title: 'Measure recovery, not just completion', text: 'Record the age of the recovered data, elapsed recovery time, and any manual steps. Ask a business owner to validate data integrity and complete a representative workflow. Compare the result with agreed recovery objectives, including the time spent on decisions and validation.' },
      { title: 'Turn findings into a repeatable routine', text: 'Keep a short test report: systems tested, restore point, duration, validation results, failures, owners, and next actions. Update the recovery runbook and repeat tests after material changes. A failed test is useful evidence when the issue is resolved before a real disruption.' },
    ],
    question: 'Which critical workflow was last restored and validated by its business owner?', solution: 'recover',
  },
  {
    slug: 'rpo-rto-business-guide', category: 'RECOVER · RECOVERY PLANNING',
    title: 'What RPO and RTO actually mean for a business',
    summary: 'Translate acceptable data loss and downtime into practical recovery objectives.',
    sections: [
      { title: 'RPO: how much recent data could you lose?', text: 'The recovery point objective describes the maximum acceptable age of the data you recover. An RPO of one hour means the business is planning to tolerate losing up to one hour of recent changes. Backup frequency is only part of meeting that objective: failed jobs, replication delays, and unavailable copies can widen the actual gap.' },
      { title: 'RTO: how long can the workflow be unavailable?', text: 'The recovery time objective is the target time for restoring a service after a disruption. Consider the entire recovery process: declaring an incident, obtaining access, restoring systems, reconnecting dependencies, and validating that users can work. A fast server restore does not automatically mean the business service is ready.' },
      { title: 'Set objectives by business impact', text: 'Compare a transaction system, a shared document repository, and a historical archive. They may need different recovery objectives. Ask the owners what disruption costs in missed transactions, manual work, contractual commitments, and customer impact. Then assess the architecture, staffing, and cost needed to support each target.' },
      { title: 'Treat targets as something to prove', text: 'An objective is not a guarantee. Test realistic recovery scenarios and record achieved recovery points and times. If the result misses the target, change the design, the operating process, or the agreed objective. Review the numbers when business volumes, dependencies, or critical systems change.' },
    ],
    question: 'Could your leadership team explain the acceptable downtime and data loss for each critical system?', solution: 'recover',
  },
]
