import SectionHeading from './SectionHeading'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('HomePage')

  return (
    <div className="bg-white rounded-[15px] p-10 shadow-[0_5px_15px_rgba(0,0,0,0.1)] text-center">
      <SectionHeading>{t('about.heading')}</SectionHeading>
      <div className="flex items-center justify-center gap-8 flex-wrap max-w-[900px] mx-auto">
        <img
          src="/img/marzusia-profile.jpeg"
          alt={t('about.imgAlt')}
          className="w-[280px] rounded-[10px] object-cover shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
        />
        <p className="flex-[0_1_500px] text-left text-[1.1rem] text-[#666]">
          {t.rich('about.text', {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </div>
    </div>
  )
}
