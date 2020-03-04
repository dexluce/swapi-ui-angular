import { Action } from '@ngrx/store';

import { Filters, Item } from '../models';

export enum ESwapiActions {
  Search = "[Swapi] search",
  SearchStart = "[Swapi] search started",
  SearchError = "[Swapi] search error",
  SearchSuccess = "[Swapi] search succed",
  SearchChanged = "[Swapi] search changed",
  FiltersChanged = "[Swapi] filters changed",
}

export class Search implements Action {
  public readonly type = ESwapiActions.Search;
}

export class SearchStart implements Action {
  public readonly type = ESwapiActions.SearchStart;
}

export class SearchError implements Action {
  public readonly type = ESwapiActions.SearchError;
}

export class SearchSuccess implements Action {
  public readonly type = ESwapiActions.SearchSuccess;
  
  constructor(public payload: Array<Item>) {}
}

export class SearchChanged implements Action {
  public readonly type = ESwapiActions.SearchChanged;
  
  constructor(public payload: string) {}
}

export class FiltersChanged implements Action {
  public readonly type = ESwapiActions.FiltersChanged;
  
  constructor(public payload: Filters) {}
}

export type SwapiActions = Search | SearchStart | SearchError | SearchSuccess | SearchChanged | FiltersChanged;