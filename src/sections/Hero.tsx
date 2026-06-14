export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50 rounded-full blur-3xl opacity-70 pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, #d8b4fe 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 border border-violet-200 rounded-full text-violet-700 text-xs font-semibold mb-8">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" />
            블록체인 기반 부동산 증권 투자 플랫폼
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-gray-900">
            커피 한 잔 값으로<br />
            <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
              강남의 건물주
            </span>
            가<br />되세요
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
            NovaTerra는 블록체인으로 누구나 소액으로 프리미엄 부동산에 투자할 수 있는 플랫폼입니다.
            투명한 온체인 수익 분배와 직접적인 의사결정 참여로 진정한 건물주가 되세요.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="https://www.hongiknovaterra.store"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-violet-200 hover:shadow-violet-300"
            >
              지금 투자 시작하기
            </a>
            <a
              href="#how-it-works"
              className="px-6 py-3.5 border border-gray-200 hover:border-violet-300 rounded-xl font-semibold transition-all text-gray-700 hover:text-violet-600 bg-white hover:bg-violet-50"
            >
              작동 방식 보기 →
            </a>
          </div>

          <div className="flex flex-wrap gap-10 pt-8 border-t border-gray-100">
            <div>
              <div className="text-2xl font-bold text-gray-900">₩10,000</div>
              <div className="text-sm text-gray-400 mt-0.5">최소 투자 금액</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-400 mt-0.5">온체인 투명성</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">실시간</div>
              <div className="text-sm text-gray-400 mt-0.5">배당 자동 수령</div>
            </div>
          </div>
        </div>

        {/* Right: Property card mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main card */}
            <div className="w-72 lg:w-80 bg-white border border-gray-200 rounded-2xl p-6 shadow-2xl shadow-gray-200/80 animate-float">
              <div className="w-full h-36 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl mb-5 flex items-center justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)',
                    backgroundSize: '12px 12px',
                  }}
                />
                <div className="text-5xl relative z-10">🏢</div>
              </div>

              <div className="text-xs text-violet-600 font-semibold mb-1">서울 강남구 · 오피스 빌딩</div>
              <div className="font-bold text-gray-900 text-base mb-4">강남 프라임 빌딩 A동</div>

              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {[
                  { label: '총 평가액', value: '50억원', color: 'text-gray-900' },
                  { label: '토큰 단가', value: '₩10,000', color: 'text-violet-600' },
                  { label: '예상 수익률', value: '연 4.8%', color: 'text-emerald-600' },
                  { label: '모집 현황', value: '73%', color: 'text-gray-900' },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-2.5">
                    <div className="text-xs text-gray-400 mb-0.5">{item.label}</div>
                    <div className={`font-bold text-sm ${item.color}`}>{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="w-full bg-gray-100 rounded-full h-1.5 mb-4">
                <div
                  className="bg-gradient-to-r from-violet-600 to-purple-500 h-1.5 rounded-full"
                  style={{ width: '73%' }}
                />
              </div>

              <button className="w-full py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-semibold transition-colors">
                투자하기
              </button>
            </div>

            {/* KYC badge */}
            <div className="absolute -top-3 -right-3 flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5 text-xs text-emerald-700 font-semibold">
              <span>✓</span> KYC 인증 완료
            </div>

            {/* Floating dividend card */}
            <div className="absolute -bottom-6 -left-10 bg-white border border-gray-200 rounded-xl p-3.5 shadow-lg w-48 animate-float-delay">
              <div className="text-xs text-gray-400 mb-0.5">이번 달 배당금 수령</div>
              <div className="font-bold text-emerald-600 text-base">+₩4,800</div>
              <div className="text-xs text-gray-400 mt-0.5">스마트 컨트랙트 자동 지급</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
