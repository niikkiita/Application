import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { LeaveService } from '../leave.service';
import { AcceptLeave } from '../models/accept-leave';
import { Leaves } from '../models/leaves';

@Component({
  selector: 'app-manage-leave',
  templateUrl: './manage-leave.component.html',
  styleUrls: ['./manage-leave.component.css']
})
export class ManageLeaveComponent implements OnInit {

  leave: Array<Leaves> = new Array();
  //Leaves.description: String='';
  leaveDetail !: FormGroup;
  leaveObj: Leaves = new Leaves();
  leaveList: Leaves[] = [];

  Acceptleave: AcceptLeave = new AcceptLeave();
  leaveObj1: any;

  constructor(private leaveservice: LeaveService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.getData();

    this.leaveDetail = this.fb.group({
      userId: [''],
      leaveId!: [''],
      projectName: [''],
      description: [''],
      username: [''],
      leaveDateFrom: [''],
      leaveDateTo: ['']
    });
  }
  getData() {
    this.leaveservice.getLeaveList().subscribe(
      data => { this.leaveList = data }, error => alert("cant fetch")
    )
  }


  postdata() {
    this.leaveservice.postLeave(this.Acceptleave).subscribe(
      data => { this.Acceptleave = data }, error => alert("cant post")
    )
  }
  editdata(leave: Leaves) {
    this.leaveDetail.controls['description'].setValue(leave.description)
  }
 
  updateData() {
    this.leaveservice.updateData(this.leaveObj.leaveId,this.leaveObj).subscribe({
      next:(res)=>{

        console.log(res)
      },
      error:(e)=>alert("not saved")
    })
  }
  
}





