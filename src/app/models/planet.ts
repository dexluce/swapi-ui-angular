import { Film, SwapiType } from '.';

export default interface Planet {
  type: SwapiType.planets;
  id: number;
  edited: string;
  created: string;
  url: string;
  rotation_period: string;
  terrain: string;
  gravity: string;
  population: string;
  surface_water: string;
  orbital_period: string;
  diameter: string;
  name: string;
  climate: string;
  residents: Array<string>;
  films: Array<string>;
}
