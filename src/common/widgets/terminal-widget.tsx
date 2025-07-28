import React from 'react'
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/magicui/terminal'
import { useTranslations } from 'next-intl'

export const TerminalWidget = ({ data }: any) => {
  const t = useTranslations('Profile')
  const { profile } = data || {}

  console.log('TerminalWidget Data:', profile)

  return (
    <Terminal className="rounded-sm bg-custom-background-secondary">
      <TypingAnimation className="font-medium text-custom-text-body">
        user@portfolio:~$ whoami
      </TypingAnimation>
      <AnimatedSpan delay={2500} className="font-medium text-custom-text-light">
        <span>Processing identity... [wait]</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="font-medium text-green-500">
        <span>✔ ¡User {profile.login} found!</span>
      </AnimatedSpan>
      <AnimatedSpan delay={3500} className="font-medium text-green-500">
        <span>✔ Fetching profile data...</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="font-medium text-custom-text-light">
        <span>~ {profile.name}</span>
      </AnimatedSpan>
      <AnimatedSpan delay={4500} className="font-medium text-custom-text-light">
        <span className="text-wrap">~ {t('bio')}</span>
      </AnimatedSpan>
    </Terminal>
  )
}
