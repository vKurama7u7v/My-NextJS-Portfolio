'use client'
import React from 'react'
import memoji from '../../../public/assets/memojis/thinking-sticker.png'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/animate-ui/components/tooltip'

interface MemojiProps {
  classNames?: ClassNames
}

interface ClassNames {
  wrapper?: string
  image?: string
  tooltip?: string
}

export const Memoji = ({ classNames }: MemojiProps) => {
  return (
    <div>
      <TooltipProvider openDelay={0} closeDelay={0}>
        <Tooltip side="top" sideOffset={-20}>
          <TooltipTrigger>
            {memoji && (
              <Image
                src={memoji}
                alt="Aurelio's Memoji"
                className={`${classNames?.image} h-[130px] w-[130px]`}
                width={80}
                height={80}
              />
            )}
          </TooltipTrigger>
          <TooltipContent arrow={true}>
            <div className="max-w-32 text-center text-xs font-bold text-custom-text-light">
              Desarrollador Full Stack 🚀 & Catador de Tacos al Pastor 🌮
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
