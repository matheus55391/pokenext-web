import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { FaMagnifyingGlass } from "react-icons/fa6";

type SearchSectionForm = {
  pokemonName: string;
};

interface SearchSectionProps {
  methods: UseFormReturn<SearchSectionForm>;
}

const SearchSection: React.FC<SearchSectionProps> = ({ methods }) => {
  const { register, handleSubmit } = methods;

  const onSubmit: SubmitHandler<SearchSectionForm> = (data) => {
    console.log(data);
  };

  return (
    <section className="flex flex-col md:flex-row flex-1">
      <div className="flex flex-col w-full items-center space-y-2 bg-rose-500">
        <div className="flex flex-row w-full container space-x-4 items-center p-2 border-b-2 mb-4">
          <FaMagnifyingGlass size={24} color="white" />
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <input
              type="text"
              className="w-full p-2 bg-transparent text-white placeholder:text-slate-100 placeholder:opacity-80"
              placeholder="Search for a Pokémon by name..."
              {...register("pokemonName")}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
