import { Component } from '@angular/core';
import { AuthenticationService } from 'C:/Users/Blake Brewen/source/repos/TwitterCloneAngular/src/app/login/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = {
    email: '',
    password: ''
  };

  // Add a variable to store the error message
  errorMessage: string | null = null;

  constructor(private authService: AuthenticationService, private router: Router) { }

  login() {
    // Reset the error message
    this.errorMessage = null;

    this.authService.login(this.user.email, this.user.password).subscribe(response => {
      // On successful login response
      if (response.success) {
        alert('Login successful');
        this.router.navigate(['/dashboard']);
      } else {
        // Display an error message from the server response or a default error
        this.errorMessage = response.message || 'Unexpected error occurred. Please try again.';
      }
    }, error => {
      // Handle possible errors thrown from the service or server
      this.errorMessage = 'Invalid email or password';
    });
  }
}

