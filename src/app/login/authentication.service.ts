// authentication.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedIn = false;

  // Simulated user data (replace with actual user data)
  private mockUserData = {
    email: 'example@example.com',
    password: 'password123'
  };

  login(email: string, password: string): boolean {
    // Replace this with actual authentication logic (e.g., HTTP request to a server)
    if (email === this.mockUserData.email && password === this.mockUserData.password) {
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
