import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    emailId:'',
    password:''
  }
  constructor( private loginService:LoginService, private router:Router) { }

onSubmit(){
if((this.credentials.emailId!="" && this.credentials.password!="") && (this.credentials.emailId!=null && this.credentials.password!=null))
{
this.loginService.logInThe(this.credentials).subscribe(
  response=>{
    alert("log in")
  },
  error=>{
    alert("not correct deatils")
  }
  );  
  

}
else
{
console.log("Empty or null values")
}

}

  ngOnInit(): void {
  }

}
