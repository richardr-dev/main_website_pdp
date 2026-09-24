# Website privacy controls — 24 September 2026

The custom preference center covers the technologies currently in the website: necessary consent storage and optional Google Analytics. It is not a Cookiebot or OneTrust integration. There are no advertising or optional preference trackers to enable.

Controls: deny by default; explicit analytics opt-in; equally prominent accept/reject actions; category selection; persistent footer access; keyboard navigation; 180-day versioned choices; fail-closed record validation; withdrawal and accessible first-party analytics cookie deletion; cross-tab synchronization. Records are browser-local and are not a server-side consent evidence service. Clearing storage removes them.

## Operational facts requiring owner verification

- Verify the controller identity/address and that privacy@patuhdata.id is monitored.
- Confirm the existing three-year inquiry retention statement against mailbox, CRM, form-provider and backup deletion practices.
- Verify actual GA event retention, enhanced measurement, connected tags, and Google account settings. Code disables advertising signals and limits cookies; it cannot configure the account's data retention.
- Confirm Vercel, Web3Forms and Google contracts, processing locations, subprocessors and applicable transfer safeguards. Cookie consent does not establish a transfer mechanism.
- Google Fonts and externally hosted images still create delivery requests before analytics consent. These are disclosed; consider self-hosting them.
- Consent records are local to the browser. A centralized demonstrable consent audit trail requires a backend, a retention policy and appropriate safeguards.
- Verify incident response and rights-request procedures operationally. Policy text is not evidence that those processes are in place.

## Primary references reviewed

- UU PDP No. 27/2022: https://jdih.komdigi.go.id/produk_hukum/view/id/832/t/undangundang%2Bnomor%2B27%2Btahun%2B
- GDPR: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng
- EDPB cookie banner taskforce: https://www.edpb.europa.eu/system/files/2023-01/edpb_20230118_report_cookie_banner_taskforce_en.pdf
- Google privacy controls: https://developers.google.com/tag-platform/security/guides/privacy
- GA configuration: https://developers.google.com/analytics/devguides/collection/ga4/reference/config
