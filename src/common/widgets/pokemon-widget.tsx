'use client'
import React, { useState, useEffect } from 'react'
import { pokemonService } from '@/services/pokemon.service'
import { paletteExtractor } from '@/utils/extract-colors'
import { Button, Card, Image } from '@heroui/react'
import { GetIcon } from '../components'
import { cn } from '@/lib/utils'

export const PokemonWidget = () => {
  const ids = [6, 25, 94, 129, 130, 143, 150, 197, 282, 384, 448]
  // 649 is the ID for Genesect, you can change it to any Pokémon ID you want to test
  // get a random Pokémon ID from 1 to 629
  const [id, setId] = useState<number>(94)
  const [pokemon, setPokemon] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [palette, setPalette] = useState<string[]>([])

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await pokemonService.findOne(id)
      setPokemon(data)
      setIsLoading(false)
    }
    fetchPokemon()
  }, [id])

  useEffect(() => {
    const getPalette = async () => {
      if (pokemon) {
        const colors = await paletteExtractor.extractColors(
          pokemon.sprites.front_default
        )
        const contrastColor = paletteExtractor.getContrastColor(colors)
        setPalette([...colors, contrastColor])
      }
    }
    getPalette()
  }, [pokemon])

  const onChangePokemon = () => {
    setIsLoading(true)
    const currentIndex = ids.indexOf(id)
    const nextIndex = (currentIndex + 1) % ids.length
    setTimeout(() => {
      setId(ids[nextIndex])
    }, 1000)
  }

  if (!pokemon || !palette.length) {
    return <div>Loading...</div>
  }

  console.log({
    id: pokemon.id,
    name: pokemon.name,
    sprites: pokemon.sprites.other['official-artwork'],
    animated:
      pokemon.sprites.versions['generation-v']['black-white'].animated
        .front_default,
    types: pokemon.types,
    stats: pokemon.stats,
  })
  console.log('Extracted colors:', palette)

  return (
    <>
      <Card
        className="relative h-full w-full overflow-hidden rounded-none p-4"
        style={{
          backgroundColor: palette[0],
          color: palette[palette.length - 1],
        }}
      >
        <div className="relative z-[1] flex h-full w-full flex-col items-center justify-between">
          <div className="flex w-full items-start justify-between">
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-bold capitalize leading-none">
                {pokemon.name}
              </h4>
              <div className="flex w-fit flex-wrap gap-1 pt-2">
                {pokemon.types.map((type: any, index: number) => (
                  <Image
                    key={index}
                    src={`https://github.com/PokeAPI/sprites/blob/master/sprites/types/generation-viii/sword-shield/${type.id}.png?raw=true`}
                    alt={type.name}
                    className="h-3.5 w-fit rounded-none"
                  />
                ))}
              </div>
            </div>
            <span className="flex gap-1 text-sm font-extrabold opacity-60">
              #
              {(pokemon.id < 10 && `00${pokemon.id}`) ||
                (pokemon.id < 100 && `0${pokemon.id}`) ||
                pokemon.id}{' '}
              <GetIcon name="pokemon" className="h-5 w-5" />
            </span>
          </div>
          <div className="flex h-full w-full justify-between">
            <Image
              src={
                pokemon.sprites.versions['generation-v']['black-white'].animated
                  .front_default
              }
              alt={pokemon.name}
              classNames={{
                wrapper:
                  'w-full h-full absolute bottom-0 right-0 object-contain before!:bg-transparent after:!bg-transparent !bg-transparent translate-x-[10px] translate-y-[10px]',
                img: '!bg-transparent',
                blurredImg: '!bg-transparent',
              }}
              className={cn(
                'h-full w-full !bg-transparent object-contain',
                id === 282 && 'translate-y-[10px] scale-95'
              )}
              loading="lazy"
            />
            <div className="flex h-full w-fit flex-col justify-end">
              <Button
                isLoading={isLoading}
                onPress={onChangePokemon}
                size="sm"
                isIconOnly
                color="secondary"
                aria-label="Change Pokémon"
                spinner={
                  <GetIcon name="pokemon" className="h-5 w-5 animate-spin" />
                }
                style={{
                  backgroundColor: palette[2],
                }}
              >
                <GetIcon name="random" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <GetIcon
          name="pokemon"
          className="absolute bottom-0 right-0 z-0 h-[210px] w-[210px] translate-x-1/4 translate-y-1/4 opacity-15"
        />
      </Card>
    </>
  )
}
