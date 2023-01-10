import { Box, Grid, Typography } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { IPokemon } from '../@Types/Pokemon';
import { PokemonCard } from '../Components/PokemonCard';
import { getPokemons } from '../services/pokeapi';
import { Main } from '../styles/indexStyle';
import { pokemonFilter } from '../utils/pokemonFilter';

type Props = {

  pokemons: IPokemon[],
  next?: string,
  previous?: string,
}

export const getStaticProps : GetStaticProps = async () => {
	const pokemons: IPokemon[] = [];
	try{
		const response = await getPokemons();
	
		for (const poke of response.results) {
			
			const newPokemon : IPokemon = await pokemonFilter(poke.name);
			pokemons.push(newPokemon);
		}
	} catch(e){
		console.log(e);
	}

	return {
		props: {
			pokemons
		}
	};

};

const Home: NextPage<Props> = (props : Props) => {
	const [pokemons, setPokemons] = useState<IPokemon[]>(props.pokemons);
	const {ref, inView } =  useInView();
	const [offset, setOffset ] = useState(20);
	const [ loading, setLoading ] = useState(true);

	const updatePokemonList = async () => {
		setLoading(true);
		const pk: IPokemon[] = [];
		const response = await getPokemons(offset);
		for (const poke of response.results) {
	
			const newPokemon : IPokemon = await pokemonFilter(poke.url);
			pk.push(newPokemon);

		}
		setPokemons([...pokemons, ...pk]);
		setOffset( offset + 20);
		setLoading(false);
	};
	useEffect(()=>{
		if(inView){

			updatePokemonList();
		}
	},[inView]);
	return (
		<Box>
			<Head>
				<title>Pokenext - ft: Matheus Felipe Vieira Santiago</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Main bgcolor={'#f3f3f3'}  >
				<Box margin={2}  >
					<Typography variant="h4" fontWeight="bold"> POKENEXT </Typography>
				</Box>

				<Box margin={{xs: '0px', md:'0px 4%', lg:'0px 8%', xl: '0px 20%'}} >
					<Grid container>
						{
							pokemons.map((pokemon : IPokemon, index : number) => {
								return(
									<Grid key={index} item xs={6} md={3}>
										<PokemonCard id={pokemon.id} name={pokemon.name} url={pokemon.url} image={pokemon.image} types={pokemon.types} />
									</Grid>
								);
							})
						}
					</Grid>
					<Box ref={ref}>{loading? 'carregando pokedex...' : 'Carregada!'}</Box>
				</Box>
				<Box height={10}>
					<a href='https://github.com/matheus55391'>Meu Git</a>
				</Box>
			</Main>
		</Box>

	);
};

export default Home;
