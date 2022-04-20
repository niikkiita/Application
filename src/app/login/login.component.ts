import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  credentials = {
    emailId: '',
    password: ''
  }
  token!:string;
  constructor(private loginService: LoginService, private router: Router) { }

 
  onSubmit() {
    this.loginService.updateApprovalMessage(this.credentials.emailId);
        if ((this.credentials.emailId != "" && this.credentials.password != "") && (this.credentials.emailId != null && this.credentials.password != null)) {
      this.loginService.logInThe(this.credentials).subscribe(
        response => {
          localStorage.setItem('form-data', response.emailId );
          localStorage.setItem('form-data1', response.password);
          this.user=response;
          console.log(response)
          if(response===null){
            Swal.fire({
              icon: 'error',
              title: 'Oops...Wrong Credentials',
              text: 'Pls, Enter correct Sredentilas',
              footer: '<a href="/home">Why do I have this issue?</a>'
            })
          }
         if(response.authID==1)
         {
          Swal.fire(
            'WELCOME!',
            'You have logged in successfully!',
            'success'
          )
          this.router.navigate(['./admin-dashboard']);
         }
          else
        {
          Swal.fire(
            'WELCOME!',
            'You have logged in successfully!',
            'success'
          )
          if(this.loginService.newProfileCheckId===1)
          this.router.navigate(['./dashboard']);
          else
          this.router.navigate(['./profile']);
                }
        },
        error => {
          Swal.fire(
            'Are you connected to Internet?',
            'Pla,make sure you have stable internet connection',
            'question'
          )
        }
      );
      }
    else {
      Swal.fire('Pls Enter Email AND Password');
    }
    this.getUserId(); 
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


  ss()
  {
    const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'green',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
  })
   Toast.fire({
     color:'red',
    icon: 'success',
    title: 'Success'
  })
  }




  
  simpleAlert(){  
    //Swal.fire('Hello Angular');  
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    });
  } 
}



