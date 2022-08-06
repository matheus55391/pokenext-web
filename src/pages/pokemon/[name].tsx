import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Context } from 'vm';
import { IPokemon } from '../../@Types/Pokemon';
import { pokemonFilter } from '../../utils/pokemonFilter';

type Props = {

	pokemon?: IPokemon,

}

export const getStaticPaths : GetStaticPaths<{name: string}> = async () => {
	return {
		paths: [],
		fallback: true,
	};
};

export const getStaticProps : GetStaticProps = async (context : Context) => {
	const pkName : string =  context.params.name;
	console.log(pkName);
	
	try{

		const pokemon = await pokemonFilter('https://pokeapi.co/api/v2/pokemon/' + pkName);
		return {
			props: { 
				pokemon: pokemon ,			
			}, revalidate: 10
		};
	}catch(e){
		console.log(e);
	}


	return {
		props: { 
			pokemon: { name: 'error'} ,			
		}, revalidate: 10
	};
};
  

const Pokemon: NextPage<Props> = ({ pokemon }: Props) => {
	const router = useRouter();
	useEffect(()=>{
		if(pokemon){
			if(pokemon.name === 'error') router.push('/404');  
		}
		console.log(pokemon);
		
	},[pokemon]);
	
	if(!pokemon){
		return(
			<div>
				loading
			</div>
			
		);
	}

	return(
		<Box 
			height={'100vh'}
		>
			<Box 
				display={'flex'} 
				flexDirection="column" 
				height={380} 
				width={'100px'} 
			>
				<Image src={pokemon.image || ''}  height={'100%'} width={'100%'}  />
				<Typography>{pokemon.name}</Typography>		

			</Box>
		</Box>
	);

	

};

export default Pokemon;