import { format } from '@formkit/tempo'

export const formatDate = (
  date: string | Date,
  formatString: 'full' | 'long' | 'medium' | 'short' | string = 'medium',
  locale: 'es' | 'en' = 'es'
) => {
  let newDate = date.toString().split('-')
  if (newDate.length === 3) {
    newDate = newDate.map((part) => part.padStart(2, '0'))
    date = `${newDate[0]}-${newDate[1]}-${newDate[2]}T00:00:00`
  } else if (typeof date === 'string' && !isNaN(Date.parse(date))) {
    date = new Date(date)
  }
  return format(new Date(date), formatString, locale)
}

export const formatDateTime = (
  date: string | Date,
  formatString: 'full' | 'long' | 'medium' | 'short' | string = 'medium',
  locale: 'es' | 'en' = 'es'
) => {
  return format(new Date(date), formatString, locale)
}
