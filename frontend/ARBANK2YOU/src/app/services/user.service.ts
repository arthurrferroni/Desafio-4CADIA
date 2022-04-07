import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../shared/models/user';

const baseUrl = 'user/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:any;

  loginChange:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private httpClient:HttpClient) { }

  getLoggedUser() {
    return this.user;
  }

  logout() {
    this.user = null;
    this.loginChange.next(false);
  }

  login() {
    this.user = {name:'User Name'};
    this.loginChange.next(true);
  }

  registerNewUser(user:User) {
    return this.httpClient.post(environment.apiUrl + baseUrl, user);
  }
}
