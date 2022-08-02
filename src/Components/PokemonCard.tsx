import { Height } from "@mui/icons-material"
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"


interface PokemonCardProps {

}
export const PokemonCard = ({}: PokemonCardProps) => {
    return (
        <Card sx={{ 

            textAlign: "center",
            margin: 2,
        }}>
            <CardActionArea>
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
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
                    />
                </CardMedia>
                <CardContent>
                    <Typography sx={{
                        fontSize: 22,
                        fontWeight: 'bold'
                        
                    }}>Pikachu</Typography>

                        <Typography 
                            component="div"
                            sx={{
                                backgroundColor:"#ffe603",
                                margin: "auto",
                                width: '100px'


                            }}>Electric
                        </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    )
}