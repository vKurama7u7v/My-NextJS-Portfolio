'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Routes } from '../config'
import { Button } from '@heroui/react'
import { MenuIcon, PlusIcon } from './icons'
import { PreferencesButton } from './preferences-toggle'
import { usePathname } from 'next/navigation'

export const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const pathname = usePathname()

  return (
    <aside
      className={`min-h-[calc(100dvh-6rem)] bg-custom-background-secondary duration-500 ${isOpen ? 'w-[230px]' : 'w-[80px]'} flex flex-col justify-between gap-4`}
    >
      <div
        className={`flex h-[80px] w-full items-center bg-custom-background-tertiary p-3 shadow-sm ${isOpen ? 'justify-start' : 'justify-center'}`}
      >
        <Button
          isIconOnly
          aria-label={isOpen ? 'Close' : 'Open Menu'}
          className="bg-transparent text-custom-text-light hover:text-custom-primary"
          onPress={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <PlusIcon className="h-6 w-6 rotate-45" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </Button>
      </div>
      <nav className="relative flex flex-col gap-4 px-4">
        {Routes?.map((menu, i) => (
          <Button
            as={Link}
            href={menu.link || '#'}
            key={i}
            className={`group flex min-w-fit items-center gap-0 rounded-md bg-transparent px-0 text-sm font-medium text-custom-text-light hover:bg-custom-background-tertiary hover:text-custom-primary ${isOpen ? 'justify-start px-2' : 'justify-center'} ${pathname === menu.link ? 'bg-custom-background-tertiary text-custom-primary' : ''}`}
          >
            <div className="">
              <menu.Icon className="h-5 w-5 duration-500" />
            </div>
            <div
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre font-font-heading text-xs font-semibold uppercase tracking-wide duration-500 ${
                isOpen
                  ? 'ml-3.5 w-auto translate-x-0 opacity-100'
                  : 'w-0 translate-x-28 overflow-hidden opacity-0'
              }`}
            >
              {menu.name}
            </div>
          </Button>
        ))}
      </nav>
      <div
        className={`flex w-full flex-col gap-2 bg-custom-background-tertiary p-3 shadow-sm ${isOpen ? 'items-start' : 'items-center'}`}
      >
        <PreferencesButton />
        <Button
          isIconOnly
          className={`h-8 w-8 min-w-8 bg-background text-[10px] text-custom-text-light hover:bg-custom-primary`}
          radius="full"
        >
          EN
        </Button>
        <Button
          isIconOnly
          className={`h-8 w-8 min-w-8 bg-custom-primary text-[10px] font-bold text-white`}
          radius="full"
        >
          ES
        </Button>
      </div>
    </aside>
  )
}
