import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppHTTPService {
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
    */

    constructor(private http: HttpClient){

    }

    getWeather() {
        // url
        return this.http.get('');
    }
}