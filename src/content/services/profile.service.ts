import { contentfulClient } from '../config'
import { TypeProfileFields } from '../types'
import { createCustomError } from '@/common/types/customError'

export class ContentfulProfile {
  constructor() {}
  async findOne(id: string = '35s65bVaP0YFwaFApB1PAX') {
    try {
      const response = await contentfulClient.getEntry<TypeProfileFields>(id)
      return response
    } catch (err) {
      return createCustomError(500, 'Error fetching profile data')
    }
  }
}

export const profileService = new ContentfulProfile()
