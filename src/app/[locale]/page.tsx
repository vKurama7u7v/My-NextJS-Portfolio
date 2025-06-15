import { getLocale, getTranslations } from 'next-intl/server'

import { BaseLayout } from '@/common/layouts'
import {
  ProfileSidebar,
  Header,
  Services,
  MyHistory,
  MyBento,
} from '@/common/home'
import { experienceService } from '@/contentful/services'
import { getContentfulLocale } from '@/utils'

export default async function Home() {
  const t = await getTranslations('Home')
  const locale = await getLocale()

  const retreiveExperiences = await experienceService.getExperiences(
    {
      order: 'fields.date',
    },
    getContentfulLocale(locale)
  )

  return (
    <BaseLayout>
      <div className="w-full h-full gap-4 md:flex xl:gap-8">
        <ProfileSidebar />
        <div className="h-full w-full overflow-y-scroll scroll-smooth pt-[60px] scrollbar-hide md:pt-0">
          <Header />
          <Services />
          <MyHistory experiences={retreiveExperiences} />
          <MyBento />
        </div>
      </div>
    </BaseLayout>
  )
}
