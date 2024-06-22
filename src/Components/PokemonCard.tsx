import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { IGetPokemonByNameResponse } from '@/interfaces/IGetPokemonByNameDTOs';
import { pokeapiService } from '@/Services/PokeapiService';
import { PokemonTypeColorGenerator } from '@/utils/pokemonTypeColorGenerator';

interface PokemonCardProps {
  name: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name }) => {
  const { data: pokemon, isLoading, error } = useQuery<IGetPokemonByNameResponse>({
    queryKey: ['pokemonByName', name],
    queryFn: () => pokeapiService.getPokemonByName({ name }),
  });
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading pokemon</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <div className="flex items-center mb-2">
        <img src={pokemon?.sprites[0]} alt={pokemon?.name} className="w-44 h-44 mr-2" />
      </div>
        <span className="text-gray-500 font-medium">Nº {pokemon?.id}</span>
        <p className="font-bold text-3xl">{pokemon?.name && pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}</p>

      <div className="flex flex-wrap gap-2 mt-2">
        {pokemon?.types.map((type, index) => (
          <div
            key={index}
            className="px-2 py-1 rounded text-white w-20 text-center font-medium"
            style={{ backgroundColor: PokemonTypeColorGenerator(type) }}
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
