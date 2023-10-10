import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  private apiUrl = 'https://your-api-url'; // replace with your API base URL

  constructor(private http: HttpClient) { }

  // This will now return an Observable to be more flexible and future-proof
  login(email: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;

    return this.http.post<any>(loginUrl, { email, password }).pipe(
      map(response => {
        if (response && response.token) {
          localStorage.setItem('authToken', response.token); // save token or user data to local storage
          this.isLoggedInSubject.next(true);
        }
        return response;
      }),
      catchError(this.handleError)
    );
  }

  logout(): void {
    localStorage.removeItem('authToken'); // remove token from local storage
    this.isLoggedInSubject.next(false);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken'); // check if token exists in local storage
  }

  // Error handling for the service
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
