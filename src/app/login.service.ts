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
 private approvalStageMessage = new BehaviorSubject('mayu');
 currentApprovalStageMessage = this.approvalStageMessage.asObservable();

 updateApprovalMessage(email: string) {
  this.approvalStageMessage.next(email)
  }
}
