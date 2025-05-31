import { cn } from '@heroui/react'
import { GetIcon } from '../components'
import Link from 'next/link'

interface Props {
  social: string
  link: string
  handle: string
  className?: string
}

const data = [
  {
    key: 'facebook',
    name: 'Facebook',
    icon: 'facebookWidget',
    customClass: 'facebook-variables',
    color: 'var(--text)',
    gradient: 'var(--gradient)',
  },
  {
    key: 'instagram',
    name: 'Instagram',
    icon: 'instagramWidget',
    customClass: 'instagram-variables',
    color: 'var(--text)',
    gradient: 'var(--gradient)',
  },
  {
    key: 'github',
    name: 'Github',
    icon: 'githubWidget',
    customClass: 'github-variables',
    color: 'var(--text)',
    gradient: 'var(--gradient)',
  },
  {
    key: 'linkedin',
    name: 'LinkedIn',
    icon: 'linkedinWidget',
    customClass: 'linkedin-variables',
    color: 'var(--text)',
    gradient: 'var(--gradient)',
  },
]

export const SocialMediaWidget = ({
  social = 'facebook',
  link,
  handle,
  className,
}: Props) => {
  const { icon, customClass, color, name, gradient } =
    data.find((item) => item.key === social) || data[0]

  return (
    <Link
      href={link || '#'}
      target="_blank"
      className={cn(customClass, 'h-full w-full px-3 py-5', className)}
      style={{
        background: gradient,
      }}
    >
      <div className="flex h-full w-full flex-col items-start justify-between">
        <div className="relative z-[1]">
          <GetIcon name={icon} className="absolute left-0 top-0" />
        </div>
        <div className="relative z-[2] flex w-full flex-col items-start px-2 text-[var(--text)]">
          <p className="text-sm font-bold lg:text-base">{name}</p>
          <p className="text-xs font-medium lg:text-sm">
            {handle || '@username'}
          </p>
        </div>
      </div>
    </Link>
  )
}
