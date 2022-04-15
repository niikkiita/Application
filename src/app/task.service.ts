import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './models/profile';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  gettaskData(id:number):Observable<any>{
    return this.http.get<any>('http://localhost:8080/task/getprofiledata/'+id)    ;
  }
  addTaskDetails(task:any):Observable<Object>{
    console.log(task);
    return this.http.post<any>("http://localhost:8080/task/addtask",task);
  }
  sendEmail(email:string):Observable<Object>{
    console.log(email);
    return this.http.post<string>('http://localhost:8080/task/email',email);
  }
  getTasksList():Observable<any>{
    return this.http.get<any>('http://localhost:8080/task/getalltasks');
  }
}
