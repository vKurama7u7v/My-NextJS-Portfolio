'use client'
import { Button, Card, CardBody, cn, Image, Slider } from '@heroui/react'
import { songs } from './dummy-data'
import { GetIcon } from '../components'
import { useEffect, useRef, useState } from 'react'

export const MusicPlayerWidget = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [expanded, setExpanded] = useState<boolean>(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load()
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false))
      }
    }
  }, [currentSongIndex])

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause()
    }
  }, [isPlaying])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev < songs.length - 1 ? prev + 1 : 0))
    setProgress(0)
  }

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => (prev > 0 ? prev - 1 : songs.length - 1))
    setProgress(0)
  }

  const handleEnded = () => {
    if (currentSongIndex < songs.length - 1) {
      handleNext()
      setIsPlaying(true)
    } else {
      setCurrentSongIndex(0)
      setIsPlaying(false)
    }
  }

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const audio = e.currentTarget
    const progress = (audio.currentTime / audio.duration) * 100 || 0
    setProgress(progress)
  }

  const handleSeek = (value: number | number[]) => {
    if (audioRef.current) {
      const seekTime =
        ((typeof value === 'number' ? value : value[0]) *
          audioRef.current.duration) /
        100
      audioRef.current.currentTime = seekTime
    }
  }
  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col items-center overflow-hidden transition-transform duration-300 ease-in',
        expanded ? 'justify-center p-4' : 'justify-end p-2'
      )}
    >
      <div
        className={`absolute bottom-0 left-0 right-0 top-0 z-[1] h-full w-full before:absolute before:inset-0 before:bg-custom-text-body before:opacity-40 dark:before:bg-background`}
      >
        {songs[currentSongIndex].canvas && (
          <video
            className="h-full w-full object-cover"
            src={songs[currentSongIndex].canvas}
            autoPlay
            muted
            loop
            playsInline
          ></video>
        )}
        {songs[currentSongIndex].canvas ||
          (songs[currentSongIndex].image && (
            <Image
              alt={songs[currentSongIndex].name || 'Album cover'}
              classNames={{
                wrapper:
                  'absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover object-center bg-background rounded-none',
              }}
              className="h-full w-full rounded-none object-cover !opacity-80 transition-all duration-300 dark:!opacity-40"
              isBlurred={true}
              shadow="md"
              src={songs[currentSongIndex].image}
              loading="lazy"
            />
          ))}
      </div>

      <Card
        isBlurred
        className="relative z-[3] w-full max-w-[610px] border-none bg-[#212121]/30 dark:bg-default-100/50"
        shadow="sm"
      >
        <CardBody>
          <div
            className={cn(
              'w-full',
              expanded
                ? 'flex flex-col items-center justify-center'
                : 'flex items-center justify-between gap-3'
            )}
          >
            <div className={cn('relative', expanded ? 'mb-2' : '')}>
              <Button
                isIconOnly
                variant="light"
                className="absolute left-0 top-0 z-[2] cursor-none !p-1"
                size="sm"
                onPress={() => setExpanded(!expanded)}
              >
                <GetIcon
                  name="chevron-up"
                  className={cn(
                    'h-4 w-4 text-white',
                    expanded ? 'rotate-180' : ''
                  )}
                />
              </Button>
              <Image
                alt={songs[currentSongIndex].name || 'Album cover'}
                className={cn(
                  'relative z-[1] rounded-md object-cover transition-all duration-300',
                  expanded ? 'h-full w-full' : 'min-h-[50px] min-w-[50px]'
                )}
                height={expanded ? 200 : 50}
                shadow="md"
                src={songs[currentSongIndex].image}
                width={expanded ? '100%' : 50}
                loading="eager"
              />
            </div>
            <div
              className={cn(
                'flex w-full flex-col justify-center gap-[2px]',
                expanded ? 'items-center' : 'items-start'
              )}
            >
              <h3 className="m-0 line-clamp-1 text-sm font-semibold text-white">
                {songs[currentSongIndex].name}
              </h3>
              <h1 className="mt-0 line-clamp-1 text-xs font-medium text-white">
                {songs[currentSongIndex].artist}
              </h1>
            </div>
          </div>
          <div className="mt-2 flex w-full items-center justify-center">
            <Button
              isIconOnly
              className="cursor-none data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
              size="sm"
              onPress={handlePrevious}
            >
              <GetIcon name="previous" className="h-5 w-5 text-white" />
            </Button>
            <Button
              isIconOnly
              className="cursor-none data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
              size="sm"
              onPress={handlePlayPause}
            >
              <GetIcon
                name={isPlaying ? 'pause' : 'play'}
                className="h-8 w-8 text-white"
              />
            </Button>
            <Button
              isIconOnly
              className="cursor-none data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
              size="sm"
              onPress={handleNext}
            >
              <GetIcon name="next" className="h-5 w-5 text-white" />
            </Button>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: 'bg-default-500/30 pointer-events-none',
                  thumb:
                    'h-2 w-2 after:h-2 after:w-2 after:bg-white !-translate-x-[100%] !-translate-y-[50%]',
                }}
                color="foreground"
                value={progress}
                onChange={handleSeek}
                size="sm"
              />
            </div>
            <audio
              id="music-player-widget"
              className="w-full"
              ref={audioRef}
              onEnded={handleEnded}
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={songs[currentSongIndex].audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
