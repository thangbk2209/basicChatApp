import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, ResponseOptions, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';
const API_URL = environment.apiUrl;
// import { AppConfig } from '../config/app.config';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers: Headers;
  private apiUrl: string;
  private options: RequestOptions;
  results: any;
  constructor(
    private _http: Http
  ) {
    
   }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
  public mapResponseDefault(res: Response): any | null {
    let out = null;
    try {
      out = res.json();
    } catch (e) {
      console.log("Error mapResponseDefault");
    }
    return out;
  };
  private setRequestOptions() {
    this.headers = new Headers({
      'Content-Type': 'application/json',
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  // public createUser(body: any, mapResponse?: any){
  //   // return this._http.post('http://localhost:3000/user', body);
  //   return this._http
  //     .get(API_URL + '/user').subscribe(data => {
  //       // Read the result field from the JSON response.
  //       this.results = data;
  //     });
  //     // .map(mapResponse)
  //     // .catch(this.handleError);
  // }
}