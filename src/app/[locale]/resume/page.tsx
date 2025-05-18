import { BaseLayout } from '@/common/layouts'
import { getTranslations } from 'next-intl/server'

const Resume = async () => {
  const t = await getTranslations('Resume')
  return (
    <BaseLayout>
      <div className="h-full w-full gap-4 overflow-y-scroll scroll-smooth pt-[60px] scrollbar-hide md:flex md:pt-0 xl:gap-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maxime
        dolorem aliquid iste et provident iusto repellat sit voluptatum ipsum!
        Sed cum ipsam recusandae cupiditate fugit quae asperiores modi quos.
      </div>
    </BaseLayout>
  )
}

export default Resume
