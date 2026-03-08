import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('HomePage')
  const addressLines = t.raw('footer.addressLines') as string[]

  return (
    <footer className="bg-[#5c3d4a] text-white text-center pt-10 pb-5 px-5 text-[0.9rem]">
      <div className="max-w-[1000px] mx-auto">
        <div
          className="grid gap-8 text-left mb-8 pb-8 border-b border-white/20"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}
        >
          <div>
            <h4 className="text-[1rem] mb-4 text-[#f8b4c4] uppercase tracking-wider">{t('footer.companyHeading')}</h4>
            <p className="mb-2 opacity-90"><strong className="text-[#ffd1dc]">{t('footer.companyLabel')}:</strong> MARZENA RADOMSKA</p>
            <p className="mb-2 opacity-90"><strong className="text-[#ffd1dc]">{t('footer.taxIdLabel')}:</strong> 6951343955</p>
            <p className="mb-2 opacity-90"><strong className="text-[#ffd1dc]">{t('footer.regonLabel')}:</strong> 541174793</p>
          </div>
          <div>
            <h4 className="text-[1rem] mb-4 text-[#f8b4c4] uppercase tracking-wider">{t('footer.addressHeading')}</h4>
            {addressLines.map((line, i) => (
              <p key={i} className="mb-2 opacity-90">{line}</p>
            ))}
          </div>
          <div>
            <h4 className="text-[1rem] mb-4 text-[#f8b4c4] uppercase tracking-wider">{t('footer.contactHeading')}</h4>
            <p className="mb-2 opacity-90">
              <strong className="text-[#ffd1dc]">{t('footer.phoneLabel')}:</strong>{' '}
              <a href="tel:+48698042407" className="text-[#ffd1dc] no-underline hover:text-white hover:underline transition-colors">
                +48 698 042 407
              </a>
            </p>
            <p className="mb-2 opacity-90">
              <a href="https://www.facebook.com/marzena.radomska.5" target="_blank" rel="noopener noreferrer"
                className="text-[#ffd1dc] no-underline hover:text-white hover:underline transition-colors">
                📘 Facebook
              </a>
            </p>
            <p className="mb-2 opacity-90">
              <a href="https://www.instagram.com/marzusislodkosci/" target="_blank" rel="noopener noreferrer"
                className="text-[#ffd1dc] no-underline hover:text-white hover:underline transition-colors">
                📸 Instagram
              </a>
            </p>
            <p className="mb-2 opacity-90">
              <a href="https://wa.me/48698042407" target="_blank" rel="noopener noreferrer"
                className="text-[#ffd1dc] no-underline hover:text-white hover:underline transition-colors">
                💬 WhatsApp
              </a>
            </p>
          </div>
        </div>

        <p className="opacity-70 text-[0.85rem]">{t('footer.copyright')}</p>
        <p className="opacity-70 text-[0.85rem] mt-2.5">
          {t('footer.creditPrefix')}{' '}
          <a
            href="https://www.krystianfrydryk.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f8b4c4] no-underline hover:text-white hover:underline transition-colors"
          >
            Krystian Frydryk
          </a>
        </p>
      </div>
    </footer>
  )
}
