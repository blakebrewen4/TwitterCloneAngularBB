import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.css']
})
export class TweetDetailComponent {
  @Input() tweet: any; // Input property to receive tweet data

  // Define methods like likeTweet, commentOnTweet, retweet, and addComment here
  likeTweet(tweet: any) {
    // Implement the likeTweet logic here
  }

  commentOnTweet(tweet: any) {
    // Implement the commentOnTweet logic here
  }

  retweet(tweet: any) {
    // Implement the retweet logic here
  }

  addComment(tweet: any) {
    // Implement the addComment logic here
  }
}
