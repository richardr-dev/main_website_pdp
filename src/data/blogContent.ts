export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  readTime: string
  image?: string
  imageAlt?: string
  published: boolean
  body: string
}

const files = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function unquote(value: string) {
  const trimmed = value.trim()
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    try {
      return trimmed.startsWith('"') ? JSON.parse(trimmed) : trimmed.slice(1, -1).replace(/''/g, "'")
    } catch {
      return trimmed.slice(1, -1)
    }
  }
  return trimmed
}

function parsePost(path: string, source: string): BlogPost {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)
  if (!match) throw new Error(`Missing front matter in ${path}`)

  const meta: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const separator = line.indexOf(':')
    if (separator > 0) meta[line.slice(0, separator).trim()] = unquote(line.slice(separator + 1))
  }

  const fallbackSlug = path.split('/').pop()!.replace(/\.md$/, '')
  return {
    slug: meta.slug || fallbackSlug,
    title: meta.title || fallbackSlug,
    excerpt: meta.excerpt || '',
    category: meta.category || 'Insights',
    date: meta.date || new Date().toISOString(),
    author: meta.author || 'PatuhData',
    readTime: meta.readTime || '5 min read',
    image: meta.image || undefined,
    imageAlt: meta.imageAlt || undefined,
    published: meta.published !== 'false',
    body: match[2].trim(),
  }
}

export const blogPosts = Object.entries(files)
  .map(([path, source]) => parsePost(path, source))
  .filter((post) => post.published)
  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug)
