import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
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

  private formatErrors(error: HttpErrorResponse) {
    if (error.type === 503) {
      this.snackBarService.open("It looks like the SWAPI server is down. Please try again in a moment.");
    } else {
      this.snackBarService.open("An error occure while fetching data, please refresh the browser");
    }
  }

   // Todo: get types for Http promise from Swapi
  private _get(rootPath: string, params: HttpParams = new HttpParams()): Promise<any> {
    return this.http.get(`${rootPath}`, { params }).toPromise()
    .catch((e) => this.formatErrors(e))
  }
 
  get(path: string): Promise<any> {
    return this._get(`${environment.api_url}${path}`);
  }

  getItemByUrl(url: string): Observable<Item> {
    // first we get the item from store
    return this.store.select(state => state.app.items.find(item => item.url === url))
    .pipe(
      tap(item => {
        // if we don't have the item in the store, we call it from api
        if (!item) {
          this.store.dispatch(new GetItemByUrlStart());
          this._get(url).then((data: any) => {
            this.store.dispatch(new GetItemByUrlSuccess(data));
            return item;
          })
          .catch(e => {
            this.store.dispatch(new GetItemByUrlError());
          })
        } else {
          return item;
        }
      })
    );
  }
}
