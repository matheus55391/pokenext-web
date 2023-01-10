export const getPokemons = async (offset = 0, limit = 20) =>{
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
	const data = await response.json();
	return data;
};

export const getPokemon = async (name: string) =>{
	const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
};
