import SectionHeading from './SectionHeading'
import type { I18nContent } from '../data/content'

interface Props {
  t: I18nContent
}

export default function About({ t }: Props) {
  const { about } = t
  const parts = about.text.split(about.boldWord)

  return (
    <div className="bg-white rounded-[15px] p-10 shadow-[0_5px_15px_rgba(0,0,0,0.1)] text-center">
      <SectionHeading>{about.heading}</SectionHeading>
      <div className="flex items-center justify-center gap-8 flex-wrap max-w-[900px] mx-auto">
        <img
          src="/img/marzusia-profile.jpeg"
          alt={about.imgAlt}
          className="w-[280px] rounded-[10px] object-cover shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
        />
        <p className="flex-[0_1_500px] text-left text-[1.1rem] text-[#666]">
          {parts[0]}
          <strong>{about.boldWord}</strong>
          {parts[1]}
        </p>
      </div>
    </div>
  )
}
