import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Leaves } from './models/leaves';
import { Profile } from './models/profile';


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
}
