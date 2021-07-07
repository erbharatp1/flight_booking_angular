import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { AppConfig } from 'src/app/app-config';
import { Flight } from '../model/flight';
@Injectable({
  providedIn: 'root'
})
export class AirlineService {
  private  serverURL = 'http://localhost:8081';
 // private  baseURL = 'http://localhost:3000';
  constructor(private httpclient: HttpClient,  ) { }

  createflight(flight: Flight): Observable<Object> {
    return this.httpclient.post(this.serverURL + `/flight/save`, flight);
  }

  fetchFlightList(): Observable<any> {
    return this.httpclient.get(this.serverURL + `/flight/findFlightList`);
  }
  fetchLocationList(): Observable<any> {
    return this.httpclient.get(this.serverURL + `/location/findLocationList`);
  }
  deleteFlight(id: number): Observable<any> {
    return this.httpclient.delete(this.serverURL+`/flight/delete/${id}`, { responseType: 'text' });
  }
  updateFlight(flight: Flight): Observable<Object> {
    console.log("service"+JSON.stringify(flight))
    return this.httpclient.put(this.serverURL + `/flight/flightStatusUpdate`, flight);
  }
  findFlightById(id:number): Observable<any> {
    return this.httpclient.get(this.serverURL + `/flight/findFlightById/${id}`);
  }

  findFlightBySource(source:string,destination:string, departure:Date): Observable<any> {
    return this.httpclient.get(this.serverURL + `/flight/findFlightBySource/${source}/${destination}/${departure}`);
  }
}
