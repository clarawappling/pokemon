export type Pokemon = {
    name: string;
    id: number;
    sprites: Sprites;
    weight: number

}

type Sprites = {
    front_default: string;
    back_default: string;
}