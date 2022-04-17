import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Profile } from '../models/profile';
import { Project } from '../models/project';
import { ProjectsService } from '../projects.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})
export class AvailableComponent implements OnInit {

  

  constructor( private projectsService:ProjectsService, private userService:UserService,private loginService:LoginService) { }

  projectId!:number;
  profile:Profile=new Profile();
  projectTeamSize!:number;
  limit!:number;
  alertMessage=".";
  count!:number;

array!:Profile[];
  userId=this.loginService.loggInUserId;
  projects: Array<Project> = new Array();

  ngOnInit(): void {
    this.reloadData();
    
  }

  reloadData(){
    this.projectsService.getProjectList().subscribe(
      data=>{
        console.log(data);
        this.projects=data;
      },
    error=>console.log("exception occure")
    )
  }

  getProject()
  {
    
   this.okValodateForCountOfProject();
    this.alertMessage=".";
    this.projectsService.getProject(this.projectId).subscribe(
      data =>{
      this.profile.newProject=data.pName;
      this.projectTeamSize=data.teamSize;
      this.limit=data.teamLimit;
      },
      error =>{
        console.log("could not find data")
      }
    );
  }
  // Apply for Project
  applyForNewProject() {
  console.log(this.profile)
    this.userService.applyProject(this.userId, this.profile).subscribe({
      next: (res) => {
        alert("Applied Successfuly to new Project")
      },
      error: (e) => alert(" not applied")
    });
   
  }

  okValidate()
  {
   // this.okValodateForCountOfProject();
    console.log(this.projectId,this.count)
    if(this.projectId>this.count)
    this.alertMessage="cant apply,No Project is there with Project Id you have entered.Pls check Project Id once and apply again "
   else if(this.projectTeamSize<this.limit)
   {
   this.applyForNewProject();
   console.log(this.projectTeamSize,this.limit)
   }
   else
   this.alertMessage="cant apply, no space "
  }

  okValodateForCountOfProject()
  {
    this.projectsService.getProjectList().subscribe(
      data => {
this.array=data;
this.count=this.array.length;
console.log(this.count)
      }
    );
    
  }

}


