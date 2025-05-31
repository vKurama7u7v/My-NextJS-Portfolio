import { createClient } from 'contentful'
import { env } from '@/config'

export const contentfulClient = createClient({
  space: env.CONTENTFUL_SPACE_ID,
  accessToken: env.CONTENTFUL_ACCESS_TOKEN,
  environment: env.CONTENTFUL_ENVIRONMENT,
})
