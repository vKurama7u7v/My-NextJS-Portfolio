import {
  ContentfulClientApi,
  EntriesQueries,
  Entry,
  EntryCollection,
  EntrySkeletonType,
} from 'contentful'
import { contentfulClient as client } from '../config'

export class ContentfulService {
  constructor(private client: ContentfulClientApi<any>) {
    this.client = client
  }

  async getEntries<T extends EntrySkeletonType>(
    query: { locale: string } & EntriesQueries<T, 'WITH_ALL_LOCALES'> = {
      locale: 'en-US',
    }
  ): Promise<EntryCollection<T>> {
    try {
      const entries = await this.client.getEntries<T>(query)
      return entries
    } catch (err) {
      throw new Error(
        `Error fetching entries: ${err instanceof Error ? err.message : 'Unknown error'}`
      )
    }
  }

  async getEntry<T extends EntrySkeletonType>(
    id: string
  ): Promise<Entry<T> | null> {
    try {
      const entry = await this.client.getEntry<T>(id)
      return entry
    } catch (err) {
      throw new Error(
        `Error fetching entry: ${err instanceof Error ? err.message : 'Unknown error'}`
      )
    }
  }
}

export const contentfulClient = new ContentfulService(client)
