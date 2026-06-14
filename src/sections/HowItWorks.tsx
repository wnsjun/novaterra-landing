import { useState } from 'react'

const flows = [
  {
    id: 'invest',
    label: '지분 투자',
    icon: '💰',
    steps: [
      {
        title: 'KYC 인증',
        desc: 'ONCHAINID를 발급받아 화이트리스트에 등록합니다. 이 온체인 신분증이 없으면 투자가 불가능합니다.',
      },
      {
        title: '자산 선택',
        desc: '투자할 부동산을 선택하고 투자 금액을 결정합니다.',
      },
      {
        title: '토큰 구매',
        desc: '원화 스테이블코인 승인 후 지분 구매 트랜잭션이 블록체인에 기록됩니다.',
      },
      {
        title: '지분 확보',
        desc: '블록체인 원장에 투자자 앞으로 지분 소유권이 즉시 업데이트됩니다.',
      },
    ],
  },
  {
    id: 'dividend',
    label: '배당 수령',
    icon: '💸',
    steps: [
      {
        title: '임대료 입금',
        desc: '임차인이 토스페이먼츠 가상계좌로 월세를 입금합니다.',
      },
      {
        title: '스테이블코인 전환',
        desc: '서버가 입금을 확인하고 원화 스테이블코인을 블록체인 수익분배 컨트랙트로 자동 송금합니다.',
      },
      {
        title: '스냅샷 기록',
        desc: '배당 기준 시점의 토큰 보유 현황이 블록체인에 고정됩니다. 이후 토큰 이동은 배당 기준에 영향을 주지 않습니다.',
      },
      {
        title: '배당 Claim',
        desc: '투자자가 Claim 요청하면 스마트 컨트랙트가 보유 비율대로 원화 스테이블코인을 자동 지급합니다.',
      },
    ],
  },
  {
    id: 'governance',
    label: '의사결정',
    icon: '🗳️',
    steps: [
      {
        title: '안건 제안',
        desc: '토큰 보유자가 리모델링, 임대료 인상 등의 안건을 온체인 거버넌스 시스템에 등록합니다.',
      },
      {
        title: '투표권 부여',
        desc: '해당 부동산 토큰 보유자에게 투표 권한이 생기며, 다른 사람에게 위임도 가능합니다.',
      },
      {
        title: '가중치 투표',
        desc: '보유 토큰 수에 비례하는 가중치로 투표하며, 스냅샷 기반으로 중복 투표가 방지됩니다.',
      },
      {
        title: '결과 기록',
        desc: '투표 결과가 블록체인에 영구 기록되어 사후 조작이 불가능합니다.',
      },
    ],
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const flow = flows[active]

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm text-violet-600 font-semibold mb-3">작동 방식</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">이렇게 작동합니다</h2>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
            투자부터 배당 수령, 의사결정 참여까지 모든 과정이 블록체인 위에서 투명하게 실행됩니다.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {flows.map((f, i) => (
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
