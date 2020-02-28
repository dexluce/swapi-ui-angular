import { Film, People } from '.';

export default interface Species {
  type: "Species"
  id: number;
  edited: string;
  created: string;
  url: string;
  homeworld: string;
  films: Film[];
  designation: string;
  language: string;
  skin_colors: string;
  people: People;
  eye_colors: string;
  hair_colors: string;
  average_lifespan: string;
  name: string;
  classification: string;
  average_height: string;
}
