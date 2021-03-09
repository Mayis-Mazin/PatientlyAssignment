import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from './../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(environment.api);
  }

  getUser(id: any) {
    return this.http.get(`${environment.api}/${id}`);
  }
}
