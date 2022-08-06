import { IPokemon } from '../@Types/Pokemon';

export const pokemonFilter = async (url: string) : Promise<IPokemon> =>	{

	const response = await fetch(url);
	const pokemonData = await response.json();

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