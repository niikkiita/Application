import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

// To fetch the data from profile for leave
public logginUserIdentification!:string;
public loggInUserId!:number;
public newProfileCheckId!:number;
// to provide loginSystemuser email id for universally (globally) to project 
 updateApprovalMessage(email: string) {
 this.logginUserIdentification=email;
  }
  
// get userId for universal(globally) use 
getUserId(email:string)
{
  return this.http.get<any>("http://localhost:8080/user/getuserid/"+email)
}

resetPassword(email:any):Observable<any>{
  console.log(email);
  return this.http.get("http://localhost:8080/user/forgot-password/"+email,{responseType:'text' });    
}

updatePassword(token:any,password:any):Observable<any>{
  console.log(password);
  console.log(token);
  return this.http.put<any>('http://localhost:8080/user/reset-password/'+token,password);
}
setIdentificationId(id:number):Observable<any>{
 
  return this.http.put<any>('http://localhost:8080/user/reset-password/'+id,id);
}

}
