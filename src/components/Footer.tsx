const solutionLinks = [
  { label: 'IT Infrastructure', href: '#/solutions/it-infrastructure' },
  { label: 'Agentic AI & Automation', href: '#/solutions/agentic-ai' },
  { label: 'Keamanan Siber & Kepatuhan', href: '#/solutions/cybersecurity' },
  { label: 'Cloud & Digital Workplace', href: '#/solutions/cloud-digital' },
  { label: 'Managed IT & Support', href: '#/solutions/managed-it' },
]

const whoLinks = [
  { label: 'Retail & Distribusi', href: '#' },
  { label: 'Manufaktur & Produksi', href: '#' },
  { label: 'F&B & Hospitality', href: '#' },
  { label: 'Klinik & Kesehatan', href: '#' },
  { label: 'Jasa Profesional', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/5">
      <div className="container pt-16 pb-8">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 pb-12 border-b border-white/8">
          <div className="lg:col-span-2">
            <img src="/logo-white.png" alt="PatuhData" className="h-10 w-auto object-contain mb-4" />
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Satu mitra untuk semua kebutuhan IT kantor Anda — instalasi, keamanan, dan maintenance. Melayani bisnis di Jakarta &amp; Jabodetabek.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">Solusi</p>
            <ul className="space-y-2.5">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">
              Bisnis yang Kami Layani
            </p>
            <ul className="space-y-2.5">
              {whoLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">Kontak</p>
            <ul className="space-y-3">
              <li>
                <p className="text-xs text-white/30">Email</p>
                <a
                  href="mailto:hello@patuhdata.id"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  hello@patuhdata.id
                </a>
              </li>
              <li>
                <p className="text-xs text-white/30">WhatsApp</p>
                <a
                  href="https://wa.me/6281903378000"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  +62 819 0337 8000
                </a>
              </li>
              <li>
                <p className="text-xs text-white/30">Kantor</p>
                <p className="text-sm font-semibold text-white/80">INFINITI OFFICE</p>
                <p className="text-xs text-white/50 leading-relaxed mt-0.5">
                  Jl. Permata Regency, Jl. H. Kelik RT.1/RW.6,<br />
                  Srengseng, Kec. Kembangan,<br />
                  Jakarta Barat 11630
                </p>
              </li>
            </ul>
            <a
              href="https://wa.me/6281903378000?text=Halo%20PatuhData%2C%20saya%20ingin%20konsultasi%20kebutuhan%20IT%20kantor%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded-full bg-primary-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-primary-500 transition-all duration-200 hover:-translate-y-0.5"
            >
              Chat WhatsApp →
            </a>
          </div>
        </div>

        <div className="pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
            <p>© {new Date().getFullYear()} PT PatuhData Solusi Nusantara. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <a href="#/about" className="hover:text-white/60 transition-colors">Tentang Kami</a>
              <a href="#/blog" className="hover:text-white/60 transition-colors">Blog</a>
              <a href="#/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
              <a href="#/terms" className="hover:text-white/60 transition-colors">Terms of Service</a>
              <a href="#/cookies" className="hover:text-white/60 transition-colors">Cookie Policy</a>
              <a
                href="https://www.linkedin.com/company/patuhdata-id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/60 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
