import Film from './film';
import People from './people';
import Planet from './planet';
import Species from './species';
import Starship from './starship';
import Vehicle from './vehicle';

export enum SwapiType {
  films = "films",
  species = "species",
  people = "people",
  planets = "planets",
  starships = "starships",
  vehicles = "vehicles",
}

type Item = (Film | Species | People | Planet | Starship | Vehicle) & {
  [key in SwapiType]?: Array<string>
};

type Filters = {
  [key in SwapiType]: boolean
}

export {
  Filters,
  Film,
  Item,
  People,
  Planet,
  Species,
  Starship,
  Vehicle
};