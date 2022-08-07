import { Box, Grid, Typography } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { IPokemon } from '../@Types/Pokemon';
import { PokemonCard } from '../Components/PokemonCard';
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
		const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
		const data = await response.json();
	
		for (const poke of data.results) {
	
			const newPokemon : IPokemon = await pokemonFilter(poke.url);
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

const Home: NextPage<Props> = ({ pokemons } : Props) => {

	return (
		<Box>
			<Head>
				<title>Pokenext - ft: Matheus Felipe Vieira Santiago</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Main bgcolor={'#f3f3f3'} >
				<Box margin={2} >
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
				</Box>
				<Box
					height={10}

				>
					<a href='https://github.com/matheus55391'>Meu Git</a>
				</Box>
			</Main>
		</Box>

	);
};

export default Home;
