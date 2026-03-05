import type { ReactNode } from 'react'
import SectionHeading from './SectionHeading'
import { dessertItems, cakeItems } from '../data/content'
import type { I18nContent, PricingItem } from '../data/content'

interface PricingCardProps {
  emoji: string
  heading: string
  subtitle: string
  colNr: string
  colName: string
  colPrice: string
  items: PricingItem[]
  note: ReactNode
  nameKey: keyof Pick<PricingItem, 'pl' | 'de'>
  priceKey: keyof Pick<PricingItem, 'plPrice' | 'eurPrice'>
}

function PricingCard({ emoji, heading, subtitle, colNr, colName, colPrice, items, note, nameKey, priceKey }: PricingCardProps) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
      <div
        className="px-6 py-6 text-center"
        style={{ background: 'linear-gradient(135deg, #f8b4c4 0%, #ffd1dc 100%)' }}
      >
        <span className="block text-[2.5rem] mb-2">{emoji}</span>
        <h3 className="text-[#5c3d4a] text-[1.5rem] font-bold mb-1">{heading}</h3>
        <p className="text-[#5c3d4a] text-sm opacity-80">{subtitle}</p>
      </div>

      <div>
        <table className="w-full border-collapse mt-2.5">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 bg-[#fff0f5] text-[#5c3d4a] font-semibold text-[0.95rem] border-b-2 border-[#f8b4c4] w-10 text-center">
                {colNr}
              </th>
              <th className="text-left py-3 px-4 bg-[#fff0f5] text-[#5c3d4a] font-semibold text-[0.95rem] border-b-2 border-[#f8b4c4]">
                {colName}
              </th>
              <th className="text-right py-3 px-4 bg-[#fff0f5] text-[#5c3d4a] font-semibold text-[0.95rem] border-b-2 border-[#f8b4c4] whitespace-nowrap">
                {colPrice}
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} className="hover:bg-[#fff9f9] border-b border-[#eee] last:border-b-0">
                <td className="py-2.5 px-4 text-center text-[#888] text-[0.85rem]">{i + 1}.</td>
                <td className="py-2.5 px-4 text-[#555] text-[0.95rem]">{item[nameKey]}</td>
                <td className="py-2.5 px-4 text-right font-semibold text-[#e17055] text-[0.95rem] whitespace-nowrap">
                  {item[priceKey]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bg-[#fff9f5] rounded-[10px] m-5 p-4 text-sm text-[#666] text-center">
          {note}
        </div>
      </div>
    </div>
  )
}

interface Props {
  t: I18nContent
}

export default function PricingSection({ t }: Props) {
  const { pricing } = t
  return (
    <section
      className="py-[60px] px-5"
      style={{ background: 'linear-gradient(135deg, #fff9f5 0%, #ffecd2 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading>{pricing.heading}</SectionHeading>
        <div className="grid gap-8 mt-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          <PricingCard
            emoji="🍮"
            heading={pricing.dessertsHeading}
            subtitle={pricing.dessertsSubtitle}
            colNr={pricing.colNr}
            colName={pricing.colName}
            colPrice={pricing.colPrice}
            items={dessertItems}
            nameKey={pricing.nameKey}
            priceKey={pricing.priceKey}
            note={
              <>
                <strong className="text-[#5c3d4a]">{pricing.dessertsNote.split(':')[0]}:</strong>
                {pricing.dessertsNote.split(':')[1]}
              </>
            }
          />
          <PricingCard
            emoji="🍰"
            heading={pricing.cakesHeading}
            subtitle={pricing.cakesSubtitle}
            colNr={pricing.colNr}
            colName={pricing.colName}
            colPrice={pricing.colPrice}
            items={cakeItems}
            nameKey={pricing.nameKey}
            priceKey={pricing.priceKey}
            note={
              <>
                {pricing.cakesNote}
                <br /><br />
                <strong className="text-[#5c3d4a]">{pricing.tortesNote.split(':')[0]}:</strong>
                {' ' + pricing.tortesNote.split(':').slice(1).join(':').trim()}
              </>
            }
          />
        </div>
      </div>
    </section>
  )
}
