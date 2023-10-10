import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  @Input() tweet: any;
  newComment: string = '';

  constructor(private http: HttpClient) { }

  likeTweet(): void {
    const wasLiked = this.tweet.isLiked;
    this.tweet.isLiked = !wasLiked;

    this.sendLikeRequest().subscribe(
      response => console.log('Liked tweet:', this.tweet),
      error => {
        console.error('Error liking tweet:', error);
        this.tweet.isLiked = wasLiked;
      }
    );
  }

  commentOnTweet(): void {
    if (this.newComment.trim()) {
      this.sendCommentRequest().subscribe(
        response => {
          console.log('Commented on tweet:', this.tweet);
          this.newComment = '';
        },
        error => console.error('Error commenting on tweet:', error)
      );
    }
  }

  retweet(): void {
    this.sendRetweetRequest().subscribe(
      response => console.log('Retweeted tweet:', this.tweet),
      error => console.error('Error retweeting tweet:', error)
    );
  }

  addComment(): void {
    if (this.newComment.trim()) {
      this.tweet.comments.push({ text: this.newComment.trim() });
      this.newComment = '';
    }
  }

  private sendLikeRequest() {
    return this.http.post<any>('https://your-api-url/like', { tweetId: this.tweet.id });
  }

  private sendCommentRequest() {
    return this.http.post<any>('https://your-api-url/comment', {
      tweetId: this.tweet.id,
      commentText: this.newComment.trim()
    });
  }

  private sendRetweetRequest() {
    return this.http.post<any>('https://your-api-url/retweet', { tweetId: this.tweet.id });
  }
}
