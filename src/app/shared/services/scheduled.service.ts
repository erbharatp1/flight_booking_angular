import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app-config';
import { ScheduledFlight } from '../model/scheduled-flight';

@Injectable({
  providedIn: 'root'
})
export class ScheduledService {
  private serverURL = 'http://localhost:8081/scheduledFlight';
  constructor(private httpclient: HttpClient) { }

  createScheduledFlight(scheduledFlight: ScheduledFlight): Observable<Object> {

    return this.httpclient.post(this.serverURL + `/save`, scheduledFlight);
  }

  updateScheduledFlight(scheduledFlight: ScheduledFlight): Observable<Object> {

    return this.httpclient.put(this.serverURL + `/scheduledFlight/${scheduledFlight.id}`, scheduledFlight);
  }
  findScheduleById(id: number): Observable<any> {
    return this.httpclient.get(this.serverURL + `/findScheduledFlightById/${id}`);
  }
  
  fetchScheduledFlightList(): Observable<any> {
    return this.httpclient.get(this.serverURL + `/findScheduledFlightList`);
  }
  deleteSchedule(id: number): Observable<any> {
    return this.httpclient.delete(this.serverURL + `/delete/${id}`, { responseType: 'text' });
  }
}
