import { blogPosts } from '../data/blogData'

type Props = { slug: string }

function renderMarkdown(content: string): string {
  return content
    .trim()
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-slate-900 mt-8 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li class="ml-5 list-disc text-slate-600 leading-relaxed mb-1">$1</li>')
    .replace(/(<li[\s\S]*?<\/li>\n?)+/g, (m) => `<ul class="my-4 space-y-1">${m}</ul>`)
    .replace(/^(?!<[hul]|<\/[hul]|<li)(.+)$/gm, '<p class="text-slate-600 leading-relaxed mb-4">$1</p>')
    .replace(/<p class="text-slate-600 leading-relaxed mb-4"><\/p>/g, '')
    .replace(/---/g, '<hr class="my-10 border-slate-200" />')
}

export default function BlogPost({ slug }: Props) {
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="pt-16 section bg-white text-center">
        <div className="container max-w-xl">
          <h1 className="heading-xl text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <a href="#/blog" className="btn-primary">Back to Insights</a>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      <section className="section bg-white border-b border-slate-100">
        <div className="container max-w-3xl">
          <a href="#/blog" className="inline-flex items-center gap-2 text-primary-600 text-sm font-medium mb-8 hover:text-primary-800 transition-colors">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Insights
          </a>
          <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 mb-5">
            {post.category}
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white font-bold text-sm shrink-0">
              RR
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">{post.author}</p>
              <p className="text-xs text-slate-500">{post.authorRole}</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-xs text-slate-500">
                {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
              <p className="text-xs text-slate-500">{post.readTime}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-3xl">
          <div
            className="prose-content text-slate-700 text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          <div className="mt-16 rounded-xl border border-primary-200 bg-primary-50 p-8">
            <p className="text-sm font-bold text-primary-800 mb-1">Ready to Take Action?</p>
            <p className="text-sm text-primary-700 mb-5">
              Start with a free 45-minute diagnostic call with the PatuhData team. No obligation, no sales process.
            </p>
            <a href="#contact" onClick={() => { window.location.hash = '' }} className="btn-primary">
              Request a Free Consultation
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">More Insights</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.slug !== slug)
                .slice(0, 2)
                .map((p) => (
                  <a
                    key={p.slug}
                    href={`#/blog/${p.slug}`}
                    className="group rounded-xl border border-slate-200 p-6 hover:border-primary-200 hover:shadow-card transition-all duration-300"
                  >
                    <span className="text-xs font-semibold text-primary-600">{p.category}</span>
                    <h3 className="mt-2 text-sm font-bold text-slate-900 leading-snug group-hover:text-primary-700 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500">{p.readTime}</p>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
