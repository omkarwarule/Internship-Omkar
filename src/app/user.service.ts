import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService 
{
  private userData: { name: string; email: string; mobile: string } = 
  {
    name: '',
    email: '',
    mobile: '',
  };

  constructor() {}

  storeUserData(data: { name: string; email: string; mobile: string }) 
  {
    this.userData = data;
    console.log('User data stored:', this.userData);
  }

  getUserData() 
  {
    return this.userData;
  }
}
