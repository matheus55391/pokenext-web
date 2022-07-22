import { TrendingUpRounded } from '@mui/icons-material'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PokemonCard } from '../Components/PokemonCard'
import styles from '../styles/Home.module.css'



const Home: NextPage = () => {

  return (
    <Box
      sx={{
        backgroundColor: '#424549',
        height: '100vh',        
      }}
    >
      <Box
        sx={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 40
        }}
      >
        <Typography>PokeNext</Typography>

      </Box>
      
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <PokemonCard/>
          </Grid>
          <Grid item xs={12} md={3}>
            <PokemonCard/>
          </Grid>
          <Grid item xs={12} md={3}>
            <PokemonCard/>
          </Grid>
          <Grid item xs={12} md={3}>
            <PokemonCard/>
          </Grid>
          <Grid item xs={12} md={3}>
            <PokemonCard/>
          </Grid>
          <Grid item xs={12} md={3}>
            <PokemonCard/>
          </Grid>
          <Grid item xs={12} md={3}>
            <PokemonCard/>
          </Grid>
          <Grid item xs={12} md={3}>
            <PokemonCard/>
          </Grid>
        </Grid>




      </Box>
      <Box>
        <Button variant="contained">{'<-'}</Button>
        <Button variant="contained">{'->'}</Button>
      </Box>
    </Box>
  )
}

export default Home
