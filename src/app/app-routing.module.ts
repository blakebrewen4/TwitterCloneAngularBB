import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from './feed/feed.component';
import { TweetComponent } from './tweet/tweet.component';

const routes: Routes = [
  // Default route (redirect to the login page)
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Registration page
  { path: 'registration', component: RegistrationComponent },

  // Login page
  { path: 'login', component: LoginComponent },

  // Profile page
  { path: 'profile/:username', component: ProfileComponent },

  // Feed page
  { path: 'feed', component: FeedComponent },

  // Tweet page (for creating a new tweet)
  { path: 'tweet', component: TweetComponent },

  // Add more routes for other features and pages as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

