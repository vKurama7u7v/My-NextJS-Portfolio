import { format } from '@formkit/tempo'

export const formatDate = (
  date: string | Date,
  formatString: 'full' | 'long' | 'medium' | 'short' = 'medium',
  locale: 'es' | 'en' = 'es'
) => {
  return format(new Date(date), formatString, locale)
}

export const formatDateTime = (
  date: string | Date,
  formatString: 'full' | 'long' | 'medium' | 'short' = 'medium',
  locale: 'es' | 'en' = 'es'
) => {
  return format(new Date(date), formatString, locale)
}
