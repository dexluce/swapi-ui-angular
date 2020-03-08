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
  producer: string;
  episode_id: string;
  characters: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
}
