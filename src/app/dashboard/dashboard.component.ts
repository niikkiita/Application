import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

@Input() name!:string;

  constructor(private authservice:AuthService, private loginService:LoginService) { 
  }
  logout()
  {
    this.authservice.logoutUser();
  }
  
  message!:string;

  ngOnInit(): void {
    
  }



}
