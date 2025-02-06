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
  NextJsIcon,
} from '@/common/components'
import Link from 'next/link'

export const ProfileSidebar = () => {
  return (
    <aside
      aria-label="Profile Information"
      className="h-full w-[300px] min-w-[300px] overflow-hidden rounded bg-custom-background-secondary"
    >
      <ProfileAvatarComponent />

      <div className="flex h-[calc(100%-270px)] w-full flex-col justify-between">
        <section className="flex h-[calc(100dvh-2em-270px-50px-4em)] w-full flex-col divide-y divide-custom-border-color overflow-y-auto p-8">
          {/* BASE */}
          <div className="flex flex-col gap-2 pb-4">
            <div className="flex w-full justify-between text-xs">
              <span className="font-semibold text-custom-text-body">
                Nacimiento
              </span>
              <span className="font-normal text-custom-text-light">
                12 Agosto, 2001
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
                Español, Inglés
              </span>
            </div>
          </div>

          <div className="flex items-start justify-between gap-2 py-4">
            <CircularProgressComponent
              name="Next.Js"
              value={80}
              text={'Desarrollo de Aplicaciones Web con NextJS ❤️'}
              search="nextjs"
            />
            <CircularProgressComponent
              name="Tailwind"
              value={80}
              text={'Desarrollo de Aplicaciones Web con NextJS ❤️'}
              search="tailwind"
            />
            <CircularProgressComponent
              name="NestJS"
              value={80}
              text={'Desarrollo de Aplicaciones Web con NextJS ❤️'}
              search="nest"
            />
          </div>
          <div className="space-y-3 py-4">
            <ProgressComponent name="HTML" value={95} className="" />
            <ProgressComponent name="CSS" value={90} className="" />
            <ProgressComponent name="JavaScript" value={85} className="mb-6" />
            <ProgressComponent name="TypeScript" value={80} className="" />
            <ProgressComponent name="Python" value={70} className="" />
            <ProgressComponent name="MongoDB" value={80} className="" />
          </div>
          <div className="py-4"></div>
        </section>

        <ProfileFooterComponent />
      </div>
    </aside>
  )
}

export const ProfileAvatarComponent = () => {
  return (
    <header className="h-[270px] w-full bg-custom-background-tertiary p-8">
      <div className="flex h-full w-full flex-col items-center justify-center gap-2.5">
        <div className="relative">
          <Avatar
            isBordered
            showFallback
            color="default"
            className="h-[120px] w-[120px] text-large"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />
          <div className="absolute bottom-2 right-2 rounded-full bg-custom-primary">
            <span className="relative flex size-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-custom-primary opacity-75"></span>
              <span className="relative inline-flex size-4 rounded-full bg-custom-primary"></span>
            </span>
          </div>
        </div>
        <h1 className="pb-1 text-center font-font-heading text-2xl font-bold">
          Aurelio Marín
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

export const ProgressComponent = ({
  name,
  value,
  className,
}: {
  name: string
  value: number
  className?: string
}) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <div className="align-end flex w-full justify-between">
        <h3 className="text-xs font-medium tracking-wide text-custom-text-body">
          {name}
        </h3>
        <span className="text-xs font-normal text-custom-text-light">
          {value}%
        </span>
      </div>
      <Progress
        value={value}
        aria-label={name}
        className={`${className} h-1`}
        classNames={{
          indicator: 'bg-custom-primary',
        }}
      />
    </div>
  )
}

export const CircularProgressComponent = ({
  name,
  value,
  text,
  search,
  className,
}: {
  name: string
  value: number
  text: string
  search: string
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
      <div className="flex w-full cursor-pointer flex-col gap-1 text-custom-text-light hover:text-custom-text-body">
        <div className="relative">
          <CircularProgress
            value={value}
            aria-label={name}
            strokeWidth={2.5}
            className="relative w-full max-w-full"
            classNames={{
              svg: 'text-custom-primary h-16 w-16',
            }}
          />
          <GetIconComponent
            search={search}
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
