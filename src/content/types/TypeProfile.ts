import type { Asset, Entry, EntryFields } from 'contentful'
import type { TypeExperienceFields } from './TypeExperience'
import type { TypeHobbiesFields } from './TypeHobbies'
import type { TypeMusicWidgetFields } from './TypeMusicWidget'
import type { TypeServicesFields } from './TypeServices'
import type { TypeStackSkillsFields } from './TypeStackSkills'

export interface TypeProfileFields {
  avatar: Asset
  fullName: EntryFields.Symbol
  firstName: EntryFields.Symbol
  lastName: EntryFields.Symbol
  email: EntryFields.Symbol
  phone: EntryFields.Symbol
  address: EntryFields.Location
  birthday: EntryFields.Date
  biography: EntryFields.RichText
  languages: EntryFields.Symbol
  roleTitles: EntryFields.Symbol[]
  services?: Entry<TypeServicesFields>[]
  experience?: Entry<TypeExperienceFields>[]
  skills?: Entry<TypeStackSkillsFields>[]
  hobbies?: Entry<TypeHobbiesFields>[]
  playlist?: Entry<TypeMusicWidgetFields>[]
}

export type TypeProfile = Entry<TypeProfileFields>
