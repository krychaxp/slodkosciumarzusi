import type { I18nContent } from '../data/content'

interface Props {
  t: I18nContent
}

export default function Header({ t }: Props) {
  return (
    <header
      className="px-5 py-[60px] text-center"
      style={{ background: 'linear-gradient(135deg, #f8b4c4 0%, #ffd1dc 100%)' }}
    >
      <h1
        className="text-[2.8rem] font-bold text-[#5c3d4a] mb-4 leading-tight"
        style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.5)' }}
      >
        🧁 Słodkości u Marzusi
      </h1>
      <p className="text-[1.2rem] text-[#6d4c5a] max-w-[600px] mx-auto">
        {t.header.subtitle}
      </p>
    </header>
  )
}
