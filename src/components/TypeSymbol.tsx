
import { Pokemon } from "../models/Pokemon"

type TypeSymbolProps = {
    pokemon: Pokemon
}

export const TypeSymbol = (props: TypeSymbolProps) => {
    return <>
    <ul className="types">{props.pokemon.types.map((t, index) => {
                if(t.type.name === "normal") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/thumb/9/95/Normal_icon_SwSh.png/64px-Normal_icon_SwSh.png" />
                    </span>
                } if(t.type.name === "fire") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/f/f9/Fire_icon_HOME3.png" />
                    </span>
                } if (t.type.name === "flying") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/thumb/b/b5/Flying_icon_SwSh.png/64px-Flying_icon_SwSh.png"/>
                    </span>
                } if (t.type.name === "ghost") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/2/23/Ghost_icon_HOME3.png"/>
                    </span>
                } if (t.type.name === "grass") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/thumb/a/a8/Grass_icon_SwSh.png/64px-Grass_icon_SwSh.png"/>
                    </span>
                } if (t.type.name === "water") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/thumb/8/80/Water_icon_SwSh.png/64px-Water_icon_SwSh.png"/>
                    </span>
                } if (t.type.name === "dragon") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/thumb/7/70/Dragon_icon_SwSh.png/64px-Dragon_icon_SwSh.png"/>
                    </span>
                } if (t.type.name === "electric") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/c/cf/Electric_icon_HOME3.png"/>
                    </span>
                } if (t.type.name === "fighting") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/thumb/3/3b/Fighting_icon_SwSh.png/64px-Fighting_icon_SwSh.png"/>
                    </span>
                } if (t.type.name === "poison") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/thumb/8/8d/Poison_icon_SwSh.png/64px-Poison_icon_SwSh.png"/>
                    </span>
                } if (t.type.name === "ground") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/thumb/2/27/Ground_icon_SwSh.png/64px-Ground_icon_SwSh.png"/>
                    </span>
                } if (t.type.name === "psychic") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/thumb/7/73/Psychic_icon_SwSh.png/64px-Psychic_icon_SwSh.png"/>
                    </span>
                } if (t.type.name === "rock") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/thumb/1/11/Rock_icon_SwSh.png/64px-Rock_icon_SwSh.png"/>
                    </span>
                } if (t.type.name === "ice") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/thumb/1/15/Ice_icon_SwSh.png/64px-Ice_icon_SwSh.png"/>
                    </span>
                } if (t.type.name === "bug") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/thumb/9/9c/Bug_icon_SwSh.png/64px-Bug_icon_SwSh.png"/>
                    </span>
                } if (t.type.name === "steel") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/thumb/0/09/Steel_icon_SwSh.png/64px-Steel_icon_SwSh.png"/>
                    </span>
                } if (t.type.name === "fairy") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/0/0b/Fairy_icon_HOME3.png"/>
                    </span>
                } if (t.type.name === "dark") {
                    return <span key={index}>
                        <img src="https://archives.bulbagarden.net/media/upload/thumb/d/d5/Dark_icon_SwSh.png/64px-Dark_icon_SwSh.png"/>
                    </span>
                }

                }
            )}</ul>
    </>
}