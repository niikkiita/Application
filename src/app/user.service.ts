import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Leaves } from './models/leaves';
import { Profile } from './models/profile';
import { Project } from './models/project';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }


  applyLeave(leave:Leaves):Observable<Object>
  {
    console.log(leave);
    return this.http.post("http://localhost:8080/leave/addleave",leave);
  }


  getProfileData(id:String): Observable<any> {
    return this.http.get<any>('http://localhost:8080/leave/getprofiledata/'+id);
  }
  

  getLeaves():Observable<any>
  {
    return this.http.get('http://localhost:8080/leave/getleaves');
  }


  addprofile(profile:Profile):Observable<Object>
  {
    return this.http.post('http://localhost:8080/profile/addprofile',profile)
  }

  getProfile(id:Number): Observable<any> {
    console.log(id);
    return this.http.get<any>('http://localhost:8080/profile/getProfile/'+id);
  }
  
  getAllProfileData():Observable<any>{
    return this.http.get<any>('http://localhost:8080/profile/getCompleteProfile');
  }

  getDocumentData():Observable<any>{
    return this.http.get<any>('http://localhost:8080/document/getDocuments');
  }

  // apply new project
  applyProject(profileId:number,profile:Profile):Observable<any>{
    return this.http.put<any>('http://localhost:8080/profile/applynewproject/'+profileId,profile);
  }
 
// get ProjectsList whoe want change in projectt
  getProjectListByChangeId():Observable<any>
  {
    return this.http.get<any>("http://localhost:8080/profile/profilesbychangeid")
  }

// change the project of employee Owner
changeProjectInternally(profileId:number,profile:Profile):Observable<any>
{

return this.http.put<any>('http://localhost:8080/profile/changeproject/'+profileId,profile)

}
}
