const techs = [
  {
    icon: '🪪',
    sub: '규제 준수 신원 인증',
    title: 'ONCHAINID / KYC',
    desc: 'KYC를 통과한 사용자만 온체인 신분증(ONCHAINID)을 발급받아 화이트리스트에 등록됩니다. 이 신분증이 있어야만 토큰 매수, 배당 수령, 거버넌스 투표가 가능해 익명 부정 거래를 원천 차단합니다.',
    tags: ['ERC-3643', 'KYC/AML', '화이트리스트'],
  },
  {
    icon: '📋',
    sub: '자동 실행되는 계약',
    title: '스마트 컨트랙트',
    desc: '"임대료가 들어오면 토큰 보유 비율대로 자동으로 나눠준다"는 규칙을 코드로 작성해 블록체인에 올려놓으면, 중간에 누가 가로채거나 조작할 수 없습니다.',
    tags: ['Solidity', '자동 배당', '조작 불가'],
  },
  {
    icon: '💴',
    sub: '안정적인 가치 기준',
    title: '원화 스테이블코인',
    desc: '원화에 1:1로 페깅된 스테이블코인을 사용해 블록체인 상에서 임대료 수취와 배당 분배가 이루어집니다. 토스페이먼츠 가상계좌 연동으로 실물 원화 입출금을 지원합니다.',
    tags: ['1:1 원화 페깅', '토스페이먼츠', '실시간 정산'],
  },
]

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm text-violet-600 font-semibold mb-3">핵심 기술</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            신뢰의 기반이 되는<br />기술 스택
          </h2>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
            검증된 블록체인 기술과 금융 인프라를 결합해 안전하고 투명한 플랫폼을 구축했습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {techs.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 hover:border-violet-200 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-violet-50"
            >
              <div className="text-4xl mb-5">{t.icon}</div>
              <div className="text-xs text-violet-600 font-medium mb-1">{t.sub}</div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">{t.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{t.desc}</p>
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs bg-violet-50 text-violet-700 border border-violet-100 rounded-full px-2.5 py-0.5 font-medium"
                  >
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
