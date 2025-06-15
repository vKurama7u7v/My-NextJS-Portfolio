import { Entry, EntrySkeletonType } from 'contentful'
import { IProfileFields } from '../@types/contentful'
import { contentfulClient } from './contentful.service'

export type ProfileSkeletonType = EntrySkeletonType<IProfileFields> & {
  contentTypeId: string
}

export class ProfileService {
  private readonly contentTypeId = 'profile'
  private readonly client = contentfulClient

  constructor() {}

  async getProfile(
    id: string,
    locale?: 'en-US' | 'es-MX'
  ): Promise<Entry<EntrySkeletonType<IProfileFields>> | null> {
    const entry = await this.client.getEntry<ProfileSkeletonType>(id, {
      locale: locale || 'en-US',
    })
    return entry || null
  }
}

export const profileService = new ProfileService()
