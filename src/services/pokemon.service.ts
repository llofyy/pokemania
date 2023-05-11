import { Injectable } from '@nestjs/common';
import { PokemonDto } from './dto/pokemon.dto';
import { PokemonClientApi } from 'src/client/pokemon.client';

@Injectable()
export class PokemonService {
  constructor(private readonly pokemonClientApi: PokemonClientApi) {}

  buildPokemonResponse(pokemon) {
    const { name, sprites } = pokemon;

    return {
      name,
      image: sprites.front_default,
    };
  }

  async searchPokemon(name: string): Promise<PokemonDto> {
    const pokemon = await this.pokemonClientApi.searchPokemonByName(
      name.toLowerCase(),
    );

    return this.buildPokemonResponse(pokemon);
  }
}
