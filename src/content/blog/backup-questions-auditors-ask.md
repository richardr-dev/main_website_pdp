---
slug: "backup-questions-auditors-ask"
title: "Five Backup Questions Your Auditor Will Ask"
excerpt: "What auditors, banks, and insurers typically want to see about backup and recovery, and the evidence that answers each question."
category: "Backup & Recovery"
date: "2026-10-12"
author: "PatuhData"
readTime: "6 min read"
pinned: false
published: true
service: "managed-backup-recovery"
---
When an auditor, a bank, or an insurer reviews a medium enterprise, backup and recovery questions come up almost every time. The questions are rarely complicated. What causes trouble is the evidence: many IT teams know their backups run, but cannot show that they work.

Below are five questions that commonly appear in IT audits, due diligence, and insurance questionnaires, with the evidence that answers each one well. Exact wording varies between reviewers, but the substance is consistent.

## 1. Which systems are backed up, and how often?

The reviewer wants to see that backup coverage is deliberate, not accidental.

**Evidence that answers it:**

- A list of critical systems, with their owners and locations
- For each system: backup frequency, retention period, and where copies are kept
- A written backup policy that matches what is actually configured

**Common gap:** systems added in the last year, such as a new branch server or a cloud application, are not in the backup scope.

## 2. When did you last test a restore, and can you show it?

This is the question that separates working backups from hopeful ones.

**Evidence that answers it:**

- Restore test records with the date, the system, the backup point used, how long it took, and who verified the result
- A schedule showing that tests happen regularly, not once

**Common gap:** backup jobs report success, but nobody has restored a full critical system, such as the ERP database, end to end.

## 3. Is at least one copy offsite, and protected from deletion?

Ransomware attackers increasingly target backups first. Reviewers want to know that an attacker with administrator access cannot destroy every copy.

**Evidence that answers it:**

- Configuration showing an offsite copy in a separate location
- An immutable or offline copy that cannot be changed or deleted within its retention period
- Separate credentials for the backup system

**Common gap:** all copies sit on storage that the main domain administrator account can delete.

## 4. Who can access backups, and are they encrypted?

Backups often contain everything: customer records, employee data, and financial information. Under UU PDP, personal data in backups needs the same protection as personal data in production.

**Evidence that answers it:**

- A list of people with access to the backup system, reviewed periodically
- Encryption of backup copies, at rest and in transit
- Retention periods aligned with your personal data retention rules

**Common gap:** backup copies are kept indefinitely and unencrypted, long after the data should have been deleted.

## 5. Can you recover critical systems within the time the business needs?

Finally, reviewers ask whether recovery matches business expectations, not just technical capability.

**Evidence that answers it:**

- Agreed recovery objectives per critical system: how much data loss and how much downtime are acceptable
- Results from restore tests or disaster recovery rehearsals compared against those objectives
- A recovery runbook that someone other than the usual administrator could follow

**Common gap:** management assumes recovery would take hours, while the last real test (if any) took days.

## Being ready before the question is asked

Each of these answers depends on routine work: keeping an inventory current, testing restores, protecting copies, and recording the results. Done every month, the evidence builds itself. Done the week before an audit, it rarely convinces anyone.

[Managed Backup & Recovery](/services/managed-backup-recovery) includes daily monitoring, scheduled restore tests, and a monthly report designed to answer exactly these questions. If you are not sure where you stand today, a [Backup & Recovery Assessment](/services/backup-recovery-assessment) gives you the answers, and the evidence, within a few weeks.
