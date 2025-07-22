'use client'

import { cn } from '@/lib/utils'
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useMotionValue,
} from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'
import avatar from '../../../public/assets/github.jpg'
import { Image } from '@heroui/react'

interface PointerProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {}

/**
 * A custom pointer component that displays an animated cursor.
 * Add this as a child to any component to enable a custom pointer when hovering.
 * You can pass custom children to render as the pointer.
 *
 * @component
 * @param {PointerProps} props - The component props
 */
export function Pointer({
  className,
  style,
  children,
  ...props
}: PointerProps): React.JSX.Element {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isActive, setIsActive] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      // Get the parent element directly from the ref
      const parentElement = containerRef.current.parentElement

      if (parentElement) {
        // Add cursor-none to parent
        parentElement.style.cursor = 'none'

        // Add event listeners to parent
        const handleMouseMove = (e: MouseEvent) => {
          x.set(e.clientX)
          y.set(e.clientY)
        }

        const handleMouseEnter = () => {
          setIsActive(true)
        }

        const handleMouseLeave = () => {
          setIsActive(false)
        }

        parentElement.addEventListener('mousemove', handleMouseMove)
        parentElement.addEventListener('mouseenter', handleMouseEnter)
        parentElement.addEventListener('mouseleave', handleMouseLeave)

        return () => {
          parentElement.style.cursor = ''
          parentElement.removeEventListener('mousemove', handleMouseMove)
          parentElement.removeEventListener('mouseenter', handleMouseEnter)
          parentElement.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
    }
  }, [x, y])

  const colors = [
    '#0ea5e9',
    '#737373',
    '#14b8a6',
    '#22c55e',
    '#3b82f6',
    '#ef4444',
    '#eab308',
  ]

  return (
    <>
      <div ref={containerRef} />
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="transform-[translate(-50%,-50%)] pointer-events-none fixed z-50"
            style={{
              top: y,
              left: x,
              ...style,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            {...props}
          >
            {children || (
              <div className="relative">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 16 16"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    'rotate-[-70deg] stroke-white text-custom-primary',
                    className
                  )}
                >
                  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                </svg>
                <div
                  style={{
                    backgroundColor:
                      colors[Math.floor(Math.random() * colors.length)],
                  }}
                  className="absolute left-0 top-[1.5em] flex translate-x-[28px] items-center rounded-full py-1 pl-1 pr-2"
                >
                  <Image
                    src={avatar.src}
                    alt="vKurama7u7v"
                    className="h-6 w-6 min-w-6 rounded-full object-cover object-center"
                    loading="eager"
                  />
                  <span className="ml-2 text-xs font-bold text-white">
                    vKurama7u7v
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
