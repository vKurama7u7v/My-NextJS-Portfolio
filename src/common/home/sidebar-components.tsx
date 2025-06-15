'use client'
import { GetBrand, GetIcon } from '@/common/components'
import { IStackSkillsFields } from '@/contentful/@types/contentful'
import { CircularProgress, Progress, Tooltip } from '@heroui/react'

export const InfoCompontent = ({
  label,
  text,
}: {
  label: string
  text: string
}) => {
  return (
    <div className="w-full flex justify-between text-xs">
      <span className="text-custom-text-body font-semibold">
        {label || 'Label'}
      </span>
      <span className="text-custom-text-light font-normal capitalize">
        {text || 'Text'}
      </span>
    </div>
  )
}

export const BadgeComponent = ({
skill,
  className,
}: {
  skill: IStackSkillsFields
  className?: string
}) => {

  if (!skill || skill.component !== 'badge') {
    return null
  }

  return (
    <Tooltip
      content={
        <div className="max-w-32 text-custom-text-light px-1 py-2 text-xs text-center">
          {skill.description}
        </div>
      }
      showArrow={true}
    >
      <div className="border-custom-border-color w-fit h-6 overflow-hidden flex items-center rounded border cursor-pointer">
        <div className="bg-custom-border-color min-w-6 w-6 h-6 flex justify-center items-center">
          <GetBrand name={skill.icon} className={className} />
        </div>
        <span className="text-custom-text-light px-1 text-xs font-semibold">
          {skill.name}
        </span>
      </div>
    </Tooltip>
  )
}

export const ProgressComponent = ({
  skill,
  className,
}: {
  skill: IStackSkillsFields
  className?: string
}) => {

  if (!skill || skill.component !== 'progress bar') {
    return null
  }

  const normalizedValue = Math.min(Math.max(Number(skill.percentage), 0), 100)

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="align-end w-full flex justify-between">
        <h3 className="text-custom-text-body text-xs font-medium tracking-wide">
          {skill.name}
        </h3>
        <span className="text-custom-text-light text-xs font-normal">
          {normalizedValue}%
        </span>
      </div>
      <Progress
        value={normalizedValue}
        aria-label={`${skill.name} skill level: ${normalizedValue}%`}
        className={`${className} h-1`}
        classNames={{
          indicator: 'bg-custom-primary',
        }}
      />
    </div>
  )
}

export const CircularProgressComponent = ({
  skill,
  className,
}: {
  skill: IStackSkillsFields
  className?: string
}) => {

  if (!skill || skill.component !== 'circular bar') {
    return null
  }

  return (
    <Tooltip
      content={
        <div className="max-w-32 text-custom-text-light px-1 py-2 text-xs text-center">
          {skill.description}
        </div>
      }
      showArrow={true}
    >
      <div className="text-custom-text-light w-full flex flex-col gap-1 cursor-pointer hover:text-custom-text-body">
        <div className="relative">
          <CircularProgress
            value={skill.percentage}
            aria-label={skill.name}
            strokeWidth={2.5}
            className="w-full max-w-full relative"
            classNames={{
              svg: 'text-custom-primary h-16 w-16',
            }}
          />
          <GetIcon
            name={skill.icon}
            className="-translate-x-1/2 -translate-y-1/2 transform w-6 h-6 absolute top-1/2 left-1/2"
          />
        </div>
        <h3 className="text-xs font-medium text-center capitalize">
          {skill.name.replace('-', ' ')}
        </h3>
      </div>
    </Tooltip>
  )
}
