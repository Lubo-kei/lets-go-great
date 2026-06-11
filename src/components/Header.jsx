import logo from "../assets/real.logo.png"
export default function Header() {
  return (
    <header className="bg-white border-b border-[#1F1F1F] px-10 md:px-16 py-1">
      <div className="w-full flex items-center justify-between gap-6">
        <a href="/">
  <img
  src={logo}
  alt=".real"
  className="h-20 md:h-24 w-auto"
/>
</a>

        <nav className="flex items-center gap-4 md:gap-10 text-sm md:text-lg">
          <a
            href="/#why"
            className="text-[#1F1F1F]/80 leading-relaxed hover:text-black transition-colors whitespace-nowrap"
          >
            our why
          </a>

          <a
            href="/blog"
            className="text-[#1F1F1F]/80 leading-relaxed hover:text-black transition-colors whitespace-nowrap"
          >
            blog
          </a>

          <button className="px-5 md:px-8 py-2 md:py-3 rounded-full border border-[#1F1F1F] bg-[#E8FF00] text-[#1F1F1F]/80 leading-relaxed hover:opacity-90 transition-opacity whitespace-nowrap">
            community
          </button>
        </nav>
      </div>
    </header>
  )
}