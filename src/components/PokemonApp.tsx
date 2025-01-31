import { useState } from "react"
import { SearchPokemon } from "../components/SearchPokemon"
import { ShowPokemon } from "./ShowPokemon"
import { Pokemon } from "../models/Pokemon"

export const PokemonApp = () => {
    
    
    const [pokemon, setPokemon] = useState<Pokemon>();;
    const url = "https://pokeapi.co/api/v2/pokemon/";
    
    const findPokemon = async(searchText:string) => {
        const response = await fetch (url+searchText);
        const data: Pokemon = await response.json();
        
        setPokemon(data);
    }
    return ( <>

    <div>
    <h1>Franks app</h1>
    <p>Det här är din alldeles egna sida. Här kan du skriva namnet på en pokemon och hitta den.</p>
    </div>
    <SearchPokemon findPokemon={findPokemon}/>
    
    {pokemon && <ShowPokemon pokemon={pokemon}></ShowPokemon>}
    
    </>)
}