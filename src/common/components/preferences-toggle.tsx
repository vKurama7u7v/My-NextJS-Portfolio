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

export const PreferencesButton = () => {
  const [color, setColor] = useState<string>('blue')

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
    }

    console.log(document.documentElement.classList)
  }

  return (
    <Dropdown className="w-fit min-w-fit">
      <DropdownTrigger>
        <Button
          isIconOnly
          className="h-8 w-8 min-w-8 bg-background text-[10px] text-custom-text-light hover:text-custom-primary"
          radius="full"
        >
          <SettingsIcon className="h-4 w-4" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu closeOnSelect={false}>
        {/* <DropdownItem key={"Theme Settings"}><ModeToggle /></DropdownItem> */}
        <DropdownItem
          className="bg-transparent hover:bg-transparent data-[hover=true]:bg-transparent"
          key={'Theme Settings'}
        >
          <ThemeToggle />
        </DropdownItem>
        <DropdownItem
          className="bg-transparent hover:bg-transparent data-[hover=true]:bg-transparent"
          key={'Color Settings'}
        >
          <ColorToggle
            color={color}
            setColor={setColor}
            onSetColor={onSetColor}
          />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export const ThemeToggle = () => {
  const { setTheme } = useTheme()

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
          Light
        </DropdownItem>
        <DropdownItem key="dark" onPress={() => setTheme('dark')}>
          Dark
        </DropdownItem>
        <DropdownItem key="system" onPress={() => setTheme('system')}>
          System
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
          <div className="flex h-[1.2rem] w-[1.2rem] rotate-0 scale-100 items-center justify-center rounded-full bg-custom-primary text-custom-text-body transition-all">
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
