import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Documents } from '../models/documents';
import { Profile } from '../models/profile';
import { UserService } from '../user.service';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  documentObj: Documents = new Documents();
  profileObj: Profile = new Profile();
  profileArray: Profile[] = [];
  documentArray: Documents[] = [];
  fileInfos!: Observable<any>;
  selectedFiles?: FileList;
  constructor(private userService: UserService, private authservice: AuthService) { }

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
  // getAllDocumentData() {
    //     data => {
    //   this.userService.getDocumentData().subscribe(
  //       this.documentArray = data;
  //     }, error => alert("OnLoad Not working")
  //   )
  // }

  // downloadFile(): void {
  //   this.userService.download(this.fileInfos).subscribe(
  //       blob => 
  //         {saveAs(blob)}
  //       ,error=>alert("error"));
  // }

  
  
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  logout() {
    this.authservice.logoutUser();
  }
}
