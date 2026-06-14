import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M8 1V15M2 4.5L14 11.5M14 4.5L2 11.5" stroke="white" strokeWidth="1" strokeOpacity="0.5"/>
              </svg>
            </div>
            <span className="font-bold text-gray-900">
              Nova<span className="text-violet-600">Terra</span>
            </span>
          </div>

          <div className="text-sm text-gray-400 text-center">{t.footer.tagline}</div>

          <div className="flex items-center gap-3 text-xs text-gray-400">
            {['ERC-3643', 'ONCHAINID', 'Solidity', 'React'].map((tech, i, arr) => (
              <span key={tech} className="flex items-center gap-3">
                {tech}
                {i < arr.length - 1 && <span className="text-gray-300">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
