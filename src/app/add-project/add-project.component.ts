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

  project: Project=new Project();
  constructor(private authservice:AuthService, private projectservice:ProjectsService) { }
  
  ngOnInit(): void {
  }

  userRegister() {
    this.projectservice.registerProject(this.project).subscribe(
      response => {
        alert("Details Added")
      },
      error => {
        alert("not correct deatils")
      }
      );
  }
  logout()
  {
    this.authservice.logoutUser();
  }
}
