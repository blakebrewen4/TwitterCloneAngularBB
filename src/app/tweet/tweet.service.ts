import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Tweet {
  id: number;
  author: string;
  text: string;
  // ... any other properties of a tweet
}

interface Comment {
  text: string;
  // ... any other properties of a comment
}

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private apiUrl = 'https://your-api-url'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('Client-side error:', error.error.message);
    } else {
      // Backend returned an unsuccessful response code.
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  // Fetch tweets from the API
  getTweets(username: string): Observable<Tweet[]> {
    const url = `${this.apiUrl}/tweets/${username}`;
    return this.http.get<Tweet[]>(url).pipe(catchError(this.handleError));
  }

  // Post a new tweet to the API
  postTweet(tweetData: any): Observable<Tweet> {
    const url = `${this.apiUrl}/tweets`;
    return this.http.post<Tweet>(url, tweetData).pipe(catchError(this.handleError));
  }

  // Like a tweet
  likeTweet(tweetId: number): Observable<void> {
    const url = `${this.apiUrl}/tweets/${tweetId}/like`;
    return this.http.post<void>(url, {}).pipe(catchError(this.handleError));
  }

  // Comment on a tweet
  commentOnTweet(tweetId: number, commentData: Comment): Observable<Comment> {
    const url = `${this.apiUrl}/tweets/${tweetId}/comments`;
    return this.http.post<Comment>(url, commentData).pipe(catchError(this.handleError));
  }

  // Retweet a tweet
  retweet(tweetId: number): Observable<void> {
    const url = `${this.apiUrl}/tweets/${tweetId}/retweet`;
    return this.http.post<void>(url, {}).pipe(catchError(this.handleError));
  }
}

