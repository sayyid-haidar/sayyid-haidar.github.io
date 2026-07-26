import type { ContentLanguage } from '../content/types'

export function formatContentDate(value: string, language: ContentLanguage = 'en') {
  return new Intl.DateTimeFormat(language === 'id' ? 'id-ID' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`))
}

export function languageLabel(language: ContentLanguage) {
  return language === 'id' ? 'Indonesia' : 'English'
}
