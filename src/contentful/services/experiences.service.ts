import { Entry, EntrySkeletonType } from 'contentful'
import { IExperienceFields } from '../@types/contentful'
import { contentfulClient } from './contentful.service'

export type ExperienceSkeletonType = EntrySkeletonType<IExperienceFields> & {
  contentTypeId: string
}

export class ExperienceService {
  private readonly contentTypeId = 'experience'
  private readonly client = contentfulClient

  constructor() {}

  async getExperiences(
    query?: Record<string, any>,
    locale?: 'en-US' | 'es-MX'
  ): Promise<Entry<EntrySkeletonType<IExperienceFields>>[]> {
    const { items } = await this.client.getEntries<ExperienceSkeletonType>({
      content_type: this.contentTypeId,
      ...query,
      locale: locale || 'en-US',
    })
    return items
  }

  async getExperience(id: string, locale?: 'en-US' | 'es-MX') {
    const entry = await this.client.getEntry<ExperienceSkeletonType>(id)
    return entry || null
  }
}

export const experienceService = new ExperienceService()
