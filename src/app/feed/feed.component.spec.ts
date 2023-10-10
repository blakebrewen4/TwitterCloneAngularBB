import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedComponent } from './feed.component';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;
  let httpClientMock: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // Mock HttpClient
    httpClientMock = jasmine.createSpyObj('HttpClient', ['get', 'post']);

    TestBed.configureTestingModule({
      declarations: [FeedComponent],
      providers: [
        { provide: HttpClient, useValue: httpClientMock }
      ]
    });

    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch tweets on initialization', () => {
    const mockTweets = [{ author: 'John', text: 'Hello World', id: 1 }];
    httpClientMock.get.and.returnValue(of(mockTweets));
    fixture.detectChanges();
    expect(component.tweets).toEqual(mockTweets);
  });

  it('should handle error when fetching tweets', () => {
    httpClientMock.get.and.returnValue(throwError('An error occurred'));
    spyOn(window, 'alert'); // mock the window.alert function
    fixture.detectChanges();
    expect(window.alert).toHaveBeenCalledWith('Error fetching tweets. Please try again later.');
  });

  // Additional tests for other methods and interactions can be added similarly
});

