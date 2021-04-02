import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { Weather } from './weather-data';

@Injectable()
export class AppHTTPService {
    weatherAPI ='bc47e5d153c8a73a4773aed21cb33c1e';
    weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=Alexandria,us&appid=';

    weatherJSON = {
        "coord": {
          "lon": -122.08,
          "lat": 37.39
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 282.55,
          "feels_like": 281.86,
          "temp_min": 280.37,
          "temp_max": 284.26,
          "pressure": 1023,
          "humidity": 100
        },
        //"visibility": 16093,
        "wind": {
          "speed": 1.5,
          "deg": 350
        },
        "clouds": {
          "all": 1
        },
        "dt": 1560350645,
        "sys": {
          "type": 1,
          "id": 5122,
          "message": 0.0139,
          "country": "US",
          "sunrise": 1560343627,
          "sunset": 1560396563
        },
        //"timezone": -25200,
        "id": 420006353,
        "name": "Mountain View",
        "cod": 200
        }
        ;

    /*
        get(url, options) makes a request, the parameters are the url and an 'options' object

        options: {
            headers?: HttpHeaders | {[header: string]: string | string[]},
            observe?: 'body' | 'events' | 'response',
            params?: HttpParams|{[param: string]: string | string[]},
            reportProgress?: boolean,
            responseType?: 'arraybuffer'|'blob'|'json'|'text',
            withCredentials?: boolean,
        }

        http://api.openweathermap.org/data/2.5/weather?q=Alexandria,us&appid=bc47e5d153c8a73a4773aed21cb33c1e
    */

    constructor(private http: HttpClient){ }

    getWeather() {
        const obs = Observable.create ( (observer: { next: (arg0: Weather) => void; complete: () => void; }) => {
            setInterval(()=> {
                observer.next( this.weatherJSON );
                observer.complete();
            }, 2500);
        });

        return obs;
        // return this.http.get<Weather>(this.weatherURL + this.weatherAPI);
    }
}