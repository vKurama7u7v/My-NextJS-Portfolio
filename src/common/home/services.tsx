'use client'

import React, { useState, useEffect } from 'react'

import { useTranslations } from 'next-intl'
import { SectionLayout } from '../layouts'
import { ServicesCard } from '../components'
import { Entry, EntrySkeletonType } from 'contentful'
import { IServicesFields } from '@/contentful/@types/contentful'

// interface ServicesProps {
//   title?: string
//   description?: string
// }

// const dummyServices: ServicesProps[] = [
//   {
//     title: 'Web Development',
//     description:
//       'Turn ideas into stunning and functional websites. Customized design and development tailored to your needs, ensuring an exceptional user experience.',
//   },
//   {
//     title: 'E-Commerce Management',
//     description:
//       'Boost your online store with effective strategies. From initial setup to optimization, we ensure sales growth and satisfied customers.',
//   },
//   {
//     title: 'UI/UX Design',
//     description:
//       'Create visually appealing and user-friendly interfaces that delight your audience. Design focused on enhancing experience and maximizing conversion.',
//   },
//   {
//     title: 'Content Creation',
//     description:
//       'Create visually appealing and user-friendly interfaces that delight your audience. Design focused on enhancing experience and maximizing conversion.',
//   },
//   {
//     title: 'Social Media Management',
//     description:
//       'Create visually appealing and user-friendly interfaces that delight your audience. Design focused on enhancing experience and maximizing conversion.',
//   },
//   {
//     title: 'Digital Marketing',
//     description:
//       'Create visually appealing and user-friendly interfaces that delight your audience. Design focused on enhancing experience and maximizing conversion.',
//   },
// ]

interface ServicesProps {
  services: Entry<EntrySkeletonType<IServicesFields>>[]
}

export const Services = (
  { services }: ServicesProps
) => {

  const [loading, setLoading] = useState<boolean>(true)
  const [dummyServices, setDummyServices] = useState<IServicesFields[] | null>(null)

  useEffect(() => {
    if (services && services.length > 0) {
      const fields = services.map((service) => service.fields) as IServicesFields[]
      setDummyServices(fields)
      console.log('Services data:', fields)
      setLoading(false)
    }
  }, [services])

  const t = useTranslations('Home')
  const messages = useTranslations('Messages')

  if (loading) {
    return null
  }

  if (!dummyServices || dummyServices.length === 0) {
    return <>{messages('data_not_available')}</>
  }

  return (
    <SectionLayout className="grid gap-6 mb-6 md:mb-10">
      <h2 className="text-custom-text-heading text-lg font-bold">
        {t('services')}
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        {dummyServices.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </SectionLayout>
  )
}
