import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHTTPService } from './app-http.service';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileExampleComponent } from './profile-example/profile-example.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    HomeComponent,
    NotFoundComponent,
    ProfileExampleComponent,
    BlogComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  providers: [AppHTTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
