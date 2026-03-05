import type { MouseEvent } from 'react'
import SectionHeading from './SectionHeading'
import type { I18nContent } from '../data/content'

interface Props {
  t: I18nContent
}

const instagramGradient = 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'

export default function Contact({ t }: Props) {
  const { contact } = t

  function handleIgEnter(e: MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.style.background = instagramGradient
  }
  function handleIgLeave(e: MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
  }

  return (
    <div
      className="rounded-[15px] p-10 text-center text-white"
      style={{ background: 'linear-gradient(135deg, #5c3d4a 0%, #8b6b7a 100%)' }}
    >
      <SectionHeading light>{contact.heading}</SectionHeading>
      <p className="text-white/90">{contact.subtitle}</p>

      <div className="flex flex-wrap justify-center gap-10 mt-8">
        <div className="flex items-center gap-4">
          <span className="text-[2rem]">📞</span>
          <p className="text-left">
            <strong className="block text-sm opacity-80">{contact.phoneLabel}</strong>
            <span className="text-[1.2rem]">+48 698 042 407</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[2rem]">📍</span>
          <p className="text-left">
            <strong className="block text-sm opacity-80">{contact.locationLabel}</strong>
            <span className="text-[1.2rem]">{contact.locationValue}</span>
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
          💬 WhatsApp
        </a>
        <a
          href="https://www.facebook.com/marzena.radomska.5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-[18px] py-2.5 bg-white/15 rounded-[25px] text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1877f2]"
        >
          📘 Facebook
        </a>
        <a
          href="https://www.instagram.com/marzusislodkosci/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-[18px] py-2.5 bg-white/15 rounded-[25px] text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
          onMouseEnter={handleIgEnter}
          onMouseLeave={handleIgLeave}
        >
          📸 Instagram
        </a>
      </div>
    </div>
  )
}
