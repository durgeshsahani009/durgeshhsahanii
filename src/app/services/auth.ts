import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  headerOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  private _registerUrl = "http://localhost:3001/api/user";
  private _loginUrl = 'http://localhost:3001/api/login';

  constructor(private http: HttpClient, private _router: Router) { }

  // Authentication Users
  postUsers(user: any) {
    return this.http.post<any>(this._registerUrl, user, this.headerOption)
  }
  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user, this.headerOption)
  }
  loggedIn() {
    return !!sessionStorage.getItem('token');
  }
  getToken() {
    return sessionStorage.getItem('token');
  }
  logoutUser() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    this._router.navigate(['/personal/profile/me/default']);
  }
}
