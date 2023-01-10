import { IPokemon } from '../@Types/Pokemon';
import { getPokemon } from '../services/pokeapi';

export const pokemonFilter = async (name: string) : Promise<IPokemon> =>	{

	const pokemonData = await getPokemon(name);

	const typesList : string[] = [];

	pokemonData.types.map((data : { type: { name: string}})=>{
		typesList.push(data.type.name);

	});

	const pokemon : IPokemon = {
		id: pokemonData.id,
		name: pokemonData.name,
		image: pokemonData.sprites.versions['generation-v']['black-white'].animated['front_default'],
		types: typesList
	};

	return pokemon;

};