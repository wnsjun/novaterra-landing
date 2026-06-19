import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const { hero: h } = t

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: 'radial-gradient(circle, #d8b4fe 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 border border-violet-200 rounded-full text-violet-700 text-xs font-semibold mb-8">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" />
            {h.badge}
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-gray-900">
            {h.h1_1}<br />
            <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
              {h.h1_2}
            </span><br />
            {h.h1_3}
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">{h.sub}</p>

          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="https://www.hongiknovaterra.store"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-violet-200 hover:shadow-violet-300"
            >
              {h.ctaPrimary}
            </a>
            <a
              href="https://youtu.be/Ie12me_aVuc?si=vIAaBUSajoUWi3O-"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 border border-gray-200 hover:border-violet-300 rounded-xl font-semibold transition-all text-gray-700 hover:text-violet-600 bg-white hover:bg-violet-50"
            >
              {h.ctaSecondary}
            </a>
          </div>

          <div className="flex flex-wrap gap-10 pt-8 border-t border-gray-100">
            {h.stats.map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-sm text-gray-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Property card mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-72 lg:w-80 bg-white border border-gray-200 rounded-2xl p-6 shadow-2xl shadow-gray-200/80 animate-float">
              <div className="w-full h-36 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl mb-5 flex items-center justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)', backgroundSize: '12px 12px' }}
                />
                <div className="text-5xl relative z-10">🏢</div>
              </div>

              <div className="text-xs text-violet-600 font-semibold mb-1">{h.card.location}</div>
              <div className="font-bold text-gray-900 text-base mb-4">{h.card.name}</div>

              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {h.card.metrics.map((m, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-2.5">
                    <div className="text-xs text-gray-400 mb-0.5">{m.label}</div>
                    <div className={`font-bold text-sm ${i === 1 ? 'text-violet-600' : i === 2 ? 'text-emerald-600' : 'text-gray-900'}`}>
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full bg-gray-100 rounded-full h-1.5 mb-4">
                <div className="bg-gradient-to-r from-violet-600 to-purple-500 h-1.5 rounded-full" style={{ width: '73%' }} />
              </div>

              <button className="w-full py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-semibold transition-colors">
                {h.card.cta}
              </button>
            </div>

            <div className="absolute -top-3 -right-3 flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5 text-xs text-emerald-700 font-semibold">
              {h.card.kyc}
            </div>

            <div className="absolute -bottom-6 -left-10 bg-white border border-gray-200 rounded-xl p-3.5 shadow-lg w-48 animate-float-delay">
              <div className="text-xs text-gray-400 mb-0.5">{h.card.dividendLabel}</div>
              <div className="font-bold text-emerald-600 text-base">+₩4,800</div>
              <div className="text-xs text-gray-400 mt-0.5">{h.card.dividendNote}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
