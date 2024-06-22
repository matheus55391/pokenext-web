"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaMagnifyingGlass } from "react-icons/fa6";

type SearchSectionForm = {
  pokemonName: string;
};

const SearchSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SearchSectionForm>({
    defaultValues: {
      pokemonName: "",
    },
  });
  const onSubmit: SubmitHandler<SearchSectionForm> = (data) => {
    console.log(data);
  };

  return (
    <section className="flex flex-col md:flex-row flex-1">
      <div className="flex flex-col w-full items-center space-y-2">
        <div className="flex flex-row w-6/12 bg-gray-100 space-x-4 items-center p-4">
          <FaMagnifyingGlass size={24} color="purple" />
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <input
              type="text"
              className="w-full p-2 bg-transparent text-black"
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
