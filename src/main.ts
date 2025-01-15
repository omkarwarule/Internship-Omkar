import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { RegistrationComponent } from './app/registration/registration.component';
const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
];

bootstrapApplication(RegistrationComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()), 
  ],
}).catch((err) => console.error(err));
