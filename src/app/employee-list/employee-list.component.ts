import { Component, OnInit } from '@angular/core';
import { Documents } from '../models/documents';
import { Profile } from '../models/profile';
import { UserService } from '../user.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  documentObj:Documents=new Documents();
  profileObj:Profile= new Profile();
  profileArray:Profile[]=[];
  documentArray:Documents[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllProfileData();
   
  }
  
  getAllProfileData(){
    this.userService.getAllProfileData().subscribe(
      data => {
        this.profileArray=data;
        this.profileObj=data;
        console.log(data)
        this.getAllDocumentData();
      }, error => alert("OnLoad Not working")
    )
  }
  getAllDocumentData(){
    this.userService.getDocumentData().subscribe(
      data => {
        this.documentArray=data;
        this.profileObj.currentProjectId=data.documentId;
        this.documentObj=data;
        console.log(data)
      }, error => alert("OnLoad Not working")
    )
  }
}
