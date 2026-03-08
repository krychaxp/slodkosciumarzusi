import LanguageSwitcher from '../components/LanguageSwitcher'
import Header from '../components/Header'
import About from '../components/About'
import Gallery from '../components/Gallery'
import PricingSection from '../components/PricingSection'
import OrderInfo from '../components/OrderInfo'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useTranslations } from 'next-intl'

export default function HomeView() {
  const t = useTranslations('HomePage')

  return (
    <div
      className="min-h-screen text-[#333] leading-relaxed"
      style={{
        backgroundColor: '#fff9f5',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <LanguageSwitcher />
      <Header title={t('brand')} />

      <section className="py-[50px] px-5 max-w-[1200px] mx-auto">
        <About />
      </section>

      <section className="py-[50px] px-5 max-w-[1200px] mx-auto">
        <Gallery />
      </section>

      <PricingSection />

      <section className="py-[50px] px-5 max-w-[1200px] mx-auto">
        <OrderInfo />
      </section>

      <section className="py-[50px] px-5 max-w-[1200px] mx-auto">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}
