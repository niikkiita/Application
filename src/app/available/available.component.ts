import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})
export class AvailableComponent implements OnInit {

  

  constructor( private projectsService:ProjectsService) { }
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

  employee={
    projectId:'1',
    projectName:"string",
    projectDescription:"string",
    startDate:'1',
    praposedDate:'1',
    teamSize:'1',
    teamLimit:'3'
  }
// reload()
// {
// this.employees=this.data;
// }

}
