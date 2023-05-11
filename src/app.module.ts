import { Module } from '@nestjs/common';
import { PokemonModule } from './modules/pokemon.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, PokemonModule],
})
export class AppModule {}
