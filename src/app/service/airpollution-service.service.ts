import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Airpollution } from '../model/airpollution';
import { Observable } from 'rxjs';

@Injectable()
export class AirpollutionService {

  private pollutionsUrl: string;
  //private city:string;
  constructor(private http: HttpClient) {
    this.pollutionsUrl = 'http://localhost:8081/airpollution/';
  }

  public airpollution(city): Observable<Airpollution[]> {
    return this.http.get<Airpollution[]>(this.pollutionsUrl+city);
  }

}