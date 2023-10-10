import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  @Input() tweet: any; // Input property to receive tweet data
  newComment: string = ''; // Add newComment property

  constructor(private http: HttpClient) { }

  likeTweet() {
    // Toggle the isLiked property of the tweet
    this.tweet.isLiked = !this.tweet.isLiked;

    // Implement the logic to send a like request to your backend API
    this.http.post<any>('https://your-api-url/like', { tweetId: this.tweet.id }).subscribe(
      (response) => {
        // Handle the response if needed
        console.log('Liked tweet:', this.tweet);
      },
      (error) => {
        // Handle the error if needed
        console.error('Error liking tweet:', error);
        // Restore the like state if the request fails
        this.tweet.isLiked = !this.tweet.isLiked;
      }
    );
  }

  commentOnTweet() {
    // Implement the logic to add a comment to a tweet
    if (this.newComment) {
      // Send a comment request to your backend API
      this.http.post<any>('https://your-api-url/comment', {
        tweetId: this.tweet.id,
        commentText: this.newComment
      }).subscribe(
        (response) => {
          // Handle the response if needed
          console.log('Commented on tweet:', this.tweet);
          // Clear the comment input
          this.newComment = '';
        },
        (error) => {
          // Handle the error if needed
          console.error('Error commenting on tweet:', error);
        }
      );
    }
  }

  retweet() {
    // Implement the logic to retweet a tweet
    this.http.post<any>('https://your-api-url/retweet', { tweetId: this.tweet.id }).subscribe(
      (response) => {
        // Handle the response if needed
        console.log('Retweeted tweet:', this.tweet);
      },
      (error) => {
        // Handle the error if needed
        console.error('Error retweeting tweet:', error);
      }
    );
  }
  addComment() {
    // Check if the newComment property exists and is not empty
    if (this.tweet.newComment && this.tweet.newComment.trim() !== '') {
      // Create a new comment object
      const newComment = {
        text: this.tweet.newComment,
        // You can add other properties like author, timestamp, etc. if needed
      };

      // Push the new comment to the comments array of the current tweet
      this.tweet.comments.push(newComment);

      // Optionally, you can send a comment request to your backend API here
      // For example:
      // this.http.post<any>('https://your-api-url/comment', {
      //   tweetId: this.tweet.id,
      //   commentText: this.tweet.newComment
      // }).subscribe(
      //   (response) => {
      //     // Handle the response if needed
      //     console.log('Commented on tweet:', this.tweet);
      //   },
      //   (error) => {
      //     // Handle the error if needed
      //     console.error('Error commenting on tweet:', error);
      //   }
      // );

      // Clear the comment input
      this.tweet.newComment = '';
    }
  }
}
