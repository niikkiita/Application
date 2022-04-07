import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost/8080';

  constructor(private http: HttpClient) {}
 
 

  logInThe(credentials:any):Observable<any>
  {
  
      return this.http.post<any>("http://localhost:8081/api/v3/login",credentials);
    
  }

 
}
