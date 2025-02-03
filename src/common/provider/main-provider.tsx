'use client'
import { HeroUIProvider } from '@heroui/react'
import React, { PropsWithChildren } from 'react'

function MainProvider({ children }: PropsWithChildren) {
  return <HeroUIProvider>{children}</HeroUIProvider>
}

export default MainProvider
