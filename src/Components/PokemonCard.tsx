/* eslint-disable jsx-a11y/alt-text */
import { Height, Margin } from "@mui/icons-material"
import { capitalize, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import { useEffect, useState } from "react";
import { text } from "stream/consumers";
import { IPokemon } from "../@Types/Pokemon";
import { PokemonTypeColorGenerator } from "../utils/pokemonTypeColorGenerator";



export const PokemonCard = ( {

    id,
    name, 
    image,
    types,
    url,

} : IPokemon) => {  

    return (
        <Card                
            sx={{ 
                textAlign: "center",
                margin: 2,
            }}
            >
            <Box>
                <Box
                    sx={{
                        width: '100%' ,
                        textAlign: "right",
                        paddingRight: '10px'
                    }}
                >
                    <Typography variant="subtitle1">#{id}</Typography>
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
                        src={ image || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"}
                    />
                </CardMedia>
                <CardContent>
                    <Typography sx={{
                        fontSize: 22,
                        fontWeight: 'bold'
                        
                    }}>{ name || "Pikachu"}</Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: "8px 20px",

                        }}
                    >
                        {
                            types?.map((type, index)=>{
                                return(
                                    <Typography 
                                        key={index}
                                        margin={"auto"}
                                        width={'100%'}
                                        maxWidth={'90px'}
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
            </Box>
        </Card>
    )
}