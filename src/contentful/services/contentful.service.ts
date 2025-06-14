import {
  ContentfulClientApi,
  EntriesQueries,
  Entry,
  EntryCollection,
  EntrySkeletonType,
} from 'contentful'

import { contentfulClient as client } from '../config'

export class ContentfulClientService {
  constructor(private readonly client: ContentfulClientApi<any>) {}

  async getEntries<T extends EntrySkeletonType>(
    query: EntriesQueries<T, any>
  ): Promise<EntryCollection<T>> {
    return await this.client.getEntries<T>(query)
  }

  async getEntry<T extends EntrySkeletonType>(
    id: string
  ): Promise<Entry<T> | null> {
    try {
      const entry = await this.client.getEntry<T>(id)
      return entry as Entry<T>
    } catch (error: any) {
      if (error?.name === 'NotFound') return null
      throw error
    }
  }

  async getEntriesByContentType<T extends EntrySkeletonType>(
    contentType: string
  ): Promise<EntryCollection<T>> {
    return await this.getEntries<T>({ content_type: contentType })
  }
}

export const contentfulClient = new ContentfulClientService(client)
