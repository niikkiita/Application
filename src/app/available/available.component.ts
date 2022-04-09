import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employees';
import { UserService } from '../user.service';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})
export class AvailableComponent implements OnInit {

  

  constructor( private userService:UserService) { }
  employees: Array<Employee> = new Array();
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.userService.getProjectList().subscribe(
      data=>{
        console.log(data);
        this.employees=data;
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
