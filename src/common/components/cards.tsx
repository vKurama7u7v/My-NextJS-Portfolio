'use client'

import { cn } from '@/lib/utils'
import { Card, CardBody, Link } from '@heroui/react'

interface ServicesCardProps {
  title?: string
  description?: string
}

export const ServicesCard = ({ title, description }: ServicesCardProps) => {
  return (
    <Card className="rounded-md bg-custom-background-secondary p-4 shadow-md">
      <CardBody className="flex flex-col gap-4">
        <h3 className="text-sm font-bold text-custom-text-heading md:text-base">
          {title || 'Title'}
        </h3>
        <p className="text-xs font-medium leading-5 text-custom-text-light sm:text-sm sm:leading-6">
          {description || 'Description'}
        </p>
        <Link href="#" className="text-xs uppercase text-custom-primary">
          Ver Más
        </Link>
      </CardBody>
    </Card>
  )
}

interface BaseCardProps {
  children: React.ReactNode
  classNames: {
    card?: string
    cardBody?: string
  }
}

export const BaseCard = ({ children, classNames }: BaseCardProps) => {
  return (
    <Card className={cn('shadow-md', classNames.card)}>
      <CardBody className={classNames.cardBody}>{children}</CardBody>
    </Card>
  )
}
