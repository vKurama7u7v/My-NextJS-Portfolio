import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { GetBrand } from '../components'

export const OrbitingCircleComponent = () => {
  return (
    <div className="flex h-[200px] w-[200px] items-center justify-center overflow-hidden">
      <OrbitingCircles>
        <GetBrand
          name="github"
          className="h-12 w-12 text-black dark:text-white"
        />
        <GetBrand name="docker" className="h-12 w-12" />
        <GetBrand
          name="vercel"
          className="h-12 w-12 text-black dark:text-white"
        />
        <GetBrand name="figma" className="h-7 w-12" />
        <GetBrand name="supabase" className="h-12 w-12" />
        <GetBrand name="notion" className="h-12 w-12" />
        <GetBrand
          name="prisma"
          className="h-12 w-12 text-black dark:text-white"
        />
      </OrbitingCircles>
      <OrbitingCircles radius={70} reverse>
        <GetBrand name="nextjs" className="h-12 w-12" />
        <GetBrand name="tailwind" className="h-12 w-12" />
        <GetBrand name="react" className="h-12 w-12" />
        <GetBrand name="nestjs" className="h-12 w-12" />
        <GetBrand name="shopify" className="h-12 w-12" />
      </OrbitingCircles>
    </div>
  )
}
