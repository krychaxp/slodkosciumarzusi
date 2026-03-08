import { useTranslations } from 'next-intl'

interface Props {
  title: string
}

export default function Header({ title }: Props) {
  const t = useTranslations('HomePage')

  return (
    <header
      className="px-5 py-[60px] text-center"
      style={{ background: 'linear-gradient(135deg, #f8b4c4 0%, #ffd1dc 100%)' }}
    >
      <h1
        className="text-[2.8rem] font-bold text-[#5c3d4a] mb-4 leading-tight"
        style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.5)' }}
      >
        {title}
      </h1>
      <p className="text-[1.2rem] text-[#6d4c5a] max-w-[600px] mx-auto">{t('header.subtitle')}</p>
    </header>
  )
}
