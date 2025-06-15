import { useTranslations } from 'next-intl'
import { SectionLayout } from '../layouts'
import { BaseCard } from '../components'
import { BubbleBackground } from '@/components/animate-ui/backgrounds/bubble'
import { ChessWidget } from '../widgets'
import { TypingText } from '@/components/animate-ui/text/typing'

interface HeaderProps {
  titles?: string | string[]
  description?: string
}

export const Header = ({ titles, description }: HeaderProps) => {
  const t = useTranslations('Home')

  return (
    <SectionLayout className="w-full">
      <BaseCard
        classNames={{
          card: 'bg-custom-background-secondary p-0 rounded-md mb-6 md:mb-10',
          cardBody: 'relative h-auto w-full overflow-hidden p-0',
        }}
      >
        <BubbleBackground
          interactive={true}
          className="absolute left-0 top-0 z-[1] h-full w-full bg-opacity-0 opacity-60"
        ></BubbleBackground>
        <BaseCard
          isBlurred={true}
          classNames={{
            card: 'p-0 rounded-none h-full w-full relative z-[2] pointer-events-none',
            cardBody: 'h-full w-full relative overflow-hidden p-0',
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 z-[1] flex translate-x-[35%] items-center justify-center opacity-25 md:opacity-100">
            <ChessWidget />
          </div>
          <BaseCard
            isBlurred={true}
            classNames={{
              card: 'pointer-events-auto relative z-[2] h-full w-full bg-transparent p-6',
              cardBody:
                'flex items-start justify-center w-full lg:w-2/3 h-full gap-4',
            }}
          >
            <h1 className="font-outfit text-3xl font-black leading-[130%] text-custom-text-heading md:text-[2.5em] md:leading-[110%] lg:text-[3em] lg:leading-[100%] xl:text-[4em]">
              {t('welcome')}
            </h1>

            {titles && (
              <code className="text-base md:text-lg">
                <span className="font-semibold text-custom-primary">
                  {'<code> '}
                </span>
                <TypingText
                  duration={50}
                  loop={true}
                  cursor={true}
                  holdDelay={2000}
                  className="font-bold text-custom-text-heading"
                  text={titles}
                />
                <span className="font-semibold text-custom-primary">
                  {' </code>'}
                </span>
              </code>
            )}

            <p className="text-sm leading-6 text-custom-text-body md:text-base">
              {description || ''}
            </p>
          </BaseCard>
        </BaseCard>
      </BaseCard>
    </SectionLayout>
  )
}
