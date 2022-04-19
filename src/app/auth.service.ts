import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  User = new BehaviorSubject<any>(null);
  constructor(private http:HttpClient,private router:Router) { }
  logoutUser(){
    localStorage.removeItem('form-data');
    localStorage.removeItem('form-data1');
    this.router.navigate(['./home'])
  }

 onSubmit()
 {
  if (!(localStorage.getItem('form-data')&& localStorage.getItem('form-data1')))
  return false;
return true;

 }


  public get UserSubjectValue() {
    if (this.User) {
      return this.User.value;
    } else {
      return null
    }
  }

  SignInUser(data: any){
    this.User.next(data);
  }

  SignOutUser(){
    this.User.next(null);
  }
  

}
