import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
userId!:number;

  constructor(private taskservice:TaskService,private loginservice:LoginService) { }

  ngOnInit(): void {
    this.getAllTaskData();
  }

getAllTaskData()
{
this.taskservice.getTasksList
}

// getUserData() {
//   this.taskservice.gettaskData(this.userid).subscribe
//     (
//       data => {
//         this.userid = data.userid;
//       }, error => alert(error)
//       );
// }

}
