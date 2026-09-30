import { blogPosts, getBlogPost } from '../data/blogContent'
import MarkdownContent from './MarkdownContent'

const formatDate = (date: string) => new Intl.DateTimeFormat('en-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(date))

export function InsightsIndex() {
  return <main id="main-content" className="insights-page">
    <section className="article-hero"><span className="kicker">PATUHDATA INSIGHTS</span><h1>Practical thinking for resilient businesses.</h1><p>Infrastructure, recovery, security, and data governance—explained clearly.</p></section>
    <section className="cr-section"><div className="cr-insights">{blogPosts.map(post => <a key={post.slug} href={`/insights/${post.slug}`}><span className="cr-eyebrow">{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><span className="cr-link">Read the insight <span aria-hidden="true">↗</span></span></a>)}</div></section>
  </main>
}

export function InsightArticle({ slug }: { slug: string }) {
  const post = getBlogPost(slug)
  if (!post) return <main id="main-content" className="article-page"><section className="article-hero"><span className="kicker">404</span><h1>Insight not found</h1><p>The article may have moved or is not published yet.</p><a className="button primary" href="/insights">View all insights</a></section></main>
  return <main id="main-content" className="article-page">
    <section className="article-hero"><span className="kicker">{post.category} · {post.readTime}</span><h1>{post.title}</h1><p>{post.excerpt}</p><div className="article-meta">{post.author} · {formatDate(post.date)}</div></section>
    {post.image && <figure className="article-photo"><img src={post.image} alt={post.imageAlt || ''} /></figure>}
    <article className="article-content"><MarkdownContent source={post.body} /><a className="button primary" href="/contact">Discuss this with PatuhData <span aria-hidden="true">↗</span></a></article>
  </main>
}

