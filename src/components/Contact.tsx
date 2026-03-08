import SectionHeading from './SectionHeading'
import { useTranslations } from 'next-intl'

export default function Contact() {
  const t = useTranslations('HomePage')

  return (
    <div
      className="rounded-[15px] p-10 text-center text-white"
      style={{ background: 'linear-gradient(135deg, #5c3d4a 0%, #8b6b7a 100%)' }}
    >
      <SectionHeading light>{t('contact.heading')}</SectionHeading>
      <p className="text-white/90">{t('contact.subtitle')}</p>

      <div className="flex flex-wrap justify-center gap-10 mt-8">
        <div className="flex items-center gap-4">
          <span className="text-[2rem]">📞</span>
          <p className="text-left">
            <strong className="block text-sm opacity-80">{t('contact.phoneLabel')}</strong>
            <span className="text-[1.2rem]">+48 698 042 407</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[2rem]">📍</span>
          <p className="text-left">
            <strong className="block text-sm opacity-80">{t('contact.locationLabel')}</strong>
            <span className="text-[1.2rem]">{t('contact.locationValue')}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a
          href="https://wa.me/48698042407"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-[18px] py-2.5 bg-white/15 rounded-[25px] text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25d366]"
        >
          💬 {t('contact.whatsappLabel')}
        </a>
        <a
          href="https://www.facebook.com/marzena.radomska.5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-[18px] py-2.5 bg-white/15 rounded-[25px] text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1877f2]"
        >
          📘 {t('contact.facebookLabel')}
        </a>
        <a
          href="https://www.instagram.com/marzusislodkosci/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-[18px] py-2.5 bg-white/15 rounded-[25px] text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bc1888]"
        >
          📸 {t('contact.instagramLabel')}
        </a>
      </div>
    </div>
  )
}
