'use client'
import React from 'react'
import { Avatar } from '@heroui/react'

export const ProfileSidebar = () => {
  return (
    <aside
      aria-label="Profile Information"
      className="h-full w-[300px] min-w-[300px] overflow-hidden rounded bg-custom-background-secondary"
    >
      <ProfileAvatarComponent />
      <div className="flex h-[calc(100%-270px)] w-full flex-col justify-between">
        <section className="flex h-[calc(100dvh-2em-270px-50px-4em)] w-full flex-col divide-y divide-custom-border-color overflow-y-auto p-8">
          <div className="pb-4">asdw</div>
          <div className="py-4">asdw</div>
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
    <footer className="h-[50px] bg-custom-background-tertiary">bottom</footer>
  )
}
