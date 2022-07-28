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



const Home: NextPage = () => {
  const xs = 12
  const md = 3
  return (
    <Box>
      <Box>
        
          <Typography variant="h6" sx={{ 
            flexGrow: 1,
            textAlign: 'center',
           }} >POKENEXT</Typography>

      </Box>
      <Box
        sx={{ 
          flexGrow: 1,
        }}

        margin={{md: '0% 8%', xs: '0%'}}

      >

        <Grid 
          container
          sx={{
            backgroundColor: 'red',
          }}
        >
          <Grid item xs={xs} md={md}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <PokemonCard></PokemonCard>
            </Box>
          </Grid>
          <Grid item xs={xs} md={md}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <PokemonCard></PokemonCard>
            </Box>
          </Grid>
          <Grid item xs={xs} md={md}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <PokemonCard></PokemonCard>
            </Box>
          </Grid>
          <Grid item xs={xs} md={md}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <PokemonCard></PokemonCard>
            </Box>
          </Grid>
        </Grid>

      </Box>

    </Box>
  )
}

export default Home
