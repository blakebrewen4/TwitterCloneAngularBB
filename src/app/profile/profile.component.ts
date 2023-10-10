// profile.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetService } from '../tweet/tweet.service'; // Adjust the path as needed

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userTweets: any[] = [];
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private tweetService: TweetService // Inject the TweetService
  ) { }

  ngOnInit(): void {
    // Retrieve the username from the route parameter
    this.route.params.subscribe((params) => {
      const username = params['username'];

      // Fetch user data (if needed)
      // For demonstration purposes, I'm assuming a hardcoded user object.
      // Replace this with your actual data retrieval logic.
      this.user = {
        name: 'John Doe',
        bio: 'A passionate developer',
        followers: 100,
        // Add other user properties as needed
      };

      // Fetch tweets based on the username
      this.tweetService.getTweets(username).subscribe((tweets) => {
        this.userTweets = tweets;
      });
    });
  }
}

