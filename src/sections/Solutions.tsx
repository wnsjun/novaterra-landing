const solutions = [
  {
    icon: '💎',
    tag: '₩10,000부터 시작',
    title: '소액 투자 가능',
    desc: '100억짜리 빌딩을 50만 개의 토큰으로 분할해, 만 원어치만 구매해도 지분 소유자가 됩니다. 지분은 블록체인 원장에 영구 기록됩니다.',
    detail: '50억 빌딩 → 50만 토큰 → 토큰 1개 = ₩10,000',
  },
  {
    icon: '⛓️',
    tag: '온체인 검증 가능',
    title: '완전한 투명성',
    desc: '모든 거래가 블록체인에 영구 기록됩니다. 임대료 수령부터 배당 분배까지 실시간으로 확인하고, 스마트 컨트랙트 특성상 조작이 불가능합니다.',
    detail: '임대료 → 스마트 컨트랙트 → 자동 배분',
  },
  {
    icon: '🗳️',
    tag: '온체인 거버넌스',
    title: '직접 의사결정',
    desc: '토큰 보유량에 비례한 투표권으로 건물 리모델링, 임대료 인상, 매각 등 주요 안건을 직접 결정합니다. 스냅샷 기반으로 중복 투표가 방지됩니다.',
    detail: '안건 제안 → 토큰 가중치 투표 → 온체인 기록',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm text-violet-600 font-semibold mb-3">NovaTerra의 해결책</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            블록체인으로<br />모든 장벽을 허뭅니다
          </h2>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
            소유, 배당, 운영권까지 투자자에게 온전히 돌려드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-violet-100 hover:border-violet-300 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-violet-50 group"
            >
              <div className="text-4xl mb-5">{s.icon}</div>
              <div className="inline-flex text-xs text-violet-700 bg-violet-50 border border-violet-100 rounded-full px-3 py-1 mb-4 font-medium">
                {s.tag}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2.5">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="text-xs text-violet-600 bg-violet-50 rounded-lg px-3 py-2 font-mono border border-violet-100">
                {s.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
