import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isAuthenticated = false;

  constructor(private snackBarService: MatSnackBar) {
    this.populate();
  }

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

  async login(credentials: {password: string, username: string}): Promise<boolean> {
    if (credentials.password === 'admin' && credentials.username === 'admin') {
      // we should do a api call to auth. But for now we just login by default
      this.saveToken("Random false token just for this login without api")
      this.isAuthenticated = true;
      return true;
    } else {
      this.snackBarService.open("Wrong credentials. Try admin:admin")
    }
  }
}
