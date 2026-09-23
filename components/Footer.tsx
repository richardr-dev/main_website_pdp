import Link from 'next/link'
import Image from 'next/image'
import { nav, site } from '@/data/site'
export function Footer() {
  return <footer className="site-footer"><div className="footer-grid"><div className="footer-brand"><Image src="/logo-white.png" alt="PatuhData" width={170} height={60}/><p>Privacy governance, security controls and resilient IT operations for businesses in Indonesia.</p></div><div><strong>Services</strong>{nav.slice(1,5).map(([x,h])=><Link href={h} key={h}>{x}</Link>)}</div><div><strong>Company</strong><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy Policy</Link><Link href="/cookies">Cookies Policy</Link></div><div><strong>Contact</strong><span>{site.legalName}</span><span>{site.location}</span><a href={`mailto:${site.email}`}>{site.email}</a><a href="tel:+6281903378000">{site.phone}</a><span>{site.address}</span></div></div><div className="footer-bottom"><p>Website content is general information and not formal legal advice. Final services are governed by the signed proposal and agreement.</p><span>© {new Date().getFullYear()} {site.legalName}</span></div></footer>
}
