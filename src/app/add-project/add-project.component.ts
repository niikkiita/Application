import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Project } from '../models/project';
import Swal from 'sweetalert2';
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
      },
      error => {
        
      }
      );
  }

  userRegisterWithVal()
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
        this.userRegister();
        Swal.fire('Project Added Successfully!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Project not added', '', 'info')
      }
    })
  }
  logout()
  {
    this.authservice.logoutUser();
  }
}
