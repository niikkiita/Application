import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { ConfirmedValidator } from './confirmed.validator';
//import { ConfirmedValidator } from './confirmed.validator';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit {


  user: User = new User();
  Register: FormGroup = new FormGroup({});
  constructor(private registerservice: RegisterService, private FB: FormBuilder) {
    this.Register = FB.group({
      name: ['', Validators.required],
      userid: ['', [Validators.required, Validators.maxLength(5)]],
      emailId: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      gender: ['', Validators.required],
    },
    {
      validators:this.MustMatch('password','cpassword')
    } 
    )
  }


  get name() { return this.Register.get('name') }
  get userid() { return this.Register.get('userid') }
  get emailId() { return this.Register.get('emailId') }
  get phone() { return this.Register.get('phone') }
  get password() { return this.Register.get('password') }
  get cpassword() { return this.Register.get('password') }
  get gender() { return this.Register.get('gender') }

  MustMatch(controlName:string, matchingControlName:string){
    return(FormGroup:FormGroup)=>{
      const control=FormGroup.controls[controlName];
      const matchingControl=FormGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors['MustMatch']){
        return
      }
      if(control.value !==matchingControl.value){
        matchingControl.setErrors({MustMatch:true})
      }
      else{
        matchingControl.setErrors(null);
      }
    }
  }



  ngOnInit(): void {
  }
  userRegister() {
    console.log(this.user);
    this.user.newProfileCheckId=0;
    this.registerservice.registerUser(this.user).subscribe(data => {
      alert("Successsfully user is registered")
    }, error => alert("not Register"));
  }
}
