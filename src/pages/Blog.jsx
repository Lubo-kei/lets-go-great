import { useEffect, useState } from "react"
import { articles } from "../data/articles"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

const categories = ["all", "mindset", "nutrition", "movement", "recovery"]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeSlide, setActiveSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const topArticles = [...articles]
    .sort((a, b) => b.reads - a.reads)
    .slice(0, 5)
    function goToNextSlide() {
  setActiveSlide((current) => (current + 1) % topArticles.length)
}

function goToPreviousSlide() {
  setActiveSlide((current) =>
    current === 0 ? topArticles.length - 1 : current - 1
  )
}

function handleTouchEnd() {
  if (touchStart === null || touchEnd === null) return

  const distance = touchStart - touchEnd
  const minSwipeDistance = 50

  if (distance > minSwipeDistance) {
    goToNextSlide()
  }

  if (distance < -minSwipeDistance) {
    goToPreviousSlide()
  }

  setTouchStart(null)
  setTouchEnd(null)
}

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [topArticles.length])

  const filteredArticles =    activeCategory === "all"
      ? articles
      : articles.filter((article) => article.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#1F1F1F] text-white font-sans">
        <Header />

      <main>
<section className="px-8 md:px-16 py-10 border-b border-[#3A3A3A]">
  <h1 className="text-3xl md:text-4xl font-semibold text-[#E8FF00] tracking-tight mb-4">
    blog
  </h1>

  <p className="uppercase tracking-[0.2em] text-sm text-[#E8FF00] mb-8">
    most read
  </p>

  <div
  className="relative h-[258px] overflow-hidden rounded-xl border border-[#3A3A3A]"
  onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
  onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
  onTouchEnd={handleTouchEnd}
>
    {topArticles.map((article, index) => (
      <article
        key={article.id}
        className={`absolute inset-0 transition-opacity duration-700 ${
          index === activeSlide ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[#E8FF00] text-sm uppercase tracking-[0.2em]">
              #{index + 1} most read
            </span>

            <span className="text-white/70 text-sm">
              {article.reads} reads
            </span>
          </div>

          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.2em] text-sm text-white/60 mb-4">
              {article.category}
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight mb-4">
              {article.title}
            </h2>

            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              {article.subtitle}
            </p>
          </div>
        </div>
      </article>
    ))}

    <div className="absolute bottom-6 right-8 flex gap-2">
      {topArticles.map((_, index) => (
        <button
          key={index}
          onClick={() => setActiveSlide(index)}
          className={`h-2 rounded-full transition-all ${
            index === activeSlide
              ? "w-8 bg-[#E8FF00]"
              : "w-2 bg-white/50"
          }`}
        />
      ))}
    </div>
  </div>
</section>

        <section className="px-8 md:px-16 py-6 border-b border-[#3A3A3A]">
          <div className="flex items-center justify-center gap-2 pb-2 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-sm border border-[#1F1F1F] text-[#1F1F1F] ${
                  activeCategory === category
                    ? "bg-[#E8FF00]"
                    : "bg-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section>
          {filteredArticles.map((article) => (
            <a
  key={article.id}
  href={`/blog/${article.slug}`}
  className="block relative min-h-[33vh] border-b border-[#3A3A3A] overflow-hidden"
>
  <img
    src={article.image}
    alt={article.title}
    className="absolute inset-0 w-full h-full object-cover opacity-45"
  />

  <div className="absolute inset-0 bg-black/55" />

  <div className="relative px-8 md:px-16 py-14 min-h-[33vh] flex items-center">
    <div className="max-w-4xl">
      <p className="uppercase tracking-[0.2em] text-sm text-[#E8FF00] mb-5">
        {article.category}
      </p>

      <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-5">
        {article.title}
      </h1>

      <h2 className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl">
        {article.subtitle}
      </h2>
    </div>
  </div>
</a>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}