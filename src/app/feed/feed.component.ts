import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  tweets: any[] = []; // Initialize with an empty array
  newTweet: string = ''; // Store the content of a new tweet

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Fetch tweets from your backend server and assign them to this.tweets
    this.http.get<any[]>('https://your-api-url/tweets').subscribe((response) => {
      this.tweets = response.map(tweet => ({
        ...tweet,
        isLiked: false, // Initialize isLiked to false for each tweet
        newComment: '', // Initialize newComment for each tweet
      }));
    });
  }

  likeTweet(tweet: any) {
    // Toggle the isLiked property of the tweet
    tweet.isLiked = !tweet.isLiked;

    // Implement the logic to send a like request to your backend API
    this.http.post<any>('https://your-api-url/like', { tweetId: tweet.id }).subscribe(
      (response) => {
        // Handle the response if needed
        console.log('Liked tweet:', tweet);
      },
      (error) => {
        // Handle the error if needed
        console.error('Error liking tweet:', error);
        // Restore the like state if the request fails
        tweet.isLiked = !tweet.isLiked;
      }
    );
  }

  commentOnTweet(tweet: any) {
    // Implement the logic to add a comment to a tweet
    if (tweet.newComment) {
      // Send a comment request to your backend API
      this.http.post<any>('https://your-api-url/comment', {
        tweetId: tweet.id,
        commentText: tweet.newComment
      }).subscribe(
        (response) => {
          // Handle the response if needed
          console.log('Commented on tweet:', tweet);
          // Clear the comment input
          tweet.newComment = '';
        },
        (error) => {
          // Handle the error if needed
          console.error('Error commenting on tweet:', error);
        }
      );
    }
  }

  retweet(tweet: any) {
    // Send a request to your backend API to retweet the tweet
    this.http.post<any>('https://your-api-url/retweet', { tweetId: tweet.id }).subscribe(
      (response) => {
        // Handle the response if needed
        console.log('Retweeted tweet:', tweet);

        // Update the tweet object or UI as necessary to reflect the retweet
        tweet.isRetweeted = true; // You can add a property like 'isRetweeted' to your tweet object
      },
      (error) => {
        // Handle the error if needed
        console.error('Error retweeting tweet:', error);
      }
    );
  }

  postTweet() {
    // Implement the logic to post a new tweet
    if (this.newTweet) {
      // Send a new tweet request to your backend API
      this.http.post<any>('https://your-api-url/postTweet', {
        text: this.newTweet
      }).subscribe(
        (response) => {
          // Handle the response if needed
          console.log('Posted a new tweet:', response);
          // Clear the new tweet input
          this.newTweet = '';
          // Add the new tweet to the list of tweets (if your API returns the new tweet)
          // this.tweets.push(response);
        },
        (error) => {
          // Handle the error if needed
          console.error('Error posting a new tweet:', error);
        }
      );
    }
  }
}
