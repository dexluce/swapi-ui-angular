import { Film } from '.';

export default interface Starship {
  type: "Starship"
  id: number;
  edited: string;
  created: string;
  url: string;
  films: Film[],
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
  pilots: string
}