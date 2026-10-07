import { blogPosts, getBlogPost } from '../data/blogContent'
import MarkdownContent from './MarkdownContent'
import { resilienceServices } from '../data/resilienceServices'

const formatDate = (date: string) => new Intl.DateTimeFormat('en-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(date))

export function InsightsIndex() {
  return <main id="main-content" className="insights-page">
    <section className="article-hero"><span className="kicker">PATUHDATA INSIGHTS</span><h1>Practical guidance on UU PDP.</h1><p>Implementation, privacy engineering, and data recovery, explained clearly for teams that have to make it work.</p></section>
    <section className="cr-section"><div className="cr-insights">{blogPosts.map(post => <a key={post.slug} href={`/insights/${post.slug}`}>
      {post.image
        ? <img className="cr-insight-image" src={post.image} alt={post.imageAlt || ''} />
        : <div className="cr-insight-image cr-insight-image-placeholder" aria-hidden="true"><span>PatuhData Insights</span></div>}
      <div className="cr-insight-copy"><span className="cr-eyebrow">{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><span className="cr-link">Read the insight <span aria-hidden="true">↗</span></span></div>
    </a>)}</div></section>
  </main>
}

export function InsightArticle({ slug }: { slug: string }) {
  const post = getBlogPost(slug)
  const service = resilienceServices.find(s => s.slug === post?.service)
  if (!post) return <main id="main-content" className="article-page"><section className="article-hero"><span className="kicker">404</span><h1>Insight not found</h1><p>The article may have moved or is not published yet.</p><a className="button primary" href="/insights">View all insights</a></section></main>
  return <main id="main-content" className="article-page">
    <section className="article-hero"><span className="kicker">{post.category} · {post.readTime}</span><h1>{post.title}</h1><p>{post.excerpt}</p><div className="article-meta">{post.author} · {formatDate(post.date)}</div></section>
    {post.image && <figure className="article-photo"><img src={post.image} alt={post.imageAlt || ''} /></figure>}
    <article className="article-content"><MarkdownContent source={post.body} />{service && <aside className="article-related" aria-label="Related service"><span className="kicker">RELATED SERVICE</span><h2><a href={`/services/${service.slug}`}>{service.title}</a></h2><p>{service.text}</p></aside>}<a className="button primary" href={service ? `/contact?service=${service.slug}` : '/contact'}>Discuss this with PatuhData <span aria-hidden="true">↗</span></a></article>
  </main>
}
