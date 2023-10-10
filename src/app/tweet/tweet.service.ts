import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private apiUrl = 'https://your-api-url'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Fetch tweets from the API
  getTweets(username: string): Observable<any[]> {
    const url = `${this.apiUrl}/tweets`;
    return this.http.get<any[]>(`https://your-api-url/tweets/${username}`);
  }

  // Post a new tweet to the API
  postTweet(tweetData: any): Observable<any> {
    const url = `${this.apiUrl}/tweets`;
    return this.http.post<any>(url, tweetData);
  }

  // Like a tweet
  likeTweet(tweetId: number): Observable<any> {
    const url = `${this.apiUrl}/tweets/${tweetId}/like`;
    return this.http.post<any>(url, {});
  }

  // Comment on a tweet
  commentOnTweet(tweetId: number, commentData: any): Observable<any> {
    const url = `${this.apiUrl}/tweets/${tweetId}/comments`;
    return this.http.post<any>(url, commentData);
  }

  // Retweet a tweet
  retweet(tweetId: number): Observable<any> {
    const url = `${this.apiUrl}/tweets/${tweetId}/retweet`;
    return this.http.post<any>(url, {});
  }
}
