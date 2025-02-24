import { BaseLayout } from '@/common/layouts'
import { profileService } from '@/content/services/profile.service'
import { ProfileSidebar } from '@/Home/components/Sidebar'

async function Home() {
  const data = await profileService.findOne()

  if (!data) {
    return <div>loading...</div>
  }

  console.log(data)

  return (
    <BaseLayout>
      <div className="flex min-h-[calc(100dvh-6rem)] w-full gap-8">
        <ProfileSidebar {...data.fields} />
        <div className="h-full w-full">content</div>
      </div>
    </BaseLayout>
  )
}

export default Home
