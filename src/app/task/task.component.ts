
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';
import { Task } from '../models/task';
import { TaskService } from '../task.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  userId!: number;
  emailId!: string;
  taskObj: Task = new Task();
  taskArray: Task[] = [];
  status = "completed";
  myDate = new Date();

  Date1 = this.myDate.toLocaleDateString();
  constructor(private taskservice: TaskService, private loginservice: LoginService, private userService: UserService, private authservice:AuthService) { }

  ngOnInit(): void {
    //let date=this.datepipe.transform(this.myDate,'yyyy-MM-dd');
    console.log();
    this.emailId=this.loginservice.logginUserIdentification;
    this.userId=this.loginservice.loggInUserId;
    this.gettasks();
  }

  // addEmail() {
  //   //console.log(this.emailId);
  //   this.userService.getProfileData(this.emailId).subscribe(data => {
  //     //console.log(data)
  //     this.userId = data.userid;
  //     this.gettasks();
  //   }, error => alert("not Register"));
  // }
  gettasks() {
    this.taskservice.gettaskById(this.userId).subscribe(data => {
      // console.log(data)
      this.taskArray = data;
    }, error => alert("not Register"));
  }
  updateStatus() {
    this.taskObj.taskStatus = "completed"
    this.taskObj.completionDate = this.Date1
    this.taskservice.updateTaskStatus(this.taskObj.taskId, this.taskObj).subscribe(data => {

      console.log("Task Added")
      this.taskservice.sendEmailByUser(this.taskObj.taskId,this.taskObj).subscribe(
        data => {
          alert("email sent")
        }, error => alert("email has not sent"));

    }, error => alert(error))
  }

  logout()
  {
    this.authservice.logoutUser();
  }
}
