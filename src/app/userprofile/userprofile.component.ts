import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  Profile: FormGroup = new FormGroup({});
  constructor(private FB: FormBuilder) { 
    this.Profile = FB.group({
      userid: ['', [Validators.required, Validators.maxLength(5)]],
      currentproject:['',Validators.required],
      experience:['',Validators.required]

    })

  }
  
get userid(){return this.Profile.get('userid')}
get currentproject(){return this.Profile.get('currentproject')}
get experience(){return this.Profile.get('experience')}

  ngOnInit(): void {
  }

  userProfile()
  {
  alert('Done');
  }
}
