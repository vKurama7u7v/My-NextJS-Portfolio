import { getTranslations } from 'next-intl/server'

import { BaseLayout } from '@/common/layouts'
import {
  ProfileSidebar,
  Header,
  Services,
  MyHistory,
  MyBento,
} from '@/common/home'

export default async function Home() {
  const t = await getTranslations('Home')
  return (
    <BaseLayout>
      <div className="h-full w-full gap-4 md:flex xl:gap-8">
        <ProfileSidebar />
        <div className="h-full w-full overflow-y-scroll scroll-smooth pt-[60px] scrollbar-hide md:pt-0">
          <Header />
          <Services />
          <MyHistory />
          <MyBento />
        </div>
      </div>
    </BaseLayout>
  )
}
