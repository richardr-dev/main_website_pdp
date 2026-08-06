import { blogPosts } from '../data/blogData'

export default function Blog() {
  return (
    <div className="pt-16">
      <section className="section bg-white border-b border-slate-100">
        <div className="container">
          <div className="max-w-2xl">
            <p className="label mb-4">Insights & Resources</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Practical thinking on cloud,<br />
              <span className="text-primary-600">AI & Indonesian compliance.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              Written by Richard Rusli, CEO & Lead Architect of PatuhData — covering UU PDP compliance, cloud infrastructure, AI automation, and the operational realities of doing business in Indonesia.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card flex flex-col">
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-base font-bold text-slate-900 leading-snug mb-3 flex-1">
                  <a
                    href={`#/blog/${post.slug}`}
                    className="hover:text-primary-600 transition-colors"
                  >
                    {post.title}
                  </a>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-100">
                  <div>
                    <p className="text-xs font-semibold text-slate-800">{post.author}</p>
                    <p className="text-xs text-slate-500">
                      {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
