'use client'
import React, { useEffect, useState } from 'react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/react'
import { Moon, SettingsIcon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { GetIcon } from './icons'
import { useTranslations } from 'next-intl'

export const PreferencesButton = () => {
  const [color, setColor] = useState<string>(
    localStorage.getItem('theme-color') || 'blue'
  )

  useEffect(() => {
    onSetColor(color)
  }, [color, setColor])

  const onSetColor = (color: string) => {
    document.documentElement.classList.forEach((element) => {
      if (element.startsWith('theme-')) {
        document.documentElement.classList.remove(element)
      }
    })

    if (!document.documentElement.classList.contains(color)) {
      document.documentElement.classList.add(`theme-${color}`)
      localStorage.setItem('theme-color', color)
    }

    console.log(document.documentElement.classList)
  }

  return (
    <>
      <ThemeToggle />
      <ColorToggle color={color} setColor={setColor} onSetColor={onSetColor} />
    </>
  )
}

export const ThemeToggle = () => {
  const { setTheme } = useTheme()

  const t = useTranslations('Settings')

  return (
    <Dropdown className="w-fit min-w-fit">
      <DropdownTrigger>
        <Button className="w-fit min-w-fit bg-custom-background-tertiary p-3 hover:bg-custom-background-secondary">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-custom-primary transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-custom-primary transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu closeOnSelect={true}>
        <DropdownItem key="light" onPress={() => setTheme('light')}>
          <div className="text-sm font-medium">{t('light')}</div>
        </DropdownItem>
        <DropdownItem key="dark" onPress={() => setTheme('dark')}>
          <div className="text-sm font-medium">{t('dark')}</div>
        </DropdownItem>
        <DropdownItem key="system" onPress={() => setTheme('system')}>
          <div className="text-sm font-medium">{t('system')}</div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

interface ColorProps {
  color: string
  setColor: (color: string) => void
  onSetColor: (color: string) => void
}

export const ColorToggle = ({ setColor }: ColorProps) => {
  const colors = [
    'blue',
    'royal-blue',
    'green',
    'lima',
    'orange',
    'pink',
    'red',
    'purple',
  ]

  return (
    <Dropdown className="w-fit min-w-fit">
      <DropdownTrigger>
        <Button className="w-fit min-w-fit bg-custom-background-tertiary p-3 hover:bg-custom-background-secondary">
          <div className="flex h-[1.2rem] w-[1.2rem] rotate-0 scale-100 items-center justify-center rounded-full bg-custom-primary text-white transition-all">
            ✔︎
          </div>
          <span className="sr-only">✔︎</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu closeOnSelect={true}>
        {colors.map((i) => (
          <DropdownItem key={i} onPress={() => setColor(i)}>
            <div
              style={{
                backgroundColor: `var(--${i})`,
              }}
              className="h-[1.2rem] w-[1.2rem] rounded-full"
            ></div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

interface LanguageProps {
  onSelectLanguage: (nextLocale: string) => void
  locale: string
  isPending: boolean
}

export const LanguageToggle = ({
  onSelectLanguage,
  locale,
  isPending,
}: LanguageProps) => {
  const t = useTranslations('Settings')

  const languages = [
    { code: 'en', label: t('english'), flag: 'en-flag' },
    { code: 'es', label: t('spanish'), flag: 'mx-flag' },
  ]

  return (
    <Dropdown className="w-fit min-w-fit">
      <DropdownTrigger className={isPending ? 'pointer-events-none' : ''}>
        <Button
          className="w-fit min-w-fit bg-custom-background-tertiary p-2 hover:bg-custom-background-secondary"
          disabled={isPending}
          isIconOnly
        >
          <GetIcon
            name={locale === 'en' ? 'en-flag' : 'mx-flag'}
            className="h-[1.5rem] w-[1.5rem]"
          />
          <span className="sr-only">Select Language</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu closeOnSelect={true}>
        {languages.map((lang) => (
          <DropdownItem
            key={lang.code}
            onPress={() => onSelectLanguage(lang.code)}
          >
            <div className="flex items-center text-sm font-medium">
              <GetIcon
                name={lang.flag}
                className="mr-2 inline-block h-[1.2rem] w-[1.2rem]"
              />
              {lang.label}
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
