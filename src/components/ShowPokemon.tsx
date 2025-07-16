import { Pokemon } from "../models/Pokemon"
import { TypeSymbol } from "./TypeSymbol";
import "../styles/Layout.css"

type ShowPokemonProps = {
    pokemon: Pokemon;
}

export const ShowPokemon = (props: ShowPokemonProps) => {
    
    const showBack = (e: React.MouseEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement;
        if(props.pokemon.sprites.back_default) {
            if (target.src === props.pokemon.sprites.front_default) {
                target.src = props.pokemon.sprites.back_default;
            } else {
                target.src = props.pokemon.sprites.front_default;
            }
        }
    };

    const formattedName = props.pokemon.name.replace(/-/g, ' ');

    return (
        <div className="show-pokemon">
            <h3 className="pokemon-name">{formattedName}</h3>
            <div>
                <img src={props.pokemon.sprites.front_default} onClick={showBack} />
                <p className="hp">{props.pokemon.stats[0].base_stat}</p>
                <TypeSymbol pokemon={props.pokemon} />
            </div>
        </div>
    );
};
