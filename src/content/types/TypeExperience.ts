import type { Entry, EntryFields } from 'contentful'

export interface TypeExperienceFields {
  title: EntryFields.Symbol
  type: 'Education' | 'Work'
  ocupation: EntryFields.Symbol
  description: EntryFields.Text
  date: EntryFields.Date
  link?: EntryFields.Symbol
  showInCv: EntryFields.Boolean
}

export type TypeExperience = Entry<TypeExperienceFields>
