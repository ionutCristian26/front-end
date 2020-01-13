import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public baseUrl = 'https://shipments-api.osc-fr1.scalingo.io/';
  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post(this.baseUrl + 'account/register', user);
  }

  login(user) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'aplication/x-www-form-urlencoded')

    return this.http.post(this.baseUrl + 'oauth2/generate', user, {headers: header});
  }

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('access_token', user.access_token);
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('access_token') !== null) {
      return true;
    } else {
      return false;
    }
  }
}
