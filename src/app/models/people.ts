import { Film, Species, Starship, Vehicle, SwapiType } from '.';

export default interface People {
  type: SwapiType.people;
  id: number;
  edited: string;
  created: string;
  url: string;
  mass: string;
  birth_year: string;
  gender: string;
  height: string;
  eye_color: string;
  skin_color: string;
  hair_color: string;
  name: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
}
