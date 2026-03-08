import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['pl', 'de'],
  defaultLocale: 'pl',
  localePrefix: 'as-needed',
  localeDetection: false,
})