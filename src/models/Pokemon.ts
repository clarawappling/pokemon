export type Pokemon = {
    name: string;
    id: number;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];

}

type Stat = {
    base_stat: number;

}


type Sprites = {
    front_default: string;
    back_default: string;
}

type Type = {
    type: NameUrl;
}

type NameUrl = {
    name: string;
}