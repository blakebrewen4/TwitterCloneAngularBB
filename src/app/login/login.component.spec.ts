import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthenticationService } from 'C:/Users/Blake Brewen/source/repos/TwitterCloneAngular/src/app/login/authentication.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceMock: any;
  let routerMock: any;

  beforeEach(() => {
    // Mock AuthenticationService and Router
    authServiceMock = jasmine.createSpyObj('AuthenticationService', ['login']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AuthenticationService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call AuthenticationService login method on login', () => {
    component.user.email = 'test@test.com';
    component.user.password = 'password123';

    component.login();

    expect(authServiceMock.login).toHaveBeenCalledWith('test@test.com', 'password123');
  });

  it('should navigate to dashboard on successful login', () => {
    authServiceMock.login.and.returnValue(of({ success: true }));

    component.login();

    expect(routerMock.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should set an error message on failed login', () => {
    authServiceMock.login.and.returnValue(throwError('Error occurred'));

    component.login();

    expect(component.errorMessage).toEqual('Invalid email or password');
  });
});

