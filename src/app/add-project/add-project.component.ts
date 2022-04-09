import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Project } from '../models/project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private authservice:AuthService, private projectservice:ProjectsService) { }

  project : Project =new Project();
  
  logout()
  {
    this.authservice.logoutUser();
  }
  
  ngOnInit(): void {
  }


  userRegister() {
    this.projectservice.registerProject(this.project).subscribe(
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
