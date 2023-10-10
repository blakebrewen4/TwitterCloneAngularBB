import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  // Set up the environment for the tests
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  // Test to check if the app is created successfully
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // Test to verify the title of the app
  it(`should have as title 'Twitter Clone'`, () => {
    expect(component.title).toEqual('Twitter Clone');
  });

  // Test to check if the header is rendered
  it('should render the header', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header')).toBeTruthy();
  });
});
