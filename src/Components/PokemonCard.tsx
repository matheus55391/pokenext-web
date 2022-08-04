/* eslint-disable jsx-a11y/alt-text */
import { Height, Margin } from "@mui/icons-material"
import { capitalize, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import { useEffect, useState } from "react";
import { text } from "stream/consumers";
import { Pokemon } from "../@Types/Pokemon";
import { PokemonTypeColorGenerator } from "../utils/pokemonTypeColorGenerator";


interface PokemonCardProps {
    name?: string;
    url: string;
}

interface IPokemon {
    id? : string,
    name?: string, 
    image?: string,
    types?: string[],
}

export const PokemonCard = ({ name, url }: PokemonCardProps) => {
    
    const [pokemon, setPokemon] = useState<IPokemon>({})
    const getPokemon = async () =>{
        const response = await fetch(url)
        const data = await response.json()

        var typesList : string[] = []
        data.types.map((data : any)=>{
            console.log(data.type.name)
            typesList.push(data.type.name)
            
        })
        const newPokemon : IPokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites.versions['generation-v']['black-white'].animated['front_default'],
            types: typesList
        }
       
        
        setPokemon(newPokemon)
    }

    useEffect(()=>{
        getPokemon()
    }, [])



    return (
        <Card               
            sx={{ 
                textAlign: "center",
                margin: 2,
            }}>
            <CardActionArea>
                <Box
                    sx={{
                        width: '100%' ,
                        textAlign: "right",
                        paddingRight: '10px'
                    }}
                >
                    <Typography>#{pokemon.id}</Typography>
                </Box>
                <CardMedia
                    sx={{
                        display: 'flex',
                        alignItems: 'center', 
                        justifyContent: 'center',
                        margin: '20px 0px'
                    }}
                >
                    <Image 
                        width={80}
                        height={80}
                        src={ pokemon.image || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"}
                    />
                </CardMedia>
                <CardContent>
                    <Typography sx={{
                        fontSize: 22,
                        fontWeight: 'bold'
                        
                    }}>{ pokemon.name || "Pikachu"}</Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: "0px 20px"

                        }}
                    >
                        {
                            pokemon.types?.map((type, index)=>{
                                return(
                                    <Typography 
                                        key={index}
                                        margin={"auto"}
                                        width={'100%'}
                                        maxWidth={'120px'}
                                        color={"#fff"}
                                        fontWeight="bold"
                                        bgcolor={PokemonTypeColorGenerator(type)}
                                    >
                                        {capitalize(type)}
                                    </Typography>
                                )
                            })
                        }
                    </Box>





                </CardContent>
            </CardActionArea>
        </Card>
    )
}