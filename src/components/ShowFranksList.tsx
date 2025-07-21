import { useContext, useEffect, useState } from "react"
import { FranksListContext } from "../contexts/FranksListContext"
import { Pokemon } from "../models/Pokemon";
import "../styles/ShowFranksList.css";
import { ShowPokemon } from "./ShowPokemon";
import { SpinnerLoader } from "./SpinnerLoader";


export const ShowFranksList = () => {
    const { franksList } = useContext(FranksListContext);
    const [pokemonsData, setPokemonsData] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            setIsLoading(true);
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
                setIsLoading(false);

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
    <div className="pokemons-container">
        {isLoading ? (
            <SpinnerLoader />
        ) : (
            pokemonsData.map((pokemon, index) =>
                (pokemon.id === chosenPokemon?.id ? (
                    <div key={index}>
                        <div onClick={() => showDetails(pokemon)} className="pokemon-card hidden">
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        </div>
                        {chosenPokemon && <ShowPokemon pokemon={chosenPokemon} />}
                    </div>
                ) : (
                    <div onClick={() => showDetails(pokemon)} className="pokemon-card" key={index}>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                ))
            )
        )}
    </div>
);


};

