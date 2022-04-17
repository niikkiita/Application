import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    emailId: 'mayurr@gmail.com',
    password: 'password'
  }
  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    this.loginService.updateApprovalMessage(this.credentials.emailId);
    this.getUserId();   
    if ((this.credentials.emailId != "" && this.credentials.password != "") && (this.credentials.emailId != null && this.credentials.password != null)) {
      this.loginService.logInThe(this.credentials).subscribe(
        response => {
          alert("log in")

          this.router.navigate(['./dashboard']);
        },
        error => {
          alert("not correct deatils")
        }
      );
      }
    else {
      console.log("Empty or null values")
    }
  }

  getUserId()
  {
    this.loginService.getUserId(this.credentials.emailId).subscribe(
      data => {
        this.loginService.loggInUserId=data.userid;
        console.log(data.userid)
      }
    )
  }
 
  ngOnInit(): void {
    // for getting data off profile for leave
   
  }

}
