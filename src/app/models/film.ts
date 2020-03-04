import { Planet, Starship, Vehicle, Species, SwapiType } from '.';

export default interface Film {
  type: SwapiType.films
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
