import React, { PropsWithChildren } from 'react'
import { SidebarMenu } from '../components'

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="relative mx-auto h-full max-h-dvh min-h-dvh w-full max-w-[1536px] xl:px-4 xl:py-4">
      <div className="absolute left-0 top-0 z-40 h-[60px] w-full bg-custom-background-secondary md:hidden"></div>
      <div className="flex h-[calc(100dvh)] w-full justify-between gap-4 xl:h-[calc(100dvh-2em)] xl:gap-8">
        {children}
        <SidebarMenu />
      </div>
    </main>
  )
}
