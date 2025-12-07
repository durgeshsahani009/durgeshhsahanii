import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Common {
  headerOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  private _stuUrl = 'http://localhost:3001/api/students';
  private _emailUrl = 'http://localhost:3001/send_email_form';

  constructor(private http: HttpClient, private _router: Router) { }

  // CONTACT FORM ON HOME PAGE
  getInTouch(data: any): Observable<any> {
    return this.http.post<any>(this._emailUrl, data, this.headerOption);
  }

}
