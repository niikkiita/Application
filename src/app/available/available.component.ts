import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';
import { Profile } from '../models/profile';
import { Project } from '../models/project';
import { ProjectsService } from '../projects.service';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import 'animate.css';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})
export class AvailableComponent implements OnInit {



  constructor(private projectsService: ProjectsService, private authservice: AuthService, private userService: UserService, private loginService: LoginService) { }

  projectId!: number;
  profile: Profile = new Profile();
  projectTeamSize!: number;
  limit!: number;
  alertMessage = ".";
  count!: number;

  array!: Profile[];
  userId = this.loginService.loggInUserId;
  projects: Array<Project> = new Array();

  ngOnInit(): void {
    this.reloadData();
    this.Id=this.loginService.loggInUserId;
    console.log(this.Id,"h")
    this.getProfileData(this.Id);

  }

  reloadData() {
    this.projectsService.getProjectList().subscribe(
      data => {
        console.log(data);
        this.projects = data;
      },
      error => console.log("exception occure")
    )
  }

  getProject() {

    this.okValodateForCountOfProject();
    this.alertMessage = ".";
    this.projectsService.getProject(this.projectId).subscribe(
      data => {

        this.profile.newProject = data.pName;
        this.profile.newProjectId = data.pId;
        this.profile.projectChangeId = 1;
        this.projectTeamSize = data.teamSize;
        this.limit = data.teamLimit;
      },
      error => {
        console.log("could not find data")
      }
    );
  }
  // Apply for Project


  applyForNewProject() {
    console.log(this.profile)
    this.userService.applyProject(this.userId, this.profile).subscribe({
      next: (res) => {
      },
      error: (e) => alert(" not applied")
    });

  }

  okValidate() {
    console.log(this.projectTeamSize+1,this.limit+1)
    // this.okValodateForCountOfProject();
    console.log(this.projectId, this.count)
    if (this.projectId > this.count)
      this.errorMessageForWrongPId();
    // this.alertMessage="cant apply,No Project is there with Project Id you have entered.Pls check Project Id once and apply again "
    else if (this.projectTeamSize === this.limit)
    this.errorMessageForTeamLONow();
    else
    {
      Swal.fire({
        title: 'Sure !!... You want to apply?',
        text: 'Once you applied, you will not able to revoke application',
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
          this.applyForNewProject();
          Swal.fire('Applied!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Not Applied, dont worry Changes  are not saved', '', 'info')
        }
      })
    }
     
  }

  okValodateForCountOfProject() {
    this.projectsService.getProjectList().subscribe(
      data => {
        this.array = data;
        this.count = this.array.length;
        console.log(this.count)
      }
    );

  }
  logout1() {
    this.authservice.logoutUser();
  }
  logout() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to log out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!',
      showClass: {
        popup: 'animate__animated animate__flip'
      },
      hideClass: {
        popup: 'animate__animated animate__flipOutX'
      }
    }).then((result) => {
      if (result.isConfirmed) {

        this.logout1();
        Swal.fire(
          'Logout!',
          'Your have been logout from system.',
          'success'
        )

      }
    });
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

  errorMessageForTeamLONow() {
    Swal.fire({
      title: 'Sorry..!! No Openings at this time',
      text: 'keep visiting, you will might be able to be part of this growing team and give your contribution in future ',
      showClass: {
        popup: 'animate__animated animate__rotateIn'
      },
      hideClass: {
        popup: 'animate__animated animate__rotateOut'
      }
    })
  }


Id!:number;
  getProfileData(emailId:number)
  {
this.userService.getProfilForAdmin(this.Id).subscribe(
 data =>{ 
   this.profile=data
   console.log(data);
 },
 error => {
   console.log("profile data coult not get, check login or not")
 }
)
  }
}


