import { Filters, Item, SwapiType } from '../models';

// This is not the place to do this
export interface AppState {
  app: SwapiState
} 

export interface SwapiState {
  items: Array<Item>,
  searchResult: Array<Item>,
  search: string,
  loading: boolean,
  error: boolean
  filters: Filters,
}

export const initialSwapiState: SwapiState = {
  items: [],
  searchResult: [],
  filters: {
    [SwapiType.films]: true,
    [SwapiType.people]: true,
    [SwapiType.planets]: true,
    [SwapiType.species]: true,
    [SwapiType.starships]: true,
    [SwapiType.vehicles]: true },
  search: "",
  loading: false,
  error: false
}
