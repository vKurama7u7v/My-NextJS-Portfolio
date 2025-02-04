import { JSX } from 'react'
import { ContactIcon, HomeIcon, MenuSquareIcon, UserIcon } from '../components'

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
    Icon: HomeIcon,
  },
  {
    name: 'resume',
    link: '/resume',
    text: 'Resume',
    Icon: UserIcon,
  },
  {
    name: 'portfolio',
    link: '/projects',
    text: 'Portfolio',
    Icon: MenuSquareIcon,
  },
  {
    name: 'contact',
    link: '/contact',
    text: 'Contact',
    Icon: ContactIcon,
  },
]
