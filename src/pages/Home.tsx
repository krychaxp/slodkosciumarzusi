import { useEffect } from 'react'
import LanguageSwitcher from '../components/LanguageSwitcher'
import Header from '../components/Header'
import About from '../components/About'
import Gallery from '../components/Gallery'
import PricingSection from '../components/PricingSection'
import OrderInfo from '../components/OrderInfo'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { i18n } from '../data/content'
import type { Lang } from '../data/content'

interface Props {
  lang: Lang
}

export default function Home({ lang }: Props) {
  const t = i18n[lang]

  useEffect(() => {
    document.title = t.meta.title
    document.documentElement.lang = t.htmlLang
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = t.meta.description
  }, [lang, t])

  return (
    <div
      className="min-h-screen text-[#333] leading-relaxed"
      style={{
        backgroundColor: '#fff9f5',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <LanguageSwitcher lang={lang} t={t} />
      <Header t={t} />

      <section className="py-[50px] px-5 max-w-[1200px] mx-auto">
        <About t={t} />
      </section>

      <section className="py-[50px] px-5 max-w-[1200px] mx-auto">
        <Gallery lang={lang} t={t} />
      </section>

      <PricingSection t={t} />

      <section className="py-[50px] px-5 max-w-[1200px] mx-auto">
        <OrderInfo t={t} />
      </section>

      <section className="py-[50px] px-5 max-w-[1200px] mx-auto">
        <Contact t={t} />
      </section>

      <Footer t={t} />
    </div>
  )
}
