import { commerceLogin } from '../lib/links'
import { copy, home, localize, type Lang } from '../i18n'

export default function SiteNav({ lang, page }: { lang: Lang; page: string }) {
  const t = copy[lang].nav
  const other: Lang = lang === 'id' ? 'en' : 'id'
  return <header className="pd-header">
    <a href={localize('/', lang)} className="pd-brand" aria-label="PatuhData Accounting"><img src="/logo/logo-glacier.png" alt="PatuhData Accounting" width="164" height="40" /></a>
    <nav className="pd-nav" aria-label="Main navigation">
      <a href={home('features', lang)}>{t.features}</a>
      <a href={home('sizes', lang)}>{t.sizes}</a>
      <a href={home('how-it-works', lang)}>{t.how}</a>
      <a href={home('faq', lang)}>{t.faq}</a>
    </nav>
    <div className="pd-header-actions">
      <a className="pd-lang" href={localize(page, other)} hrefLang={other} lang={other} aria-label={t.switchName}>{t.switchLabel}</a>
      <a className="pd-signin" href={commerceLogin}>{t.signIn}</a>
      <a className="pd-button" href={localize('/contact', lang)}>{t.sales}</a>
    </div>
  </header>
}
