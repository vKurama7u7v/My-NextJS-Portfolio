'use client'
import { GetBrand, GetIcon } from '@/common/components'
import { CircularProgress, Progress, Tooltip } from '@heroui/react'

export const InfoCompontent = ({
  label,
  text,
}: {
  label: string
  text: string
}) => {
  return (
    <div className="flex w-full justify-between text-xs">
      <span className="font-semibold text-custom-text-body">
        {label || 'Label'}
      </span>
      <span className="font-normal text-custom-text-light">
        {text || 'Text'}
      </span>
    </div>
  )
}

export const BadgeComponent = ({
  name,
  search,
  text,
  className,
}: {
  name: string
  search: string
  text: string
  className?: string
}) => {
  return (
    <Tooltip
      content={
        <div className="max-w-32 px-1 py-2 text-center text-xs text-custom-text-light">
          {text}
        </div>
      }
      showArrow={true}
    >
      <div className="flex h-6 w-fit cursor-pointer items-center overflow-hidden rounded border border-custom-border-color">
        <div className="flex h-6 w-6 min-w-6 items-center justify-center bg-custom-border-color">
          <GetBrand name={search} className={className} />
        </div>
        <span className="px-1 text-xs font-semibold text-custom-text-light">
          {name}
        </span>
      </div>
    </Tooltip>
  )
}

export const ProgressComponent = ({
  name,
  value,
  className,
}: {
  name: string
  value: number
  className?: string
}) => {
  const normalizedValue = Math.min(Math.max(value, 0), 100)

  return (
    <div className="flex w-full flex-col gap-1">
      <div className="align-end flex w-full justify-between">
        <h3 className="text-xs font-medium tracking-wide text-custom-text-body">
          {name}
        </h3>
        <span className="text-xs font-normal text-custom-text-light">
          {normalizedValue}%
        </span>
      </div>
      <Progress
        value={normalizedValue}
        aria-label={`${name} skill level: ${normalizedValue}%`}
        className={`${className} h-1`}
        classNames={{
          indicator: 'bg-custom-primary',
        }}
      />
    </div>
  )
}

export const CircularProgressComponent = ({
  name,
  value,
  text,
  search,
  className,
}: {
  name: string
  value: number
  text: string
  search: string
  className?: string
}) => {
  return (
    <Tooltip
      content={
        <div className="max-w-32 px-1 py-2 text-center text-xs text-custom-text-light">
          {text}
        </div>
      }
      showArrow={true}
    >
      <div className="flex w-full cursor-pointer flex-col gap-1 text-custom-text-light hover:text-custom-text-body">
        <div className="relative">
          <CircularProgress
            value={value}
            aria-label={name}
            strokeWidth={2.5}
            className="relative w-full max-w-full"
            classNames={{
              svg: 'text-custom-primary h-16 w-16',
            }}
          />
          <GetIcon
            name={search}
            className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform"
          />
        </div>
        <h3 className="text-center text-xs font-medium capitalize">
          {name.replace('-', ' ')}
        </h3>
      </div>
    </Tooltip>
  )
}
