import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {}; // Initialize the user property as an empty object

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // In this example, you might retrieve user data from a service or API
    // For demonstration purposes, I'm assuming a hardcoded user object.
    // Replace this with your actual data retrieval logic.
    this.user = {
      name: 'John Doe',
      bio: 'A passionate developer',
      followers: 100,
      // Add other user properties as needed
    };
  }
}
