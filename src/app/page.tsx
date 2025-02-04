import SidebarMenu from '@/common/components/sidebar-menu'
import BaseLayout from '@/common/layouts/base-layout'

export default function Home() {
  return <BaseLayout>
    <section className="flex gap-6">
      <div className="">left</div>
      <SidebarMenu />
    </section>
  </BaseLayout>
}
