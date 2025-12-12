import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Tutorial {
  constructor(private http: HttpClient) { }

  getAngular(): Observable<any> {
    return this.http.get('json/angular.json');
  }

  getJavaScrript():Observable<any>{
    return this.http.get('json/js_es6.json');
  }

  getJascriptBasic():Observable<any>{
    return this.http.get('json/jascript_basic.json')
  }
}
