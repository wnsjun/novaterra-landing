import { useLanguage } from '../context/LanguageContext'

export default function Technology() {
  const { t } = useLanguage()
  const { technology: tech } = t

  return (
    <section id="technology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm text-violet-600 font-semibold mb-3">{tech.eyebrow}</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {tech.h2_1}<br />{tech.h2_2}
          </h2>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">{tech.sub}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {tech.items.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 hover:border-violet-200 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-violet-50"
            >
              <div className="text-4xl mb-5">{item.icon}</div>
              <div className="text-xs text-violet-600 font-medium mb-1">{item.sub}</div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, j) => (
                  <span key={j} className="text-xs bg-violet-50 text-violet-700 border border-violet-100 rounded-full px-2.5 py-0.5 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
