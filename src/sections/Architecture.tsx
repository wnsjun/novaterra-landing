import { useLanguage } from '../context/LanguageContext'

const LAYER_STYLES = [
  {
    borderClass: 'border-violet-200 hover:border-violet-300',
    labelClass: 'text-violet-600 bg-violet-50',
    dotClass: 'bg-violet-400',
    tagClass: 'bg-violet-50 text-violet-700 border-violet-100',
    dividerClass: 'border-violet-100',
  },
  {
    borderClass: 'border-blue-200 hover:border-blue-300',
    labelClass: 'text-blue-600 bg-blue-50',
    dotClass: 'bg-blue-400',
    tagClass: 'bg-blue-50 text-blue-700 border-blue-100',
    dividerClass: 'border-blue-100',
  },
  {
    borderClass: 'border-purple-200 hover:border-purple-300',
    labelClass: 'text-purple-600 bg-purple-50',
    dotClass: 'bg-purple-400',
    tagClass: 'bg-purple-50 text-purple-700 border-purple-100',
    dividerClass: 'border-purple-100',
  },
]

export default function Architecture() {
  const { t } = useLanguage()
  const { architecture: a } = t

  return (
    <section id="architecture" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm text-violet-600 font-semibold mb-3">{a.eyebrow}</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{a.h2}</h2>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">{a.sub}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-5 relative">
          <div className="hidden md:flex absolute top-1/2 left-[calc(33.33%-16px)] -translate-y-1/2 z-10">
            <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 text-sm shadow-sm">⇄</div>
          </div>
          <div className="hidden md:flex absolute top-1/2 right-[calc(33.33%-16px)] -translate-y-1/2 z-10">
            <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 text-sm shadow-sm">⇄</div>
          </div>

          {a.layers.map((layer, i) => {
            const style = LAYER_STYLES[i]
            return (
              <div
                key={i}
                className={`bg-white border ${style.borderClass} rounded-2xl p-6 transition-all duration-300 hover:shadow-lg`}
              >
                <div className={`text-xs font-bold uppercase tracking-widest rounded-full px-2.5 py-0.5 inline-block mb-1 ${style.labelClass}`}>
                  Layer {layer.num}
                </div>
                <div className="font-bold text-gray-900 text-lg mb-5">{layer.title}</div>

                <ul className="space-y-2.5 mb-5">
                  {layer.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${style.dotClass}`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className={`border-t ${style.dividerClass} pt-4 flex flex-wrap gap-1.5`}>
                  {layer.flows.map((flow, j) => (
                    <span key={j} className={`text-xs rounded-full px-2.5 py-0.5 border font-medium ${style.tagClass}`}>
                      {flow}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-gray-600 text-center leading-relaxed">{a.summary}</p>
        </div>
      </div>
    </section>
  )
}
