import { Action } from '@ngrx/store';

import { Item, SwapiType } from '../models';

export enum ESwapiActions {
  GetItemByUrlStart = "[Swapi] get item by id",
  GetItemByUrlSuccess = "[Swapi] get item by url success",
  GetItemByUrlError = "[Swapi] get item by url error",
  Search = "[Swapi] search",
  SearchStart = "[Swapi] search started",
  SearchError = "[Swapi] search error",
  SearchSuccess = "[Swapi] search succed",
  SearchChanged = "[Swapi] search changed",
  FiltersChanged = "[Swapi] filters changed",
}

export class GetItemByUrlStart implements Action {
  public readonly type = ESwapiActions.GetItemByUrlStart;
}

export class GetItemByUrlSuccess implements Action {
  public readonly type = ESwapiActions.GetItemByUrlSuccess;

  constructor(public payload: Item) {}
}

export class GetItemByUrlError implements Action {
  public readonly type = ESwapiActions.GetItemByUrlError;
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
  
  constructor(public payload: SwapiType) {}
}

export type SwapiActions = Search | SearchStart | SearchError | SearchSuccess | SearchChanged | FiltersChanged | GetItemByUrlStart | GetItemByUrlSuccess | GetItemByUrlError;