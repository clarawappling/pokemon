import { Pokemon } from "../models/Pokemon"

type ShowPokemonProps = {
    pokemon: Pokemon;
}



export const ShowPokemon = (props: ShowPokemonProps) => {
    
    
    const showBack = (e) => {
        const pokePic = props.pokemon.sprites;
        if (e.target.src === pokePic.front_default) {
            e.target.src = pokePic.back_default;
        } else {
            e.target.src = pokePic.front_default;
        }
        }
        
    return (<>
    <div>
        <h3>{props.pokemon.name}</h3>
        <div>
            <img src={props.pokemon.sprites.front_default} onClick={showBack}/>
        </div>
    </div>
    
    </>)
}