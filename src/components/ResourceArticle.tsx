import { resourceArticles } from '../data/resourceArticles'
import { coreSolutions } from '../data/coreSolutions'
import { ArchitectLink } from './CoreWebsite'

export default function ResourceArticle({ article }: { article: typeof resourceArticles[number] }) {
  const solution = coreSolutions.find(item => item.slug === article.solution)!
  return <main className="pd-home"><section className="pd-solution-hero pd-resource-hero"><a className="pd-back" href="/#resources">← All resources</a><span className="pd-eyebrow">{article.category}</span><h1>{article.title}</h1><p>{article.summary}</p><small>PatuhData · Practical guide</small></section><article className="article-content">{article.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}<aside>{article.question}</aside><p>Explore <a href={`/solutions/${solution.slug}`}>{solution.name}</a> to turn recovery objectives into an implementation and operating plan.</p><ArchitectLink interest={solution.interest} /></article></main>
}
