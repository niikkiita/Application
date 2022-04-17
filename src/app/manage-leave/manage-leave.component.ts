import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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


  constructor(private leaveservice: LeaveService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.getData();

    this.leaveDetail = this.fb.group({
      userid: [''],
      leaveId!: [''],
      projectName: [''],
      reason: [''],
      userName: [''],
      startDate: [''],
      endData: ['']
    });
  }
  getData() {
    this.leaveservice.getLeaveList().subscribe(
      data => { this.leaveList = data }, error => alert("cant fetch")
    )
  }


  

  updateData() {
    this.leaveObj.status = "Declined";
    this.leaveservice.updateData(this.leaveObj.leaveId, this.leaveObj).subscribe({
      next: (res) => {
        alert("Done")
        console.log(res)
      },
      error: (e) => alert("not saved")
    })
  }
  
  onApproved() {
    this.leaveObj.status = "Approved";

    this.leaveservice.updateStatus(this.leaveObj.leaveId, this.leaveObj).subscribe({
      next: (res) => {
        //res.leaveObj.reason=this.leaveObj.reason;
        alert("status has been sent successfully")
      },
      error: (e) => alert("status not saved ")

    })
  }
}
