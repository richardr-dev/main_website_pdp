import type { Metadata } from 'next'
import { PolicyPage } from '@/components/PolicyPage'
import { privacySections } from '@/data/policies'
export const metadata: Metadata = {
  title: 'Privacy Policy | PatuhData',
  description: 'How PT PatuhData Solusi Nusantara handles website information, business enquiries, privacy requests and contact details.',
  alternates: { canonical: '/privacy' },
  openGraph: { title: 'Privacy Policy | PatuhData', description: 'Information about website privacy and business enquiries.', url: '/privacy' },
}
export default function Privacy() {
  return <PolicyPage title="Privacy Policy" intro="How we handle information when you visit our website or contact PatuhData about our services." sections={privacySections}/>
}
