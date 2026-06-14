export type Lang = 'ko' | 'en'

const ko = {
  navbar: {
    links: ['문제점', '솔루션', '작동 방식', '아키텍처'],
    cta: '웹 바로가기 →',
  },
  hero: {
    badge: '블록체인 기반 부동산 증권 투자 플랫폼',
    h1_1: '커피 한 잔 값으로',
    h1_2: '강남의 건물주',
    h1_3: '가 되세요',
    sub: 'NovaTerra는 블록체인으로 누구나 소액으로 프리미엄 부동산에 투자할 수 있는 플랫폼입니다. 투명한 온체인 수익 분배와 직접적인 의사결정 참여로 진정한 건물주가 되세요.',
    ctaPrimary: '지금 투자 시작하기',
    ctaSecondary: '작동 방식 보기 →',
    stats: [
      { value: '₩10,000', label: '최소 투자 금액' },
      { value: '100%', label: '온체인 투명성' },
      { value: '실시간', label: '배당 자동 수령' },
    ],
    card: {
      location: '서울 강남구 · 오피스 빌딩',
      name: '강남 프라임 빌딩 A동',
      metrics: [
        { label: '총 평가액', value: '50억원' },
        { label: '토큰 단가', value: '₩10,000' },
        { label: '예상 수익률', value: '연 4.8%' },
        { label: '모집 현황', value: '73%' },
      ],
      cta: '투자하기',
      kyc: '✓ KYC 인증 완료',
      dividendLabel: '이번 달 배당금 수령',
      dividendNote: '스마트 컨트랙트 자동 지급',
    },
  },
  problems: {
    eyebrow: '기존 부동산 투자의 한계',
    h2_1: '일반 투자자에게는',
    h2_2: '3가지 벽이 존재합니다',
    sub: '전통적인 부동산 투자 구조는 소액 투자자를 철저히 배제해 왔습니다.',
    items: [
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
    ],
  },
  solutions: {
    eyebrow: 'NovaTerra의 해결책',
    h2_1: '블록체인으로',
    h2_2: '모든 장벽을 허뭅니다',
    sub: '소유, 배당, 운영권까지 투자자에게 온전히 돌려드립니다.',
    items: [
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
    ],
  },
  howItWorks: {
    eyebrow: '작동 방식',
    h2: '이렇게 작동합니다',
    sub: '투자부터 배당 수령, 의사결정 참여까지 모든 과정이 블록체인 위에서 투명하게 실행됩니다.',
    flows: [
      {
        id: 'invest',
        label: '지분 투자',
        icon: '💰',
        steps: [
          { title: 'KYC 인증', desc: 'ONCHAINID를 발급받아 화이트리스트에 등록합니다. 이 온체인 신분증이 없으면 투자가 불가능합니다.' },
          { title: '자산 선택', desc: '투자할 부동산을 선택하고 투자 금액을 결정합니다.' },
          { title: '토큰 구매', desc: '원화 스테이블코인 승인 후 지분 구매 트랜잭션이 블록체인에 기록됩니다.' },
          { title: '지분 확보', desc: '블록체인 원장에 투자자 앞으로 지분 소유권이 즉시 업데이트됩니다.' },
        ],
      },
      {
        id: 'dividend',
        label: '배당 수령',
        icon: '💸',
        steps: [
          { title: '임대료 입금', desc: '임차인이 토스페이먼츠 가상계좌로 월세를 입금합니다.' },
          { title: '스테이블코인 전환', desc: '서버가 입금을 확인하고 원화 스테이블코인을 블록체인 수익분배 컨트랙트로 자동 송금합니다.' },
          { title: '스냅샷 기록', desc: '배당 기준 시점의 토큰 보유 현황이 블록체인에 고정됩니다. 이후 토큰 이동은 배당 기준에 영향을 주지 않습니다.' },
          { title: '배당 Claim', desc: '투자자가 Claim 요청하면 스마트 컨트랙트가 보유 비율대로 원화 스테이블코인을 자동 지급합니다.' },
        ],
      },
      {
        id: 'governance',
        label: '의사결정',
        icon: '🗳️',
        steps: [
          { title: '안건 제안', desc: '토큰 보유자가 리모델링, 임대료 인상 등의 안건을 온체인 거버넌스 시스템에 등록합니다.' },
          { title: '투표권 부여', desc: '해당 부동산 토큰 보유자에게 투표 권한이 생기며, 다른 사람에게 위임도 가능합니다.' },
          { title: '가중치 투표', desc: '보유 토큰 수에 비례하는 가중치로 투표하며, 스냅샷 기반으로 중복 투표가 방지됩니다.' },
          { title: '결과 기록', desc: '투표 결과가 블록체인에 영구 기록되어 사후 조작이 불가능합니다.' },
        ],
      },
    ],
  },
  technology: {
    eyebrow: '핵심 기술',
    h2_1: '신뢰의 기반이 되는',
    h2_2: '기술 스택',
    sub: '검증된 블록체인 기술과 금융 인프라를 결합해 안전하고 투명한 플랫폼을 구축했습니다.',
    items: [
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
    ],
  },
  architecture: {
    eyebrow: '시스템 아키텍처',
    h2: '3-Layer 아키텍처',
    sub: '클라이언트, 백엔드, 블록체인이 유기적으로 연결되어 안전하고 빠른 서비스를 제공합니다.',
    layers: [
      {
        num: '01',
        title: '클라이언트',
        items: ['웹 프론트엔드 (React)', '지갑 연결 (MetaMask 등)', '트랜잭션 서명', '포트폴리오 조회 UI', '거버넌스 투표 UI'],
        flows: ['토큰 구매 트랜잭션', '투표 트랜잭션', '배당 Claim'],
      },
      {
        num: '02',
        title: '백엔드',
        items: ['REST API 서버', '블록체인 이벤트 구독 (WS)', 'DB 인덱싱 & 동기화', '토스페이먼츠 웹훅 처리', '스테이블코인 자동 송금'],
        flows: ['이벤트 리스닝', 'DB 동기화', '가상계좌 웹훅'],
      },
      {
        num: '03',
        title: '블록체인',
        items: ['ERC-3643 부동산 토큰', 'ONCHAINID 신원 인증', '수익 분배 컨트랙트', '거버넌스 컨트랙트', 'GIWA 네트워크'],
        flows: ['KYC 검증', '트랜잭션 처리', '이벤트 발행'],
      },
    ],
    summary: '데이터 수정이 필요할 때 → 프론트·백엔드가 컨트랙트로 트랜잭션 전송 · 백엔드가 이벤트 구독해 DB 동기화 · 조회 요청은 백엔드 API로 빠르게 응답',
  },
  cta: {
    eyebrow: '지금 시작하세요',
    h2_1: '진정한 건물주가 되는',
    h2_2: '새로운 방법',
    sub: 'NovaTerra와 함께 소액으로 프리미엄 부동산에 투자하고, 투명한 블록체인 위에서 실시간으로 수익을 받아보세요.',
    ctaPrimary: '투자 시작하기',
    ctaSecondary: 'GitHub 보기 ↗',
  },
  footer: {
    tagline: '블록체인 기반 부동산 증권 투자 플랫폼 · Built on GIWA Chain',
  },
}

