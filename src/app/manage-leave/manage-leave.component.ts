import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
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


  constructor(private leaveservice: LeaveService, private fb: FormBuilder,private authservice:AuthService) {

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
        
        console.log(res)
      }
    })
  }
  
  declineWithVal()
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
        this.updateData();
        Swal.fire('Leave Declined!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Not Declined!', '', 'info')
      }
    })
  }


  approveWithVal()
  {
    Swal.fire({
      title: 'Do you really want to Approve leave?',
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
        this.onApproved();
        Swal.fire('Leave Approved Successfully!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Not Approved', '', 'info')
      }
    })
  }



  onApproved() {
    this.leaveObj.status = "Approved";

    this.leaveservice.updateStatus(this.leaveObj.leaveId, this.leaveObj).subscribe({
      next: (res) => {
        //res.leaveObj.reason=this.leaveObj.reason;
        
      }
       

    })
  }
  logout() {
    this.authservice.logoutUser();
  }
}
