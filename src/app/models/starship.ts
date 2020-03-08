import { Film, SwapiType } from '.';

export default interface Starship {
  type: SwapiType.starships;
  id: number;
  edited: string;
  created: string;
  url: string;
  starship_class: string,
  crew: string,
  MGLT: string,
  hyperdrive_rating: string,
  passengers: string,
  model: string,
  manufacturer: string,
  length: string,
  cost_in_credits: string,
  max_atmosphering_speed: string,
  consumables: string,
  cargo_capacity: string,
  name: string,
  pilots: Array<string>;
  films: Array<string>;
}