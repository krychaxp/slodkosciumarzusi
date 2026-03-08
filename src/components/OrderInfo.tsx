import SectionHeading from './SectionHeading'
import { useTranslations } from 'next-intl'

export default function OrderInfo() {
  const t = useTranslations('HomePage')

  return (
    <div
      className="rounded-[15px] p-10 shadow-[0_5px_15px_rgba(0,0,0,0.1)] text-center"
      style={{ background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' }}
    >
      <SectionHeading>{t('orderInfo.heading')}</SectionHeading>
      <div className="flex flex-wrap justify-center gap-10 mt-5">
        <div className="text-center">
          <span className="text-[3rem]">⏰</span>
          <h3 className="text-[#5c3d4a] my-2.5 font-semibold text-lg">{t('orderInfo.waitHeading')}</h3>
          <p className="text-[#666]">
            {t.rich('orderInfo.waitText', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </div>
        <div className="text-center">
          <span className="text-[3rem]">🚗</span>
          <h3 className="text-[#5c3d4a] my-2.5 font-semibold text-lg">{t('orderInfo.deliveryHeading')}</h3>
          <p className="text-[#666]">{t('orderInfo.deliveryText')}</p>
        </div>
      </div>
    </div>
  )
}
