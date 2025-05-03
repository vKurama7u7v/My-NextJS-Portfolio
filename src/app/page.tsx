import { BaseLayout } from '@/common/layouts'
import { ProfileSidebar } from '@/zhome/components'

export default function Home() {
  return (
    <BaseLayout>
      <div className="flex min-h-[calc(100dvh-6rem)] w-full gap-8">
        <ProfileSidebar />
        <div className="h-full w-full">content</div>
      </div>
    </BaseLayout>
  )
}
