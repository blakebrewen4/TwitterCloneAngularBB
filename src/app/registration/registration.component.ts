import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  register() {
    // Perform client-side validation (you can add more validation checks)
    if (!this.validateForm()) {
      return;
    }

    // Send the registration data to the server (replace with your API endpoint)
    this.http.post<any>('https://your-api-url/register', this.user).subscribe(
      (response) => {
        // Registration successful, handle the response
        console.log('Registration successful', response);

        // Redirect to the login page or another appropriate page
        this.router.navigate(['/login']);
      },
      (error) => {
        // Registration failed, handle the error
        console.error('Registration failed', error);

        // Display an error message to the user
        // You can also update the UI to show the error message
      }
    );
  }

  private validateForm(): boolean {
    // Implement your validation logic here
    // For example, check for required fields, password strength, etc.
    if (!this.user.name || !this.user.email || !this.user.password) {
      // Display an error message to the user (e.g., using Angular's MatSnackBar)
      // You can also update the UI to show validation errors
      console.error('Validation failed: All fields are required.');
      return false;
    }

    // Additional validation checks can be added here

    return true; // Form is valid
  }
}

