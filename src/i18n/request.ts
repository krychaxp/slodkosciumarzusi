import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale
  const messagesPath = path.join(process.cwd(), 'public', 'locales', `${locale}.json`)
  const messages = JSON.parse(await readFile(messagesPath, 'utf8'))

  return {
    locale,
    messages,
  }
})