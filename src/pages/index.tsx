import { Box, Grid, Typography } from '@mui/material'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { IPokemon } from '../@Types/Pokemon'
import { PokemonCard } from '../Components/PokemonCard'
import { Main } from '../styles/indexStyle'





type Props = {
  pokemons: IPokemon[]
}

export const getStaticProps : GetStaticProps = async () => {
  var pokemons: IPokemon[] = []
  var response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
  var data = await response.json()

  for (const poke of data.results) {
    var res = await fetch(poke.url)
    var pokemon = await res.json()

    var typesList : string[] = []

    pokemon.types.map((data : any)=>{
        typesList.push(data.type.name)
        
    })

    var newPokemon : IPokemon = {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.versions['generation-v']['black-white'].animated['front_default'],
      types: typesList
    }

    pokemons.push(newPokemon)
  }

  return {
    props: {
      pokemons
    }
  }

}

const Home: NextPage<Props> = ({ pokemons } : Props) => {
  const xs : number = 6
  const md : number = 3
  return (
    <>
      <Head>
        <title>Pokenext - ft: Matheus Felipe Vieira Santiago</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Main
        sx={{
          backgroundColor: "#f3f3f3" 
        }}
        overflow="auto"

      >
        <Box
          margin={2}
        >
          <Typography
            variant="h4"

            fontWeight="bold"
          >
            POKENEXT
          </Typography>
        </Box>

        <Box
          margin={{xs: '0px', md:'0px 10%'}}

        >
          <Grid container>
            {
              pokemons.map((pokemon : IPokemon, index : number) => {
                return(
                  <Grid key={index} item xs={xs} md={md}>
                    <PokemonCard id={pokemon.id} name={pokemon.name} url={pokemon.url} image={pokemon.image} types={pokemon.types} />
                  </Grid>
                )
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
    </>

  )
}

export default Home
