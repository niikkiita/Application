import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
  profiles:Profile[]=[];
  profile:Profile=new Profile();
  count!:number;

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


  getProfileWithVal()
  {
    Swal.fire({
      title: 'Do you really want to decline leave?',
      // text: 'Make sure, You have entered correct deatils' ,
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
        this.getProfile();
        Swal.fire('Applied Successfully!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Not applied', '', 'info')
      }
    })
  }




  getProfile()
  {
    
    return this.taskService.gettaskData(this.userId).subscribe(
      data => {
        console.log(data);
        this.profile.currentProject=data.newProject;
        this.profile.currentProjectId=data.newProjectId;
        this.profile.newProject="";
        this.profile.newProjectId=0;
        this.profile.projectChangeId=0; 
        this.count=data.length;        
      }
    )
  }

  applyWithVal()
  {
    
    Swal.fire({
      title: 'Do you really want to decline leave?',
      // text: 'Make sure, You have entered correct deatils' ,
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
        this.apply();
        Swal.fire('Applied Successfully!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Not applied', '', 'info')
      }
    })
  }

  errorMessageForWrongPId() {
    Swal.fire({
      title: 'Ohhhhh!!!... Project Id is wrong',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__rotateOut'
      }
    })
  }
apply()
{
return this.userService.changeProjectInternally(this.userId,this.profile).subscribe(
  {
    next: (res) => {
      console.log(res)
    },
    error: (e) => alert("not saved")
  });
}

}
