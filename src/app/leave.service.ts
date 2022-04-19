import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AcceptLeave } from './models/accept-leave';
import { Leaves } from './models/leaves';
const baseurl='http://localhost:8080/leave/update';
@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http:HttpClient) { }

  
  getLeaveList(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/leave/getleaves');
  }
  
  updateData(leaveId:number,description:Leaves):Observable<any>{
    console.log(description);
    return this.http.put<any>('http://localhost:8080/leave/update/'+leaveId,description);
  }
  updateStatus(leaveId:number,reason:Leaves):Observable<any>{
    return this.http.put<any>('http://localhost:8080/leave/updatestatus/'+leaveId,reason);
  }

  
}
