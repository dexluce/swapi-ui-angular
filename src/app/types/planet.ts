import { Film } from '.';

export default interface Planet {
  type: "Planet"
  id: number;
  edited: string;
  created: string;
  url: string;
  films: Film[];
  rotation_period: string;
  terrain: string;
  gravity: string;
  population: string;
  surface_water: string;
  residents: string;
  orbital_period: string;
  diameter: string;
  name: string;
  climate: string;
}
