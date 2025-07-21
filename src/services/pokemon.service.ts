
const pokemon_api = 'https://pokeapi.co/api/v2/pokemon/';

class PokemonService {
  constructor(private api: string) {}

  async findOne(id: number) {
    const res = await fetch(`${this.api}${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch pokemon details');
    }
    return res.json();
  }
}

export const pokemonService = new PokemonService(pokemon_api);