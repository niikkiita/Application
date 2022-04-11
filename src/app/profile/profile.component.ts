import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  profile:Profile=new Profile();
    
    addprofile(profile:Profile):void{
      console.log(this.profile);
      this.userService.addprofile(this.profile).subscribe(
      data=>{
        alert("Saved Success")
      },
      error =>
      {
        alert("Not saved");
      });
}

}
