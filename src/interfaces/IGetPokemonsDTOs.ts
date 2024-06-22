export interface IGetPokemonsRequest {
  offset: number;
  limit: number;
}
export interface IGetPokemonsResults {
  name: string;
  url: string;
}
export interface IGetPokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IGetPokemonsResults[];
}
