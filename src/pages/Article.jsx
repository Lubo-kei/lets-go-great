import { articles } from "../data/articles"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

export default function Article() {
  const slug = window.location.pathname.replace("/blog/", "")
  const article = articles.find((item) => item.slug === slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-[#1F1F1F] text-white">
        <Header />
        <main className="px-8 md:px-16 py-24">
          <h1 className="text-4xl text-[#E8FF00]">Article not found</h1>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1F1F1F] text-white font-sans">
      <Header />

      <main>
        <section className="relative min-h-[55vh] px-8 md:px-16 py-24 flex items-end overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="my-10 rounded-2xl border border-[#D0FE1D] bg-[#F7FFD0] p-6">
  <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
    Kľúčová myšlienka
  </p>

  <p className="text-lg leading-8 text-[#1F1F1F]">
    Pri každom bežeckom kroku dopadáme na zem silou približne 2 až 2,5-násobku
    svojej telesnej hmotnosti. Pri maratónskom tempe môžu byť tieto sily ešte
    vyššie a dosahovať približne trojnásobok telesnej hmotnosti.
  </p>
</div>

          <div className="relative max-w-5xl">
            <p className="uppercase tracking-[0.2em] text-sm text-[#E8FF00] mb-6">
              {article.category}
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold text-[#E8FF00] tracking-tight leading-tight mb-6">
              {article.title}
            </h1>

            <h2 className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl">
              {article.subtitle}
            </h2>
          </div>
        </section>

        <article className="px-8 md:px-16 py-20">
          <div className="max-w-3xl mx-auto space-y-1">
            {article.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-xl text-white/80 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}