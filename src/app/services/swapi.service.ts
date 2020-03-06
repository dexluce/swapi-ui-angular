import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from '../store/swapi.state';
import { GetItemByUrlStart, GetItemByUrlSuccess, GetItemByUrlError } from '../store/swapi.actions';
import { Item } from '../models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private snackBarService: MatSnackBar
  ) {}

  private formatErrors() {
    this.snackBarService.open("An error occure while fetching data, please refresh the browser");
  }

  // Todo: get types for Http promise from Swapi
  get(path: string, params: HttpParams = new HttpParams()): Promise<any> {
    return this.http.get(`${environment.api_url}${path}`, { params }).toPromise()
    .catch(() => this.formatErrors())
  }

  getItemByUrl(url: string): Observable<Item> {
    // first we get the item from store
    return this.store.select(state => state.app.items.find(item => item.url === url))
    .pipe(
      tap(item => {
        // if we don't have the item in the store, we call it from api
        if (!item) {
          this.store.dispatch(new GetItemByUrlStart());
          this.http.get(url).toPromise()
          .then((data: any) => {
            this.store.dispatch(new GetItemByUrlSuccess(data));
            return item;
          })
          .catch(e => {
            this.store.dispatch(new GetItemByUrlError());
            this.formatErrors();
          })
        } else {
          return item;
        }
      })
    );
  }
}
