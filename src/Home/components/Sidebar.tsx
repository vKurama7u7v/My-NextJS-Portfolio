'use client'
import React, { FC, JSX } from 'react'
import {
  Avatar,
  Button,
  CircularProgress,
  Progress,
  Tooltip,
} from '@heroui/react'
import {
  FacebookIcon,
  GetIconComponent,
  GithubIcon,
  InstragramIcon,
  LinkedInIcon,
} from '@/common/components'
import Link from 'next/link'
import { GetLogo } from '@/common/components/logos'
import { TypeProfileFields } from '../../content/types/TypeProfile'
import { format } from '@formkit/tempo'
import { TypeStackSkillsFields } from '@/content/types'

export const ProfileSidebar = ({
  avatar,
  fullName,
  birthday,
  languages,
  skills,
}: TypeProfileFields) => {
  return (
    <aside
      aria-label="Profile Information"
      className="h-full w-[300px] min-w-[300px] overflow-hidden rounded bg-custom-background-secondary"
    >
      <AvatarComponent avatar={avatar} fullName={fullName} />

      <div className="flex h-[calc(100%-270px)] w-full flex-col justify-between">
        <section className="flex h-[calc(100dvh-2em-270px-50px-4em)] w-full flex-col divide-y divide-custom-border-color overflow-y-auto p-8">
          {/* BASE */}
          <div className="flex flex-col gap-2 pb-4">
            <div className="flex w-full justify-between text-xs">
              <span className="font-semibold text-custom-text-body">
                Nacimiento
              </span>
              <span className="font-normal text-custom-text-light">
                {format(new Date(birthday), 'long', 'es')}
              </span>
            </div>
            <div className="flex w-full justify-between text-xs">
              <span className="font-semibold text-custom-text-body">
                Ubicación
              </span>
              <span className="font-normal text-custom-text-light">
                Tamaulipas, MX
              </span>
            </div>
            <div className="flex w-full justify-between text-xs">
              <span className="font-semibold text-custom-text-body">
                Idiomas
              </span>
              <span className="font-normal text-custom-text-light">
                {languages}
              </span>
            </div>
          </div>

          <div className="flex items-start justify-between gap-2 py-4">
            {skills
              ?.filter((skill) =>
                skill.fields.component.includes('circular bar')
              )
              .map((skill, index) => (
                <CircularProgressComponent {...skill.fields} key={index} />
              ))}
          </div>
          <div className="space-y-3 py-4">
            {skills
              ?.filter((skill) =>
                skill.fields.component.includes('progress bar')
              )
              .map((skill, index) => (
                <ProgressComponent
                  key={index}
                  {...skill.fields}
                  className={index == 2 && 'mb-6'}
                />
              ))}
          </div>
          <div className="py-4">
            <div className="flex w-full flex-wrap gap-3">
              <BadgeComponent name="Shopify" search="shopify" text="Hola" />
              <BadgeComponent name="NestJS" search="nestjs" text="Hola" />
              <BadgeComponent name="Next.js" search="nextjs" text="Hola" />
              <BadgeComponent name="C" search="shopify" text="Hola" />
              <BadgeComponent name="Shopify" search="shopify" text="Hola" />
              <BadgeComponent name="Shopify" search="shopify" text="Hola" />
              <BadgeComponent name="Shopify" search="shopify" text="Hola" />
              <BadgeComponent name="Shopify" search="shopify" text="Hola" />
            </div>
          </div>
        </section>

        <FooterComponent />
      </div>
    </aside>
  )
}

export const AvatarComponent = ({
  avatar,
  fullName,
}: {
  avatar: any
  fullName: string
}) => {
  return (
    <header className="h-[270px] w-full bg-custom-background-tertiary p-8">
      <div className="flex h-full w-full flex-col items-center justify-center gap-2.5">
        <div className="relative">
          <Avatar
            isBordered
            showFallback
            color="default"
            className="h-[120px] w-[120px] text-large"
            src={avatar.fields.file.url}
            alt={avatar.fields.title}
          />
          <div className="absolute bottom-2 right-2 rounded-full bg-custom-primary">
            <span className="relative flex size-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-custom-primary opacity-75"></span>
              <span className="relative inline-flex size-4 rounded-full bg-custom-primary"></span>
            </span>
          </div>
        </div>
        <h1 className="pb-1 text-center font-font-heading text-2xl font-bold">
          {fullName || 'Aurelio Marín'}
        </h1>
        <h2 className="relative px-3 py-2 font-font-heading text-sm font-medium text-custom-primary">
          <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-custom-primary opacity-10"></div>
          <div className="relative">Full Stack Web Developer</div>
        </h2>
      </div>
    </header>
  )
}

