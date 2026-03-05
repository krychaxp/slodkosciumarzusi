import { Link } from 'react-router-dom'
import type { Lang, I18nContent } from '../data/content'

interface Props {
  lang: Lang
  t: I18nContent
}

export default function LanguageSwitcher({ lang, t }: Props) {
  return (
    <div className="bg-[#5c3d4a] text-right px-5 py-1.5 text-sm">
      <span className="text-[#ffd1dc]">{t.langBar}</span>
      <Link
        to="/"
        className={`ml-2.5 px-2 py-0.5 rounded text-[#ffd1dc] no-underline transition-colors hover:bg-white/15 ${lang === 'pl' ? 'bg-white/20 text-white font-semibold' : ''}`}
      >
        🇵🇱 Polski
      </Link>
      <Link
        to="/de"
        className={`ml-2.5 px-2 py-0.5 rounded text-[#ffd1dc] no-underline transition-colors hover:bg-white/15 ${lang === 'de' ? 'bg-white/20 text-white font-semibold' : ''}`}
      >
        🇩🇪 Deutsch
      </Link>
    </div>
  )
}
