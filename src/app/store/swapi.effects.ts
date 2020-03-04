import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';

import {
  ESwapiActions,
  SearchStart,
  SearchError,
  SearchSuccess,
  Search
} from './swapi.actions';
import { SearchService } from '../services/search.service';

@Injectable()
export class SearchEffects {
  @Effect()
  search = this.actions.pipe(
    ofType<Search>(ESwapiActions.Search),
    switchMap(() => {
      new SearchStart();
      return this.searchService.search()
        .then((httpResult) => new SearchSuccess(httpResult))
        .catch(() => new SearchError())
    }),
  );

  constructor(
    private searchService: SearchService,
    private actions: Actions,
  ) { }
}