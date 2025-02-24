import type { Entry, EntryFields } from 'contentful'

export interface TypeProjectsFields {
  title: EntryFields.Symbol
  slug: EntryFields.Symbol
  description: EntryFields.Text
  categories: ('Back-end' | 'Design UI/UX' | 'Figma' | 'Front-end' | 'Web')[]
}

export type TypeProjects = Entry<TypeProjectsFields>
