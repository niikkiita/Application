import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  log:any;
  reg:any;

  constructor(private matDialog:MatDialog)
  {}
  ngOnInit(): void {
  }

  onClick(log: any)
  {
    this.matDialog.open(LoginComponent);
  }

  onClickReg(reg: any)
  {
    this.matDialog.open(RegisterUserComponent);
  }
}
