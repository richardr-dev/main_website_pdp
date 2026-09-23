import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsApp } from '@/components/WhatsApp'
import { CookieNotice } from '@/components/CookieNotice'
import { site } from '@/data/site'

export const metadata: Metadata = { metadataBase: new URL(site.url), title: 'PatuhData', description: 'Privacy governance and resilient IT operations in Indonesia.', openGraph: { siteName: 'PatuhData', type: 'website', locale: 'en_ID' }, robots: { index: true, follow: true } }
const schema = { '@context':'https://schema.org', '@graph': [{ '@type':'Organization', name:site.legalName, alternateName:site.name, url:site.url, address:{'@type':'PostalAddress',addressLocality:'Jakarta',addressCountry:'ID'} }, { '@type':'ProfessionalService', name:site.name, url:site.url, areaServed:{'@type':'Country',name:'Indonesia'}, description:'Privacy governance, security controls and operational resilience services.' }] }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer/><WhatsApp/><CookieNotice/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html> }
