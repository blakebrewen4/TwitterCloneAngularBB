// login.component.ts

import { Component } from '@angular/core';
import { AuthenticationService } from 'C:/Users/Blake Brewen/source/repos/TwitterCloneAngular/src/app/login/authentication.service';
import { Router } from '@angular/router'; // Import the Router


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }
  user = {
    email: '',
    password: ''
  };

  login() {
    // Implement your login logic here
    const { email, password } = this.user;

    // Example: Check if email and password are valid (replace with your authentication logic)
    if (email === 'example@example.com' && password === 'password123') {
      // Successful login, perform necessary actions (e.g., redirect)
      alert('Login successful');
      this.router.navigate(['/dashboard']);
      // Redirect to a different route or perform other actions
    } else {
      // Failed login, display an error message or take appropriate action
      alert('Invalid email or password');
    }
  }
}
