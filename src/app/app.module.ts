import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from './feed/feed.component';
import { TweetComponent } from './tweet/tweet.component';
import { FormsModule } from '@angular/forms';
import { TweetService } from './tweet/tweet.service';

// Import RouterModule and Routes from '@angular/router'
import { RouterModule, Routes } from '@angular/router';

// Define your routes here
const routes: Routes = [
  // Define your routes here, for example:
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'tweet', component: TweetComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    FeedComponent,
    TweetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Make sure AppRoutingModule is correctly configured with your routes
    RouterModule.forRoot(routes), // Import and configure RouterModule with your routes
    FormsModule,
  ],
  providers: [TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
