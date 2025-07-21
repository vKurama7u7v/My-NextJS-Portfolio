import { BaseLayout } from '@/common/layouts'
import PokemonWidget from '@/common/widgets/pokemon-widget'
import { getTranslations } from 'next-intl/server'

const Resume = async () => {
  const t = await getTranslations('Resume')
  return (
    <BaseLayout>
      <div className="h-full w-full gap-4 overflow-y-scroll scroll-smooth pt-[60px] scrollbar-hide md:flex md:pt-0 xl:gap-8">
        <div className="">Pokemon</div>
        <PokemonWidget />
      </div>
    </BaseLayout>
  )
}

export default Resume
