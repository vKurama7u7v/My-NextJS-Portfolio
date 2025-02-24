import type { Entry, EntryFields } from 'contentful'

export interface TypeHobbiesFields {
  name: EntryFields.Symbol
  icon: 'airplane' | 'brush' | 'chess' | 'code' | 'music'
  description: EntryFields.Symbol
  showInCv: EntryFields.Boolean
}

export type TypeHobbies = Entry<TypeHobbiesFields>
