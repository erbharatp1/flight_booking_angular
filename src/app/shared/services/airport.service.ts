import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app-config';

import { Airport } from '../model/airport';
@Injectable({
  providedIn: 'root'
})
export class AirportService {
  //private  baseURL = 'http://localhost:8080/flight';
  private  baseURL = 'http://localhost:3000';
  constructor(private httpclient: HttpClient,  ) { }

  createAirport(airport: Airport): Observable<Object> {
    console.log(" createAirport service"+JSON.stringify(airport))
    return this.httpclient.post(this.baseURL + `/airport`, airport);
  }

  fetchAirportList(): Observable<any> {
    return this.httpclient.get(this.baseURL + `/airport`);
  }
}
