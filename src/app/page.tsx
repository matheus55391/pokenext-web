'use client';
import Header from '@/components/Header';
import PokemonListSection from '@/components/PokemonListSection';
import SearchSection from '@/components/SearchSection';
import { pokeapiService } from '@/services/PokeapiService';
import { useQuery } from '@tanstack/react-query';

const Home: React.FC = () => {
  const getPokemons = async () => {
    return await pokeapiService.getPokemons({ offset: 0, limit: 20 });
  }
  const { data: pokemons, isLoading, error } = useQuery({
    queryKey: ['getPokemons'],
    queryFn: getPokemons,
  });
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        <SearchSection />
        <PokemonListSection pokemons={pokemons} isLoading={isLoading} error={!!error} />
      </main>
    </main>
  );
};

export default Home;
