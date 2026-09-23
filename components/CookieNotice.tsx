'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const key = 'patuhdata-consent-v1'
export function CookieNotice() {
  const [visible, setVisible] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try { const saved = JSON.parse(localStorage.getItem(key) || 'null'); setVisible(!saved || saved.version !== 1) }
      catch { setVisible(true) }
    })
    return () => cancelAnimationFrame(frame)
  }, [])
  function save(choice: string) {
    try { localStorage.setItem(key, JSON.stringify({version: 1, necessary: true, analytics: false, marketing: false, choice, updatedAt: new Date().toISOString()})) } catch { /* Browser storage may be unavailable. */ }
    setVisible(false)
    dialog.current?.close()
  }
  return <>
    {visible && <aside className="consent-banner" aria-label="Cookie consent">
      <div><span className="eyebrow">YOUR PRIVACY</span><h2>You’re in control of your preferences</h2><p>We use essential browser storage to remember your privacy choices. No analytics or advertising cookies are currently used. Read our <Link href="/cookies">Cookies Policy</Link> and <Link href="/privacy">Privacy Policy</Link>.</p></div>
      <div className="consent-actions"><button onClick={() => dialog.current?.showModal()}>Cookie settings</button><button onClick={() => save('reject')}>Reject optional</button><button className="consent-primary" onClick={() => save('accept')}>Accept all</button></div>
    </aside>}
    <button className="privacy-settings" onClick={() => dialog.current?.showModal()} aria-label="Open cookie preferences">Cookie preferences</button>
    <dialog className="consent-dialog" ref={dialog} aria-labelledby="consent-title">
      <header><span className="eyebrow">PATUHDATA · PRIVACY CENTRE</span><button autoFocus className="consent-close" onClick={() => dialog.current?.close()} aria-label="Close cookie preferences">×</button></header>
      <h2 id="consent-title">Cookie preferences</h2>
      <p>Choose how this website uses browser storage. You can revisit your preferences at any time using the button at the bottom of the page.</p>
      <div className="consent-category"><h3>Strictly necessary <span>Always active</span></h3><p>Stores your consent choice in this browser. This is required to remember your settings and cannot be disabled here.</p></div>
      <div className="consent-category"><h3>Analytics <span>Not in use</span></h3><p>No analytics cookies or tracking scripts are installed.</p></div>
      <div className="consent-category"><h3>Marketing <span>Not in use</span></h3><p>No advertising cookies or marketing pixels are installed.</p></div>
      <p><Link href="/cookies">Cookies Policy</Link> · <Link href="/privacy">Privacy Policy</Link></p>
      <div className="consent-actions"><button onClick={() => save('reject')}>Reject optional</button><button className="consent-primary" onClick={() => save('custom')}>Save preferences</button><button onClick={() => save('accept')}>Accept all</button></div>
    </dialog>
  </>
}
