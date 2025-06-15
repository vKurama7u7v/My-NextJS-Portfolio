'use client'

import React, { useState, useEffect } from 'react'

import {
  BaseCard,
  TimelineComponent,
  TimelineItemComponent,
} from '../components'
import { TimelineHeader } from '@/components/ui/timeline'
import { SectionLayout } from '../layouts'
import { useTranslations } from 'next-intl'
import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import { IExperienceFields } from '@/contentful/@types/contentful'
import { Entry, EntrySkeletonType } from 'contentful'
import { formatDate } from '@/utils'

interface TimelineProps {
  title: string
  type: 'Work' | 'Education'
  ocupation: string
  description: string
  date: string
  link?: string
  show_in_cv?: boolean
}

interface MyHistoryProps {
  experiences: Entry<EntrySkeletonType<IExperienceFields>>[]
}

export const MyHistory = ({experiences}: MyHistoryProps) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<IExperienceFields[] | null>(null)

  useEffect(() => {
    if (experiences && experiences.length > 0) {
      const fields =  experiences.map((experience) => experience.fields) as IExperienceFields[]
      setData(fields)
      console.log('Experiences data:', fields)
      setLoading(false)
    }
  }, [experiences])

  const t = useTranslations('Home')
  const messages = useTranslations('Messages')

  if (loading) {
    return null
  }

  if (!data || data.length === 0) {
    return <>{messages('data_not_available')}</>
  }
  
  // const items: TimelineProps[] = [
  //   {
  //     title: 'First step',
  //     type: 'Work',
  //     ocupation: 'Software Engineer',
  //     description: 'Description of the first step',
  //     date: '12, Aug 2025',
  //     link: '#',
  //     show_in_cv: true,
  //   },
  //   {
  //     title: 'Second step',
  //     type: 'Work',
  //     ocupation: 'Software Engineer',
  //     description: 'Description of the second step',
  //     date: '12, Aug 2024',
  //     link: '#',
  //     show_in_cv: true,
  //   },
  //   {
  //     title: 'Third step',
  //     type: 'Work',
  //     ocupation: 'Software Engineer',
  //     description: 'Description of the third step',
  //     date: '12, Aug 2023',
  //     link: '#',
  //     show_in_cv: true,
  //   },
  // ]

  return (
    <SectionLayout className="grid grid-cols-1 xl:grid-cols-2 xl:gap-6">
      <Timeline items={data.filter(item => item.type === 'Education')} heading={t('education')} />
      <Timeline items={data.filter(item => item.type === 'Work')} heading={t('work')} />
    </SectionLayout>
  )
}

export const Timeline = ({
  items,
  heading,
}: {
  items: IExperienceFields[]
  heading?: string
}) => {
  const t = useTranslations('General')
  const settings = useTranslations('Settings')

  if (!items || items.length === 0) {
    return null
  }

  return (
    <>
      <TimelineComponent defaultValue={0} orientation="vertical">
        {heading && (
          <TimelineHeader className="pl-8 mb-6">
            <h2 className="text-custom-text-heading text-lg font-bold">
              {heading}
            </h2>
          </TimelineHeader>
        )}
        {items.map((item, index) => (
          <TimelineItemComponent key={index} step={index + 1}>
            <BaseCard
              classNames={{
                card: 'rounded-md bg-custom-background-secondary p-4 -mt-2 mb-6 lg:mb-8 xl:mb-10',
                cardBody: 'flex flex-col gap-4 md:gap-6',
              }}
            >
              <div className="flex justify-between items-start">
                <div className="left">
                  <h3 className="text-custom-text-heading text-sm font-bold md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-custom-text-light text-xs font-medium md:text-sm">
                    {item.ocupation}
                  </p>
                </div>
                <div className="right">
                  <div className="bg-background px-4 py-2 text-xs font-medium capitalize rounded-full">
                    {formatDate(item.date, 'DD, MMMM YYYY', settings('locale') === 'es' ? 'es' : 'en')}
                  </div>
                </div>
              </div>
              <p className="text-custom-text-light text-sm font-medium">
                {item.description}
              </p>
              {item.link && (
                <>
                  <Link
                    href={item.link}
                    className="text-custom-primary flex items-center gap-1 text-xs uppercase group"
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
            </BaseCard>
          </TimelineItemComponent>
        ))}
      </TimelineComponent>
    </>
  )
}
