import { company, urgentWhatsapp } from '../data/company'
import { copy, type Lang } from '../data/copy'
import { divisions, industries } from '../data/site'

export default function Footer({ lang = 'en' }: { lang?: Lang }) {
  const t = copy[lang].footer
  const nav = copy[lang].nav
  return <footer className="pd-footer">
    <div className="pd-container pd-footer-grid">
      <div className="pd-footer-intro"><img src="/logo-white.png" alt="PatuhData" width="170" height="60" /><p>{t.intro}</p></div>
      <div><strong>{t.solutions}</strong>{divisions.map(d => <a key={d.slug} href={`/services/${d.slug}`}>{lang === 'id' ? d.id.name : d.name}</a>)}</div>
      <div><strong>{t.industries}</strong>{industries.map(i => <a key={i.slug} href={`/industries/${i.slug}`}>{lang === 'id' ? i.id.name : i.name}</a>)}</div>
      <div><strong>{t.company}</strong><a href="/about">{nav.about}</a><a href="/contact">{nav.contact}</a><a href="https://www.linkedin.com/company/patuhdata-id" target="_blank" rel="noreferrer">LinkedIn</a></div>
      <div><strong>{t.contact}</strong><a href={`mailto:${company.email}`}>{company.email}</a><a href={`https://wa.me/${company.whatsappNumber}`}>{company.phone}</a><a href={urgentWhatsapp} target="_blank" rel="noopener noreferrer">{lang === 'id' ? 'Bantuan darurat via WhatsApp' : 'Urgent help on WhatsApp'}</a><span>{lang === 'id' ? company.officeHoursId : company.officeHours}</span></div>
    </div>
    <div className="pd-container pd-footer-bottom">
      <p>© 2026 PT PatuhData Solusi Nusantara. {t.rights}</p>
      <div><a href="/privacy">{t.privacy}</a><a href="/terms">{t.terms}</a><a href="/cookies">{t.cookies}</a><button type="button" onClick={() => window.dispatchEvent(new Event('patuhdata:open-consent'))}>{t.cookieSettings}</button><a href="#main-content">{t.top}</a></div>
    </div>
  </footer>
}
