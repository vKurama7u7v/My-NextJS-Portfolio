'use client'

import * as React from 'react'
import { HTMLMotionProps, motion, type Transition } from 'motion/react'

import { cn } from '@/lib/utils'

type GradientBackgroundProps = HTMLMotionProps<'div'> & {
  transition?: Transition
}

function GradientBackground({
  className,
  transition = { duration: 15, ease: 'easeInOut', repeat: Infinity },
  ...props
}: GradientBackgroundProps) {
  return (
    <motion.div
      data-slot="gradient-background"
      className={cn(
        'to-[var(--primary-color)]/100 size-full bg-gradient-to-br from-custom-primary bg-[length:400%_400%]',
        className
      )}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={transition}
      {...props}
    />
  )
}

export { GradientBackground, type GradientBackgroundProps }
