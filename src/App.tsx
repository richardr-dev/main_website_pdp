import { useState, useEffect } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import { LanguageProvider } from './contexts/LanguageContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ClientLogos from './components/ClientLogos'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import BlogCarousel from './components/BlogCarousel'
import Solutions from './components/Solutions'
import SolutionDetail from './components/SolutionDetail'
import SolutionsSection from './components/SolutionsSection'
import FeaturedSolution from './components/FeaturedSolution'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import BottomCTA from './components/BottomCTA'
import About from './components/About'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import CookieConsent from './components/CookieConsent'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookiePolicy from './components/CookiePolicy'

function getPage() {
  const hash = window.location.hash
  if (hash.startsWith('#/blog/')) return { page: 'blog-post', slug: hash.replace('#/blog/', '') }
  if (hash === '#/blog') return { page: 'blog', slug: '' }
  if (hash.startsWith('#/solutions/')) return { page: 'solution-detail', slug: hash.replace('#/solutions/', '') }
  if (hash === '#/solutions') return { page: 'solutions', slug: '' }
  if (hash === '#/about') return { page: 'about', slug: '' }
  if (hash === '#/privacy') return { page: 'privacy', slug: '' }
  if (hash === '#/terms') return { page: 'terms', slug: '' }
  if (hash === '#/cookies') return { page: 'cookies', slug: '' }
  return { page: 'home', slug: '' }
}

export default function App() {
  const [route, setRoute] = useState(getPage)
  useScrollReveal()

  useEffect(() => {
    const handler = () => {
      setRoute(getPage())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  const renderPage = () => {
    if (route.page === 'blog-post') return <BlogPost slug={route.slug} />
    if (route.page === 'blog') return <Blog />
    if (route.page === 'solution-detail') return <SolutionDetail slug={route.slug} />
    if (route.page === 'solutions') return <Solutions />
    if (route.page === 'about') return <About />
    if (route.page === 'privacy') return <PrivacyPolicy />
    if (route.page === 'terms') return <TermsOfService />
    if (route.page === 'cookies') return <CookiePolicy />
    return (
      <>
        <Hero />
        <Services />
        <SolutionsSection />
        <WhyUs />
        <BlogCarousel />
        <ClientLogos />
        <FeaturedSolution />
        <HowItWorks />
        <Contact />
        <BottomCTA />
      </>
    )
  }

  return (
    <LanguageProvider>
      <Navigation />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </LanguageProvider>
  )
}
