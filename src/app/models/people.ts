import { Film, Species, Starship, Vehicle } from '.';

export default interface People {
  type: "People"
  id: number;
  edited: string;
  created: string;
  url: string;
  mass: string;
  films: Film[];
  homeworld: string;
  birth_year: string;
  gender: string;
  height: string;
  eye_color: string;
  skin_color: string;
  species: Species[];
  hair_color: string;
  starships: Starship[];
  name: string;
  vehicles: Vehicle[];
}