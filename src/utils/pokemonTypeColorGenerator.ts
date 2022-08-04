export const PokemonTypeColorGenerator = (type: string) : string =>{
    switch(type){
        case "normal":
            return "#A8A878"
        case "fire":
            return "#F08030"
        case "fighting":
            return "#C92112"
        case "water":
            return "#6890F0"
        case "flying":
            return "#A890F0"
        case "grass":
            return "#A890F0"
        case "poison":
            return "#A040A0"
        case "eletric":
            return "#F8D030"
        case "ground":
            return "#E0C068"
        case "psychic":
            return "#F85888"
        case "rock":
            return "#B8A038"
        case "ice":
            return "#98D8D8"
        case "bug":
            return "#A8B820"
        case "dragon":
            return "#7038F8"
        case "ghost":
            return "#705898"
        case "dark":  
            return "#705848"
        case "steel":
            return "#B8B8D0"
        case "fairy":
            return "#EE99AC"
        case "???":
            return "#68A090"  
        default: 
            return "#FFF"      
    }    
}