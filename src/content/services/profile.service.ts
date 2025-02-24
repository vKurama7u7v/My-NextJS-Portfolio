import { contentfulClient } from '../config'
import { TypeProfileFields } from '../types'

export class ContentfulProfile {
  constructor() {}
  async findOne(id: string = '35s65bVaP0YFwaFApB1PAX') {
    const response = await contentfulClient.getEntry<TypeProfileFields>(id)

    return response
  }
}

export const profileService = new ContentfulProfile()
