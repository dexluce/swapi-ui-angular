import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';

import {
  ESwapiActions,
  SearchError,
  SearchSuccess,
} from './swapi.actions';
import { SearchService } from '../services/search.service';

@Injectable()
export class SearchEffects {
  @Effect()
  search = this.actions.pipe(
    ofType(ESwapiActions.Search),
    switchMap(() => this.searchService.search()
      .then((items) => new SearchSuccess(items))
      .catch(() => new SearchError())
    )
  );

  constructor(
    private searchService: SearchService,
    private actions: Actions,
  ) { }
}