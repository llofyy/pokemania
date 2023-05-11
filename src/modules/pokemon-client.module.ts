import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PokemonClientApi } from 'src/client/pokemon.client';

@Module({
  imports: [HttpModule],
  providers: [PokemonClientApi],
})
export class PokemonClienApiModule {}
