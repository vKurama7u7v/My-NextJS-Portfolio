import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BentoGridProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<'div'> {
  name?: string
  className?: string
  children: ReactNode
}

export const BentoGrid = ({
  children,
  className,
  ...props
}: BentoGridProps) => {
  return (
    <div
      className={cn(
        'relative grid w-full auto-rows-[180px] grid-cols-2 gap-4 lg:auto-rows-[200px] lg:grid-cols-3 xl:grid-cols-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export const BentoCard = ({
  name,
  className,
  children,
  ...props
}: BentoCardProps) => {
  return (
    <div
      key={name}
      className={cn(
        'justify-betweenrounded-sm group relative flex flex-col overflow-hidden rounded-md',
        // light styles
        '',
        // dark styles
        'transform-gpu',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
