import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isAuthenticated = false;

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
      this.isAuthenticated = true;
    }
  }

  login(credentials): Observable<boolean> {
    // we should do a api call to auth. But for now we just login by default
    this.saveToken("Random false token just for this login without api")
    this.isAuthenticated = true;
    return of(true);
  }
}
