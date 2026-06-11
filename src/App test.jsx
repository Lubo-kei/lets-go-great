import Blog from "./pages/Blog"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Article from "./pages/Article.jsx"

function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#D0FE1D_0%,#E6F7A5_70%,#FAFBF7_97%)]">
      <Header />

      <section className="px-8 md:px-16 py-24 md:py-36 border-b border-[#3A3A3A]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.06em] md:tracking-[0.2em] text-[10px] md:text-sm text-[#E8FF00] mb-6 whitespace-nowrap">
              <>
  mindset&nbsp;&nbsp;&nbsp;
  nutrition&nbsp;&nbsp;&nbsp;
  movement&nbsp;&nbsp;&nbsp;
  recovery
</>
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] text-[#262626] tracking-tight mb-8">
              .real life
              <br />
              strategies
              <br />
              for actual real life.
            </h1>

            <p className="text-lg text-[#262626] leading-relaxed max-w-xl mb-10">
              Evidence-based health, performance and recovery strategies for
              people who care deeply about movement, longevity and mental
              clarity — without wasting time on noise.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/blog"
                className="px-7 py-3 rounded-full border border-[#1F1F1F] bg-white text-[#1F1F1F] font-medium hover:border-2 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
>
                explore blog
              </a>

              <button className="px-7 py-3 rounded-full border border-[#1F1F1F] bg-[#D0FE1D] text-[#262626] hover:border-2 hover:scale-[1.02] hover:shadow-md transition-all duration-200">
                join community
              </button>
            </div>
          </div>

          <div className="border-2 border-[#262626]/20 bg-white rounded-3xl pt-7 pb-14 px-12 w-full max-w-[460px] ml-auto mr-0">
  <div className="space-y-10">
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-[#262626]/45 mb-2">
        focus
      </p>

      <h3 className="text-3xl text-[#D0FE1D] font-semibold tracking-tight [text-shadow:1px_0_0_rgba(38,38,38,0.35),-1px_0_0_rgba(38,38,38,0.35),0_1px_0_rgba(38,38,38,0.35),0_-1px_0_rgba(38,38,38,0.35),0_6px_18px_rgba(38,38,38,0.15)]">
  human performance
</h3>
    </div>

    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-[#262626]/45 mb-2">
        approach
      </p>

      <h3 className="text-3xl text-[#D0FE1D] font-semibold tracking-tight [text-shadow:1px_0_0_rgba(38,38,38,0.35),-1px_0_0_rgba(38,38,38,0.35),0_1px_0_rgba(38,38,38,0.35),0_-1px_0_rgba(38,38,38,0.35),0_6px_18px_rgba(38,38,38,0.15)]">
  simple + applicable
</h3>
    </div>

    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-[#262626]/45 mb-2">
        content
      </p>

      <h3 className="text-3xl text-[#D0FE1D] font-semibold tracking-tight [text-shadow:1px_0_0_rgba(38,38,38,0.35),-1px_0_0_rgba(38,38,38,0.35),0_1px_0_rgba(38,38,38,0.35),0_-1px_0_rgba(38,38,38,0.35),0_6px_18px_rgba(38,38,38,0.15)]">
        short-form + deep dives
      </h3>
    </div>
  </div>
</div>
        </div>
      </section>

      <section id="why" className="bg-white text-[#1F1F1F] px-8 md:px-16 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-sm mb-6">
            our why
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-10">
            Help people cut through information overload and apply meaningful
            strategies that improve body, mind and long-term performance.
          </h2>

          <p className="text-lg leading-relaxed max-w-3xl text-[#1F1F1F]/80">
            No trends. No fake optimization. No unnecessary complexity. Just
            practical systems for movement, nutrition, recovery and mindset
            explained clearly for modern people with limited time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function App() {
  const path = window.location.pathname

  if (path.startsWith("/blog/")) {
    return <Article />
  }

  if (path === "/blog") {
    return <Blog />
  }

  return <Home />
}
