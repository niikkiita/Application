import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';
import { Leaves } from '../models/leaves';
import { Profile } from '../models/profile';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import 'animate.css';

@Component({
  selector: 'app-leaveplan',
  templateUrl: './leaveplan.component.html',
  styleUrls: ['./leaveplan.component.css']
})
export class LeaveplanComponent implements OnInit {
  leave: Leaves = new Leaves();
  leaves!:Leaves[];
  profile: Profile = new Profile();
  email!:string;
  startdate!:Date;
  endDate!:Date;
  reason!:string;

  constructor( private userService:UserService, private loginService:LoginService, private authservice:AuthService) { }

  ngOnInit(): void {
    
    this.email=this.loginService.logginUserIdentification;
    this.relloadData();
    this.getLeavesData();
  }
  relloadData()
  {

    this.userService.getProfileData(this.email).subscribe
    (
      data => {
        this.leave.userid=data.userid;
        this.leave.projectName=data.currentProject;
        this.leave.userName=data.userName;
        console.log(data);
      }, error =>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      });
  }

signInAddLeavePlusReloaddata()
{
  this.addLeave();
  this.getLeavesData();
}
  addLeave() {
    
    this.leave.status="unapproved";
    this.userService.applyLeave(this.leave).subscribe(
      data => { 
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...Something went wrong!',
        text: 'Leave has not been sent',
      })
    });
  }

getLeavesData()
{
  this.userService.getLeaves().subscribe(
  data => {
    this.leaves=data;
  },
  error => {
  }
  )
}

date=new Date();
GivenDate = '2018-02-22';
//var CurrentDate = new Date();
GivenDate1 = new Date(this.GivenDate);
sss()
{
  
if(this.GivenDate1<this.date)
alert("h");
alert(this.leave.startDate+" /"+this.GivenDate)
}

logout()
{
  this.authservice.logoutUser();
  
}

addLeaveWithValidation()
{
  Swal.fire({
    title: 'Sure !!... You want to apply?',
    text: 'Once you applied, you will not able to revoke leave' ,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
    showClass: {
      popup: 'animate__animated animate__fadeIn'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOut'
    }
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.signInAddLeavePlusReloaddata();
      Swal.fire('Applied!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Not Applied, dont worry leave has not been applied', '', 'info')
    }
  })
}

}
