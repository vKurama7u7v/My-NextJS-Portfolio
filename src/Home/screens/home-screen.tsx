'use client'
import { Avatar } from '@heroui/react'

export const HomeScreen = () => {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] w-full gap-8">
      <aside
        aria-label="Profile Information"
        className="h-full w-[300px] min-w-[300px] overflow-hidden rounded bg-custom-background-secondary"
      >
        <header className="h-[270px] w-full bg-custom-background-tertiary p-8">
          <div className="flex h-full w-full flex-col items-center justify-center gap-2.5">
            <div className="relative">
              <Avatar
                isBordered
                color="default"
                className="h-[120px] w-[120px] text-large"
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              />
              <div className="bg-custom-primary absolute right-2 bottom-2 rounded-full">
                <span className="size-4 relative flex">
                  <span className="bg-custom-primary w-full h-full absolute inline-flex rounded-full opacity-75 animate-ping"></span>
                  <span className="bg-custom-primary size-4 relative inline-flex rounded-full"></span>
                </span>
              </div>
            </div>
            <h1 className="font-font-heading pb-1 text-2xl font-bold text-center">
              Aurelio Marín
            </h1>
            <h2 className="font-font-heading text-custom-primary relative px-3 py-2 text-sm font-medium">
              <div className="bg-custom-primary w-full h-full absolute top-0 left-0 rounded-lg opacity-10"></div>
              <div className="relative">Full Stack Web Developer</div>
            </h2>
          </div>
        </header>

        <div className="flex h-[calc(100%-270px)] w-full flex-col justify-between">
          <section className="flex h-[calc(100dvh-2em-270px-50px-4em)] w-full flex-col divide-y divide-custom-border-color overflow-y-auto p-8">
            <div className="pb-4">asdw</div>
            <div className="py-4">asdw</div>
          </section>

          <footer className="h-[50px] bg-custom-background-tertiary">
            bottom
          </footer>
        </div>
      </aside>
      <div className="w-full h-full">content</div>
    </div>
  )
}
