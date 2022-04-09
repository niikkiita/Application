import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }
  
  registerProject(Projectdetails:any):Observable<Object>{
    //console.log(user);
    return this.http.post<any>("http://localhost:8080/projects/addproject",Projectdetails);
  }


}
