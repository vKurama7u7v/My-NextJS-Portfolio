import { TimelineComponent, TimelineItemComponent } from '../components'
import { TimelineHeader } from '@/components/ui/timeline'
import { SectionLayout } from '../layouts'
import { useTranslations } from 'next-intl'
import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'

interface TimelineProps {
  id: string
  step: number
  title: string
  type: 'work' | 'education'
  ocupation: string
  description: string
  date: string
  link?: string
  show_in_cv?: boolean
}

export const MyHistory = () => {
  const t = useTranslations('Home')

  const items: TimelineProps[] = [
    {
      id: '1',
      step: 1,
      title: 'First step',
      type: 'work',
      ocupation: 'Software Engineer',
      description: 'Description of the first step',
      date: '12, Aug 2025',
      link: '#',
      show_in_cv: true,
    },
    {
      id: '2',
      step: 2,
      title: 'Second step',
      type: 'work',
      ocupation: 'Software Engineer',
      description: 'Description of the second step',
      date: '12, Aug 2024',
      link: '#',
      show_in_cv: true,
    },
    {
      id: '3',
      step: 3,
      title: 'Third step',
      type: 'work',
      ocupation: 'Software Engineer',
      description: 'Description of the third step',
      date: '12, Aug 2023',
      link: '#',
      show_in_cv: true,
    },
  ]

  return (
    <SectionLayout className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
      <Timeline items={items} heading={t('education')} />
      <Timeline items={items} heading={t('work')} />
    </SectionLayout>
  )
}

export const Timeline = ({
  items,
  heading,
}: {
  items: TimelineProps[]
  heading?: string
}) => {
  const t = useTranslations('General')

  return (
    <>
      <TimelineComponent defaultValue={0} orientation="vertical">
        {heading && (
          <TimelineHeader className="mb-6 pl-8">
            <h2 className="text-custom-text-heading text-lg font-bold">
              {heading}
            </h2>
          </TimelineHeader>
        )}
        {items.map((item, index) => (
          <TimelineItemComponent key={index} step={item.step}>
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="left">
                  <h3 className="text-custom-text-heading text-sm font-bold md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-custom-text-light md:text-sm">
                    {item.ocupation}
                  </p>
                </div>
                <div className="right">
                  <div className="rounded-full bg-background px-4 py-2 text-xs font-medium">
                    {item.date}
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-sm font-medium text-custom-text-body">
                  {item.description}
                </p>
              </div>
              <div className="">
                {item.link && (
                  <>
                    <Link
                      href={item.link}
                      className="group flex items-center gap-1 text-xs uppercase text-custom-primary"
                    >
                      <span className="font-black">{t('view_more')}</span>
                      <MoveRightIcon
                        className="-me-1 transition-transform group-hover:translate-x-[2px]"
                        size={16}
                        aria-hidden="true"
                      />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </TimelineItemComponent>
        ))}
      </TimelineComponent>
    </>
  )
}
