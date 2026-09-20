export default function TermsOfService() {
  return (
    <div className="pt-16">
      <section className="section bg-navy-dark text-white">
        <div className="container max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-300 mb-4">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight text-white">Terms of Service</h1>
          <p className="mt-4 text-white/60">Last updated: 1 July 2026</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-3xl">
          <div className="space-y-10 text-slate-700 text-sm leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Parties and Agreement</h2>
              <p>
                These Terms of Service ("Terms") govern the use of the patuhdata.id website and the professional services provided by PT PatuhData Solusi Nusantara ("PatuhData"), a registered PT PMDN entity in Indonesia. By using this website or engaging PatuhData services, you agree to these Terms.
              </p>
              <p className="mt-3">
                Professional services engagements are additionally governed by a written Service Agreement executed between PatuhData and the client. In the event of any conflict, the executed Service Agreement prevails.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Services</h2>
              <p>
                PatuhData provides cloud infrastructure engineering, AI-powered operational automation, and UU PDP compliance services to Indonesian businesses. Services are described on this website for informational purposes and are subject to the specific scope defined in each client's Service Agreement.
              </p>
              <p className="mt-3">
                Website content (including service descriptions, pricing models, and SLA commitments) constitutes general information only and does not constitute a binding offer unless confirmed in a written Service Agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Limitation of Liability</h2>
              <p>
                For professional services engagements, PatuhData's total aggregate liability to a client for any claim arising from or in connection with a service engagement is capped at six (6) months of the total contract value applicable to the relevant engagement. This limitation applies whether the claim arises in contract, tort, or otherwise.
              </p>
              <p className="mt-3">
                PatuhData is not liable for: indirect, consequential, or punitive damages; loss of revenue or profits not directly caused by our breach; losses arising from the client's failure to implement recommended changes; or regulatory penalties arising from pre-existing compliance deficiencies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Intellectual Property</h2>
              <p>
                All Terraform code, architecture designs, and deliverables created by PatuhData and delivered into a client's cloud account or systems are owned by the client upon full payment for the relevant engagement. PatuhData retains ownership of methodologies, templates, and tools used in producing those deliverables.
              </p>
              <p className="mt-3">
                Website content, branding, and marketing materials are the property of PT PatuhData Solusi Nusantara and may not be reproduced without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Confidentiality</h2>
              <p>
                PatuhData treats all client information shared during engagements as confidential. We will not disclose client information to third parties except as required by Indonesian law or as necessary to provide the services (e.g., to cloud service providers under processing agreements). Clients are similarly required to maintain confidentiality regarding PatuhData's methodologies and proprietary tooling.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Warranties and Representations</h2>
              <p>
                PatuhData warrants that services will be performed with reasonable skill and care by qualified professionals. PatuhData does not warrant that services will result in specific regulatory outcomes (e.g., OJK Sandbox graduation, Badan PDP audit clearance) as these involve third-party decisions outside PatuhData's control.
              </p>
              <p className="mt-3">
                Compliance advice provided by PatuhData is based on our interpretation of applicable Indonesian regulations as of the date of the engagement. Regulatory guidance and enforcement positions may change. Clients should obtain independent legal advice for specific regulatory interpretations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Payment Terms</h2>
              <p>
                Payment terms for professional services engagements are specified in the relevant Service Agreement. For outcome-based FinOps engagements, performance fees are calculated and invoiced monthly following confirmed savings verification. Late payment may result in suspension of services after 30 days' written notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Termination</h2>
              <p>
                Either party may terminate a service engagement as specified in the relevant Service Agreement. Upon termination, PatuhData will provide a final handover package including all deliverables, credentials, and documentation to the client within 10 business days. PatuhData will not retain access to client systems beyond the termination date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Governing Law</h2>
              <p>
                These Terms and any service engagement are governed by the laws of the Republic of Indonesia. Any dispute arising from these Terms or a service engagement shall be resolved first through good-faith negotiation, and if unresolved, through the competent court in Jakarta, Indonesia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Contact</h2>
              <p>
                For questions about these Terms: <a href="mailto:hello@patuhdata.id" className="text-primary-600 hover:underline">hello@patuhdata.id</a> | PT PatuhData Solusi Nusantara, Jakarta, Indonesia.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
