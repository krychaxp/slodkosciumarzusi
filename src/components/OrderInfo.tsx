import SectionHeading from './SectionHeading'
import type { I18nContent } from '../data/content'

interface Props {
  t: I18nContent
}

export default function OrderInfo({ t }: Props) {
  const { orderInfo } = t
  return (
    <div
      className="rounded-[15px] p-10 shadow-[0_5px_15px_rgba(0,0,0,0.1)] text-center"
      style={{ background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' }}
    >
      <SectionHeading>{orderInfo.heading}</SectionHeading>
      <div className="flex flex-wrap justify-center gap-10 mt-5">
        <div className="text-center">
          <span className="text-[3rem]">⏰</span>
          <h3 className="text-[#5c3d4a] my-2.5 font-semibold text-lg">{orderInfo.waitHeading}</h3>
          <p className="text-[#666]" dangerouslySetInnerHTML={{ __html: orderInfo.waitText.replace(/1 do 3|1 bis 3/, '<strong>$&</strong>') }} />
        </div>
        <div className="text-center">
          <span className="text-[3rem]">🚗</span>
          <h3 className="text-[#5c3d4a] my-2.5 font-semibold text-lg">{orderInfo.deliveryHeading}</h3>
          <p className="text-[#666]">{orderInfo.deliveryText}</p>
        </div>
      </div>
    </div>
  )
}
