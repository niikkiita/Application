import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Documents } from '../models/documents';
import { Profile } from '../models/profile';
import { UserService } from '../user.service';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ProjectsService } from '../projects.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  
  documentObj: Documents = new Documents();
  profile:Profile=new Profile();
  profileObj: Profile = new Profile();
  profileArray: Profile[] = [];
  projectId!:number;
  userId!:number;
  project:Project=new Project();
  documentArray: Documents[] = [];
  fileInfos!: Observable<any>;
  selectedFiles?: FileList;
  
  constructor(private userService: UserService, private projectService:ProjectsService,  private authservice: AuthService) { }

  ngOnInit(): void {
    this.getAllProfileData();
    this.fileInfos=this.userService.getFiles();
    
  }

  getAllProfileData() {
    this.userService.getAllProfileData().subscribe(
      data => {
        this.profileArray = data;
        this.profileObj = data;
        console.log(data)
       
      }, error => alert("OnLoad Not working")
    )
  }

  getFiles()
  {
    this.userService.getFiles().subscribe(
      data=>{
        this.fileInfos=data;

      },error=>alert("error")
    )
  }


  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  logout() {
    this.authservice.logoutUser();
  }


  getProjectName(){
    this.projectService.getProject(this.projectId).subscribe(
      data => {
                this.project=data;
      }
      ,
    error =>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...Something went wrong!',
        text: 'You might have enter Wrong Project Id. pls make sure and enter correct Project Id',
      })
    });
  }

new1(){
this.getProjectName();
this.intrnalChange();

  }

  getProfileDataById()
  {
this.userService.getProfilForAdmin(this.userId).subscribe(
  data => {
    console.log(data);
    this.profile=data;
    if(data===null)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...Something went wrong!',
        text: 'You might have enter Wrong User Id. pls make sure and enter correct User Id',
      })
    }
  },
error => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...Something went wrong!',
    text: 'You might have enter Wrong User Id. pls make sure and enter correct User Id',
  })

});
  }


  intrnalChange(){
    Swal.fire({
      title: 'Sure !!... You want to apply?',
      text: 'Once you applied, you will not able to revoke leave' ,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
      showClass: {
        popup: 'animate__animated animate__fadeIn'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut'
      }
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.doapply();
        Swal.fire('Applied!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Not Applied, dont worry leave has not been applied', '', 'info')
      }
    })

  }
doapply()
{
  this.profile.currentProject=this.project.pName;
  this.profile.currentProjectId=this.project.pId;
  
this.userService. changeProjectIn(this.userId, this.profile).subscribe(
  data => {
    console.log(this.profile);
  },
  error =>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...Something went wrong!',
      text: 'we are facing some issus currently, pls change employee project after some time',
    })
  });
}
}