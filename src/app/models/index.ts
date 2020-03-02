import Film from './film';
import People from './people';
import Planet from './planet';
import Species from './species';
import Starship from './starship';
import User from './user';
import Vehicle from './vehicle';

type SearchResult = Array<Item>;
type Item = Film | Species | People | Planet | Starship | Vehicle;
type Filters = {
    [key: string]: boolean
    film: boolean,
    people: boolean,
    planet: boolean,
    species: boolean,
    starship: boolean,
    vehicle: boolean,
}

export {
    Filters,
    Film,
    Item,
    People,
    Planet,
    SearchResult,
    Species,
    Starship,
    User,
    Vehicle
};