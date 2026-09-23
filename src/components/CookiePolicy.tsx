export default function CookiePolicy() {
  return (
    <div className="pt-16">
      <section className="section bg-navy-dark text-white">
        <div className="container max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-300 mb-4">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight text-white">Cookie Policy</h1>
          <p className="mt-4 text-white/60">Last updated: 1 September 2026</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-3xl">
          <div className="space-y-10 text-slate-700 text-sm leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. What Are Cookies</h2>
              <p>
                Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work, to improve efficiency, and to provide information to the owners of the site. PatuhData uses cookies in accordance with this Cookie Policy and our <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Cookies We Use</h2>

              <div className="mt-4 rounded-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-5 py-4 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-900">Essential Cookies</p>
                      <p className="text-xs text-slate-500 mt-0.5">Required for core site functionality</p>
                    </div>
                    <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">Always Active</span>
                  </div>
                </div>
                <div className="px-5 py-4 space-y-4">
                  <div>
                    <p className="font-semibold text-slate-800">patuhdata_consent_v1</p>
                    <p className="text-slate-500 mt-1">Stores a consent ID, timestamp, policy version, method, and category choices. Retained for 1 year.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">patuhdata-language and browser consent history</p>
                    <p className="text-slate-500 mt-1">Stores language preferences, the current record, and up to 20 recent browser-side consent decisions.</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-5 py-4 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-900">Analytics Cookies</p>
                      <p className="text-xs text-slate-500 mt-0.5">Help us understand how visitors use the site</p>
                    </div>
                    <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">Requires Consent</span>
                  </div>
                </div>
                <div className="px-5 py-4 space-y-4">
                  <div>
                    <p className="font-semibold text-slate-800">_ga and _ga_5QYE9SJ0CX</p>
                    <p className="text-slate-500 mt-1">Set by Google Analytics only after analytics consent to understand website usage and conversions. Typical maximum retention: 2 years.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Managing Your Cookie Preferences</h2>
              <p>
                On your first visit, you may accept all, reject optional cookies, or manage categories. Reopen the Privacy Preference Center at any time using the “Cookie Settings” button.
              </p>
              <p className="mt-3">
                If you withdraw analytics consent, PatuhData instructs Google Analytics to stop collection, removes its script, and deletes Google Analytics cookies accessible from patuhdata.id. You can also manage cookies through your browser settings. Most browsers allow you to refuse all cookies, delete existing cookies, or be notified when a cookie is set. Disabling essential storage may affect site functionality.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Third-Party Cookies</h2>
              <p>
                We do not permit third-party advertising networks to place cookies on patuhdata.id. Analytics cookies, if accepted, may be processed by our analytics provider under a data processing agreement. We use the anonymisation features of any analytics tooling to prevent personal data from being transmitted.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. UU PDP Compliance</h2>
              <p>
                Our cookie consent mechanism is designed in compliance with UU PDP No. 27/2022, which requires that consent be freely given, specific, informed, and unambiguous. Optional cookies are not activated until you explicitly accept them. Declining optional cookies has no negative effect on your ability to use this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy when technologies change. The current version is available at patuhdata.id/cookies. A new policy version may trigger the consent banner again.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Contact</h2>
              <p>
                For questions about our use of cookies: <a href="mailto:privacy@patuhdata.id" className="text-primary-600 hover:underline">privacy@patuhdata.id</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
