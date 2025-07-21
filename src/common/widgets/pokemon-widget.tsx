'use client'
import React, { useState, useEffect } from 'react'
import { pokemonService } from '@/services/pokemon.service'
import { paletteExtractor } from '@/utils/extract-colors'
import { Image } from '@heroui/react'

const PokemonWidget = () => {
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

  if (!pokemon || !palette.length) {
    return <div>Loading...</div>
  }

  console.log('Pokemon data:', pokemon)
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
    <div>
      {palette.map((color, index) => (
        <div
          key={index}
          style={{ backgroundColor: color, width: '100px', height: '100px' }}
        ></div>
      ))}

      <Image
        src={
          pokemon.sprites.versions['generation-v']['black-white'].animated
            .front_default
        }
        alt={pokemon.name}
        width={180}
        height={180}
        className="rounded-lg object-contain"
      />
    </div>
  )
}

export default PokemonWidget
