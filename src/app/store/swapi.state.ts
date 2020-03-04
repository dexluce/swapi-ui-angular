import { Filters, Item, SwapiType } from '../models';

// This is not the place to do this
export interface AppState {
  app: SwapiState
} 

export interface SwapiState {
  searchResult: Array<Item>
  search: string,
  searching: boolean,
  searchError: boolean
  filters: Filters,
}

export const initialSwapiState: SwapiState = {
  searchResult: [],
  filters: {
    [SwapiType.films]: true,
    [SwapiType.people]: true,
    [SwapiType.planets]: true,
    [SwapiType.species]: true,
    [SwapiType.starships]: true,
    [SwapiType.vehicles]: true },
  search: "",
  searching: false,
  searchError: false
}
