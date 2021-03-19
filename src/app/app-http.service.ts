import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from './weather-data';

@Injectable()
export class AppHTTPService {
    weatherAPI ='bc47e5d153c8a73a4773aed21cb33c1e';
    weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=Alexandria,us&appid=';

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

    constructor(private http: HttpClient){

    }

    getWeather() {
        return this.http.get<Weather>(this.weatherURL + this.weatherAPI);
    }
}