import { getLocale, getTranslations } from 'next-intl/server'

import { BaseLayout } from '@/common/layouts'
import {
  ProfileSidebar,
  Header,
  Services,
  MyHistory,
  MyBento,
} from '@/common/home'
import {
  experienceService,
  profileService,
  servicesService,
} from '@/contentful/services'
import { getContentfulLocale } from '@/utils'

export default async function Home() {
  const t = await getTranslations('Home')
  const locale = await getLocale()

  const retreiveProfile = await profileService.getProfile(
    '35s65bVaP0YFwaFApB1PAX',
    getContentfulLocale(locale)
  )

  if (!retreiveProfile) {
    throw new Error('Profile not found')
  }

  const { fields, metadata, sys } = retreiveProfile || {}

  const { services, experience } = fields || {}

  // console.log('Profile:', retreiveProfile)

  return (
    <BaseLayout>
      <div className="h-full w-full gap-4 md:flex xl:gap-8">
        <ProfileSidebar data={retreiveProfile} />
        <div className="h-full w-full overflow-y-scroll scroll-smooth pt-[60px] scrollbar-hide md:pt-0">
          <Header
            description={fields.shortDescription as any}
            titles={fields.roleTitles as any}
          />
          <Services services={services as any} />
          <MyHistory experiences={experience as any} />
          <MyBento />
        </div>
      </div>
    </BaseLayout>
  )
}
