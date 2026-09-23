import Link from 'next/link'
export function Button({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <Link href={href} className={`button ${secondary ? 'button-secondary' : 'button-primary'}`}>{children}<span aria-hidden="true">→</span></Link>
}
