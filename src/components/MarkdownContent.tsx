import type { ReactNode } from 'react'

function inline(text: string): ReactNode[] {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g)
  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) return <a key={index} href={link[2]} target={link[2].startsWith('http') ? '_blank' : undefined} rel="noreferrer">{link[1]}</a>
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>
    return part
  })
}

export default function MarkdownContent({ source }: { source: string }) {
  const lines = source.split('\n')
  const blocks: ReactNode[] = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index].trim()
    if (!line) { index++; continue }
    if (line.startsWith('## ')) { blocks.push(<h2 key={index}>{inline(line.slice(3))}</h2>); index++; continue }
    if (line.startsWith('### ')) { blocks.push(<h3 key={index}>{inline(line.slice(4))}</h3>); index++; continue }
    if (line.startsWith('> ')) { blocks.push(<aside key={index}>{inline(line.slice(2))}</aside>); index++; continue }
    if (/^[-*] /.test(line)) {
      const items: ReactNode[] = []
      while (index < lines.length && /^[-*] /.test(lines[index].trim())) {
        items.push(<li key={index}>{inline(lines[index].trim().slice(2))}</li>); index++
      }
      blocks.push(<ul key={`ul-${index}`}>{items}</ul>); continue
    }
    if (/^\d+\. /.test(line)) {
      const items: ReactNode[] = []
      while (index < lines.length && /^\d+\. /.test(lines[index].trim())) {
        items.push(<li key={index}>{inline(lines[index].trim().replace(/^\d+\. /, ''))}</li>); index++
      }
      blocks.push(<ol key={`ol-${index}`}>{items}</ol>); continue
    }
    const paragraph = [line]
    index++
    while (index < lines.length && lines[index].trim() && !/^(#{2,3} |[-*] |\d+\. |> )/.test(lines[index].trim())) {
      paragraph.push(lines[index].trim()); index++
    }
    blocks.push(<p key={index}>{inline(paragraph.join(' '))}</p>)
  }
  return <>{blocks}</>
}

