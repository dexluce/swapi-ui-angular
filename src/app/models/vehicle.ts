import { Film } from '.';

export default interface Vehicle {
  type: "Vehicle"
  id: number;
  edited: string;
  created: string;
  url: string;
  films: Film[],
  crew: string,
  vehicle_class: string,
  passengers: string,
  model: string,
  manufacturer: string,
  length: string,
  cost_in_credits: string,
  max_atmosphering_speed: string,
  consumables: string,
  cargo_capacity: string,
  name: string,
  pilots: string,
}