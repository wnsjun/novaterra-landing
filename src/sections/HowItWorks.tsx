import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function HowItWorks() {
  const { t } = useLanguage()
  const { howItWorks: h } = t
  const [active, setActive] = useState(0)
  const flow = h.flows[active]

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm text-violet-600 font-semibold mb-3">{h.eyebrow}</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{h.h2}</h2>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">{h.sub}</p>
        </div>

        {/* Tab selector */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {h.flows.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === i
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-200'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-violet-200 hover:text-violet-600'
              }`}
            >
              <span>{f.icon}</span>
              {f.label}
            </button>
          ))}
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-4">
          {flow.steps.map((step, i) => (
            <div
              key={`${flow.id}-${i}`}
              className="relative bg-white border border-gray-200 hover:border-violet-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-violet-50"
            >
              <div className="w-9 h-9 bg-violet-100 border border-violet-200 rounded-full flex items-center justify-center text-violet-700 font-bold text-sm mb-4">
                {i + 1}
              </div>
              {i < flow.steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-7 text-gray-300 text-xl z-10">›</div>
              )}
              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
