import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  
  registerProject(project:Project):Observable<Object>{
    //console.log(user);
    return this.http.post<any>("http://localhost:8080/projects/addproject",project);
  }
  

  getProjectList(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/projects/projectslist');
  }


}
