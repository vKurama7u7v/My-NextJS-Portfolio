export interface SocialWidgetProps {
  social: string
  link: string
  handle: string
  className?: string
}

export const socialWidgetData: SocialWidgetProps[] = [
  {
    social: 'linkedin',
    link: 'https://www.linkedin.com/in/aureliomb/',
    handle: '@aureliomb',
    className: 'linkedin',
  },
  {
    social: 'instagram',
    link: 'https://www.instagram.com/aurelius_mb?igsh=YWc2d3hnMnlsNGU2&utm_source=qr',
    handle: '@aurelius_mb',
    className: 'instagram',
  },
  {
    social: 'facebook',
    link: 'https://web.facebook.com/profile.php?id=100007335257831',
    handle: 'Aurelio Marín Bautista',
    className: 'facebook',
  },
  {
    social: 'github',
    link: 'https://github.com/vKurama7u7v',
    handle: '@vKurama7u7v',
    className: 'github',
  },
]
