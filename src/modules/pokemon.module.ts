import { Module } from '@nestjs/common';
import { PokemonController } from 'src/controllers/pokemon.controller';
import { PokemonService } from 'src/services/pokemon.service';
import { PokemonClientApi } from 'src/client/pokemon.client';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PokemonController],
  providers: [PokemonService, PokemonClientApi],
})
export class PokemonModule {}
