import { JSX } from 'react'

type Route = {
  name: string
  link: string
  text: string
  Icon?: ({ className }: { className?: string }) => JSX.Element
}

export const Routes = [
  {
    name: 'home',
    link: '/',
    text: 'Home',
  },
  {
    name: 'resume',
    link: '/resume',
    text: 'Resume',
  },
  {
    name: 'portfolio',
    link: '/projects',
    text: 'Portfolio',
  },
  {
    name: 'contact',
    link: '/contact',
    text: 'Contact',
  },
]
