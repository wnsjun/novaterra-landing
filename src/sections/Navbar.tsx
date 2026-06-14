import { useState, useEffect } from 'react'

const links = [
  { href: '#problems', label: '문제점' },
  { href: '#solutions', label: '솔루션' },
  { href: '#how-it-works', label: '작동 방식' },
  { href: '#architecture', label: '아키텍처' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M8 1V15M2 4.5L14 11.5M14 4.5L2 11.5" stroke="white" strokeWidth="1" strokeOpacity="0.5"/>
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight text-gray-900">
            Nova<span className="text-violet-600">Terra</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="https://www.hongiknovaterra.store"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm font-semibold transition-colors"
        >
          웹 바로가기 →
        </a>

        <button
          className="md:hidden p-2 text-gray-500 hover:text-gray-900"
          onClick={() => setOpen(!open)}
        >
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 pb-4 shadow-lg">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-gray-600 hover:text-gray-900 border-b border-gray-100 last:border-0 transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            className="mt-4 w-full flex justify-center py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            웹 바로가기 →
          </a>
        </div>
      )}
    </nav>
  )
}
