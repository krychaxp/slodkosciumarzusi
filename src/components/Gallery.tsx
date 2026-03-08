import SectionHeading from './SectionHeading'
import { useTranslations } from 'next-intl'
import type { GalleryItem } from '../data/content'

export default function Gallery() {
  const t = useTranslations('HomePage')
  const items = t.raw('gallery.items') as GalleryItem[]

  return (
    <>
      <SectionHeading>{t('gallery.heading')}</SectionHeading>
      <div className="grid gap-6 mt-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-[15px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-[250px] object-cover"
            />
            <h3 className="p-4 text-center text-[#5c3d4a] text-[1.1rem] font-semibold">{item.label}</h3>
          </div>
        ))}
      </div>
    </>
  )
}
