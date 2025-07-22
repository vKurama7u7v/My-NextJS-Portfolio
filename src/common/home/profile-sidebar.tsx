'use client'
import React, { useEffect, useState } from 'react'
import { Avatar, Button } from '@heroui/react'
import { GetIcon } from '@/common/components'
import Link from 'next/link'
import {
  BadgeComponent,
  CircularProgressComponent,
  InfoCompontent,
  ProgressComponent,
} from '.'
import { useTranslations } from 'next-intl'
import { Entry, EntrySkeletonType } from 'contentful'
import {
  IProfileFields,
  IStackSkillsFields,
} from '@/contentful/@types/contentful'
import { formatDate } from '@/utils'

import avatar from '../../../public/assets/profile.jpg'

interface ProfileSidebarProps {
  data?: Entry<EntrySkeletonType<IProfileFields>>
}

export const ProfileSidebar = ({ data }: ProfileSidebarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [profile, setProfile] = useState<IProfileFields | null>(null)

  useEffect(() => {
    if (data) {
      setLoading(true)
      const fields = data.fields as IProfileFields
      setProfile(fields)
      setLoading(false)
    }
  }, [data])

  const t = useTranslations('General')
  const settings = useTranslations('Settings')

  return (
    <aside
      aria-label="Profile Information"
      className={`fixed z-50 h-full w-[300px] min-w-[300px] rounded bg-custom-background-secondary shadow-md transition-all duration-500 md:relative md:overflow-hidden ${isOpen ? 'translate-x-0' : '-translate-x-[300px] md:translate-x-0'}`}
    >
      <ProfileAvatarComponent fullname={profile?.fullName as string} />

      <Button
        isIconOnly
        aria-label={isOpen ? 'Close' : 'Open Menu'}
        className={`absolute right-4 top-3 z-10 text-custom-text-light hover:text-custom-primary md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-[200%]'}`}
        onPress={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <GetIcon name="plus" className="h-6 w-6 rotate-45" />
        ) : (
          <GetIcon name="user" className="h-6 w-6" />
        )}
      </Button>

      <div className="flex h-[calc(100dvh-300px+2em)] w-full flex-col justify-between xl:h-[calc(100dvh-300px)]">
        <section className="flex h-full w-full flex-col divide-y divide-custom-border-color overflow-y-auto scroll-smooth p-8 scrollbar-hide">
          {/* BASE */}
          <div className="flex flex-col gap-2 pb-4">
            <InfoCompontent
              label={t('birthday')}
              text={formatDate(
                (profile?.birthday as string) || '2000-01-01',
                'DD, MMMM YYYY',
                settings('locale') === 'es' ? 'es' : 'en'
              )}
            />
            <InfoCompontent
              label={t('location')}
              text={profile?.location as string}
            />
            <InfoCompontent
              label={t('languages')}
              text={profile?.languages as string}
            />
          </div>

          {profile?.skills && profile.skills.length > 0 && (
            <>
              <div className="flex items-start justify-between gap-2 py-4">
                {profile.skills.map(({ fields: skill }, index) => (
                  <CircularProgressComponent
                    key={index}
                    skill={skill as IStackSkillsFields}
                  />
                ))}
              </div>
              <div className="space-y-3 py-4">
                {profile.skills.map(({ fields: skill }, index) => (
                  <ProgressComponent
                    key={index}
                    className={index === 5 ? 'mb-6' : ''}
                    skill={skill as IStackSkillsFields}
                  />
                ))}
                {/* <ProgressComponent name="HTML" value={95} className="" />
                  <ProgressComponent name="CSS" value={90} className="" />
                  <ProgressComponent name="JavaScript" value={85} className="mb-6" />
                  <ProgressComponent name="TypeScript" value={80} className="" />
                  <ProgressComponent name="Python" value={70} className="" />
                  <ProgressComponent name="MongoDB" value={80} className="" /> */}
              </div>
              <div className="py-4">
                <div className="flex w-full flex-wrap gap-3">
                  {profile?.skills.map(({ fields: skill }, index) => (
                    <BadgeComponent
                      key={index}
                      skill={skill as IStackSkillsFields}
                    />
                  ))}
                  {/* <BadgeComponent name="Shopify" search="shopify" text="Hola" />
                    <BadgeComponent name="NestJS" search="nestjs" text="Hola" />
                    <BadgeComponent name="Next.js" search="nextjs" text="Hola" />
                    <BadgeComponent name="C" search="shopify" text="Hola" />
                    <BadgeComponent name="Shopify" search="shopify" text="Hola" />
                    <BadgeComponent name="Shopify" search="shopify" text="Hola" />
                    <BadgeComponent name="Shopify" search="shopify" text="Hola" />
                    <BadgeComponent name="Shopify" search="shopify" text="Hola" /> */}
                </div>
              </div>
            </>
          )}
        </section>

        <ProfileFooterComponent />
      </div>
    </aside>
  )
}

export const ProfileAvatarComponent = ({ fullname }: { fullname?: string }) => {
  return (
    <header className="h-[270px] w-full bg-custom-background-tertiary p-8">
      <div className="flex h-full w-full flex-col items-center justify-center gap-2.5">
        <div className="relative">
          <Avatar
            isBordered
            color="default"
            className="h-[120px] w-[120px] text-large"
            src={avatar.src}
            alt={fullname || 'Profile Avatar'}
          />
          <div className="absolute bottom-2 right-2 rounded-full bg-custom-primary">
            <span className="relative flex size-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-custom-primary opacity-75"></span>
              <span className="relative inline-flex size-4 rounded-full bg-custom-primary"></span>
            </span>
          </div>
        </div>
        <h1 className="pb-1 text-center font-font-heading text-2xl font-bold">
          {fullname || 'Aurelio Marín'}
        </h1>
        <h2 className="relative px-3 py-2 font-font-heading text-sm font-medium text-custom-primary">
          <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-custom-primary opacity-10"></div>
          <div className="relative">Full Stack Web Developer</div>
        </h2>
      </div>
    </header>
  )
}

export const ProfileFooterComponent = () => {
  return (
    <footer className="flex h-[50px] items-center justify-center gap-4 bg-custom-background-tertiary px-4">
      <Button
        isIconOnly
        variant="ghost"
        className="h-fit w-fit min-w-fit border-none text-custom-text-light hover:text-custom-primary"
        as={Link}
        href="#"
      >
        <GetIcon name="linkedin" className="h-5 w-5" />
      </Button>
      <Button
        isIconOnly
        variant="ghost"
        className="h-fit w-fit min-w-fit border-none text-custom-text-light hover:text-custom-primary"
        as={Link}
        href="#"
      >
        <GetIcon name="instagram" className="h-5 w-5" />
      </Button>
      <Button
        isIconOnly
        variant="ghost"
        className="h-fit w-fit min-w-fit border-none text-custom-text-light hover:text-custom-primary"
        as={Link}
        href="#"
      >
        <GetIcon name="facebook" className="h-5 w-5" />
      </Button>
      <Button
        isIconOnly
        variant="ghost"
        className="h-fit w-fit min-w-fit border-none text-custom-text-light hover:text-custom-primary"
        as={Link}
        href="#"
      >
        <GetIcon name="github" className="h-5 w-5" />
      </Button>
    </footer>
  )
}
