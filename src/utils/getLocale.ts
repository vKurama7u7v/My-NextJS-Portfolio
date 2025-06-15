export function getContentfulLocale(locale: string): 'en-US' | 'es-MX' {
  switch (locale) {
    case 'es':
      return 'es-MX'
    case 'en':
      return 'en-US'
  }

  return 'en-US'
}
