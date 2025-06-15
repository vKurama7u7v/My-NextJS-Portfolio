import { Entry, EntrySkeletonType } from 'contentful'
import { IServicesFields } from '../@types/contentful'
import { contentfulClient } from './contentful.service'

export type ServiceSkeletonType = EntrySkeletonType<IServicesFields> & {
  contentTypeId: string
}

export class ServicesService {
  private readonly contentTypeId = 'services'
  private readonly client = contentfulClient

  constructor() {}

  async getServices(
    query?: Record<string, any>,
    locale?: 'en-US' | 'es-MX'
  ): Promise<Entry<EntrySkeletonType<IServicesFields>>[]> {
    const { items } = await this.client.getEntries<ServiceSkeletonType>({
      content_type: this.contentTypeId,
      ...query,
      locale: locale || 'en-US',
    })
    return items
  }

  async getService(id: string, locale?: 'en-US' | 'es-MX') {
    const entry = await this.client.getEntry<ServiceSkeletonType>(id, {
      locale: locale || 'en-US',
    })
    return entry || null
  }
}

export const servicesService = new ServicesService()
