import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetService } from '../tweet/tweet.service'; // Adjust the path as needed
import { Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  userTweets: any[] = [];
  user: any = {};
  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private tweetService: TweetService
  ) { }

  ngOnInit(): void {
    const routeSubscription = this.route.params.subscribe((params) => {
      const username = params['username'];

      // Fetch user data (replace with real logic)
      this.user = {
        name: 'John Doe',
        bio: 'A passionate developer',
        followers: 100,
      };

      const tweetsSubscription = this.tweetService.getTweets(username)
        .pipe(
          catchError(error => {
            console.error("Error fetching tweets:", error);
            return [];
          })
        )
        .subscribe((tweets) => {
          this.userTweets = tweets;
        });

      this.subscriptions.push(tweetsSubscription);
    });

    this.subscriptions.push(routeSubscription);
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to prevent memory leaks
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}


