export interface TimelineProps {
  id: string
  step: number
  title: string
  type: 'work' | 'education'
  ocupation: string
  description: string
  date: string
  link?: string
  show_in_cv?: boolean
}