export const FooterComponent = () => {
  return (
    <footer className="flex h-[50px] items-center justify-center gap-4 bg-custom-background-tertiary px-4">
      <Button
        isIconOnly
        variant="ghost"
        className="h-fit w-fit min-w-fit border-none text-custom-text-light hover:text-custom-primary"
        as={Link}
        href="#"
      >
        <LinkedInIcon className="h-5 w-5" />
      </Button>
      <Button
        isIconOnly
        variant="ghost"
        className="h-fit w-fit min-w-fit border-none text-custom-text-light hover:text-custom-primary"
        as={Link}
        href="#"
      >
        <InstragramIcon className="h-5 w-5" />
      </Button>
      <Button
        isIconOnly
        variant="ghost"
        className="h-fit w-fit min-w-fit border-none text-custom-text-light hover:text-custom-primary"
        as={Link}
        href="#"
      >
        <FacebookIcon className="h-5 w-5" />
      </Button>
      <Button
        isIconOnly
        variant="ghost"
        className="h-fit w-fit min-w-fit border-none text-custom-text-light hover:text-custom-primary"
        as={Link}
        href="#"
      >
        <GithubIcon className="h-5 w-5" />
      </Button>
    </footer>
  )
}

interface ProgressBarProps extends TypeStackSkillsFields {
  className?: string
}

export const ProgressComponent = ({
  percentage: value,
  name,
  className,
}: ProgressBarProps) => {
  const normalizedValue = Math.min(Math.max(value, 0), 100)

  return (
    <div className="flex w-full flex-col gap-1">
      <div className="align-end flex w-full justify-between">
        <h3 className="text-xs font-medium tracking-wide text-custom-text-body">
          {name}
        </h3>
        <span className="text-xs font-normal text-custom-text-light">
          {normalizedValue}%
        </span>
      </div>
      <Progress
        value={normalizedValue}
        aria-label={`${name} skill level: ${normalizedValue}%`}
        className={`${className} h-1`}
        classNames={{
          indicator: 'bg-custom-primary',
        }}
      />
    </div>
  )
}

export const CircularProgressComponent = ({
  description,
  percentage,
  name,
  icon,
  component,
  showInCv,
  types,
}: TypeStackSkillsFields) => {
  return (
    <Tooltip
      content={
        <div className="max-w-32 px-1 py-2 text-center text-xs text-custom-text-light">
          {description}
        </div>
      }
      showArrow={true}
    >
      <div className="flex w-full cursor-pointer flex-col gap-1 text-custom-text-light hover:text-custom-text-body">
        <div className="relative">
          <CircularProgress
            value={percentage}
            aria-label={name}
            strokeWidth={2.5}
            className="relative w-full max-w-full"
            classNames={{
              svg: 'text-custom-primary h-16 w-16',
            }}
          />
          <GetIconComponent
            search={icon}
            className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform"
          />
        </div>
        <h3 className="text-center text-xs font-medium capitalize">
          {name.replace('-', ' ')}
        </h3>
      </div>
    </Tooltip>
  )
}

export const BadgeComponent = ({
  name,
  search,
  text,
  className,
}: {
  name: string
  search: string
  text: string
  className?: string
}) => {
  return (
    <Tooltip
      content={
        <div className="max-w-32 px-1 py-2 text-center text-xs text-custom-text-light">
          {text}
        </div>
      }
      showArrow={true}
    >
      <div className="flex h-6 w-fit cursor-pointer items-center overflow-hidden rounded border border-custom-border-color">
        <div className="flex h-6 w-6 min-w-6 items-center justify-center bg-custom-border-color">
          <GetLogo name={search} className={className} />
        </div>
        <span className="px-1 text-xs font-semibold text-custom-text-light">
          {name}
        </span>
      </div>
    </Tooltip>
  )
}
