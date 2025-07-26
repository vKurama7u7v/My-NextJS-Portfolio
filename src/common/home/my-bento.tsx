'use client'

import { socialWidgetData } from '@/static'
import { BaseCard, BentoCard, BentoGrid } from '../components'
import { SectionLayout } from '../layouts'
import { MusicPlayerWidget, SocialMediaWidget, PokemonWidget } from '../widgets'
import { OrbitingCircleComponent } from './orbiting-circle'
import { Pointer } from '@/components/magicui/pointer'
import { GradientBackground } from '@/components/animate-ui/backgrounds/gradient'
import { useMessages, useTranslations } from 'next-intl'
import RotatingText from '@/components/reactbits/RotatingText/RotatingText'
import { text } from 'stream/consumers'
import { SparklesCore } from '@/components/ui/sparkles'

interface BentoGridProps {
  name: string
  className?: string
  children?: React.ReactNode
}

export const MyBento = () => {
  const grids: BentoGridProps[] = [
    {
      name: 'Instagram',
      className: 'bg-custom-background-secondary order-4 lg:order-3 xl:order-1',
      children: <SocialMediaWidget {...socialWidgetData[1]} />,
    },
    {
      name: 'Header',
      className:
        'bg-custom-background-secondary row-span-2 col-span-2 order-1 lg:order-2',
      children: <HeaderBento />,
    },
    {
      name: 'Music Player',
      className: 'row-span-2 order-5 lg:order-1 xl:order-3',
      children: <MusicPlayerWidget />,
    },
    {
      name: 'Facebook',
      className: 'bg-custom-background-secondary order-6 xl:order-4',
      children: <SocialMediaWidget {...socialWidgetData[2]} />,
    },
    {
      name: 'Empty 1',
      className:
        'bg-custom-background-secondary row-span-2 lg:row-span-1 col-span-2 xl:col-span-1 order-9 lg:order-7 xl:order-5',
      children: <>Slider</>,
    },
    {
      name: 'Empty 2',
      className:
        'bg-custom-background-secondary row-span-2 order-2 lg:order-4 xl:order-6',
      children: <>Avatar Sprites</>,
    },
    {
      name: 'Empty 3',
      className:
        'bg-custom-background-secondary row-span-2 order-3 lg:order-5 xl:order-7',
      children: <>Animation</>,
    },
    {
      name: 'Github',
      className: 'bg-custom-background-secondary order-7 lg:order-8',
      children: <SocialMediaWidget {...socialWidgetData[3]} />,
    },
    {
      name: 'Empty 4',
      className:
        'bg-custom-background-secondary col-span-2 xl:col-span-1 order-10 lg:order-9',
      children: <PokemonWidget />,
    },
    {
      name: 'LinkedIn',
      className: 'bg-custom-background-secondary order-8 lg:order-10',
      children: <SocialMediaWidget {...socialWidgetData[0]} />,
    },
    {
      name: 'Empty 5',
      className:
        'bg-custom-background-secondary absolute z-10 -translate-x-1/2 -translate-y-1/2 top-[400px] left-1/2 lg:left-2/3 xl:left-1/2 xl:top-1/2 w-[280px] h-[280px] rounded-full border-[1em] border-[--background] flex items-center justify-center order-11 xl:order-11 !overflow-auto',
      children: <OrbitingCircleComponent />,
    },
  ]

  return (
    <SectionLayout className="select-none">
      <Pointer />
      <BentoGrid>
        {grids.map((grid, index) => (
          <BentoCard key={index} {...grid}>
            {grid.children}
          </BentoCard>
        ))}
      </BentoGrid>
    </SectionLayout>
  )
}

const HeaderBento = () => {
  const t = useTranslations('Bento')
  const messages = useMessages()
  const texts = (messages as any).Bento?.Header?.texts || []

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#323259]/90">
      <GradientBackground className="absolute inset-0 z-[1]" />
      <BaseCard
        isBlurred={true}
        classNames={{
          card: 'relative z-[3] h-full w-full bg-transparent',
          cardBody: 'w-full h-full py-12 relative',
        }}
      >
        <h2 className="font-outfit flex flex-col items-center text-center font-bold">
          <span className="text-4xl text-white sm:text-5xl xl:text-6xl">
            {t('Header.prefix')}
          </span>
          <RotatingText
            texts={texts}
            mainClassName="overflow-hidden text-[1.5em] sm:text-[1.75em] font-extrabold text-center mt-3 px-6 py-2 font-bold bg-white text-custom-primary rounded-md w-fit"
            staggerFrom={'last'}
            // initial={{ y: '100%' }}
            // animate={{ y: 0 }}
            // exit={{ y: '-120%' }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={3500}
          />
        </h2>
        {/* <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="absolute left-0 top-0 z-[1] h-full w-full"
          particleColor="#FFFFFF"
        /> */}
      </BaseCard>
    </div>
  )
}
