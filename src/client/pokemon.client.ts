import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import urls from 'src/config/urls';

@Injectable()
export class PokemonClientApi {
  constructor(private readonly httpService: HttpService) {}
  async searchPokemonByName(name: string) {
    return lastValueFrom(
      this.httpService
        .get(`${urls.pokemonUrl}/${name}`)
        .pipe(map((response) => response.data)),
    );
  }
}
