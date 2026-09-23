import type { Metadata } from 'next'
import { PolicyPage } from '@/components/PolicyPage'
import { cookieSections } from '@/data/policies'
export const metadata: Metadata = {
  title: 'Cookies Policy | PatuhData',
  description: 'Details of PatuhData’s essential browser storage, cookie preferences and the absence of analytics and advertising tracking.',
  alternates: { canonical: '/cookies' },
  openGraph: { title: 'Cookies Policy | PatuhData', description: 'Browser storage and your cookie preferences explained.', url: '/cookies' },
}
export default function Cookies() {
  return <PolicyPage title="Cookies Policy" intro="What this website stores in your browser and how you can manage your preferences." sections={cookieSections}/>
}
