import { Film, SwapiType } from '.';

export default interface Vehicle {
  type: SwapiType.vehicles;
  id: number;
  edited: string;
  created: string;
  url: string;
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
  pilots: Array<string>,
  films: Array<string>,
}