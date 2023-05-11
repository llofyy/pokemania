import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from 'src/services/pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}
  @Get(':pokemon')
  async searchPokemon(@Param() params: any) {
    return this.pokemonService.searchPokemon(params.pokemon);
  }
}
