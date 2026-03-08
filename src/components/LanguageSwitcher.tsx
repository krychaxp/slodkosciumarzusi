import { Link } from '../i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const t = useTranslations('HomePage')

  return (
    <div className="bg-[#5c3d4a] text-right px-5 py-1.5 text-sm">
      <span className="text-[#ffd1dc]">{t('langBar')}</span>
      <Link
        href="/"
        locale="pl"
        className={`ml-2.5 px-2 py-0.5 rounded text-[#ffd1dc] no-underline transition-colors hover:bg-white/15 ${locale === 'pl' ? 'bg-white/20 text-white font-semibold' : ''}`}
      >
        {t('languageNames.pl')}
      </Link>
      <Link
        href="/"
        locale="de"
        className={`ml-2.5 px-2 py-0.5 rounded text-[#ffd1dc] no-underline transition-colors hover:bg-white/15 ${locale === 'de' ? 'bg-white/20 text-white font-semibold' : ''}`}
      >
        {t('languageNames.de')}
      </Link>
    </div>
  )
}
