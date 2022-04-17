import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';
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
  //add task for employee
  addTaskDetails(task:any):Observable<Object>{
    console.log(task);
    return this.http.post<any>("http://localhost:8080/task/addtask",task);
  }
  //to send mail by assigning a mail
  sendEmail(email:string):Observable<Object>{
    console.log(email);
    return this.http.post<string>('http://localhost:8080/task/email',email);
  }
  
  getTasksList():Observable<any>{
    return this.http.get<any>('http://localhost:8080/task/getalltasks');
  }
  //get details from tasks by user id
  gettaskById(id:number):Observable<any>{
    console.log(id)
    return this.http.get<any>('http://localhost:8080/task/getAlltasksdata/'+id);
  }
  // update status of task by user
  updateTaskStatus(id:number,status:any):Observable<Object>{
    console.log(status)
    return this.http.put<any>('http://localhost:8080/task/update/'+id,status);
  }
  sendEmailByUser(id:any,obj:any):Observable<any>{
    return this.http.post<any>('http://localhost:8080/task/emailbyuser/'+id,obj);
  }

}
