import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[UserService]
})
export class RegistrationComponent
 {
  registrationForm: FormGroup;
  isSubmitted = false;
  submitted = false;
  submission : any;// retrieve stored data we can retrieve it in future 

  registrationData: { name: string; email: string; mobile: string } = 
  {
    name: '',
    email: '',
    mobile: '',
  };

  constructor(private fb: FormBuilder, private userService: UserService) 
  {
    this.registrationForm = this.fb.group({
      name: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  get formControls() {
    return this.registrationForm.controls;
  }
//store the data inside sevice
  onSubmit() 
  {
    this.submitted = true;
    if (this.registrationForm.valid) 
      {
      this.isSubmitted = true;
      this.registrationData = this.registrationForm.value;
      this.userService.storeUserData(this.registrationData);
    }
  }
  Data()
  {
    this.submission=this.userService.getUserData();
  }
  onReset() 
  {
    this.registrationForm.reset();
    this.submitted = false;
    this.isSubmitted = false;
  }
}
