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
  
      return this.http.post<any>("http://localhost:8080/user/login",credentials);
    
  }

  registerProject(Projectdetails:any):Observable<Object>{
    //console.log(user);
    return this.http.post<any>("http://localhost:8080/api/v2/projects",Projectdetails);
  }

 
}
