import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('modal') modal: HTMLDivElement | undefined;

  constructor(private weatherService: AppHTTPService){

  }

  ngOnInit(){
    this.weatherSubscription = 
    this.weatherService.getWeather().subscribe(
      (data:Weather) => { console.log(data); this.weather = data;},
      () => {},
      () => {this.finished = true; console.log('finished');}
    );
    // this.weatherSubscription = this.weatherService.getWeather().subscribe(
    //   (data: string) => {console.log(data);},
    //   () => {},
    //   () => {console.log('finished');
    //   }
    // );
    
  }

  ngOnDestroy(){
    this.weatherSubscription.unsubscribe();
  }

  buttonClicked(modalClick:HTMLDivElement){
    this.modal = modalClick;
    console.log(this.modal);

    this.modal.addEventListener('hide.bs.modal', () => {console.log('told you ')})
  }
}
