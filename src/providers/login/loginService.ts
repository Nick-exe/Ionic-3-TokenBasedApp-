import { HttpClient, HttpResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';
import {Observable} from 'rxjs/observable';

@Injectable()
export class LoginProvider {

  baseUrl: string = 'http://localhost:57032/';

  constructor(public httpClient: HttpClient) {
    
  }

  login(userName: string, password: string, grant_type: string){
    return this.httpClient.post(this.baseUrl + 'token', 'username=' + userName + '&password=' + password + '&grant_type=' + grant_type)
    .map(response => <string>response)
    .catch(this.handleError)
  }

  private handleError(error: HttpResponse<any>){
    console.log(error);
    return Observable.throw(error.body || 'server error');
  }

}
