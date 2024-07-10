export interface IpokemonApiRes {
  count: number;
  next: string | null;
  previous: string | null;
  results: IResult[];
}

interface IResult {
  name: string;
  url: string;
}

export interface IPokemon {
  abilities: Ability2[];
  height: number;
  id: number;
  is_default: boolean;
  moves: Move[];
  name: string;
  order: number;
  species: Ability;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Type {
  slot: number;
  type: Ability;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}

interface Sprites {
  back_default: string;
  front_default: string;
}

interface Move {
  move: Ability;
}

interface Ability2 {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface Ability {
  name: string;
  url: string;
}
