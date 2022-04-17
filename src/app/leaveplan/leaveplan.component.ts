import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';
import { Leaves } from '../models/leaves';
import { Profile } from '../models/profile';
import { UserService } from '../user.service';

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
      }, error => alert(error));
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
      alert("Successsfully user is registered")
    }, error => alert("not Register"));
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

logout()
{
  this.authservice.logoutUser();
}

}
