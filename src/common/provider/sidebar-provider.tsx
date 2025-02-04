import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { SidebarMainMenu } from '../components'

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <SidebarMainMenu />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
