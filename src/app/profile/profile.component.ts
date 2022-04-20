import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { UserService } from '../user.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadServiceService } from '../file-upload-service.service';
import { ThisReceiver } from '@angular/compiler';
import { LoginService } from '../login.service';
import { TaskService } from '../task.service';
import { RegisterService } from '../register.service';
import { ProjectsService } from '../projects.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  email!: string;
  projectName!: string;
  projectId!: number;
  counter!: number;
  fileInfos?: Observable<any>;
  identificationId!: number;
  newProfileCheckId!: number;
  constructor(private userService: UserService, private authservice: AuthService, private registerService: RegisterService, private taskService: TaskService, private loginService: LoginService, private projectService: ProjectsService, private uploadService: FileUploadServiceService) { }

  ngOnInit(): void {
    this.email = this.loginService.logginUserIdentification;
    //this.counter=1;
    this.getUserNameById();
    this.fileInfos = this.userService.getFiles();
  }

  profile: Profile = new Profile();

  addprofile(): void {
    this.profile.currentProject = this.projectName;
    this.profile.currentProjectId = this.projectId;
    if (this.loginService.newProfileCheckId === 0) {
      console.log(this.profile);
      this.userService.addprofile(this.profile).subscribe(
        data => {
          this.newProfileId();
          this.getUserNameById();
          alert("Saved Success")
        },
        error => {
          alert("Not saved");
        });
    }
    else {
      alert("cant save");
    }
  }

  newProfileId() {
    this.userService.changeIdentificationId(this.loginService.loggInUserId, 1).subscribe(
      data => {

      }, error => alert("Id not changed")
    )
  }


  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.userService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.userService.getFiles();
            }
          },

          error: (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          }
        });
      }
      this.selectedFiles = undefined;
    }
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }


  logout() {
    this.authservice.logoutUser();
  }
  getUserNameById() {
    let userId = this.loginService.loggInUserId;
    this.loginService.getUserId(this.email).subscribe(
      data => {
        this.profile.userid = userId;
        this.profile.userName = data.name;
        this.profile.emailId = data.emailId;
        this.loginService.newProfileCheckId = data.newProfileCheckId;
        console.log(data.newProfileCheckId);
        console.log(data, userId)
      },
      error => {

      }
    );
  }

  getProject() {
    this.projectService.getProject(this.projectId).subscribe(
      data => {
        console.log(data)
        this.projectName = data.pName;
      }
    )
  }

  getProfile() {

  }
  // setIdentificationId()
  // {
  //   this.identificationId=1;
  //  this.loginService.setIdentificationId(this.identificationId,this.projectId).subscribe(
  //   data => {

  //   }
  // ) 
  // }

}