import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
const userURL='https://jsonplaceholder.typicode.com/users'
const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  public getUserData(){
    return this.http.get(userURL,httpOptions)
  }

  public getUsrData(id:any){
    console.log(userURL +'/'+id)
    return this.http.get(userURL+`/${id}`,httpOptions)

  }

}
