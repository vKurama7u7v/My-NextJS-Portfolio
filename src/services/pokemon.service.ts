const pokemon_api = 'https://pokeapi.co/api/v2/pokemon/'

class PokemonService {
  constructor(private api: string) {}

  async findOne(id: number) {
    const res = await fetch(`${this.api}${id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch pokemon details')
    }

    const data = await res.json()

    const pokemonTypes = await Promise.all(
      data.types.map(async (type: { type: { url: string } }) => {
        const response = await fetch(type.type.url)

        if (!response.ok) {
          throw new Error('Type not found')
        }

        const result = await response.json()

        return {
          id: result.id,
          name: result.name,
        }
      })
    )

    return {
      ...data,
      types: pokemonTypes,
    }
  }
}

export const pokemonService = new PokemonService(pokemon_api)
