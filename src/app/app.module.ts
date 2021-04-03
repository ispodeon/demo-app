import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHTTPService } from './app-http.service';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileExampleComponent } from './profile-example/profile-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    HomeComponent,
    NotFoundComponent,
    ProfileExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppHTTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
