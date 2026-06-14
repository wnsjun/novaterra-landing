export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-br from-violet-600 to-purple-700 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 border border-white/20 rounded-full text-white/90 text-xs font-semibold mb-6">
          지금 시작하세요
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          진정한 건물주가 되는<br />새로운 방법
        </h2>
        <p className="text-violet-100 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          NovaTerra와 함께 소액으로 프리미엄 부동산에 투자하고,
          투명한 블록체인 위에서 실시간으로 수익을 받아보세요.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.hongiknovaterra.store"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-white text-violet-700 hover:bg-violet-50 rounded-xl font-bold text-lg transition-all shadow-xl shadow-black/20 hover:shadow-2xl"
          >
            투자 시작하기
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border-2 border-white/40 hover:border-white/70 text-white rounded-xl font-bold text-lg transition-all hover:bg-white/10"
          >
            GitHub 보기 ↗
          </a>
        </div>
      </div>
    </section>
  )
}
