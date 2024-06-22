import { useQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import SearchSection from '@/components/SearchSection';
import { pokeapiService } from '@/Services/PokeapiService';
import PokemonListSection from '@/components/PokemonListSection';

const Home: React.FC = () => {
  const getPokemons = async () => {
    return await pokeapiService.getPokemons({ offset: 0, limit: 20 });
  }
  const { data: pokemons, isLoading, error } = useQuery({
    queryKey: ['getPokemons'],
    queryFn: getPokemons,
  });
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SearchSection />
        <PokemonListSection pokemons={pokemons} isLoading={isLoading} error={!!error} />
      </main>
    </main>
  );
};

export default Home;
