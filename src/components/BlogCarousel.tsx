import { useState } from 'react'
import { blogPosts } from '../data/blogData'

const VISIBLE = 3
const posts = blogPosts.slice(0, 9)

export default function BlogCarousel() {
  const [index, setIndex] = useState(0)

  const canPrev = index > 0
  const canNext = index < posts.length - VISIBLE

  const prev = () => setIndex(i => Math.max(0, i - 1))
  const next = () => setIndex(i => Math.min(posts.length - VISIBLE, i + 1))

  const visible = posts.slice(index, index + VISIBLE)

  return (
    <section id="blog-carousel" className="section bg-slate-50 border-b border-slate-100">
      <div className="container">

        {/* Header row */}
        <div className="flex items-end justify-between mb-10 reveal">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-3">Artikel &amp; Wawasan</p>
            <h2
              className="font-black text-slate-900 leading-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
            >
              Insights dari lapangan.
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="flex gap-2 shrink-0 ml-6">
            <button
              onClick={prev}
              disabled={!canPrev}
              aria-label="Previous"
              className="h-11 w-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-primary-400 hover:text-primary-600 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-150"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              aria-label="Next"
              className="h-11 w-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-primary-400 hover:text-primary-600 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-150"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal reveal-delay-1">
          {visible.map(post => (
            <a
              key={post.slug}
              href={`#/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-primary-200 hover:shadow-lg transition-all duration-200"
            >
              {/* Category bar */}
              <div className="px-7 pt-7 pb-0">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary-600 bg-primary-50 rounded-full px-3 py-1">
                  {post.category}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-7 pt-4">
                <h3
                  className="font-black text-slate-900 leading-snug mb-3 group-hover:text-primary-700 transition-colors"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '1.2rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {post.title}
                </h3>

                <p
                  className="text-sm text-slate-500 leading-relaxed flex-1"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-400">
                    {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                    &nbsp;·&nbsp;{post.readTime}
                  </span>
                  <span className="text-xs font-bold text-primary-600 group-hover:translate-x-1 transition-transform inline-block">
                    Baca →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {Array.from({ length: posts.length - VISIBLE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-200 ${
                i === index
                  ? 'w-6 h-2 bg-primary-600'
                  : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-8 text-center reveal">
          <a
            href="#/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-primary-600 transition-colors"
          >
            Lihat semua artikel
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
