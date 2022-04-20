import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Leaves } from './models/leaves';
import { Profile } from './models/profile';
import { Project } from './models/project';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  applyLeave(leave: Leaves): Observable<Object> {
    console.log(leave);
    return this.http.post("http://localhost:8080/leave/addleave", leave);
  }


  getProfileData(id: String): Observable<any> {
    return this.http.get<any>('http://localhost:8080/leave/getprofiledata/' + id);
  }


  getLeaves(): Observable<any> {
    return this.http.get('http://localhost:8080/leave/getleaves');
  }


  addprofile(profile: Profile): Observable<Object> {
    return this.http.post('http://localhost:8080/profile/addprofile', profile)
  }

  getProfile(id: Number): Observable<any> {
    console.log(id);
    return this.http.get<any>('http://localhost:8080/profile/getProfile/' + id);
  }

  getAllProfileData(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/profile/getCompleteProfile');
  }


  getallProfileData(id: String): Observable<any> {
    console.log(id)
    return this.http.get<any>('http://localhost:8080/task/getallprofiledata/' + id);
  }


  // apply new project
  applyProject(profileId: number, profile: Profile): Observable<any> {
    return this.http.put<any>('http://localhost:8080/profile/applynewproject/' + profileId, profile);
  }

  // get ProjectsList whoe want change in projectt
  getProjectListByChangeId(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/profile/profilesbychangeid")
  }

  // change the project of employee Owner
  changeProjectInternally(profileId: number, profile: Profile): Observable<any> {

    return this.http.put<any>('http://localhost:8080/profile/changeproject/' + profileId, profile)

  }
  //to generate otp for reset password
  genarateotp(email: any): Observable<any> {
    return this.http.get<any>('http://localhost:8080/user/forget/' + email);
  }

  //to reset password by emailid
  password(user: any): Observable<any> {
    return this.http.put('http://localhost:8080/user/password/' + user.emailId, user)
  }
  changeIdentificationId(id: any, userId: any): Observable<any> {
    return this.http.put('http://localhost:8080/user/changeIdentification/' + id, userId)
  }


  //TO upload documents
  private baseUrl = 'http://localhost:8080';
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }


  // get progile for adminprojectchange
  getProfilForAdmin(id:number):Observable<any>
  {
return this.http.get<any>('http://localhost:8080/profile/profile/'+id);
  }

  changeProjectIn(profileId: number, profile: Profile): Observable<any> {

    return this.http.put<any>('http://localhost:8080/profile/applyinternalproject/' + profileId, profile)

  }

  
}
