import type { Entry, EntryFields } from 'contentful'

export interface TypeMusicWidgetFields {
  name: EntryFields.Symbol
  artist: EntryFields.Symbol
  cover: EntryFields.Symbol
  audioUrl: EntryFields.Symbol
}

export type TypeMusicWidget = Entry<TypeMusicWidgetFields>
