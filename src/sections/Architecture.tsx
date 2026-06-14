const layers = [
  {
    num: '01',
    title: '클라이언트',
    borderClass: 'border-violet-200 hover:border-violet-300',
    labelClass: 'text-violet-600 bg-violet-50',
    dotClass: 'bg-violet-400',
    tagClass: 'bg-violet-50 text-violet-700 border-violet-100',
    dividerClass: 'border-violet-100',
    items: [
      '웹 프론트엔드 (React)',
      '지갑 연결 (MetaMask 등)',
      '트랜잭션 서명',
      '포트폴리오 조회 UI',
      '거버넌스 투표 UI',
    ],
    flows: ['토큰 구매 트랜잭션', '투표 트랜잭션', '배당 Claim'],
  },
  {
    num: '02',
    title: '백엔드',
    borderClass: 'border-blue-200 hover:border-blue-300',
    labelClass: 'text-blue-600 bg-blue-50',
    dotClass: 'bg-blue-400',
    tagClass: 'bg-blue-50 text-blue-700 border-blue-100',
    dividerClass: 'border-blue-100',
    items: [
      'REST API 서버',
      '블록체인 이벤트 구독 (WS)',
      'DB 인덱싱 & 동기화',
      '토스페이먼츠 웹훅 처리',
      '스테이블코인 자동 송금',
    ],
    flows: ['이벤트 리스닝', 'DB 동기화', '가상계좌 웹훅'],
  },
  {
    num: '03',
    title: '블록체인',
    borderClass: 'border-purple-200 hover:border-purple-300',
    labelClass: 'text-purple-600 bg-purple-50',
    dotClass: 'bg-purple-400',
    tagClass: 'bg-purple-50 text-purple-700 border-purple-100',
    dividerClass: 'border-purple-100',
    items: [
      'ERC-3643 부동산 토큰',
      'ONCHAINID 신원 인증',
      '수익 분배 컨트랙트',
      '거버넌스 컨트랙트',
      'GIWA 네트워크',
    ],
    flows: ['KYC 검증', '트랜잭션 처리', '이벤트 발행'],
  },
]

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm text-violet-600 font-semibold mb-3">시스템 아키텍처</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">3-Layer 아키텍처</h2>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
            클라이언트, 백엔드, 블록체인이 유기적으로 연결되어 안전하고 빠른 서비스를 제공합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-5 relative">
          {/* Arrows between cards */}
          <div className="hidden md:flex absolute top-1/2 left-[calc(33.33%-16px)] -translate-y-1/2 z-10">
            <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 text-sm shadow-sm">
              ⇄
            </div>
          </div>
          <div className="hidden md:flex absolute top-1/2 right-[calc(33.33%-16px)] -translate-y-1/2 z-10">
            <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 text-sm shadow-sm">
              ⇄
            </div>
          </div>

          {layers.map((layer, i) => (
            <div
              key={i}
              className={`bg-white border ${layer.borderClass} rounded-2xl p-6 transition-all duration-300 hover:shadow-lg`}
            >
              <div className={`text-xs font-bold uppercase tracking-widest rounded-full px-2.5 py-0.5 inline-block mb-1 ${layer.labelClass}`}>
                Layer {layer.num}
              </div>
              <div className="font-bold text-gray-900 text-lg mb-5">{layer.title}</div>

              <ul className="space-y-2.5 mb-5">
                {layer.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${layer.dotClass}`} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className={`border-t ${layer.dividerClass} pt-4 flex flex-wrap gap-1.5`}>
                {layer.flows.map((flow, j) => (
                  <span
                    key={j}
                    className={`text-xs rounded-full px-2.5 py-0.5 border font-medium ${layer.tagClass}`}
                  >
                    {flow}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Data flow summary */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="text-sm text-gray-600 text-center leading-relaxed">
            <span className="text-gray-900 font-semibold">데이터 수정</span>이 필요할 때 → 프론트·백엔드가 컨트랙트로 트랜잭션 전송
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <span className="text-gray-900 font-semibold">백엔드가 이벤트 구독</span>해 DB 동기화
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <span className="text-gray-900 font-semibold">조회 요청</span>은 백엔드 API로 빠르게 응답
          </div>
        </div>
      </div>
    </section>
  )
}
