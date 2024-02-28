import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Weather } from '../model/weather';
import { Observable } from 'rxjs';
import { WeatherComponentComponent } from '../weather/weather.component';
@Injectable()
export class WeatherService {

  private weathersUrl: string;
  //private city:string;
  constructor(private http: HttpClient) {
    this.weathersUrl = 'http://localhost:8081/weather/';
  }

  public weather(city): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.weathersUrl+city);
  }

  public save(weather: Weather) {
    return this.http.post<Weather>(this.weathersUrl, weather);
  }
}