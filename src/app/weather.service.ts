import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("http://samples.openweathermap.org/data/2.5/forecast?q=Kathmandu,DE&appid=02785bd7cf29f923d6799417e2dc12a6")
      .map(result => result);
      
  }


}
