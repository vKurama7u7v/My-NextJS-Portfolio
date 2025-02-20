import { z } from 'zod'

const envSchema = z.object({
  CONTENTFUL_SPACE_ID: z.string().min(1, "SHOPIFY_API_KEY is required"),
  CONTENTFUL_ACCESS_TOKEN: z.string().min(1, "SHOPIFY_API_SECRET is required"),
})

type EnvVariables = z.infer<typeof envSchema>

const envParseResult = envSchema.safeParse(process.env)

if (!envParseResult.success) {
  console.error("Error parsing environment variables", envParseResult.error.format())
  throw new Error("Error parsing environment variables: " + envParseResult.error.format())
}

export const env = envParseResult.data as EnvVariables