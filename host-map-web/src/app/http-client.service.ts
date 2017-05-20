import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpClientService {

  constructor(private _http: Http) {
  }

  get(url: string) {
    return this._http.get(url)
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  post(url: string, data: any) {
    const body = JSON.stringify(data);

    return this._http.post(url, body, {headers: HttpClientService.getHeaders()})
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  put(url: string, data: any) {
    const body = JSON.stringify(data);

    return this._http.put(url, body, {headers: HttpClientService.getHeaders()})
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  delete(url: string) {
    return this._http.delete(url, {headers: HttpClientService.getHeaders()})
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  static getHeaders(): Headers {
    return new Headers();
  }
}
