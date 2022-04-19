import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  

  constructor(private loginService:LoginService,private userService:UserService,private router:Router) { }
 // token: String | undefined;
  user:User=new User();
  otp!:number;
  ngOnInit(): void {
  }

sendotp()
{
  this.userService.genarateotp(this.user.emailId).subscribe(
    data =>{
      this.user=data;
      console.log(data)
    },
    error => {
      console.log(error)
    }
  )
}

find()
{
if(this.otp!=this.user.otp)
alert("otp n corre")
else
{
this.userService.password(this.user).subscribe(
  data =>{
    alert("done");
    this.router.navigate(['./dashboard']);
    
  },
  error =>{
    alert("n done")
  }
);
}

}

}
