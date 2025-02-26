import { useContext, useEffect, useState } from "react"
import { FranksListContext } from "../contexts/FranksListContext"
import { Pokemon } from "../models/Pokemon";
import "./ShowFranksList.css"
import { ShowPokemon } from "./ShowPokemon";


export const ShowFranksList = () => {
    const { franksList } = useContext(FranksListContext);
    const [pokemonsData, setPokemonsData] = useState<Pokemon[]>([]);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const promises = franksList.map(async (pokemonName) => {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${pokemonName}`);
                    }
                    const data: Pokemon = await response.json();
                    return data;
                });

                const results = await Promise.all(promises);
                setPokemonsData(results);
            } catch (error) {
                setError("Error fetching data");
            }
        };

        fetchPokemons();
    }, [franksList]);  

    if (error) {
        return <p>{error}</p>;
    }
const [chosenPokemon, setChosenPokemon] =useState<Pokemon | undefined>(undefined);

const showDetails = (thisPokemon: Pokemon) => {
    setChosenPokemon(thisPokemon);
}
    return (
        <>
        <div className="pokemons-container">
                {pokemonsData.map((pokemon, index) => (
                    <div onClick={() => showDetails(pokemon)} className="pokemon-card" key={index}>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />     
                    </div>
                ))}
            
        </div>
       
       {chosenPokemon && <ShowPokemon pokemon={chosenPokemon}/>}
       </>
    );
};

