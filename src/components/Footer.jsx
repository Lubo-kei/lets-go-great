import { useState } from "react"

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const email = "hello@letsgogreat.com"

  function copyEmail() {
    navigator.clipboard.writeText(email)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
    <footer className="bg-white text-[#1F1F1F] border-t border-[#1F1F1F] px-6 md:px-16 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-2xl md:text-3xl font-semibold tracking-tight">
            Let&apos;s do Better
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-base md:text-lg">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[#1F1F1F]/80 hover:text-black transition-colors"
          >
            instagram
          </a>

          <button
            onClick={copyEmail}
            className="px-5 py-2 rounded-full border border-[#1F1F1F] bg-[#E8FF00] text-[#1F1F1F] hover:opacity-90 transition-opacity"
          >
            {copied ? "copied" : "copy email"}
          </button>
        </div>
      </div>
    </footer>
  )
}