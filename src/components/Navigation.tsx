import { useState, useEffect } from 'react'
import { useLang } from '../contexts/LanguageContext'

const navItems = {
  id: [
    { label: 'Layanan', href: '#services' },
    { label: 'Cara Kerja', href: '#how-it-works' },
    { label: 'Tentang Kami', href: '#/about' },
    { label: 'Kontak', href: '#contact' },
  ],
  en: [
    { label: 'Services', href: '#services' },
    { label: 'How We Work', href: '#how-it-works' },
    { label: 'About Us', href: '#/about' },
    { label: 'Contact', href: '#contact' },
  ],
}

export default function Navigation() {
  const { lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const items = navItems[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
      style={{ background: '#e8eaed' }}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center"
          onClick={() => { if (window.location.hash !== '') window.location.hash = '' }}
        >
          <img src="/logo.png" alt="PatuhData" className="h-8 w-auto object-contain" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 rounded-md hover:text-primary-600 hover:bg-white/60 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center gap-1 text-sm font-bold">
            <button
              onClick={() => setLang('id')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                lang === 'id'
                  ? 'bg-primary-600 text-white'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                lang === 'en'
                  ? 'bg-primary-600 text-white'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              EN
            </button>
          </div>

          {/* Dark mode icon (decorative) */}
          <button className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-white/50 transition-colors" aria-label="Toggle theme">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-700 transition-all duration-200 shadow-md shadow-primary-200 hover:shadow-primary-300 hover:-translate-y-px"
          >
            {lang === 'en' ? 'Free Consultation' : 'Konsultasi Gratis'} <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-slate-600 hover:bg-white/50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/30" style={{ background: '#e8eaed' }}>
          <nav className="container py-3 flex flex-col">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-2 text-sm font-medium text-slate-700 hover:text-primary-600 border-b border-white/30 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex justify-center rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
            >
              {lang === 'en' ? 'Free Consultation →' : 'Konsultasi Gratis →'}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
