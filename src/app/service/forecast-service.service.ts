import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forecast } from '../model/forecast';
import { Observable } from 'rxjs';

@Injectable()
export class ForecastService {

  private forecastsUrl: string;
  //private city:string;
  constructor(private http: HttpClient) {
    this.forecastsUrl = 'http://localhost:8081/forecast2/';
  }

  public forecast(city): Observable<Forecast[]> {
    return this.http.get<Forecast[]>(this.forecastsUrl+city);
  }

  public save(forecast: Forecast) {
    return this.http.post<Forecast>(this.forecastsUrl, forecast);
  }
}