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
    emailId: '',
    password: ''
  }
  token!:string;
  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    this.loginService.updateApprovalMessage(this.credentials.emailId);
    //this.getUserId();
    if ((this.credentials.emailId != "" && this.credentials.password != "") && (this.credentials.emailId != null && this.credentials.password != null)) {
      this.loginService.logInThe(this.credentials).subscribe(
        data => {
          

    localStorage.setItem('form-data', data.emailId );
    localStorage.setItem('form-data1', data.password);
          if(this.loginService.newProfileCheckId===1)
          this.router.navigate(['./dashboard']);
          else
          this.router.navigate(['./profile']);
          alert("log in")
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

  getUserId() {
    this.loginService.getUserId(this.credentials.emailId).subscribe(
      data => {
        this.loginService.newProfileCheckId=data.newProfileCheckId;
        this.loginService.loggInUserId = data.userid;
        console.log(data.userid)
      }
    )
  }

  ngOnInit(): void {
    // for getting data off profile for leave

  }

 

}
