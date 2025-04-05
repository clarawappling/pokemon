import { useState } from "react"
import { SearchPokemon } from "../components/SearchPokemon"
import { ShowPokemon } from "./ShowPokemon"
import { Pokemon } from "../models/Pokemon"
import { FranksListContext } from "../contexts/FranksListContext"
import { ShowFranksList } from "./ShowFranksList"
import { franksList } from "../constants/franksList"


export const PokemonApp = () => {
    
    const [pokemon, setPokemon] = useState<Pokemon>();;
    const url = "https://pokeapi.co/api/v2/pokemon/";
    
    const findPokemon = async(searchText:string): Promise<void>=> {

        try {
            const response = await fetch (url+searchText);
        

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        
        const data: Pokemon = await response.json();
        
        setPokemon(data);

    } catch (error: unknown) {
        if (error instanceof Error) {
          alert("DET FINNS NOG INGEN POKEMON SOM HETER SÅ, PROVA IGEN!");
        } else {
          alert('Något blev tokigt när datan skulle hämtas, prova igen!');
        }
      }
    }
    return ( <>
<FranksListContext.Provider value={{franksList}}>

    <div>
    <SearchPokemon findPokemon={findPokemon}/>

    {pokemon && <ShowPokemon pokemon={pokemon}></ShowPokemon>}
    <h1>Franks pokemons</h1>
    <ShowFranksList/>
    </div>
    
    
    

    
    </FranksListContext.Provider>
    </>)
}
