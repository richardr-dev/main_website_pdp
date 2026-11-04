import { useEffect, useRef, useState } from 'react'
import { complianceServices, resilienceLine } from '../data/resilienceServices'

export default function ResilienceNav() {
  const [menu, setMenu] = useState(false)
  const [services, setServices] = useState(false)
  const header = useRef<HTMLElement>(null)
  const menuButton = useRef<HTMLButtonElement>(null)
  const servicesButton = useRef<HTMLButtonElement>(null)
  const close = () => { setMenu(false); setServices(false) }
  useEffect(() => {
    const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) { setMenu(false); setServices(false) } }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [])
  return <header className="cr-header" ref={header} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) close() }} onKeyDown={event => {
    if (event.key === 'Escape') {
      if (services) { setServices(false); servicesButton.current?.focus() }
      else { setMenu(false); menuButton.current?.focus() }
    }
  }}>
    <a href="/" className="cr-brand" aria-label="PatuhData home"><img src="/logo.png" alt="PatuhData" width="154" height="54" /></a>
    <nav id="primary-navigation" className={`cr-nav ${menu ? 'is-open' : ''}`} aria-label="Main navigation">
      <div className="cr-nav-services"><button ref={servicesButton} type="button" aria-expanded={services} aria-controls="service-navigation" onClick={() => setServices(!services)}>Services <span aria-hidden="true">{services ? '−' : '+'}</span></button>
        <div id="service-navigation" className="cr-dropdown" hidden={!services}><span className="cr-dropdown-group">COMPLIANCE · UU PDP</span>{complianceServices.map(s => <a key={s.slug} href={`/services/${s.slug}`} onClick={close}>{s.title}<span aria-hidden="true">↗</span></a>)}<span className="cr-dropdown-group">RESILIENCE · BACKUP &amp; RECOVERY</span>{resilienceLine.map(s => <a key={s.slug} href={`/services/${s.slug}`} onClick={close}>{s.title}<span aria-hidden="true">↗</span></a>)}</div>
      </div>
      <a href="/#about" onClick={close}>About Us</a><a href="/#approach" onClick={close}>How We Work</a><a href="/#industries" onClick={close}>Industries</a><a href="/#why" onClick={close}>Why PatuhData</a><a href="/insights" onClick={close}>Insights</a>
    </nav>
    <a className="cr-button cr-nav-cta" href="/contact" onClick={close}>Talk to Our Team <span aria-hidden="true">↗</span></a>
    <button ref={menuButton} type="button" className="cr-menu-toggle" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} aria-controls="primary-navigation" onClick={() => { setMenu(!menu); setServices(false) }}>{menu ? 'Close' : 'Menu'} <span aria-hidden="true">{menu ? '×' : '☰'}</span></button>
  </header>
}
