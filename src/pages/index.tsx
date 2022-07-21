import { TrendingUpRounded } from '@mui/icons-material'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { RenderImage } from '../Components/RenderImages'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  // const [load, setLoad] = useState(true)
  // const [name, setName] = useState('')
  // const [imgUrl, setImgUrl] = useState('')
  // useEffect(()=>{
  //   setLoad(true)
  //   console.log('Carregando...')
  //   axios.get('https://pokeapi.co/api/v2/pokemon/1')
  //     .then(res=>{
  //       setName(res.data.name)
  //       setImgUrl(res.data.sprites.versions['generation-v']['black-white'].animated['front_default'])
  //     })
  //     .catch(err => console.log(err))
  //     .finally(()=>{setLoad(false)})
  // }, [])

  // useEffect(()=>{
  //   console.log(load)
  // },[load])
  return (
    <Box>
      <Typography>Pokemons</Typography>
      
      <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia>
                <Image 
                  width={80}
                  height={80}
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"></Image>
              </CardMedia>
              <CardContent>
                <Typography>Pikachu</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Box>
      <Box>
        <Button variant="contained">{'<-'}</Button>
        <Button variant="contained">{'->'}</Button>
      </Box>
    </Box>
  )
}

export default Home
