import { Pokemon } from "../models/Pokemon"

type ShowPokemonProps = {
    pokemon: Pokemon;
}

export const ShowPokemon = (props: ShowPokemonProps) => {
    
    
    const showBack = (e) => {
        
        if (e.target.src === props.pokemon.sprites.front_default) {
            e.target.src = props.pokemon.sprites.back_default;
        } else {
            e.target.src = props.pokemon.sprites.front_default;
        }
        }
        
    return (<>
    <div className="show-pokemon">
        <h3 className="pokemon-name">{props.pokemon.name}</h3>
        <div>
            <img src={props.pokemon.sprites.front_default} onClick={showBack}/>
            
        </div>
    </div>
    
    </>)
}