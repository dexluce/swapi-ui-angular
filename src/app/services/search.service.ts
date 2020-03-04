import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { Item, SwapiType } from '../models';
import { SwapiService } from './swapi.service';
import { AppState } from '../store/swapi.state';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private swapiService: SwapiService,
    private swapiStore: Store<AppState>,
  ) { }

  // Local search, search a specific type on the api
  private async _search(_type: SwapiType, _search: string): Promise<Array<Item>> {
    return this.swapiService.get(`/${_type}/?search=${_search}`)
    .then(data => data.results.map((result: Item) => ({...result, type: _type})))
  }

  // Global search, trigger all swapi type searchs
  public async search(): Promise<Array<Item>> {
    // Get search and filter from store
    return this.swapiStore.pipe(take(1)).toPromise().then(async ({ app: { filters, search } }) => {
      // Create a array of promises in order to trigger all search at once
      const searchs: Array<Promise<Array<Item>>> = [];
      // Get a search promise for each swapi types
      for (let type in SwapiType) {
        if (filters[type]) searchs.push(this._search(SwapiType[type.toString()], search));
      }
      // Trigger all types promise
      return (await Promise.all(searchs)).flat();
    })
  }
}
