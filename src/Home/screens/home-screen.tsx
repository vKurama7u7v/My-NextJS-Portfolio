import { ProfileSidebar } from '../components'

export const HomeScreen = () => {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] w-full gap-8">
      <ProfileSidebar />
      <div className="h-full w-full">content</div>
    </div>
  )
}
