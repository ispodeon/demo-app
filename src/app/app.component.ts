import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppHTTPService } from './app-http.service';
import { Weather } from './weather-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'demo-app';
  collapse = true;
  finished = false;

  selected = 1;

  weather: Weather | undefined;

  weatherSubscription: Subscription = new Subscription;

  constructor(private weatherService: AppHTTPService){

  }

  ngOnInit(){
    this.weatherSubscription = 
    this.weatherService.getWeather().subscribe(
      (data:Weather) => { console.log(data); this.weather = data;},
      error => {},
      () => {this.finished = true;}
    );
  }

  ngOnDestroy(){
    this.weatherSubscription.unsubscribe();
  }
}
