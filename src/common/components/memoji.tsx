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
import { useTranslations } from 'next-intl'

interface MemojiProps {
  classNames?: ClassNames
}

interface ClassNames {
  wrapper?: string
  image?: string
  tooltip?: string
}

export const Memoji = ({ classNames }: MemojiProps) => {
  const t = useTranslations('Profile')
  return (
    <div>
      <TooltipProvider openDelay={0} closeDelay={0}>
        <Tooltip side="top" sideOffset={-15}>
          <TooltipTrigger>
            {memoji && (
              <Image
                src={memoji}
                alt="Aurelio's Memoji"
                className={`${classNames?.image} h-[140px] w-[140px]`}
                width={80}
                height={80}
              />
            )}
          </TooltipTrigger>
          <TooltipContent arrow={true}>
            <div className="max-w-32 text-center text-xs font-bold text-custom-text-light">
              {t('bio')}
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
