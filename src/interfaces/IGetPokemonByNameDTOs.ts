import { IPokemon } from "./IPokemon";

export interface IGetPokemonByNameRequest {
  name: string;
}

export interface IGetPokemonByNameResponse extends IPokemon {
}
