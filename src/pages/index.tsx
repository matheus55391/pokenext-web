import { Box, Grid, Typography } from '@mui/material'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Url } from 'url'
import { PokemonCard } from '../Components/PokemonCard'
import { Main } from '../styles/indexStyle'
import { Pokemon } from '../@Types/Pokemon'

type Props = {
  pokemons: Pokemon[]
}

export const getStaticProps : GetStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
  const data = await res.json()
  const pokemons : Pokemon[] = data.results
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
              pokemons.map((pokemon : Pokemon, index : number) => {
                return(
                  <Grid key={index} item xs={xs} md={md}>
                    <PokemonCard name={pokemon.name} url={pokemon.url} />
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
