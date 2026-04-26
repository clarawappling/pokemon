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

export const TYPE_ICON_MAP: Record<string, string> = {
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

export const TYPE_NAME_SV: Record<string, string> = {
  normal: "Normal",
  fire: "Eld",
  water: "Vatten",
  electric: "Elektrisk",
  grass: "Gräs",
  ice: "Is",
  fighting: "Strid",
  poison: "Gift",
  ground: "Mark",
  flying: "Flygande",
  psychic: "Psykisk",
  bug: "Insekt",
  rock: "Sten",
  ghost: "Spöke",
  dragon: "Drake",
  dark: "Mörker",
  steel: "Stål",
  fairy: "Fé",
};

export const ALL_TYPES = Object.keys(TYPE_ICON_MAP);

