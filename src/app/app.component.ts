import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import for navigation purposes
import { AuthenticationService } from './login/authentication.service';  // Assuming the service is at this path

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Twitter Clone'; // Set the title for your app

  constructor(
    private authService: AuthenticationService,  // Inject AuthenticationService
    private router: Router  // Inject Router
  ) { }

  // Check if user is authenticated
  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  // Logout user
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    // Additional logout logic can go here, like clearing caches or displaying messages
  }

  // Additional custom logic or properties for your app can be added below
}
