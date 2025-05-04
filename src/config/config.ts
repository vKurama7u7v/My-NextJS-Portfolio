import { z } from 'zod'

const envSchema = z.object({
  CONTENTFUL_SPACE_ID: z.string().min(1, 'CONTENTFUL_SPACE_ID is required'),
  CONTENTFUL_ACCESS_TOKEN: z
    .string()
    .min(1, 'CONTENTFUL_ACCESS_TOKEN is required'),
  CONTENTFUL_ENVIRONMENT: z
    .string()
    .min(1, 'CONTENTFUL_ENVIRONMENT is required'),
  CONTENTFUL_MANAGEMENT_TOKEN: z
    .string()
    .min(1, 'CONTENTFUL_MANAGEMENT_TOKEN is required'),
})

type EnvVariables = z.infer<typeof envSchema>

const envParseResult = envSchema.safeParse(process.env)

if (!envParseResult.success) {
  console.error(
    'Error parsing environment variables',
    envParseResult.error.format()
  )
  throw new Error(
    'Error parsing environment variables: ' + envParseResult.error.format()
  )
}

export const env = envParseResult.data as EnvVariables
