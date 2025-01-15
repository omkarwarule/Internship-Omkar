import { Component } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { Router, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'internship';
}
