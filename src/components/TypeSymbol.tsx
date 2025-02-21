import { Pokemon } from "../models/Pokemon";
import normal from "../assets/imgs/type-symbols/normal.png";
import fire from "../assets/imgs/type-symbols/fire.png";
import flying from "../assets/imgs/type-symbols/flying.png";
import ghost from "../assets/imgs/type-symbols/ghost.png";
import grass from "../assets/imgs/type-symbols/grass.png";
import water from "../assets/imgs/type-symbols/water.png";
import dragon from "../assets/imgs/type-symbols/dragon.png";
import electric from "../assets/imgs/type-symbols/electric.png";
import fighting from "../assets/imgs/type-symbols/fighting.png";
import poison from "../assets/imgs/type-symbols/poison.png";
import ground from "../assets/imgs/type-symbols/ground.png";
import psychic from "../assets/imgs/type-symbols/psychic.png";
import rock from "../assets/imgs/type-symbols/rock.png";
import ice from "../assets/imgs/type-symbols/ice.png";
import bug from "../assets/imgs/type-symbols/bug.png";
import steel from "../assets/imgs/type-symbols/steel.png";
import fairy from "../assets/imgs/type-symbols/fairy.png";
import dark from "../assets/imgs/type-symbols/dark.png";


const typeImageMap: Record<string, string> = {
    normal,
    fire,
    flying,
    ghost,
    grass,
    water,
    dragon,
    electric,
    fighting,
    poison,
    ground,
    psychic,
    rock,
    ice,
    bug,
    steel,
    fairy,
    dark,
};

type TypeSymbolProps = {
    pokemon: Pokemon;
};

export const TypeSymbol = (props: TypeSymbolProps) => {
    return (
        <>
            <ul className="types">
                {props.pokemon.types.map((t, index) => {
                    const typeName = t.type.name; 
                    const imageSrc = typeImageMap[typeName]; 

                    return (
                        <span key={index}>
                            <img src={imageSrc} alt={typeName} />
                        </span>
                    );
                })}
            </ul>
        </>
    );
};
