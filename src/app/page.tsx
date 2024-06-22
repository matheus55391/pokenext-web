"use client";
import Header from "@/components/Header";
import PokemonListSection from "@/components/PokemonListSection";
import SearchSection from "@/components/SearchSection";
import { IGetPokemonsResults } from "@/interfaces/IGetPokemonsDTOs";
import { pokeapiService } from "@/services/PokeapiService";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type SearchSectionForm = {
  pokemonName: string;
};

const Home: React.FC = () => {
  const getPokemons = async () => {
    return await pokeapiService.getPokemons({ offset: 0, limit: 1302 });
  };

  const methods = useForm<SearchSectionForm>({
    defaultValues: {
      pokemonName: "",
    },
  });

  const {
    data: pokemons,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getPokemons"],
    queryFn: getPokemons,
    staleTime: 1000 * 60 * 60 * 2,
  });

  const [filteredPokemons, setFilteredPokemons] = useState<
    IGetPokemonsResults[]
  >([]);

  const watchPokemonName = methods.watch("pokemonName");

  useEffect(() => {
    if (pokemons) {
      const filtered = pokemons.filter((pokemon: IGetPokemonsResults) => {
        return pokemon.name
          .toLowerCase()
          .includes(watchPokemonName.toLowerCase());
      });
      setFilteredPokemons(filtered);
    }
  }, [pokemons, watchPokemonName]);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        <SearchSection methods={methods} />
        <PokemonListSection
          pokemons={filteredPokemons}
          isLoading={isLoading}
          error={!!error}
        />
      </main>
    </main>
  );
};

export default Home;
