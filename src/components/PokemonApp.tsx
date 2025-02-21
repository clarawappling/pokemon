import { useState } from "react"
import { SearchPokemon } from "../components/SearchPokemon"
import { ShowPokemon } from "./ShowPokemon"
import { Pokemon } from "../models/Pokemon"
import { FranksListContext } from "../contexts/FranksListContext"
import { ShowFranksList } from "./ShowFranksList"

export const PokemonApp = () => {
    const franksList = ([
    "scorbunny", "eternatus", "barraskewda", "grimmsnarl", 
    "sylveon", "falinks", "haxorus", "growlithe", 
    "grapploct", "gengar", "magikarp", "snorlax", "onix", "gyarados",
    "steelix", "lapras", "cloyster", "butterfree", "machoke", "goldeen", "metapod", 
    "seismitoad", "cinderace", "helioptile", "sudowoodo", "thievul", "rookidee", 
    "gossifleur",  "purrloin", "zigzagoon", "raboot", "blipbug", "dottler",
    "orbeetle", "caterpie", "grubbin", "vikavolt", "hoothoot", "corviknight",
    "skwovet", "greedent", "pidove", "tranquill", "nickit", "obstagoon", "seedot",
    "nuzleaf", "shiftry", "chewtle", "drednaw", "liepard", "yamper", "bunnelby", 
    "diggersby", "minccino", "oddish", "gloom","wingull", "pelipper","galvantula",
    "electrike", "vulpix", "delibird", "snorunt", "mudbray","dwebble", "golurk", "stufful",
    "snover", "wooper", "corphish", "ninjask", "tyrogue", "pancham", "bronzor", 
    "stunky", "tympole", "palpitoad", "dusknoir", "seaking", "octillery", "wishiwashi-solo", 
    "wishiwashi-school", "pyukumuku", "sizzlipede", "rolycoly", "coalossal", "roggenrola",
    "timburr", "gurdurr", "woobat", "arrokuda", "meowth", "perrserker", "cutiefly",
    "pumpkaboo-average", "espurr", "swirlix", "chinchou", "lanturn", "scraggy",
    "stunfisk", "whiscash", "shellos", "barbaracle", "hattrem", "hatterene", "sawk",
    "bonsly", "rhyhorn", "gothitelle", "cubchoo", "rufflet", "skorupi", "litwick", "sneasel",
    "sigilyph", "torkoal", "sandaconda", "hawlucha", "flygon", "axew", "fraxure", "yamask",
    "phantump", "togedemaru", "snom", "mantine", "wailmer", "bergmite", "toxel", "beartic",
    "copperajah", "ditto", "frillish", "gastrodon", "glalie", "inkay", "jolteon", "kingler",
    "klang", "ninetales", "noivern", "wobbuffet"

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
