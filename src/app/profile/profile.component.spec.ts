import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { NO_ERRORS_SCHEMA } from '@angular/core'; // To ignore unrecognized elements and attributes

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      schemas: [NO_ERRORS_SCHEMA] // If you use any components/directives that aren't imported, this will prevent errors
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    component.user = {  // Mock user data if necessary
      name: 'John Doe',
      bio: 'Test bio',
      followers: 5,
      email: 'john@example.com'
    };
    component.userTweets = [  // Mock tweets data if necessary
      { text: 'Tweet 1' },
      { text: 'Tweet 2' }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user name', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-body h3').textContent).toContain('John Doe');
  });

  it('should list user tweets', () => {
    const compiled = fixture.nativeElement;
    const tweetElements = compiled.querySelectorAll('.list-group-item');
    expect(tweetElements.length).toBe(2);
    expect(tweetElements[0].textContent).toContain('Tweet 1');
    expect(tweetElements[1].textContent).toContain('Tweet 2');
  });

  // Add more tests based on functionality you expect in the profile component

});

