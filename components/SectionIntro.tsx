export function SectionIntro({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className={`section-intro ${light ? 'section-intro-light' : ''}`}><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{text && <p>{text}</p>}</div>
}
