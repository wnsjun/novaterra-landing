import { useLanguage } from '../context/LanguageContext'

export default function Solutions() {
  const { t } = useLanguage()
  const { solutions: s } = t

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm text-violet-600 font-semibold mb-3">{s.eyebrow}</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {s.h2_1}<br />{s.h2_2}
          </h2>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">{s.sub}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {s.items.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-violet-100 hover:border-violet-300 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-violet-50"
            >
              <div className="text-4xl mb-5">{item.icon}</div>
              <div className="inline-flex text-xs text-violet-700 bg-violet-50 border border-violet-100 rounded-full px-3 py-1 mb-4 font-medium">
                {item.tag}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2.5">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.desc}</p>
              <div className="text-xs text-violet-600 bg-violet-50 rounded-lg px-3 py-2 font-mono border border-violet-100">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
