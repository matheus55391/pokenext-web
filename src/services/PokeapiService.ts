import {
  IGetPokemonByNameRequest,
  IGetPokemonByNameResponse,
} from "@/interfaces/IGetPokemonByNameDTOs";
import {
  IGetPokemonsRequest,
  IGetPokemonsResponse,
  IGetPokemonsResults,
} from "@/interfaces/IGetPokemonsDTOs";
import { IPokemon } from "@/interfaces/IPokemon";
import { PokemonDetail } from "@/interfaces/IPokemonDetail";
import axios from "axios";

class PokeapiService {
  private readonly api = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
  });

  async getPokemonByName({
    name,
  }: IGetPokemonByNameRequest): Promise<IGetPokemonByNameResponse> {
    const url = new URL(this.api.defaults.baseURL + "/pokemon/" + name);
    const response = await this.api.get<PokemonDetail>(url.toString());
    const pokemon = this.formatPokemonResponse(response.data);
    return pokemon;
  }

  async getPokemons({
    offset = 0,
    limit = 20,
  }: IGetPokemonsRequest): Promise<IGetPokemonsResults[]> {
    const url = new URL(this.api.defaults.baseURL + "/pokemon");

    url.searchParams.append("offset", offset.toString());
    url.searchParams.append("limit", limit.toString());
    const response = await this.api.get<IGetPokemonsResponse>(url.toString());
    return response.data.results;
  }

  private formatPokemonResponse(
    response: PokemonDetail
  ): IPokemon {
    const sprites = [
      response.sprites.front_default,
      response.sprites.back_default,
      response.sprites.front_shiny,
      response.sprites.back_shiny,
    ].filter((sprite) => sprite !== null); 

    const types = response.types.map((type) => type.type.name);
    const pokemon: IPokemon = {
      id: response.id,
      name: response.name,
      sprites: sprites,
      types: types,
      weight: response.weight,
    };

    return pokemon;
  }
}

export const pokeapiService = new PokeapiService();
