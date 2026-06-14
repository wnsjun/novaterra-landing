const problems = [
  {
    icon: '🏦',
    tag: '수십억 원의 초기 자금 필요',
    title: '높은 진입 장벽',
    desc: '강남 빌딩 하나에 수십억 원이 필요합니다. 부동산 펀드도 최소 투자금이 높고, 중도 환매도 어렵습니다.',
  },
  {
    icon: '🔒',
    tag: '운용사만 아는 수익 정보',
    title: '불투명한 운용',
    desc: '내가 투자한 건물의 임대수익이 얼마인지, 어떻게 배분되는지를 투자자는 운용사 보고서에만 의존합니다.',
  },
  {
    icon: '🚫',
    tag: '투자자 의견 반영 불가',
    title: '의사결정 소외',
    desc: '리모델링, 임대료 인상 등 내 투자 자산의 세부 결정에 투자자는 개입하기 힘듭니다.',
  },
]

export default function Problems() {
  return (
    <section id="problems" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm text-rose-600 font-semibold mb-3">기존 부동산 투자의 한계</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            일반 투자자에게는<br />3가지 벽이 존재합니다
          </h2>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
            전통적인 부동산 투자 구조는 소액 투자자를 철저히 배제해 왔습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-rose-100 hover:border-rose-200 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:shadow-rose-50"
            >
              <div className="text-4xl mb-5">{p.icon}</div>
              <div className="inline-flex text-xs text-rose-600 bg-rose-50 border border-rose-100 rounded-full px-3 py-1 mb-4 font-medium">
                {p.tag}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2.5">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
