# Recovery-led website: launch details

Implemented Indonesian homepage at `/` and English equivalent at `/en`. Primary focus: companies with approximately 30–200+ staff dependent on critical systems and with limited resilience/DR capability. Financial Vendor Readiness is the secondary specialist pathway. Existing service, resource, contact, and legal URLs remain available. This is a local implementation; deployment is separate.

## Owner inputs before publishing commercial claims

- Recovery Health Check starting price of Rp5,000,000 is approved in the current brief and shown with limited-scope qualifications. [VERIFY] Tax treatment and precise quantities in each written quote; other services remain quote-based.
- [VERIFY] Whether assessment fees are credited toward follow-on work; eligible services, amount, and 30–60 day validity. No credit promise is currently published.
- [VERIFY] Delivery times, maximum systems/data volume, access prerequisites, report scoring criteria, and retest allowance for each project. Public timing describes engagement cadence without invented deadlines.
- [VERIFY] Monitoring hours, restore-test frequency, response targets, incident support hours, and exclusions for managed services and the retainer. No automatic 24/7 promise.
- [VERIFY] Company registration/NIB, current address, email, and WhatsApp. Existing repository contact details are retained; no new registration number is invented.
- [VERIFY] Certifications and formal vendor partnership statuses, with evidence and logo permissions. Existing technology logos are displayed as an ecosystem, without formal certification/partnership badges.
- [VERIFY] Written permission for any customer logos, testimonials, and anonymized reports. None are implied in the new page.
- [PLACEHOLDER] Replace the clearly labelled illustrative report with an approved redacted sample if available. Sample findings are fictional and do not imply completed client work.
- [VERIFY] Confidentiality terms, access handling, test isolation, data retention/deletion, and operational capacity before agreeing a service engagement.
- [VERIFY] Form delivery in the production environment using its configured VITE_WEB3FORMS_ACCESS_KEY. Automated tests mock the provider and do not send real inquiries.

## Layout notes

1. Header: compact logo, five anchor links, explicit ID/EN links, WhatsApp, Health Check CTA. Mobile menu expands inline.
2. Hero: buyer question on the left, a lightweight HTML assessment card on the right; stacked on mobile. Primary Recovery Health Check booking, secondary Financial Vendor Readiness pathway, and WhatsApp.
3. Problems: four recognizable situations in a two-column mobile grid.
4. Approach: three steps, each ending in the evidence delivered.
5. Offers: prominent Health Check starter with approved starting price; separate secondary Vendor Readiness block; four follow-on services guided by documented findings.
6. Proof: an HTML report, with prominent illustrative-sample label and a horizontally scrollable table on narrow screens.
7. Audience and company: navy blue panel explaining customer fit and tool selection. No unverified social proof.
8. FAQ: native keyboard-accessible disclosure elements.
9. Contact: qualified inquiry form with name, company, role, email, phone, staff count, service need, system/requirement, optional deadline and environment; beside WhatsApp, email, and address. Error and success feedback is announced.
10. Footer: company legal name and existing English legal policies, labelled accordingly in Indonesian, plus consent settings.

## Technical and validation notes

- Both landing pages contain full content in generated HTML; Vite SSR uses the same React component and copy as the browser build.
- Separate canonical URLs, reciprocal id/en/x-default hreflang, localized page metadata and document language, Organization/LocalBusiness schema, and sitemap entry.
- Analytics events: `whatsapp_click` and `form_submit_success`, only with valid analytics consent. No inquiry fields or query strings are passed in these event payloads.
- Existing cookie controls and Web3Forms provider are retained. Without JavaScript, the submit button is disabled and email/WhatsApp remain available.
- No stock photography, customer logos, or external visual assets are needed for the new landing content.
- Old service/resource pages retain their prior content and positioning; this implementation changes the two landing pages, not every historical article.
