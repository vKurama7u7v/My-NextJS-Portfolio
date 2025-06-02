import { useTranslations } from 'next-intl'
import { SectionLayout } from '../layouts'
import { ServicesCard } from '../components'

interface ServicesProps {
  title?: string
  description?: string
}

const dummyServices: ServicesProps[] = [
  {
    title: 'Web Development',
    description:
      'Turn ideas into stunning and functional websites. Customized design and development tailored to your needs, ensuring an exceptional user experience.',
  },
  {
    title: 'E-Commerce Management',
    description:
      'Boost your online store with effective strategies. From initial setup to optimization, we ensure sales growth and satisfied customers.',
  },
  {
    title: 'UI/UX Design',
    description:
      'Create visually appealing and user-friendly interfaces that delight your audience. Design focused on enhancing experience and maximizing conversion.',
  },
  {
    title: 'Content Creation',
    description:
      'Create visually appealing and user-friendly interfaces that delight your audience. Design focused on enhancing experience and maximizing conversion.',
  },
  {
    title: 'Social Media Management',
    description:
      'Create visually appealing and user-friendly interfaces that delight your audience. Design focused on enhancing experience and maximizing conversion.',
  },
  {
    title: 'Digital Marketing',
    description:
      'Create visually appealing and user-friendly interfaces that delight your audience. Design focused on enhancing experience and maximizing conversion.',
  },
]

export const Services = () => {
  const t = useTranslations('Home')

  return (
    <SectionLayout className="mb-6 grid gap-6 md:mb-10">
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
