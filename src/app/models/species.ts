import { Film, People, SwapiType } from '.';

export default interface Species {
  type: SwapiType.species;
  id: number;
  edited: string;
  created: string;
  url: string;
  designation: string;
  language: string;
  skin_colors: string;
  eye_colors: string;
  hair_colors: string;
  average_lifespan: string;
  name: string;
  classification: string;
  average_height: string;
  homeworld: string;
  films: Array<string>;
  people: Array<string>;
}