const en: typeof ko = {
  navbar: {
    links: ['Problems', 'Solutions', 'How It Works', 'Architecture'],
    cta: 'Launch App →',
  },
  hero: {
    badge: 'Blockchain-Based Real Estate Securities Platform',
    h1_1: 'Become a Gangnam',
    h1_2: 'property owner',
    h1_3: 'for the price of a coffee',
    sub: 'NovaTerra leverages blockchain to let anyone invest in premium real estate from just ₩10,000. Experience transparent on-chain dividend distribution and direct governance rights.',
    ctaPrimary: 'Start Investing Now',
    ctaSecondary: 'See How It Works →',
    stats: [
      { value: '₩10,000', label: 'Min. Investment' },
      { value: '100%', label: 'On-Chain Transparency' },
      { value: 'Real-time', label: 'Auto Dividends' },
    ],
    card: {
      location: 'Gangnam-gu, Seoul · Office Building',
      name: 'Gangnam Prime Building, Tower A',
      metrics: [
        { label: 'Total Value', value: '₩5B' },
        { label: 'Token Price', value: '₩10,000' },
        { label: 'Est. Yield', value: '4.8% p.a.' },
        { label: 'Funding', value: '73%' },
      ],
      cta: 'Invest',
      kyc: '✓ KYC Verified',
      dividendLabel: "This Month's Dividend",
      dividendNote: 'Auto-paid by Smart Contract',
    },
  },
  problems: {
    eyebrow: 'The Limits of Traditional Real Estate',
    h2_1: '3 Barriers Blocking',
    h2_2: 'Ordinary Investors',
    sub: 'Traditional real estate investment has long excluded small investors.',
    items: [
      {
        icon: '🏦',
        tag: 'Billions needed upfront',
        title: 'High Entry Barriers',
        desc: 'A single Gangnam building costs billions of won. Real estate funds demand high minimums and restrict early redemptions.',
      },
      {
        icon: '🔒',
        tag: 'Only managers know the returns',
        title: 'Opaque Operations',
        desc: 'Investors have no way to independently verify rental income or distributions — they rely entirely on manager reports.',
      },
      {
        icon: '🚫',
        tag: 'Investors have no say',
        title: 'No Voice in Decisions',
        desc: 'Renovation, rent hikes, or asset sales are decided without any investor input.',
      },
    ],
  },
  solutions: {
    eyebrow: "NovaTerra's Solution",
    h2_1: 'Breaking Every Barrier',
    h2_2: 'with Blockchain',
    sub: 'Full ownership, dividends, and governance rights — returned to investors.',
    items: [
      {
        icon: '💎',
        tag: 'Start from ₩10,000',
        title: 'Micro-Investment',
        desc: 'A ₩10B building is split into 500,000 tokens. Buy even one and you own a stake. Every holding is permanently recorded on-chain.',
        detail: '₩5B building → 500K tokens → 1 token = ₩10,000',
      },
      {
        icon: '⛓️',
        tag: 'On-chain verifiable',
        title: 'Full Transparency',
        desc: 'Every transaction is permanently recorded on the blockchain. From rent collection to dividend distribution — all verifiable in real time. Smart contracts make manipulation impossible.',
        detail: 'Rent → Smart Contract → Auto-distribution',
      },
      {
        icon: '🗳️',
        tag: 'On-chain governance',
        title: 'Direct Governance',
        desc: 'Token holders vote on renovations, rent increases, and asset sales — with weight proportional to holdings. Snapshot-based voting prevents double-counting.',
        detail: 'Proposal → Weighted vote → On-chain record',
      },
    ],
  },
  howItWorks: {
    eyebrow: 'How It Works',
    h2: "Here's How It Works",
    sub: 'From investment to dividends and governance — every step runs transparently on the blockchain.',
    flows: [
      {
        id: 'invest',
        label: 'Investment',
        icon: '💰',
        steps: [
          { title: 'KYC Verification', desc: 'Get your ONCHAINID to be whitelisted. Without this on-chain identity, investing is not permitted.' },
          { title: 'Select Asset', desc: 'Choose a property and decide how much to invest.' },
          { title: 'Buy Tokens', desc: 'Approve KRW stablecoin spend and submit a buy transaction that is recorded on-chain.' },
          { title: 'Ownership Confirmed', desc: 'The blockchain ledger is immediately updated to reflect your ownership stake.' },
        ],
      },
      {
        id: 'dividend',
        label: 'Dividends',
        icon: '💸',
        steps: [
          { title: 'Rent Received', desc: 'The tenant deposits monthly rent into a TossPayments virtual account.' },
          { title: 'Stablecoin Transfer', desc: 'The server confirms receipt and sends KRW stablecoin to the on-chain distribution contract.' },
          { title: 'Snapshot', desc: 'Token holdings at the dividend date are locked on-chain. Transfers after this point do not affect eligibility.' },
          { title: 'Claim Dividends', desc: 'Investors submit a claim and the smart contract automatically pays out proportionally.' },
        ],
      },
      {
        id: 'governance',
        label: 'Governance',
        icon: '🗳️',
        steps: [
          { title: 'Submit Proposal', desc: 'Any token holder can register a proposal — renovation, rent changes, etc. — on the governance contract.' },
          { title: 'Voting Rights', desc: 'Token holders of the relevant property receive voting rights and can delegate to others.' },
          { title: 'Weighted Vote', desc: 'Votes are weighted by token holdings. Snapshot-based system prevents double voting.' },
          { title: 'Result Recorded', desc: 'The outcome is permanently recorded on-chain and cannot be altered retroactively.' },
        ],
      },
    ],
  },
  technology: {
    eyebrow: 'Core Technology',
    h2_1: 'The Tech Stack',
    h2_2: 'Behind Your Trust',
    sub: 'Proven blockchain technology combined with financial infrastructure for a safe, transparent platform.',
    items: [
      {
        icon: '🪪',
        sub: 'Regulatory-Compliant Identity',
        title: 'ONCHAINID / KYC',
        desc: 'Only KYC-verified users receive an ONCHAINID and are whitelisted. This on-chain identity is required for token purchases, dividend claims, and governance votes — blocking anonymous fraud.',
        tags: ['ERC-3643', 'KYC/AML', 'Whitelist'],
      },
      {
        icon: '📋',
        sub: 'Self-Executing Agreements',
        title: 'Smart Contract',
        desc: 'Rules like "distribute rent proportionally to token holders" are written in code and deployed on-chain. No one can intercept or manipulate the execution.',
        tags: ['Solidity', 'Auto Dividends', 'Tamper-proof'],
      },
      {
        icon: '💴',
        sub: 'Stable Value Reference',
        title: 'KRW Stablecoin',
        desc: 'A stablecoin pegged 1:1 to the Korean Won handles all on-chain rent collection and dividend distribution. TossPayments integration enables real KRW deposits and withdrawals.',
        tags: ['1:1 KRW Peg', 'TossPayments', 'Real-time Settlement'],
      },
    ],
  },
  architecture: {
    eyebrow: 'System Architecture',
    h2: '3-Layer Architecture',
    sub: 'Client, backend, and blockchain work in concert to deliver a secure, high-performance service.',
    layers: [
      {
        num: '01',
        title: 'Client',
        items: ['Web Frontend (React)', 'Wallet Connection (MetaMask)', 'Transaction Signing', 'Portfolio Dashboard', 'Governance Voting UI'],
        flows: ['Token Buy Tx', 'Vote Tx', 'Dividend Claim'],
      },
      {
        num: '02',
        title: 'Backend',
        items: ['REST API Server', 'Blockchain Event Listener (WS)', 'DB Indexing & Sync', 'TossPayments Webhook', 'Stablecoin Auto-Transfer'],
        flows: ['Event Listening', 'DB Sync', 'Virtual Acct Webhook'],
      },
      {
        num: '03',
        title: 'Blockchain',
        items: ['ERC-3643 Property Token', 'ONCHAINID Identity', 'Revenue Distribution Contract', 'Governance Contract', 'GIWA Network'],
        flows: ['KYC Verification', 'Tx Processing', 'Event Emission'],
      },
    ],
    summary: 'When data changes → frontend & backend send transactions to contracts · Backend subscribes to events and syncs the DB · Read requests are served fast via the backend API',
  },
  cta: {
    eyebrow: 'Get Started Today',
    h2_1: 'A New Way to Become',
    h2_2: 'a Real Property Owner',
    sub: 'Invest in premium real estate with NovaTerra and receive real-time, transparent dividends on the blockchain.',
    ctaPrimary: 'Start Investing',
    ctaSecondary: 'View GitHub ↗',
  },
  footer: {
    tagline: 'Blockchain-Based Real Estate Securities Platform · Built on GIWA Chain',
  },
}

export const translations = { ko, en }
export type Translations = typeof ko
