import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Profile } from '../models/profile';
import { Task } from '../models/task';
import { TaskService } from '../task.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {

  constructor(private userService: UserService,private taskService:TaskService,private authservice:AuthService) { }
  profileObj: Profile = new Profile();
  profileArray: Profile[] = [];
  taskObj: Task = new Task();
  taskArray: Task[] = [];
  email:Profile[]=[];
  profileObj1:Profile=new Profile();
  ngOnInit(): void {
  this.getAllProfileData();  
  }

  getAllProfileData(){
    this.userService.getAllProfileData().subscribe(
      data => {
        this.profileArray=data;
       // this.email=data.emailId;
        console.log(data)
      }, error => alert("OnLoad Not working")
    )
  }

  //Get All profile Data by project Id for searching 
  getProfileData() {
    this.userService.getProfile(this.profileObj.currentProjectId).subscribe(
      data => {
        this.profileArray = data 
        console.log(data);
      }, error => alert("cant fetch")
    )
  }

  //getting user data for saving tasks
  email1!:string;
  getUserData() {
    this.taskService.gettaskData(this.taskObj.userid).subscribe
      (
        data => {
          this.taskObj.userid = data.userid;
          this.taskObj.currentProjectName = data.currentProject;
          this.taskObj.userName = data.userName;
          this.taskObj.currentProjectId=data.currentProjectId;  
          this.taskObj.currentProjectName=data.currentProject;  
          this.email1=data.emailId;
          this.taskObj.taskStatus="Pending";
        }, error => alert(error)
        );
  }
  
  addTaskWithVal()
  {
    Swal.fire({
      title: 'Sure !!... All deatils are correct?',
      text: 'Make sure, You have entered correct deatils' ,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
      showClass: {
        popup: 'animate__animated animate__bounceIn'
      },
      hideClass: {
        popup: 'animate__animated animate__bounceOut'
      }
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.addTask();
        Swal.fire('Task Added Successfully!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Task not added', '', 'info')
      }
    })
  }


  addTask(){
    this.taskService.addTaskDetails(this.taskObj).subscribe
    (
      data=>{
        
        console.log("Task Added")
        this.taskService.sendEmail(this.email1).subscribe(
          data=>{
            alert("email sent")
          },error=>alert("email has not sent")
        )
      },error=>alert(error)
    );
  }
  logout() {
    this.authservice.logoutUser();
  }


}
