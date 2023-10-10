import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  tweets: Tweet[] = [];
  newTweet: string = '';
  private BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Tweet[]>(`${this.BASE_URL}/tweets`).subscribe((response) => {
      this.tweets = response.map(tweet => ({
        ...tweet,
        isLiked: false,
        newComment: '',
      }));
    }, error => {
      alert('Error fetching tweets. Please try again later.');
      console.error('Error fetching tweets:', error);
    });
  }

  likeTweet(tweet: Tweet) {
    tweet.isLiked = !tweet.isLiked;

    this.http.post<any>(`${this.BASE_URL}/like`, { tweetId: tweet.id }).subscribe(response => {
      console.log('Liked tweet:', tweet);
    }, error => {
      console.error('Error liking tweet:', error);
      tweet.isLiked = !tweet.isLiked;
      alert('Error liking tweet. Please try again later.');
    });
  }

  commentOnTweet(tweet: Tweet) {
    if (tweet.newComment) {
      this.http.post<any>(`${this.BASE_URL}/comment`, {
        tweetId: tweet.id,
        commentText: tweet.newComment
      }).subscribe(response => {
        console.log('Commented on tweet:', tweet);
        tweet.newComment = '';
      }, error => {
        console.error('Error commenting on tweet:', error);
        alert('Error commenting on tweet. Please try again later.');
      });
    }
  }

  retweet(tweet: Tweet) {
    this.http.post<any>(`${this.BASE_URL}/retweet`, { tweetId: tweet.id }).subscribe(response => {
      console.log('Retweeted tweet:', tweet);
      tweet.isRetweeted = true;
    }, error => {
      console.error('Error retweeting tweet:', error);
      alert('Error retweeting. Please try again later.');
    });
  }

  postTweet() {
    if (this.newTweet) {
      this.http.post<Tweet>(`${this.BASE_URL}/postTweet`, { text: this.newTweet }).subscribe(response => {
        console.log('Posted a new tweet:', response);
        this.newTweet = '';
        this.tweets.unshift(response);
      }, error => {
        console.error('Error posting a new tweet:', error);
        alert('Error posting tweet. Please try again later.');
      });
    }
  }
}

interface Tweet {
  id: number;
  author: string;
  text: string;
  isLiked?: boolean;
  newComment?: string;
  isRetweeted?: boolean;
}

