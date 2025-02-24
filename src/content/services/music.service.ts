import { contentfulClient } from '../config'
import { TypeMusicWidgetFields } from '../types'

export class ContentfulMusic {
  constructor() {}

  async find(skip: number = 0, limit: number = 100) {
    const response = await contentfulClient.getEntries<TypeMusicWidgetFields>({
      content_type: 'musicWidget',
      skip,
      limit,
    })

    return response
  }

  async findOne(id: string) {
    const response = await contentfulClient.getEntry<TypeMusicWidgetFields>(id)

    return response
  }
}

export const musicService = new ContentfulMusic()
