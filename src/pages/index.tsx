import styled from '@emotion/styled'
import { TrendingUpRounded } from '@mui/icons-material'
import { AppBar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Toolbar, Typography } from '@mui/material'
import { maxWidth } from '@mui/system'
import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PokemonCard } from '../Components/PokemonCard'
import styles from '../styles/Home.module.css'
import { Main } from '../styles/indexStyle'

const Home: NextPage = () => {
  const xs : number = 6
  const md : number = 3
  return (
    <>
      <Head>
        <title>Pokenext - ft: Matheus Felipe Vieira Santiago</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Main>
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
          sx={{
            margin: {xs: '0px', md:'0px 10%' }
          }}
        >
          <Grid container>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
            <Grid item xs={xs} md={md}>
              <PokemonCard/>
            </Grid>
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
