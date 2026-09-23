'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/site'
import { Icon } from './Icon'
export function Header() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  const close = () => { setOpen(false); setExpanded(false) }
  return <header className="site-header"><div className="nav-shell">
    <Link href="/" className="logo" aria-label="PatuhData home"><Image src="/logo.png" alt="PatuhData" width={150} height={53} priority /></Link>
    <nav id="main-navigation" className={open ? 'nav-open' : ''} aria-label="Main navigation">
      <Link href="/" onClick={close}>Home</Link>
      <div className="services-dropdown" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false) }} onKeyDown={event => { if (event.key === 'Escape') { setExpanded(false); trigger.current?.focus() } }}>
        <button ref={trigger} className="services-trigger" aria-expanded={expanded} aria-controls="service-navigation" onClick={() => setExpanded(!expanded)}>Services <span aria-hidden="true">{expanded ? '⌃' : '⌄'}</span></button>
        {expanded && <div className="services-menu" id="service-navigation"><span className="services-label">OUR SERVICES</span>{services.map(service => <Link href={service.href} key={service.href} onClick={close}><Icon name={service.icon}/><span><strong>{service.title}</strong><small>{service.description}</small></span></Link>)}</div>}
      </div>
      <Link href="/about" onClick={close}>About</Link><Link href="/contact" onClick={close}>Contact</Link>
    </nav>
    <Link className="nav-cta" href="/contact">Schedule a call <span>↗</span></Link>
    <button className="menu-toggle" aria-controls="main-navigation" aria-expanded={open} aria-label="Toggle navigation" onClick={() => { setOpen(!open); setExpanded(false) }}>{open ? '×' : '☰'}</button>
  </div></header>
}
