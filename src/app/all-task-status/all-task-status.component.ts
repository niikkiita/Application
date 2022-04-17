import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Task } from '../models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-all-task-status',
  templateUrl: './all-task-status.component.html',
  styleUrls: ['./all-task-status.component.css']
})
export class AllTaskStatusComponent implements OnInit {

  constructor(private taskservice:TaskService,private authservice:AuthService) { }
  taskObj:Task=new Task();
  taskArray:Task[]=[];
  ngOnInit(): void {
    this.getAllTask();
  }

  
  getAllTask(){
      this.taskservice.getTasksList().subscribe(
        data => { this.taskArray = data }, 
        error => alert("cant fetch")
      )
    }
  
    logout() {
      this.authservice.logoutUser();
    }
  
  }

