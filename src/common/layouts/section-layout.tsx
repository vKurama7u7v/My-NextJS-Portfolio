import React, { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

export const SectionLayout = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn('w-full px-4 py-4 md:px-0 xl:py-0', className)}>
      {children}
    </section>
  )
}
