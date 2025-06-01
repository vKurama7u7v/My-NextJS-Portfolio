import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from '@/components/ui/timeline'

export const TimelineComponent = ({
  defaultValue,
  orientation,
  children,
}: {
  defaultValue: number
  orientation: 'horizontal' | 'vertical'
  children: React.ReactNode
}) => {
  return (
    <Timeline defaultValue={defaultValue} orientation={orientation}>
      {children}
    </Timeline>
  )
}

export const TimelineItemComponent = ({
  step,
  children,
}: {
  step: number
  children: React.ReactNode
}) => {
  return (
    <TimelineItem step={step}>
      <TimelineHeader>
        <TimelineSeparator className="!h-full" />
        <TimelineIndicator className="border-custom-primary bg-background" />
      </TimelineHeader>
      <TimelineContent>
        <div className="-mt-2 mb-6 rounded-md bg-custom-background-secondary p-6 md:mb-10">
          {children}
        </div>
      </TimelineContent>
    </TimelineItem>
  )
}
