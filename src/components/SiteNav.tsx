import { commerceLogin } from '../lib/links'

export default function SiteNav() {
  return <header className="pd-header">
    <a href="/" className="pd-brand" aria-label="PatuhData Accounting home"><img src="/logo/logo-glacier.png" alt="PatuhData Accounting" width="164" height="40" /></a>
    <nav className="pd-nav" aria-label="Main navigation">
      <a href="/#features">Features</a>
      <a href="/#how-it-works">How it works</a>
      <a href="/#faq">FAQ</a>
    </nav>
    <div className="pd-header-actions">
      <a className="pd-signin" href={commerceLogin}>Sign in</a>
      <a className="pd-button" href="/contact">Contact sales</a>
    </div>
  </header>
}
