import { useState } from "react"
import { SearchPokemon } from "../components/SearchPokemon"
import { ShowPokemon } from "./ShowPokemon"
import { Pokemon } from "../models/Pokemon"
import { FranksListContext } from "../contexts/FranksListContext"
import { ShowFranksList } from "./ShowFranksList"

export const PokemonApp = () => {
    const franksList = ([
    "scorbunny", "eternatus", "bulbasaur", "geodude", 
    "charmander", "charizard", "ivysaur", "barraskewda", "grimmsnarl", 
    "sylveon", "falinks", "haxorus", "growlithe", 
    "grapploct", "gengar", "magikarp", "snorlax", "onix", "gyarados",
     "gastly", "haunter", "steelix", "lapras", "arcanine", 
    "cloyster", "butterfree", "magnemite", "machoke", 
    "mr-mime", "goldeen", "metapod", "machamp", "seismitoad", "diglett",
    "croagunk", "basculin-white-striped", "charmeleon", "cinderace", 
    "cyndaquil", "helioptile", "sudowoodo", "impidimp", "thievul", 
    "rookidee", "gossifleur", "excadrill", 
    "purrloin", "zigzagoon", "venomoth", "raboot", "blipbug", "dottler",
    "orbeetle", "caterpie", "grubbin", "vikavolt", "hoothoot", "corviknight",
    "skwovet", "greedent", "pidove", "tranquill", "nickit", "obstagoon", "seedot",
    "nuzleaf", "shiftry", "chewtle", "drednaw", "liepard", "yamper", "bunnelby", 
    "diggersby", "minccino", "oddish", "gloom","wingull", "pelipper","galvantula",
    "electrike", "vulpix", "delibird", "snorunt", "mudbray","dwebble", "golurk", "stufful",
    "snover", "wooper", "corphish", "ninjask", "tyrogue", "pancham", "bronzor", 
    "stunky", "tympole", "palpitoad", "dusknoir", "seaking", "octillery", "wishiwashi-solo", 
    "wishiwashi-school", "pyukumuku", "sizzlipede", "rolycoly", "coalossal", "roggenrola",
    "timburr", "gurdurr", "woobat"

  ])
    
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
    <h1>Franks pokemons</h1>
    <ShowFranksList/>
    </div>
    <SearchPokemon findPokemon={findPokemon}/>
    
    {pokemon && <ShowPokemon pokemon={pokemon}></ShowPokemon>}

    
    </FranksListContext.Provider>
    </>)
}
