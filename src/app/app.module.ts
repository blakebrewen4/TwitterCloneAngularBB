import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from './feed/feed.component';
import { TweetComponent } from './tweet/tweet.component';

// Import RouterModule and Routes from '@angular/router'
import { RouterModule, Routes } from '@angular/router';

// Define your routes here (in this example, an empty array)
const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    FeedComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), // Import and configure RouterModule with your routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
