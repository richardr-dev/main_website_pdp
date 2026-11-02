import { useEffect, useRef, useState } from 'react'
import { divisions, industries } from '../data/site'
import { copy, type Lang } from '../data/copy'

type Menu = 'solutions' | 'industries' | null

export default function Nav({ lang = 'en' }: { lang?: Lang }) {
  const t = copy[lang].nav
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState<Menu>(null)
  const header = useRef<HTMLElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)
  const close = () => { setOpen(false); setMenu(null) }
  useEffect(() => {
    const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) close() }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [])
  const label = (item: { name: string; id: { name: string } }) => lang === 'id' ? item.id.name : item.name

  const dropdown = (key: Exclude<Menu, null>, title: string, items: { slug: string; name: string; id: { name: string } }[], base: string) =>
    <div className="pd-nav-group">
      <button type="button" aria-expanded={menu === key} aria-controls={`menu-${key}`} onClick={() => setMenu(menu === key ? null : key)}>{title} <span aria-hidden="true">{menu === key ? '−' : '+'}</span></button>
      <div id={`menu-${key}`} className="pd-dropdown" hidden={menu !== key}>
        {items.map(item => <a key={item.slug} href={`${base}/${item.slug}`} onClick={close}>{label(item)}</a>)}
      </div>
    </div>

  return <header className="pd-header" ref={header} onKeyDown={event => {
    if (event.key !== 'Escape') return
    if (menu) setMenu(null)
    else if (open) { setOpen(false); toggle.current?.focus() }
  }}>
    <div className="pd-header-inner">
      <a href={lang === 'id' ? '/id' : '/'} className="pd-brand" aria-label="PatuhData home"><img src="/logo.png" alt="PatuhData" width="150" height="52" /></a>
      <nav id="primary-navigation" className={`pd-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        {dropdown('solutions', t.solutions, divisions, '/services')}
        {dropdown('industries', t.industries, industries, '/industries')}
        <a href="/about" onClick={close}>{t.about}</a>
        <a href="/contact" onClick={close}>{t.contact}</a>
        <a href={t.switchHref} hrefLang={lang === 'id' ? 'en' : 'id'} lang={lang === 'id' ? 'en' : 'id'} onClick={close}>{t.switchLabel}</a>
      </nav>
      <a className="pd-btn pd-nav-cta" href="/contact" onClick={close}>{t.cta}</a>
      <button ref={toggle} type="button" className="pd-menu-toggle" aria-label={open ? t.close : t.open} aria-expanded={open} aria-controls="primary-navigation" onClick={() => { setOpen(!open); setMenu(null) }}>{open ? 'Close' : 'Menu'}</button>
    </div>
  </header>
}
