import type { Metadata } from 'next'
import { hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '../../i18n/routing'
import HomeView from '../../views/HomeView'

interface LocalePageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const t = await getTranslations({
    locale,
    namespace: 'Metadata',
  })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === routing.defaultLocale ? '/' : `/${locale}`,
      languages: {
        pl: '/',
        de: '/de',
      },
    },
  }
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return <HomeView />
}