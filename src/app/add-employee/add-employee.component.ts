import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Profile } from '../models/profile';
import { TaskService } from '../task.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private userService:UserService, private taskService:TaskService,private authservice:AuthService) { }

  userId!:number;
  profiles!:Profile[];
  profile:Profile=new Profile();

  ngOnInit(): void {
    this.reloadData();
  }
  logout() {
    this.authservice.logoutUser();
  }



  reloadData(){
    this.userService.getProjectListByChangeId().subscribe(
      data=>{
        console.log(data);
        this.profiles=data;
      },
    error=>console.log("exception occure")
    )
  }


  getProfile()
  {
    return this.taskService.gettaskData(this.userId).subscribe(
      data => {
        this.profile.currentProject=data.newProject;
        this.profile.currentProjectId=data.newProjectId;
        this.profile.newProject="";
        this.profile.newProjectId=0;
        this.profile.projectChangeId=0;


        
      }
    )
  }

apply()
{
return this.userService.changeProjectInternally(this.userId,this.profile).subscribe(
  {
    next: (res) => {
      alert("Done")
      console.log(res)
    },
    error: (e) => alert("not saved")
  });
}

}
