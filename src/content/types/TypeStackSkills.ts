import type { Entry, EntryFields } from 'contentful'

export interface TypeStackSkillsFields {
  name: EntryFields.Symbol
  types: (
    | 'Backend Development'
    | 'CMS'
    | 'Database'
    | 'Frontend Development'
    | 'Mobile Development'
    | 'Programming Languages'
    | 'Tools'
  )[]
  icon: EntryFields.Symbol
  description: EntryFields.Symbol
  percentage: EntryFields.Integer
  showInCv: EntryFields.Boolean
}

export type TypeStackSkills = Entry<TypeStackSkillsFields>
