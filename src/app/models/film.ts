import { Planet, Starship, Vehicle, Species } from '.';

export default interface Film {
  type: "Film"
  id: number;
  edited: string;
  created: string;
  url: string;
  director: string;
  opening_crawl: string;
  title: string;
  release_date: string;
  planets: Planet;
  characters: string;
  starships: Starship;
  vehicles: Vehicle;
  species: Species;
  producer: string;
  episode_id: string;
}
