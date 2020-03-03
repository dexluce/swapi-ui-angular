import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor() { }

  // This could be in a JWT service
  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  // This could be in a JWT service
  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  // Verify JWT in localstorage
  // This runs once on application startup.
  populate() {
    if (this.getToken()) {
      this.isAuthenticatedSubject.next(true);
    }
  }

  login(credentials): Observable<boolean> {
    // we should do a api call to auth. But for now we just login by default
    this.isAuthenticatedSubject.next(true);
    // We return a observable boolean. It's overkill for our use case but in real world, we would have an observable here.
    return of(true);
  }
}
