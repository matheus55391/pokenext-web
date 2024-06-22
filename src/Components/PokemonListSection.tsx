import React from 'react';
import { IGetPokemonsResults } from '@/interfaces/IGetPokemonsDTOs';
import PokemonCard from './PokemonCard';

interface PokemonListSectionProps {
  pokemons?: IGetPokemonsResults[];
  isLoading: boolean;
  error: boolean;
}

const PokemonListSection: React.FC<PokemonListSectionProps> = ({ pokemons, isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading pokemons</div>;
  }

  return (
    <section className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </section>
  );
};

export default PokemonListSection;
