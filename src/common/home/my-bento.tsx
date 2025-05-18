import { BentoCard, BentoGrid } from '../components'
import { SectionLayout } from '../layouts'
import { OrbitingCircleComponent } from './orbiting-circle'

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
      children: <>Instagram</>,
    },
    {
      name: 'Header',
      className:
        'bg-custom-background-secondary row-span-2 col-span-2 order-1 lg:order-2',
      children: <>Header</>,
    },
    {
      name: 'Music Player',
      className:
        'bg-custom-background-secondary row-span-2 order-5 lg:order-1 xl:order-3',
      children: <>Music Player</>,
    },
    {
      name: 'Facebook',
      className: 'bg-custom-background-secondary order-6 xl:order-4',
      children: <>Facebook</>,
    },
    {
      name: 'Empty 1',
      className:
        'bg-custom-background-secondary row-span-2 lg:row-span-1 col-span-2 xl:col-span-1 order-9 lg:order-7 xl:order-5',
      children: <>Empty 1</>,
    },
    {
      name: 'Empty 2',
      className:
        'bg-custom-background-secondary row-span-2 order-2 lg:order-4 xl:order-6',
      children: <>Empty 2</>,
    },
    {
      name: 'Empty 3',
      className:
        'bg-custom-background-secondary row-span-2 order-3 lg:order-5 xl:order-7',
      children: <>Empty 3</>,
    },
    {
      name: 'Github',
      className: 'bg-custom-background-secondary order-7 lg:order-8',
      children: <>Github</>,
    },
    {
      name: 'Empty 4',
      className:
        'bg-custom-background-secondary col-span-2 xl:col-span-1 order-10 lg:order-9',
      children: <>Empty 4</>,
    },
    {
      name: 'LinkedIn',
      className: 'bg-custom-background-secondary order-8 lg:order-10',
      children: <>LinkedIn</>,
    },
    {
      name: 'Empty 5',
      className:
        'bg-custom-background-secondary absolute z-10 -translate-x-1/2 -translate-y-1/2 top-[400px] left-1/2 lg:left-2/3 xl:left-1/2 xl:top-1/2 w-[300px] h-[300px] rounded-full border-[1em] border-[--background] flex items-center justify-center order-11 xl:order-11',
      children: <OrbitingCircleComponent />,
    },
  ]

  return (
    <SectionLayout>
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
