import { Pokemon } from "../models/Pokemon"
import { TypeSymbol } from "./TypeSymbol";

type ShowPokemonProps = {
    pokemon: Pokemon;
}

export const ShowPokemon = (props: ShowPokemonProps) => {
    
    const showBack = (e: React.MouseEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement; // Type assertion here
        if(props.pokemon.sprites.back_default) {
            if (target.src === props.pokemon.sprites.front_default) {
                target.src = props.pokemon.sprites.back_default;
            } else {
                target.src = props.pokemon.sprites.front_default;
            }
        } else {
            return;
        }
       
    };
        
    return (<>
    <div className="show-pokemon">
        <h3 className="pokemon-name">{props.pokemon.name}</h3>
        <div>
            <img src={props.pokemon.sprites.front_default} onClick={showBack}/>
            <p className="hp">{props.pokemon.stats[0].base_stat}</p>
            <TypeSymbol pokemon={props.pokemon}/>
       
        </div>
    </div>
    
    </>)
}