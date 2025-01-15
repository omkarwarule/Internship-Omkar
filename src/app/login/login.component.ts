import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  loginError = false;

  constructor(
    private fb: FormBuilder, 
    private userService: UserService, 
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get formControls() {
    return this.loginForm.controls as { [key: string]: AbstractControl };
  }

  onSubmit() {
    this.submitted = true;
    const { email, password } = this.loginForm.value;

    // if (this.loginForm.valid && this.userService.checkCredentials(email, password)) {
    //   alert('Login successful!');
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   this.loginError = true;
    // }
  }

}
