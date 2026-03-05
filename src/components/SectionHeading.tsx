import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  light?: boolean
}

export default function SectionHeading({ children, light = false }: Props) {
  return (
    <h2 className={`text-center text-[2rem] font-bold mb-8 ${light ? 'text-white' : 'text-[#5c3d4a]'}`}>
      {children}
      <span className="block w-20 h-[3px] bg-[#f8b4c4] mx-auto mt-2.5" />
    </h2>
  )
}
