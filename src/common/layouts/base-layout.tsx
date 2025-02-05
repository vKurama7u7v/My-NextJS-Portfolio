import React, { PropsWithChildren } from 'react'
import { SidebarMenu } from '../components'

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="relative mx-auto min-h-dvh w-full max-w-[1420px] py-12">
      <div className="flex h-full w-full justify-between gap-8">
        {children}
        <SidebarMenu />
      </div>
    </main>
  )
}
