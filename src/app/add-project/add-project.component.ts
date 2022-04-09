import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private authservice:AuthService, private loginservice:LoginService) { }

  Projectdetails={
    pId:"" ,
    pName:"",
    pDescription:"",
	  teamSize:"",
	  teamLimit:"",
    startDate:"",
    proposedDate:""

  }
  logout()
  {
    this.authservice.logoutUser();
  }
  
  ngOnInit(): void {
  }


  userRegister() {
    this.loginservice.registerProject(this.Projectdetails).subscribe(
      response => {
        alert("Details Added")

        //this.router.navigate(['./dashboard']);
      },
      error => {
        alert("not correct deatils")
      }
      );
  }
}
