import { useLanguage } from '../context/LanguageContext'

export default function Problems() {
  const { t } = useLanguage()
  const { problems: p } = t

  return (
    <section id="problems" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm text-rose-600 font-semibold mb-3">{p.eyebrow}</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {p.h2_1}<br />{p.h2_2}
          </h2>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">{p.sub}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {p.items.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-rose-100 hover:border-rose-200 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:shadow-rose-50"
            >
              <div className="text-4xl mb-5">{item.icon}</div>
              <div className="inline-flex text-xs text-rose-600 bg-rose-50 border border-rose-100 rounded-full px-3 py-1 mb-4 font-medium">
                {item.tag}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2.5">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
