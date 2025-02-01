import { Pokemon } from "../models/Pokemon"

type ShowPokemonProps = {
    pokemon: Pokemon;
}

export const ShowPokemon = (props: ShowPokemonProps) => {
    
    const showBack = (e: React.MouseEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement; // Type assertion here

        if (target.src === props.pokemon.sprites.front_default) {
            target.src = props.pokemon.sprites.back_default;
        } else {
            target.src = props.pokemon.sprites.front_default;
        }
    };
        
    return (<>
    <div className="show-pokemon">
        <h3 className="pokemon-name">{props.pokemon.name}</h3>
        
        <div>
            <img src={props.pokemon.sprites.front_default} onClick={showBack}/>
            <p className="hp">{props.pokemon.stats[0].base_stat}</p>
            <ul className="types">{props.pokemon.types.map((t, index) => {
                return (
                    <>
                    <div key={index}>
                    <p>{t.type.name}</p>
                </div>
                    </>
                )
                
            })}</ul>
           
            
        </div>
    </div>
    
    </>)
}