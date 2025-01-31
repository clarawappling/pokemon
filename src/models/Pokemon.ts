export type Pokemon = {
    name: string;
    id: number;
    sprites: Sprites;
    stats: Stat[];

}



type Stat = {
    base_stat: number;

}


type Sprites = {
    front_default: string;
    back_default: string;
}