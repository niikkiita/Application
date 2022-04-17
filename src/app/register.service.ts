import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

 // baseurl="http://localhost:8080/user/register";
  constructor(private httpClient:HttpClient) {   {
    
  }}

  registerUser(user:User):Observable<Object>{
    console.log(user);
    return this.httpClient.post("http://localhost:8080/user/register",user);
  }

  // get user data to UPDATE pRofile
  getUserData(id:number):Observable<any>
  {
    return this.httpClient.get("http://localhost:8080/user/getuser/"+id);
  }
}
