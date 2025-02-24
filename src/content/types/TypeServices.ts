import type { Entry, EntryFields } from 'contentful'

export interface TypeServicesFields {
  title: EntryFields.Symbol
  description: EntryFields.Text
  showInCv: EntryFields.Boolean
}

export type TypeServices = Entry<TypeServicesFields>
