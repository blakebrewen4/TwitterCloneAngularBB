import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TweetComponent } from './tweet.component';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('TweetComponent', () => {
  let component: TweetComponent;
  let fixture: ComponentFixture<TweetComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // Mock HttpClient
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

    TestBed.configureTestingModule({
      declarations: [TweetComponent],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    });
    fixture = TestBed.createComponent(TweetComponent);
    component = fixture.componentInstance;

    // Sample data for testing
    component.tweet = {
      author: 'John',
      text: 'This is a tweet.',
      isLiked: false,
      comments: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle like status', fakeAsync(() => {
    httpClientSpy.post.and.returnValue(of({})); // Mock the HTTP post response
    component.likeTweet();
    tick(); // Simulate passage of time until all pending asynchronous activities finish
    expect(component.tweet.isLiked).toBe(true, 'should be liked after toggling');
  }));

  it('should send a comment request', () => {
    const mockComment = "This is a comment.";
    component.newComment = mockComment;

    httpClientSpy.post.and.returnValue(of({})); // Mock the HTTP post response
    component.commentOnTweet();

    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });

  // ... you can continue with other functionalities like retweet, etc.
});
